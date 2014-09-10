/*
 * Document: register_model.js
 * Author: Jeison Nisperuza
 *
 * Modelo de registro de usuarios.
 */

//Espacio de nombres
Namespace('com.inventakus.components');

//Clase User
com.inventakus.components.RegisterModel = function(options) {

    // pub methods
    $.extend(this, {
        init: function() {
            // code:
        },

        saveUser: function(obj_data) {
            saveUser(obj_data);
        }
    });


    // priv methods
    function saveUser(obj_data) {
        console.log(obj_data);
    }
}