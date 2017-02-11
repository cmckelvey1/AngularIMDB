angular.module('ShowTrackerApp.core').controller('SearchingController', function(ShowService){
	var vm = this;

	vm.query = function(query){
		ShowService.search(query).then(function(response){
			console.log(response);
		}).catch(function(error){

		});
	};

	vm.query('Game of Thrones');
});