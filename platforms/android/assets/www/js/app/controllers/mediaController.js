/*
 * Document: mediaController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para media.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.MediaController = function(options) {

    // required
    var model = new com.inventakus.components.MediaModel();

    $.extend(this, {
        init: function() {

        },
        actionInkind: function(obj_data) {
            model.init();
            model.saveMedia(obj_data);
        },
    });
}