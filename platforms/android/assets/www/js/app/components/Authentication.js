/*
 * Document: users.js
 * Author: Ing. Luis Adolfo Cataño Hoyos - luis.catano@inventakus.com - 3015797857
 *
 * Modelo de usuario.
 */

//Espacio de nombres
Namespace('com.inventakus.components');

//Clase User
com.inventakus.components.Authentication = function(options) {

    var managerVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = undefined;
    var webStorage = undefined;

    $.extend(this, {
        init: function() {
            managerVariables.init();
            url_base = managerVariables.getBaseUrl();
            webStorage = managerVariables.webStorageIsEnabled();
        },
        login: function(email, password) {
            var md5password = hex_md5(password);

            //var md5password = password;
            console.log(md5password);
            var url = url_base+"session/authentication/";

            var user = {};

            user.email = email;

            user.md5_password = md5password;

            $.ajax({

                type: "POST",

                url: url,

                data: JSON.stringify(user),

                success: function(data){
                    //var data = JSON.parse(stringJson);
                    // console.log("El Token es: "+data.token+", webStorage: "+webStorage);
                    if(data.authenticate){
                        if(webStorage){
                            localStorage.setItem("SESSION_TOKEN", data.token);
                            localStorage.setItem("USER_ID", data.iduser);
                        }else{
                            document.cookie="SESSION_TOKEN="+data.token;
                            document.cookie="USER_ID="+data.iduser;
                        }
                        document.location.href = "menu.html";
                    }else{
                        $("#msg").html(null);
                        $("#msg").show();
                        $("#msg").html("Usuario y/o contraseña incorrectos");
                    }

                },

                timeOut: 4000,

                error:function(u,d,t){

                    // console.log(u);
                    // console.log(d);
                    // console.log(t);

                    $("#msg").html(null);
                    $("#msg").show();
                    $("#msg").html("Usuario y/o contraseña incorrectos");

                }

            });
        },
        close: function(callback){
            var token = managerVariables.getSessionToken();
            var url = managerVariables.getBaseUrl() + "session/close";
            localStorage.clear();
            $.ajax({

                type: "GET",

                url: url,

                headers: {
                    'TOKEN': token
                },

                success: callback,

                timeOut: 4000,

                error:function(u,d,t){

                }

            });
        },
        session: function(callback){
            var url = managerVariables.getBaseUrl() + "session/isvalidsession";
            var token = managerVariables.getSessionToken();
            if(token !== undefined && token !== null){
                $.ajax({

                    type: "GET",

                    url: url,

                    headers: {
                        'TOKEN': token
                    },

                    success: callback,

                    error:function(u,d,t){
                        location.href = "index.html";
                    }

                });
            }else{
                location.href = "index.html";
            //console.log("");
            }
        }
    });
}