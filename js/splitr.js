function SplitsCtrl($scope) {
  $scope.splits = [{minutes: null, seconds: null}, {minutes: null, seconds: null}];

  $scope.getSplitCount = function() {
    return $scope.splits.length;
  };

  $scope.getAverage = function() {
    var totalSeconds = $scope.splits.reduce(function(total, split) {
      return total + split.seconds + (split.minutes * 60);
    }, 0);

    var average = Math.floor(totalSeconds / $scope.splits.length);

    var pad = function (num){ return ('00' + num).substr(-2); }

    return pad(Math.floor(average/60)) + ':' + pad(average % 60);
  };

  $scope.addSplit = function() {
    $scope.splits.push({minutes: null, seconds: null});

    var to = setTimeout(function() {
      var minutes = window.top.document.querySelectorAll('input.minutes');
      minutes[minutes.length - 1].focus();
      clearTimeout(to);
    }, 100);
  };
};
