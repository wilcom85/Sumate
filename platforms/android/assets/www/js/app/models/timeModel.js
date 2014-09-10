/*
 * Document: time_model.js
 * Author: Jeison Nisperuza
 *
 * Modelo de registro de donaciones en tiempo.
 */

//Espacio de nombres
Namespace('com.inventakus.model');

//Clase User
com.inventakus.model.donateTimeModel = function(options) {

    var managerVariables;
    var url_base;
    var token;

    // pub methods
    $.extend(this, {
        init: function() {
            managerVariables = new com.inventakus.components.managerGlobalVariables();
            url_base = managerVariables.getBaseUrl();
            token = managerVariables.getSessionToken();
        },

        create: function(object) {
            createWorker(object);
        }
    });
    this.init();

    // priv methods
    function createWorker(object) {
        
        var url = url_base + "donationTime/create";
        $.ajax({

            type: "POST",

            url: url,

            data: JSON.stringify(object.data),

            headers: {
                    'TOKEN': token
            },

            success: object.callback,

            timeOut: 4000,

            error:function(u,d,t){

                console.log(u);
                console.log(d);
                console.log(t);

            }

        });
    }
}