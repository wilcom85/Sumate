/*
 * Document: media_model.js
 * Author: Jeison Nisperuza
 *
 * Modelo de registro de usuarios.
 */

//Espacio de nombres
Namespace('com.inventakus.components');

//Clase User
com.inventakus.components.MediaModel = function(options) {

    // pub methods
    $.extend(this, {
        init: function() {
            // code:
        },

        saveMedia: function(obj_data) {
            saveMedia(obj_data);
        }
    });


    // priv methods
    function saveMedia(obj_data) {
        console.log(obj_data);
    }
}