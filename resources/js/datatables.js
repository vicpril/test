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
  // require('jquery');
  require('datatables.net-bs4')($);
  require('datatables.net-fixedcolumns-bs4')($);
  require('datatables.net-fixedheader-bs4')($);
  require('datatables.net-responsive-bs4')($);
  require('datatables.net-rowgroup-bs4')($);
  require('datatables.net-scroller-bs4')($);
} catch (e) {}
