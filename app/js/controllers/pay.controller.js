/**
 * @author ctola
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('PayController',
            ['servicesFactory', PayController]);

    PayController.$inject = ['servicesFactory'];
    
    function PayController(servicesFactory) {
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