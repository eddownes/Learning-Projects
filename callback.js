var pullHook = document.getElementById('pull-hook');
pullHook.onAction = function(done) {
  refreshTheData()
    .then(done);
};
