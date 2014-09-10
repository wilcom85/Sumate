/*
 * Document: menutransaction_events.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.menutransaction_events');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del menu_transaction.html
 */
com.inventakus.menutransaction_events = function(options) {

    $.extend(this, {
        // pub methods
        init: function() {
            loadEvents();
        },
    });
    this.init();

    // priv methods
    function loadEvents() {
        $("#donate_info_bank").click(function() {
            location.href = "infobank.html";
        });
        $("#comfirm_donation").click(function() {
            location.href = "transaction.html";
        });
        $("#menuppal").click(function() {
            location.href = "menu.html";
        });
    }
}