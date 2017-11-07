(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('#datetimepicker').datetimepicker({
      default:'1970/01/01',
      format:'Y-m-d H:00',
    });
    $('#datetimepicker').val('01/01/1970');
    $('#datetimepicker')
    .datetimepicker('show')
    .datetimepicker('reset')
  }); // end of document ready
  $('.datepicker').pickadate({
     format:'yyyy-mm-ddT00:00:00Z' });

})(jQuery); // end of jQuery name space
