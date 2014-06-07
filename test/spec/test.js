/*global describe, it */
'use strict';

(function() {
    describe('PasswordModel', function() {
        describe('validations', function() {

            beforeEach(function() {
                this.model = new PasswordStrength.Models.PasswordModel();
            });

            it('should return an error if password length is less than 8 characters', function() {

                var eventSpy = sinon.spy();
                this.model.bind('invalid', eventSpy);

                this.model.set({
                    password: '1234567'
                }, {
                    validate: true
                });

                var validationValues = _.values(this.model.validationError);
                expect(validationValues[0]).toEqual('Password is less than 8 characters');

                expect(eventSpy.calledOnce).toBeTruthy();

            });

            it("should return an error if password does not contain a special character", function() {

                var eventSpy = sinon.spy();
                this.model.bind('invalid', eventSpy);

                this.model.set({
                    password: '12345678'
                }, {
                    validate: true
                });

                var validationValues = _.values(this.model.validationError);
                expect(validationValues[0]).toEqual('Password should contain at least one special character and any letter');

                expect(eventSpy.calledOnce).toBeTruthy();

            });

            it("should update model successfully when password is greater than 8 characters and contains at least 1 letter and a special character", function() {

                var eventSpy = sinon.spy();
                this.model.bind('invalid', eventSpy);

                this.model.set({
                    password: 'paulkelly$'
                }, {
                    validate: true
                });

                var validationValues = _.values(this.model.validationError);
                expect(validationValues.length).toBe(0)
                expect(eventSpy.notCalled).toBeTruthy();
            });
        });
    });
})();
