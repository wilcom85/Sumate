/*
 * Document: transaction_events.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.transaction_events');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del transaction.html
 */
com.inventakus.transaction_events = function(options) {
    var transaction_ctrl = new com.inventakus.controller.TransactionController();

    $.extend(this, {
        // pub methods
        init: function() {
            loadEvents();
        },
    });
    this.init();


    // priv methods
    function loadEvents() {
        /*if ($.datepicker) {
            $.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '<Ant',
                nextText: 'Sig>',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
                weekHeader: 'Sm',
                dateFormat: 'yy-mm-dd',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional["es"]);
        }
        $("#datepicker").datepicker({
            autoSize: true
        });*/
        $("#btn_backmenu").click(function() {
            location.href = "menu_transaction.html";
        });
        $('#upload_button').click(launchFileChooser);
        $("#btn_sendtrans").click(function() {
            var bank = $("#name_bank").val();
            var amount = $("#amount_trans").val();
            var date = nowDate();
            var image = $('#upload_button').text();
            if (bank && amount && date && image !== "Seleccionar imagen")
                dispatchTransaction({
                    bank: bank,
                    amount: amount,
                    date: date,
                    image: image
                });
        });
    }

    function launchFileChooser(){
        fileChooser.open(successCallback, failureCallback);
    }

    function successCallback(uri){
        alert(uri);
    }

    function failureCallback(){
        alert("Error");
    }

    /*
    $(document).ready(function() {
        var button = $('#upload_button'),
            interval;
        new AjaxUpload('#upload_button', {
            action: 'http://sumatedev.esy.es/upload.php',
            onSubmit: function(file, ext) {
                if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                    // extensiones permitidas
                    alert('Error: Solo se permiten imagenes');
                    // cancela upload
                    return false;
                } else {
                    button.text('Subiendo...');
                    this.disable();
                }
            },
            onComplete: function(file, response) {
                button.text(file);
                // enable upload button
                this.enable();
                // Agrega archivo a la lista
                // $('#lista').appendTo('.files').text(file);
            }
        });
    });*/

    function dispatchTransaction(params) {
        transaction_ctrl.actionTransaction(params);
    }
}