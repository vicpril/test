//CORE
require('./bootstrap');

// PLUGINS
require('./now-ui-dashboard/plugins/bootstrap-notify');

require('./now-ui-dashboard/plugins/chartjs.min');

require('./now-ui-dashboard/plugins/perfect-scrollbar.jquery.min');

// THEME
require('./now-ui-dashboard/now-ui-dashboard');

// require('./now-ui-dashboard/now-ui-dashboard.min');

// Load Datatables
try {
  require('datatables.net-bs4')($);
  // require('datatables.net-fixedcolumns-bs4')($);
  // require('datatables.net-fixedheader-bs4')($);
  require('datatables.net-responsive-bs4')($);
  require('datatables.net-rowgroup-bs4')($);
  require('datatables.net-scroller-bs4')($);
} catch (e) {}
