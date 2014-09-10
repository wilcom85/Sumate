/*
 * Document: inkindController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para inkind.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.donateInkindController = function(options) {

    // required
    var donateInkindModel = new com.inventakus.model.donateInkindModel();
    var managerGlobalVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = undefined;
    var token = undefined;

    $.extend(this, {
        init: function() {
            managerGlobalVariables.init();
            url_base = managerGlobalVariables.getBaseUrl();
            token = managerGlobalVariables.getSessionToken();
        },
        actionInkind: function(obj_data, callback) {
            donateInkindModel.init();
            donateInkindModel.saveInkind(obj_data, callback);            
        },
        
        actionLoadSelect: function(onSuccess) {            
            var url = url_base+"requirementsList/index";
            var TOKEN = token;
            $.ajax({
                type: "GET",
                url: url,
                headers: {
                    'TOKEN': TOKEN
                },
                success: function(data){ 
                    if (onSuccess !== undefined) {
                        onSuccess(data);
                    }
                },
                timeOut: 4000
            });            
        }
    });
    this.init();
}