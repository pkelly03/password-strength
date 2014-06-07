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

        validate: function(attrs, options) {
            var errors = {}
            if (attrs.password.length < 8) {
                errors.length = 'Password is less than 8 characters';
            }
            
            if (_.keys(errors).length > 0) {
                return errors;
            }
        },

        parse: function(response, options) {
            return response;
        }
    });

})();
