/*global PasswordStrength, Backbone*/

PasswordStrength.Models = PasswordStrength.Models || {};

(function() {
    'use strict';

    PasswordStrength.Models.PasswordModel = Backbone.Model.extend({

        url: '',

        defaults: {
            email: '',
            password: '',
            completed: false
        },

        validate: function(attributes) {
            
            var errors = {};
            var passwordRegularExpression = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

            if (attributes.password.length < 8) {
                errors.length = 'Password is less than 8 characters';
            }
            
            if (!passwordRegularExpression.test(attributes.password)) {
                errors.special = 'Password should contain at least one special character and any letter'
            }

            if (_.keys(errors).length > 0) {
                return errors;
            }
        },

        parse: function(response) {
            return response;
        }
    });

})();
