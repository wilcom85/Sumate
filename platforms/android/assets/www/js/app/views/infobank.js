/*
 * Document: infobank_events.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.infobank_events');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del infobank.html
 */
com.inventakus.infobank_events = function(options) {

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
            location.href = "menu_transaction.html";
        });
    }
}