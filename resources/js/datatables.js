/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = require('jquery');
} catch (e) {}

// Load Datatables
try {
  var DataTable = require('datatables.net-bs4');
  require('datatables.net-fixedcolumns-bs4');
  require('datatables.net-fixedheader-bs4');
  require('datatables.net-responsive-bs4');
  require('datatables.net-rowgroup-bs4');
  require('datatables.net-scroller-bs4');
  
  /*
  *   Fix "$(...).DataTable is not a function"
  *
  *   https://datatables.net/forums/discussion/50003/datatables-with-webpack-fn-datatable-undefined
  */
//   $.fn.dataTable = DataTable;
//   $.fn.dataTableSettings = DataTable.settings;
//   $.fn.dataTableExt = DataTable.ext;
//   DataTable.$ = $;

//   $.fn.DataTable = function ( opts ) {
//       return $(this).dataTable( opts ).api();
//   };
  
} catch (e) {}

