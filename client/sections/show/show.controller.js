angular.module('ShowTrackerApp.core').controller('ShowController', function(ShowServices){
	var vm = this;

	// ShowServices.get(1399).then(function(data){
	// 	vm.show = data;
	// });

	vm.query = function(query){
		ShowServices.search(query).then(function(response){
			console.log(response);
		}).catch(function(error){

		});
	};

	vm.query('Game of Thrones');

});