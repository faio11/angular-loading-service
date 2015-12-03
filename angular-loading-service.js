(function(angular){
  'use strict';
  
  angular
    .module('angular-loading-service', [])
    .service('loadingService', loadingService);

  function loadingService() {

		//Private
		var loading = 0,
			observerCallbacks = [];

		//Public

		this.addLoad = addLoad;
		this.isLoading = isLoading;
		this.registerObserverCallback = registerObserverCallback;
		this.removeLoad = removeLoad;

		//Functions

		function addLoad() {
			loading++;
			notifyObserver();
		}

		function isLoading() {
			return loading > 0;
		}

		function notifyObserver() {
			angular.forEach(observerCallbacks, function (callback) {
				if (angular.isFunction(callback)) {
					callback();
				}
			});
		}

		function registerObserverCallback(callback) {
			observerCallbacks.push(callback);
		}

		function removeLoad() {
			loading = loading > 0 ? loading - 1 : 0;
			notifyObserver();
		}
	}

})(angular);
