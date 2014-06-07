/*global PasswordStrength, Backbone, JST*/

PasswordStrength.Views = PasswordStrength.Views || {};

(function() {
    'use strict';

    PasswordStrength.Views.PasswordView = Backbone.View.extend({

        template: JST['app/scripts/templates/application.hbs'],

        el: '#password-app',

        events: {
            'keyup #password': 'validateModel',
            'submit button[type=submit]': 'handleSubmit'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'validateModel', 'handleError', 'handleSuccess', 'handleSubmit');
            this.listenTo(this.model, 'invalid', this.handleError);
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
        },

        validateModel: function() {
            this.model.set({
                password: this.$('input[type=password]').val()
            }, {
                validate: true
            });

            if (this.model.isValid()) {
                this.handleSuccess();
            }
        },

        handleSubmit: function() {
            console.log('successfully submitted!');
        },

        handleSuccess: function() {
            console.log('validated... whoop');
            $('button[type=submit]').prop('disabled', false);
            $('#validationErrors').html('');
        },

        handleError: function() {
            $('#validationErrors').html(_.values(this.model.validationError).join('<p>'));
            $('button[type=submit]').prop('disabled', true);
        }
    });

})();
