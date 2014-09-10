/*
 * Document: users.js
 * Author: Ing. Luis Adolfo Cataño Hoyos - luis.catano@inventakus.com - 3015797857
 * 
 * Modelo de usuario.
 */

//Espacio de nombres
Namespace('com.inventakus.components');

com.inventakus.components.managerGlobalVariables = function(options) {
	var URL_BASE = "http://inventakuslabs.esy.es/index.php/";
	var WEBSTORAGE = undefined;
	var RESPONSE = {};
	$.extend(this, {
		init: function() {
			//Inicializando la bandera WEBSTORAGE
			if (typeof(Storage) !== "undefined") {
                WEBSTORAGE = true;
            } else {
                WEBSTORAGE = false;
            }
            //Inicializando el objeto de respuesta.
			RESPONSE.code = undefined;
			RESPONSE.message = undefined;
			RESPONSE.dictionary = undefined;
		},
		getBaseUrl: function(){
			return URL_BASE;
		},
		webStorageIsEnabled:function(){
            return WEBSTORAGE;
		},
		getResponse:function(){
			return RESPONSE;
		},
		getSessionToken: function(){
			if(WEBSTORAGE){
				return localStorage.getItem("SESSION_TOKEN");
			}
		}, 
		getIdUser: function(){
			if(WEBSTORAGE){
				return localStorage.getItem("USER_ID");
			}
		}
	})

	this.init();
}