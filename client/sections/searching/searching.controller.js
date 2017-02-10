angular.module('ShowTrackerApp.core').controller('SearchingController', function(ShowServices){
	var vm = this;

	vm.query = function(query){
		ShowServices.search(query).then(function(response){
			console.log(response);
		}).catch(function(error){

		});
	};

	vm.query('Game of Thrones');
});