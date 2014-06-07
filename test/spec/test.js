/*global describe, it */
'use strict';

(function() {
    describe('PasswordModel', function() {
        describe('validations', function() {

            beforeEach(function() {
                this.model = new PasswordStrength.Models.PasswordModel();
            });

            it('return an error if password length is less than 8 characters', function() {

                var eventSpy = sinon.spy();
				this.model.bind("error", eventSpy);
                
                this.model.set({password: '1234567'}, {validate: true});

               	var validationValues = _.values(this.model.validationError);
                expect(validationValues[0]).toEqual('Password is less than 8 characters');
            });

        });
    });
})();
