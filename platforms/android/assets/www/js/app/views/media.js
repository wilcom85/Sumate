/*
 * Document: media_events.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.media_events');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del media.html
 */
com.inventakus.media_events = function(options) {
    var media_ctrl = new com.inventakus.controller.MediaController();

    $.extend(this, {
        // pub methods
        init: function() {
            loadEvents();
        },
    });
    this.init();


    // priv methods
    function loadEvents() {
        $("#type_format").selectmenu();
        $("#btn_backmenune").click(function() {
            location.href = "menu_ne.html";
        });
        $("#btn_save").click(function() {
            var format = $("#type_format").val();
            var userid = new Date().getTime(); // userid
            var date = nowDate();
            var time = nowTime();
            var message = $("#ta_message").val();
            var media = $("#upload_button").text();
            if (format && message && media)
                dispatchMedia({
                    format: format,
                    userid: userid,
                    date: date,
                    time: time,
                    message: message,
                    media: media
                });
        });
    }

    function caseFormat(type, ext) {
        var response = false;
        if (ext)
            switch (type) {
                case "1":
                    response = /^(jpg|png|jpeg|gif)$/.test(ext);
                    break;
                case "2":
                    response = /^(avi|flv|wmv|mov|rpm|mp4|3gp)$/.test(ext);
                    break;
                case "3":
                    response = /^(mid|midi|mp1|mp2|mp3|wav|wma|aif|aifc|ra)$/.test(ext);
                    break;
                case "4":
                    response = /^(txt|odt|ods|doc|docx|csv|xsl|xlsx|pdf)$/.test(ext);
                    break;
                default:
                    console.log("option not found");
                    break;
            }
        return response;
    }

    $(document).ready(function() {
        var type = $("#type_format").val();
        var button = $('#upload_button'),
            interval;
        new AjaxUpload('#upload_button', {
            action: 'upload.php',
            onSubmit: function(file, ext) {
                if (!caseFormat(type, ext)) {
                    // extensiones no permitidas
                    alert('Error: El formato establecido no coincide\ncon el del archivo seleccioinado');
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
    });

    function dispatchMedia(params) {
        media_ctrl.actionInkind(params);
    }
}