/*
 * Document: time.js
 * Author: Luis Cataño
 */
//Espacio de nombres
Namespace('com.inventakus.view');
/*
 * Inicializa los elementos del time.html
 * Class timeView
 */
com.inventakus.view.donateTimeView = function(options) {
    
    var managerVariables =  new com.inventakus.components.managerGlobalVariables();
    var dotationTimeController =  new com.inventakus.controller.donateTimeController(); 

    $.extend(this, {
        // pub methods
        init: function() {
            $("#donate-time-message").hide();
            $("#content-time").show();
            loadEvents();
        },
    });

    this.init();

    // priv methods
    function loadEvents() {
        //$("#type_profession").selectmenu();
        $("#btn_backmenune").click(function() {
            location.href = "menu_ne.html";
        });
        $('#btn_back_donate_time').click(function(){
            document.location.href = "menu_ne.html";
        });

        $("#btn_save").click(function() {
            var profession = $("#type_profession").val();
            var userid = managerVariables.getIdUser(); // userid
            var date = nowDate();
            var time = nowTime();
            var hours = $("#hours").val();
            if (profession && hours)
                dispatchTime({
                    DonationTime:{
                        profession: profession,
                        users_Id: userid,
                        date_donation: date,
                        time_donation: time,
                        number_hours: hours,
                        confirmed: 0
                    }
                });
        });
    }

    function dispatchTime(params) {
        var object = {data: params, callback: successCallback}
        console.log(object);
        dotationTimeController.recordDonation(object);
    }

    function successCallback(){
        $("#donate-time-message").show();
        $("#content-time").hide();
    }
}