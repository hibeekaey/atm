// Register `scan` component, along with its associated controller and template
angular.
  module('atmApp').
  component('scan', {
    templateUrl: 'scan/scan.template.html',
    controller: ['Scan', 'FingerPrints', 'Account', 'transaction', '$http', function ScanController(Scan, FingerPrints, Account, transaction, $http) {
      var that = this;
      this.transaction = transaction;
      transaction.success = false;
      transaction.cash = false;
      this.print = {};
      this.scan = function() {
        this.prints = [];
        var scan = Scan.get(function(data) {
          console.log(data);
          if (data.ErrorCode == 0) {
            var fingerprint = data.TemplateBase64;
            var fingerprints = FingerPrints.get(function(data) {
              console.log(data);
              if (data.status) {
                var data = data.data;
                for (var i = 0; i < data.length; ++i) {
                  that.print = {};
                  that.print.userId = data[i].user_id;
                  that.match(fingerprint, data[i].base64_template);
                }
                console.log(that.prints);
                that.auth(that.prints);
              } else {
                location.href = '#!/complete';
              }
            }, 
            function(reply) {
              console.log(reply);                              
            });
          } else {
            alert('Scan your Fingerprint again!');
          }
        },
        function(reply) {
          console.log(reply);
        });
      }
      this.match = function(template1, template2) {
        var uri = "https://localhost:8443/SGIMatchScore";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            if (data.ErrorCode == 0) {
              that.print.matchingScore = data.MatchingScore;
              that.prints.push(that.print);
            } else {
              alert('Scan your Fingerprint again!');
            }
          } else if (xmlhttp.status == 404) {
            console.log(xmlhttp);
          }
        }
        xmlhttp.onerror = function () {
          console.log(xmlhttp);
        }
        var params = "template1=" + encodeURIComponent(template1);
        params += "&template2=" + encodeURIComponent(template2);
        params += "&licstr=" + encodeURIComponent("");
        params += "&templateFormat=" + "ISO";
        xmlhttp.open("POST", uri, false);
        xmlhttp.send(params);
      }
      this.auth = function(fingerprints) {
        if (fingerprints.length > 0) {
          var max_matchingScore = fingerprints.map(function(item) {
            return item.matchingScore;
          }).reduce(function(a, b) {
            return Math.max(a, b);
          });
          for (var i = 0; i < fingerprints.length; ++i) {
            if (fingerprints[i].matchingScore == max_matchingScore && max_matchingScore >= 150) {
              console.log(fingerprints[i]);
              var account = Account.get({ id: fingerprints[i].userId }, function(data) {
                console.log(data);
                if (data.status) {
                  transaction.id = data.data.accounts[0].id;
                  transaction.name = data.data.accounts[0].name;
                  transaction.userId = data.data.accounts[0].user_id;
                  console.log(transaction);
                  location.href = '#!/options';
                }
              },
              function(reply) {
                console.log(reply);
              });
              break;
            } else if (i == fingerprints.length - 1) {
              location.href = '#!/invalid';
            }
          }
        } else {
          alert('No Fingerprints have been scanned!'); 
        }
      }
    }]
  });