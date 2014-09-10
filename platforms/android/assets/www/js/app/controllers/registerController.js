<<<<<<< HEAD
/*
 * Document: registerController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para register.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.RegisterController = function(options) {

    // required
    var model = new com.inventakus.model.User();
    var managerVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = undefined;
    //var webStorage = undefined;

    $.extend(this, {
        init: function() {
            model.init();
        },
        actionRegister: function() {
            var dto = {};
            dto.Users = {};

            var fullName = $("input#fullName").val();
            var email = $("input#email").val();
            var pass = $("input#pass1").val();
            var cellphone = $("input#cellphone").val();

            dto.Users.full_name = fullName;
            dto.Users.email = email;
            dto.Users.md5_password = MD5(pass);
            dto.Users.cellphone = cellphone;

            model.create(dto);
        }
    });
=======
/*
 * Document: registerController.js
 * Author: Jeison Nisperuza
 *
 * Controlador para register.html
 */

//Espacio de nombres
Namespace('com.inventakus.controller');

//Clase register user
com.inventakus.controller.RegisterController = function(options) {

    // required
    var model = new com.inventakus.model.User();
    var managerVariables = new com.inventakus.components.managerGlobalVariables();
    var url_base = undefined;
    var webStorage = undefined;

    $.extend(this, {
        init: function() {
            model.init();
        },
        actionRegister: function() {
            var dto = {};
            dto.Users = {};

            var fullName = $("input#fullName").val();
            var email = $("input#email").val();
            var pass = $("input#pass1").val();
            var cellphone = $("input#cellphone").val();

            dto.Users.full_name = fullName;
            dto.Users.email = email;
            dto.Users.md5_password = MD5(pass);
            dto.Users.cellphone = cellphone;

            model.create(dto);
        }
    });
>>>>>>> 21fa58e9d7f2ab1fa6f87e95f5c064ac8ecffc34
}