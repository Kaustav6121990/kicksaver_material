/**
 * @author ctola
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('CongratsController',
            ['servicesFactory', CongratsController]);

    CongratsController.$inject = ['servicesFactory'];
    
    function CongratsController(servicesFactory) {
        //vars
        /* jshint validthis: true */
        var vm = this;
        vm.contacts = {};
        vm.userList = userList;
        //code
        vm.userList();
        
        //functions
        function userList () {
             vm.contacts = servicesFactory.query();
        }
    }
})();