/*
 * Document: moreinfo_events.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.moreinfo_events');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del infobank.html
 */
com.inventakus.moreinfo_events = function(options) {

    $.extend(this, {
        // pub methods
        init: function() {
            loadEvents();
        },
    });
    this.init();

    // priv methods
    function loadEvents() {
        $("#menuppal").click(function() {
            location.href = "menu.html";
        });
    }
}