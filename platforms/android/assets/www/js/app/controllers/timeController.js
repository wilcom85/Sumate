/*
 * Document: DonationTimeController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para time.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.donateTimeController = function(options) {

    // required
    var donateTimeModel = new com.inventakus.model.donateTimeModel();
    var managerVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = managerVariables.getBaseUrl();

    $.extend(this, {
        init: function() {

        },
        recordDonation: function(data) {
            donateTimeModel.create(data);
        },
    });
}