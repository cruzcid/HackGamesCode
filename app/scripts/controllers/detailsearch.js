'use strict';

/**
 * @ngdoc function
 * @name hackathonCodeGamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackathonCodeGamesApp
 */
angular.module('hackathonCodeGamesApp')
  .controller('SearchCtrl', ['$scope', 'elasticSearchService', '$log', '$routeParams',
    function ($scope, elasticSearchService, $log, $routeParams) {
    	function init()
      { //var level = 'nivel:' + $routeParams.level;
          var level = { "size": 0, "aggs": { "group_by_state": { "terms": { "field": "ip" } } } };
          var params = { "query": { "bool": { "must": [] } } };

          if ($routeParams.server != undefined && $routeParams.server != null
            && $routeParams.server != 'undefined' && $routeParams.server != '')
          {
            params.query.bool.must.push({ "match": { "ip": $routeParams.server } });
          }

          if ($routeParams.instance != undefined && $routeParams.instance != null
            && $routeParams.instance != 'undefined' && $routeParams.instance != '') {
            params.query.bool.must.push({ "match": { "instancia": $routeParams.instance } });
          }

          if ($routeParams.level != undefined && $routeParams.level != null
            && $routeParams.level != 'undefined' && $routeParams.level != '') {
            params.query.bool.must.push({ "match": { "nivel": $routeParams.level } });
          }

    			elasticSearchService.processSearch(params).then(
            function(data) {
              $log.info("success search");
              $scope.dataResult = data.hits;

              setGridResultSearch();
            },
            function() {
              $log.info("error search");
            });
    	};

      function setGridResultSearch() {
          $scope.gridResultsOptions = {
            dataSource: {
                data: $scope.dataResult.hits,
                pageSize: 20
            },
            navigatable: true,
            selectable: 'row',
            pageable: true,
            sortable: true,
            columns: [{
                field: "_source.ip",
                title: "Server",
                width: "25px"
            },{
                field: "_source.instancia",
                title: "Instance",
                width: "45px"
            },{
                field: "_source.clase",
                title: "Class",
                width: "50px"
            },{
                field: "_source.fecha",
                title: "Date",
                width: "50px"
            },{
                field: "_source.mensaje",
                title: "Message",
                width: "100px"
            },{
                field: "_source.nivel",
                title: "Level",
                width: "30px"
            },{
                field: "_source.applicationserver",
                title: "Application Server",
                width: "50px"
            }]
        };
      }
      init();
  }
]);
