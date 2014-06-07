/*global PasswordStrength, $*/


window.PasswordStrength = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Starting password strength application');
        var password = new this.Models.PasswordModel();

        new this.Views.PasswordView({
            model:  password
        });
    }
};

$(document).ready(function () {
    'use strict';
    PasswordStrength.init();
});
