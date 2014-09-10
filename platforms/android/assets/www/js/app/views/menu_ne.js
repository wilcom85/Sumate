    /*
     * Document: menune_events.js
     * Author: Jeison Nisperuza
     */
    //Espacio de nombres
    Namespace('com.inventakus.view');
    /*
     * Evento de carga completa (jquery).
     * Inicializa los elementos del register.html
     */
    com.inventakus.view.menuneView = function(options) {

        var managerVariables = new com.inventakus.components.managerGlobalVariables();
        var auth = new com.inventakus.components.Authentication();

        $.extend(this, {
            // pub methods
            init: function() {
                loadEvents();
                managerVariables.init();
                auth.init();
                auth.session(isValidSessionCallback);
            },
        });
        this.init();

        // priv methods
        function loadEvents() {
            $("#donate_inkind").click(function() {
                location.href = "inkind.html";
            });
            $("#donate_time").click(function() {
                location.href = "time.html";
            });
            $("#donate_employment").click(function() {
                location.href = "employment.html";
            });
            $("#donate_media").click(function() {
                location.href = "media.html";
            });
            $("#menuppal").click(function() {
                location.href = "menu.html";
            });
        }

    function isValidSessionCallback(data){
        if(!data.authenticate){
            //location.href = "index.html";  
            console.log("redirección."); 
        }
    }

    }