var app = angular.module('myApp',[]);

app.controller('productController',function($scope){
	$scope.products = [
	                   {id:'101' , name:'Tables' , price:12000 , quantity:2},
	                   {id:'102' , name:'Chairs' , price:10000 , quantity:4},
	                   {id:'103' , name:'Matresses' , price:2000 , quantity:1},
	                   {id:'104' , name:'Bed' , price:25000 , quantity:2},
	                   {id:'105' , name:'Washing Machine' , price:12000 , quantity:1},
	                   {id:'106' , name:'Fridge' , price:20000 , quantity:1}
	                   ];
	
	$scope.add = function(){
		$scope.products.push({id:$scope.id , name:$scope.name , price: $scope.price , quantity: $scope.quantity});
		$scope.id = '';
		$scope.name = '';
		$scope.price = '';
		$scope.quantity = '';
	};
	
	$scope.save = function(){
		var index = getSelectedIndex($scope.id);
		$scope.products[index].name = $scope.name;
		$scope.products[index].price = $scope.price;
		$scope.products[index].quantity = $scope.quantity;
	};
	
	$scope.edit = function(id){
		//alert(id);
		var index = getSelectedIndex(id);
		//alert(index);
		var product = $scope.products[index];
		$scope.id = product.id;
		$scope.name = product.name;
		$scope.price = product.price;
		$scope.quantity = product.quantity;
	};
	
	$scope.del = function(id){
		var result = confirm("Do you want to deleted the record ?");
		if(result == true){
			var index = getSelectedIndex(id);
			$scope.products.splice(index , 1);
		}
	};
	
	function getSelectedIndex(id){
		for(var i=0;i<$scope.products.length;i++){
			if($scope.products[i].id==id){
				return i;
			}			
		}
		return -1;
	};
});