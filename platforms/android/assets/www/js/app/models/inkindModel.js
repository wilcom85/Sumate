/*
 * Document: inkindModel.js
 * Author: Jeison Nisperuza
 *
 * Modelo de registro de usuarios.
 */

//Espacio de nombres
Namespace('com.inventakus.model');

//Clase User
com.inventakus.model.donateInkindModel = function(options) {

    // pub methods 
    var managerGlobalVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = undefined;
    var token = undefined;
    
    
    $.extend(this, {
        init: function() {
            managerGlobalVariables.init();
            url_base = managerGlobalVariables.getBaseUrl();
            token = managerGlobalVariables.getSessionToken();
        // code:
        },

        saveInkind: function(obj_data, callback) {
            saveInkind(obj_data, callback);
        }
    });


    // priv methods
    function saveInkind(obj_data, callback) {
        var data = {};
        data.InkindDonation = obj_data;        
        var url = url_base + "InkindDonation/create";
        var TOKEN = token;
        $.ajax({
            type: "POST",
            url: url,
            headers: {
                'TOKEN': TOKEN
            },
            data: JSON.stringify(data),
            success: callback,
            timeOut: 4000

        });
    }
}