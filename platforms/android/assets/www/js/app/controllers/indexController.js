/*
 * Document: indexController.js
 * Author: Ing. Luis Adolfo Cataño Hoyos - luis.catano@inventakus.com - 3015797857
 *
 * Controlador para index.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase Index
com.inventakus.controller.IndexController = function(options) {
    // required
    var Auth = new com.inventakus.components.Authentication();

    $.extend(this, {
        init: function() {

        },
        actionLogin: function(email, pass) {
            Auth.init();
            Auth.login(email, pass);
        }
    });
    this.init();
}