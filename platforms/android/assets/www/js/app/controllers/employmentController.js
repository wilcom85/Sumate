/*
 * Document: employmentController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para employment.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.donateEmploymentController = function(options) {

    // required
    var donateEmploymentModel = new com.inventakus.model.donateEmploymentModel();

    $.extend(this, {
        init: function() {

        },
        actionEmployment: function(obj_data, callback) {
            donateEmploymentModel.init();
            donateEmploymentModel.saveEmployment(obj_data, callback);
        }
    });
}