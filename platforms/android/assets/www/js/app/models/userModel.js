/*
 * Document: users.js
 * Author: Ing. Luis Adolfo Cataño Hoyos - luis.catano@inventakus.com - 3015797857
 *
 * Modelo de usuario.
 */

//Espacio de nombres
Namespace('com.inventakus.model');

//Clase User
com.inventakus.model.User = function(options) {

    //Table sm_users
    var model = {};
    //Objeto usuario
    model.Users = {};
    //Primary Key
    model.Users.Id = undefined;
    //correo electronico
    model.Users.email = undefined;
    //contraseña del usuario cifrada en md5
    model.Users.md5_password = undefined;
    //Id del usuario en las redes sociales, facebook o G+
    model.Users.socialId = undefined;
    //Indica la red social con la que se ha logueado el usuario
    model.Users.socialtype = undefined;
    //Nombre completo del usuario.
    model.Users.fullName = undefined;
    //Celular del usuario.
    model.Users.cellphone = undefined;

    var managerVariables = new com.inventakus.components.managerGlobalVariables();
    var response = undefined;
    var url_base = undefined;
    var webStorage = undefined;
    var sessionToken = undefined;

    $.extend(this, {
        init: function() {
            managerVariables.init();
            url_base = managerVariables.getBaseUrl();
            webStorage = managerVariables.webStorageIsEnabled();
            response = managerVariables.getResponse();
            sessionToken = managerVariables.getSessionToken();
        },
        create: function(data, callback) {
            if ((data !== undefined && data !== null) /*&& isValid(data)*/) {
                return createWorker(data, callback);
            }
            response.code = 10;
            response.message = "Error 10: Objeto invalido.";
            response.dictionary.data = data;
            return response;
        }
    //        delete: function(id) {
    //
    //        },
    //        update: function(data) {
    //
    //        },
    //        findOne: function(id) {
    //
    //        },
    //        findAll: function() {
    //
    //        }

    });

    this.init();

    function createWorker(data, callback) {
        user = data;
        var url = url_base + "users/create";
        $.ajax({

            type: "POST",

           url: url,

            data: JSON.stringify(user),

            success: callback,

            timeOut: 4000,

            error:function(u,d,t){

                console.log(u);
                console.log(d);
                console.log(t);

            }

        });
    };

    function deleteWorker() {

    };

    function updateWorker() {

    };

    function findOneWorker() {

    };

    function findAllWorker() {

    };

    function isValid(data) {
        return (((((((objtUser.Id && objtUser.email) && objtUser.md5Password) &&
            objtUser.socialId) && objtUser.socialtype) && objtUser.token) &&
        objtUser.fullName) && objtUser.cellphone);
    };

}