    /*
     * Document: index_events.js
     * Author: Jeison Nisperuza
     */
    //Espacio de nombres
    Namespace('com.inventakus.view');
    /*
     * Evento de carga completa (jquery).
     * Inicializa los elementos del index.
     */
    com.inventakus.view.indexView = function(options) {

        $.extend(this, {
            // pub methods
            init: function() {
                index_controller = new com.inventakus.controller.IndexController();
                loadEvents();
            }
        });
        this.init();


        // priv methods
        function loadEvents() {
            $('#form-login').submit(function() {
                var email = $('#email_login').val();
                var pass = $('#pass_login').val();
                dispatchLogin({
                    email: email,
                    pass: pass
                });
                return false;
            });
            $('#btn_getlogin').click(function() {
                $("#social-menu, #main-menu").hide();
                $('#content-login').show();
            });
            $("#btn_backmain").click(function() {
                $('#content-login').hide();
                $("#social-menu, #main-menu").show();
            });
            $("#btn_register").click(function() {
                location.href = "register.html";
            });
            $('#email_login').change(function() {
                $("#msg").html(null);
                $("#msg").hide();
            });
            $('#pass_login').change(function() {
                $("#msg").html(null);
                $("#msg").hide();
            });
        }

        function dispatchLogin(params) {
            var email = params.email;
            var pass = params.pass;
            if (email && pass)
                index_controller.actionLogin(email, pass);
        }

    }