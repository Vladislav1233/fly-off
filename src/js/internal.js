(function() {

  function documentReady() {
    @@include('partials/mobile-menu.js');
    @@include('partials/datepicker.js');
    @@include('partials/clone-age.js');
    @@include('partials/tabs.js');
    @@include('partials/range.js');
    @@include('partials/slidedown.js');
    @@include('partials/disabled-check.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);

})();