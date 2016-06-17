'use strict';

/**
 * @ngdoc function
 * @name paginaAngularApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the paginaAngularApp
 */
angular.module('hackathonCodeGamesApp')
  .controller('StatisticsCtrl', function ($scope, elasticSearchService) {
  	var ctx1 = document.getElementById("myChart1");
  	var ctx2 = document.getElementById("myChart2");
  	var ctx3 = document.getElementById("myChart3");
  	const color1 = 'rgba(0, 42, 74, 1)';
  	const color2 = 'rgba(215, 23, 0, 1)';
  	const color3 = 'rgba(23, 93, 125, 1)';
  	const label1 = 'server';
  	const label2 = 'nivel';
  	const label3 = 'instancia';

  	function init() {
  		$scope.getInfo(ctx1, 'ip', label1, color1);
  		$scope.getInfo(ctx2, label2, label2, color2);
  		$scope.getInfo(ctx3, label3, label3, color3);
  	}

   $scope.getInfo = function(ctx, field, labelChart, color) {
   	elasticSearchService.getStatistics(field).then( function(data) {
   		let result = data.aggregations.group_by_state.buckets;
   		getChart(ctx , result, labelChart, color);
   	}, 
   	function(){

   	} );      	       	
   }

   function getChart( ctx, objeto, label, color ) {
   		let labels = [];
   		let data = [];
   		let backgroundColor = [];
   		let borderColor = [];
		objeto.forEach( function( element ) {
			data.push( element.doc_count );
			labels.push( element.key );
			backgroundColor.push( color );
			borderColor.push( color );
		} );

		let grafica = {
			'labels' : labels,
			'datasets' : [{
			'label' : label,
			'data' : data,
			'backgroundColor' : backgroundColor,
			'borderColor' : borderColor,
			}],
		};

		let myChart = new Chart(ctx, {
		    type: 'bar',
		    data: grafica,
		});	   		
   }
   init();
  });
