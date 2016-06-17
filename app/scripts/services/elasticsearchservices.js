'use strict';

angular.module('hackathonCodeGamesApp')
    .factory('elasticSearchService', ['$http', '$q', '$log',
        function($http, $q, $log) {
            var service = {};

            //Service URL
            var _url = 'http://107.170.211.25:9200/logs';

            //q=nivel:Severe
            
            service.processSearch = function(params) {
                var finalUrl = _url + '/_search';
                $log.info('Final URL:' + finalUrl);
                var request = $http({
                    method: 'POST',
                    url: finalUrl,
                    data: params,
                    params: { size: 1000}
                });

                //params: { q: params }

                return request.then(
                    function(response) {
                        return response.data;
                    },
                    function(response) {
                        $log.info('Call failed');
                        return $q.reject('Call Failed');
                    }
                );
            };

            service.getStatistics = function( field ) {
                var finalUrl = _url + '/_search';
                $log.info('Final URL:' + finalUrl);              
                var request = $http({
                    method: 'POST',
                    url: finalUrl,
                    data: {
                        "size": 0,
                           "aggs": {
                             "group_by_state": {
                               "terms": {
                                 "field": field
                               }
                            }
                        }
                    }
                });

                return request.then(
                    function(response) {
                        return response.data;
                    },
                    function(response) {
                        $log.info('Call failed');
                        return $q.reject('Call Failed');
                    }
                );
            };   

            return service;
        }
    ]);
