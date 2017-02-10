angular
	.module('ShowTrackerApp')
	.constant('API_KEY', '888abe3d5c5f2bcc61457f63e0f13461')
	.constant('BASE_URL', 'https://api.themoviedb.org/3')
	.factory('ShowService', dataService);

function dataService($http, $log, API_KEY, BASE_URL) {
	var data = {
		'get': get,
		'search': search
	};

	function makeRequest(url, params){
		var requestUrl = BASE_URL + '/' + url + 'api_key=' + API_KEY;

		angular.forEach(params, function(value, key){
			requestUrl = requestUrl + '&' + key + '=' + value;
		});

		return $http({
			'url':requestUrl,
			'method': GET,
			'headers': {'Content-Type': 'application/json'},
			'cache': true
		}).then(function(response){
			return response.data;
		}).catch(dataServiceError);
	}

	function get(id){
		return makeRequest('tv/' + id, {});
	}

	function search(query){
		return makeRequest('search/tv', {query: query}).then(function(data){
			return data.results;
		})
	}

	return data;

	function dataServiceError(errorResponse){
		$log.error('XHR Failed for ShowService');
		$log.error(errorResponse);
		return errorResponse;
	}
}
