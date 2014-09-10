/*
 * Document: transaction_model.js
 * Author: Jeison Nisperuza
 *
 * Modelo de registro de usuarios.
 */

//Espacio de nombres
Namespace('com.inventakus.components');

//Clase User
com.inventakus.components.TransactionModel = function(options) {

    // pub methods
    $.extend(this, {
        init: function() {
            // code:
        },

        saveTransaction: function(obj_data) {
            saveTransaction(obj_data);
        }
    });


    // priv methods
    function saveTransaction(obj_data) {
        console.log(obj_data);
    }
}