// Register `register` component, along with its associated controller and template
angular.
  module('atmApp').
  component('register', {
    templateUrl: 'register/register.template.html',
    controller: ['Scan', 'Register', 'transaction', function RegisterController(Scan, Register, transaction) {
      var that = this;
      this.transaction = transaction;
      this.fingerprint = null;
      this.scan = function() {
        var scan = Scan.get(function(data) {
          console.log(data);
          if (data.ErrorCode == 0) {
            that.fingerprint = {
              fpos: "LEFT_THUMB",
              nfig: data.NFIQ,
              base64_template: data.TemplateBase64,
            }
          } else {
            alert('Scan your Fingerprint again!');
          }
        },
        function(reply) {
          console.log(reply);
        });
      }
      this.register = function() {
        if (this.fingerprint) {
          var data = {
            signatory_details: {
              first_name: this.firstname,
              surname: this.surname,
              middle_name: this.middlename,
              email: this.email,
              phone_number: this.phone
            },
            fingerprint: this.fingerprint
          };
          var register = Register.save(data, function(data) {
            console.log(data);
            if (data.status) {
              transaction.success = true;
            }
            location.href = '#!/complete';
          },
          function(reply) {
            console.log(reply);
            location.href = '#!/complete';
          });
        } else {
          alert('You need to scan your Fingerprint!')
        }
      }
    }]
  });