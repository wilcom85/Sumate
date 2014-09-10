/*
 * Document: employmentModel.js
 * Author: Jeison Nisperuza
 *
 * Modelo de registro de usuarios.
 */

//Espacio de nombres
Namespace('com.inventakus.model');

//Clase employment
com.inventakus.model.donateEmploymentModel = function(options) {
    
    var managerGlobalVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = undefined;
    var token = undefined;

    // pub methods
    $.extend(this, {
        init: function() {
            managerGlobalVariables.init();
            url_base = managerGlobalVariables.getBaseUrl();
            token = managerGlobalVariables.getSessionToken();
        },

        saveEmployment: function(obj_data, callback) {
            saveEmployment(obj_data, callback);
        }
    });


    // priv methods
    function saveEmployment(obj_data, callback) {
        var data = {};
        data.DonateEmployment = obj_data;        
        var url = url_base + "DonateEmployment/create";
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