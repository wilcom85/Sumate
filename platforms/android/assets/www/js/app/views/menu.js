/*
 * Document: menu_events.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.view');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del register.html
 */
com.inventakus.view.menuView = function(options) {
    var managerVariables = new com.inventakus.components.managerGlobalVariables();
    var auth = new com.inventakus.components.Authentication();

    $.extend(this, {
        // pub methods
        init: function() {
            loadEvents();
            managerVariables.init();
            console.log(managerVariables.getIdUser());
            auth.init();
            auth.session(isValidSessionCallback);
        },
    });
    
    this.init();

    // priv methods
    function loadEvents() {
        $("#donate_money").click(function() {
            location.href = "menu_transaction.html";
        });
        $("#donate_nomoney").click(function() {
            location.href = "menu_ne.html";
        });
        $("#more_info").click(function() {
            location.href = "moreinfo.html";
        });
        $("#close_session").click(closeSession);
    }

    function isValidSessionCallback(data){
        if(!data.authenticate){
            //console.log("Retorno.");
            location.href = "index.html";   
        }
    }

    function closeSession(){
        auth.close(closeCallback);
    }

    function closeCallback(){
        location.href = "index.html";
        //console.log("Retorno.");
    }
}