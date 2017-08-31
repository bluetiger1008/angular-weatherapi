(function() {
    'use strict';

    angular
    	.module('TestModule')
    	.controller('TestModuleController', TestModuleController);

    TestModuleController.$inject = ['$http'];

    function TestModuleController($http) {
    	var vm = this;
    	vm.weatherData = null;

    	var base_url = 'http://samples.openweathermap.org/data/2.5/weather?q=';
    	onInit();

    	function onInit() {
    	}

    	vm.onInputChange = function() {
    		console.log(vm.cityName);
    		var endpoint = base_url + vm.cityName + '&appid=b1b15e88fa797225412429c1c50c122a1';
    		
    		$http.get(endpoint)
    			.then(function(res) {
    				vm.weatherData = res.data;
    				console.log(vm.weatherData);
    			})
    			.catch(function(error) {
    				console.log(error);
    			});
    	}

    }
})();