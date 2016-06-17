'use strict';

/**
 * @ngdoc function
 * @name hackathonCodeGamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackathonCodeGamesApp
 */
angular.module('hackathonCodeGamesApp')
  .controller('MainCtrl', ['$scope', '$location', 
  	function ($scope, $location) {
	  	function init()
	  	{
	  		initTabs();
	  	};

	  	$scope.getInstances = function()
	  	{
	  		$scope.valuesInstances = [];

	  		switch ($scope.serverSel) {
	  			case "192.168.1.111":
	  				$scope.valuesInstances.push({data: "demo84", name: "Demo84"});
	  				$scope.valuesInstances.push({data: "bancomer", name: "Bancomer"});
	  				break;
	  			case "192.168.1.114":
	  				$scope.valuesInstances.push({data: "banorte", name: "Banorte"});
	  				$scope.valuesInstances.push({data: "codensa", name: "Codensa"});
	  				break;
	  			case "192.168.1.121":
	  				$scope.valuesInstances.push({data: "cajamaynas", name: "Caja Maynas"});
	  				$scope.valuesInstances.push({data: "falabellabr", name: "Falabella Brazil"});
	  				break;
	  			case "192.168.1.3":
	  				$scope.valuesInstances.push({data: "liverpool", name: "Liverpool"});
	  				$scope.valuesInstances.push({data: "hsbc_mx", name: "HSBC MX"});
	  				break;
	  			case "127.0.0.1":
	  				$scope.valuesInstances.push({data: "sun-appserver9.1", name: "sun-appserver9.1"});
	  		}
	  	};

	  	$scope.search = function() {
	  		$location.path('search/' + $scope.serverSel + '/' + $scope.instanceSel 
	  			+ '/' + $scope.levelSel + '/' + $scope.dataIniObject + '/' + $scope.dataEndObject);
	  	};

	  	$scope.clean = function() {
	  		$scope.serverSel = "";
	  		$scope.instanceSel = "";
	  		$scope.levelSel = "";
	  		$scope.dataEnd = ""
	  		$scope.dataIni = "";
	  	};

	  	function initTabs() {
	        $scope.tabs = {};
	        $scope.tabs['tab1'] = {
	            active: true
	        };

	        $scope.tabs['tab2'] = {
	            active: false
	        };
	    };

	  	$scope.isActive = function(tab) {
            if ($scope.tabs === undefined) {
                return false;
            }

            var tab = $scope.tabs[tab];
            return tab.active;
        };
            
        $scope.setActive = function(tabKey) {
            var key;
            
            //Inactivate all
            for (key in $scope.tabs) {
                $scope.tabs[key].active = false;
            }

            var tab = $scope.tabs[tabKey];
            if (tab !== undefined) {
                tab.active = true;
            }
        };
	    
	    init();
	}
]);
