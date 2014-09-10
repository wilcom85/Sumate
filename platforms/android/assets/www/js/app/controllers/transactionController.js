/*
 * Document: transactionController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para transaction.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.TransactionController = function(options) {

    // required
    var model = new com.inventakus.components.TransactionModel();

    $.extend(this, {
        init: function() {

        },
        actionTransaction: function(obj_data) {
            model.init();
            model.saveTransaction(obj_data);
        },
    });
}