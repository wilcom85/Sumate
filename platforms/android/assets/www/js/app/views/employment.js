/*
 * Document: employment.js
 * Author: Jeison Nisperuza
 */
//Espacio de nombres
Namespace('com.inventakus.view');
/*
 * Evento de carga completa (jquery).
 * Inicializa los elementos del employment.html
 */
com.inventakus.view.donateEmploymentView = function(options) {
    
    var donateEmploymentController = new com.inventakus.controller.donateEmploymentController();
    var managerGlobalVariables = new com.inventakus.components.managerGlobalVariables();
    var user_id = undefined;

    $.extend(this, {
        init: function() {
            loadEvents();
            user_id = managerGlobalVariables.getIdUser();
        }
    });
    this.init();

    function loadEvents() {
        $("#btn_backmenune").click(function() {
            location.href = "menu_ne.html";
        });
        $("#btn_save").click(function() {
            
            var employment_donation  = {};            
            employment_donation.users_Id = user_id;            
            employment_donation.date_donation = nowDate();            
            employment_donation.time_donation = nowTime();   
            employment_donation.employment = $("#type_employment").val();
            employment_donation.requirements = $("#ta_requirements").val();            
            employment_donation.confirmed = 0;
            
            if (employment_donation.employment && employment_donation.requirements)
                dispatchEmployment(employment_donation);
            
        });
    }
    
    $(document).ready(function() {        
        $("#employment-donation-message").hide();
        $("#content-employment").show();
        $("#btn_back_employment_donation").click(function() {
            location.href = "employment.html";
        });
    
    });

    function getProfessions() {

    }

    function getRequirements() {

    }

    function asignRequirements() {

    }

    function dispatchEmployment(params) {
        donateEmploymentController.actionEmployment(params, donationCallback);
    }
    
    function donationCallback() {
        $("#employment-donation-message").show();
        $("#content-employment").hide();
    }

}