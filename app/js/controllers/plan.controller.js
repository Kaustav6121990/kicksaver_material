/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('PlanController',PlanController);

    function PlanController() {
        //vars
        /* jshint validthis: true */
        var vm = this;
        vm.options = ["home","user","contact","find","help"];
    }
})();

