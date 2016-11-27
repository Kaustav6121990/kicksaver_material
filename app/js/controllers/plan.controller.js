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

$( document ).ready(function() {
   $('.datepicker').pickadate({
      format: 'mm/dd/yyyy',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});