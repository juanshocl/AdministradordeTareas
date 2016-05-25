(function() {
    "use strict";
    var app = angular.module("AdministradordeTareas",
                             ["ui.router",
                             "common",
                             "tareasResourceMock"]);
    
    app.config(["$stateProvider","$urlRouterProvider",
               function($stateProvider, $urlRouterProvider){
                   
                   $stateProvider
                   .state("inicio",{
                          URL:"/",
                          templateUrl: "paginas/bienvenidos.html"
                       })
                   .state("tareas",{
                          URL:"/tareas",
                          templateUrl: "paginas/tareas.html",
                          controller: "TareasCtrl as vm"
                       })
                   .state("nuevatarea",{
                          URL:"/nuevatarea",
                          templateUrl: "paginas/nuevatarea.html"
                       })
                   .state("estadisticas",{
                          URL:"/estadisticas",
                          templateUrl: "paginas/estadisticas.html"
                       })
                   
                   
               }])
    
})();