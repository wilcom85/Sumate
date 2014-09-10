/*
 * Document: inkind.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.view');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del inkind.html
 */
com.inventakus.view.donateInkindView = function(options) {
    var donateInkindController = new com.inventakus.controller.donateInkindController();
    var managerGlobalVariables = new com.inventakus.components.managerGlobalVariables();
    var user_id = undefined;

    $.extend(this, {
        // pub methodsfdf
        init: function() {
            loadEvents();
            selectmenu();
            user_id = managerGlobalVariables.getIdUser();
        }
    });
    this.init();


    // priv methods
    function loadEvents() {        
        $("#btn_backmenune").click(function() {
            location.href = "menu_ne.html";
        });
        $("#upload_button").click(function() {
            upload_file();
        });
        $("#btn_save").click(function() {
            var inkind_donation  = {};            
            inkind_donation.users_Id = user_id;
            inkind_donation.requirements_list_Id = $("#type_inkind").val();            
            inkind_donation.date_donation = nowDate();            
            inkind_donation.time_donation = nowTime();            
            inkind_donation.message = $("#ta_message").val() || "NO MESSAGE DATA";            
            inkind_donation.confirmed = 0;
            
            if (inkind_donation.requirements_list_Id)
                dispatchInkind(inkind_donation);
        });
    }

    $(document).ready(function() {        
        $("#inkind-donation-message").hide();
        $("#content-inkind").show();
        $("#btn_back_inkind_donation").click(function() {
            location.href = "inkind.html";
        });
        
        var button = $('#upload_button'),
        interval;
        new AjaxUpload('#upload_button', {
            action: 'upload.php',
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
    });

    function dispatchInkind(params) {
        donateInkindController.actionInkind(params, donationCallback);
    }
    
    function donationCallback() {
        $("#inkind-donation-message").show();
        $("#content-inkind").hide();
    }
    
    function selectmenu(){        
        donateInkindController.actionLoadSelect(onSuccessSelect);
    }
    
    function onSuccessSelect(jsonOptions) {
        for(var i=0;i<jsonOptions.length;i++){
            $("#type_inkind").append("<option value='"+jsonOptions[i].Id+"'>"+jsonOptions[i].product+"</option>");
        }
        
    }

}