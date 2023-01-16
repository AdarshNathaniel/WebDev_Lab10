

var myapp = angular.module("myapp", ['ngRoute'])

//router config
myapp.config(($routeProvider)=>{
    $routeProvider
    .when("/MyHome", {
        templateUrl: './MyHome.html',
        controller: "homeCtrl"
    })
    .when("/MyJson", {
        templateUrl: './MyJson.html',
        controller:'jsonCtrl'
    })
    .when("/MySearch", {
        templateUrl: './MySearch.html',
        controller: "searchCtrl"
    })
})

//controllers
myapp.controller("myappCtrl", ($rootScope, $http)=>{
    //retrieve JSON file
    $http.get("./NewPlayers.json")
    .success(function(response){
        $rootScope.NewPlayers = response
        console.log("NewPlayers.JSON retrieved.")
    })
})

myapp.controller("homeCtrl", function($scope, $rootScope){
    $rootScope.var = "Latest Player Arrivals"
    $scope.message = "Click on search or Json to view"
})
myapp.controller("jsonCtrl",function($scope,$rootScope, $http)
{
    $rootScope.var = "NewPlayers Details"
    //retrieve JSON file
    $http.get("./NewPlayers.json")
    .success(function(response){
        $rootScope.NewPlayers = response
        console.log("NewPlayers.JSON retrieved.")
    })
})
myapp.controller("searchCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search NewPlayers"
    $scope.message = "Search NewPlayers by name:"

    search_name = document.getElementById("search_name")
    search_name.addEventListener('keyup', ()=>{
        if(search_name.value.trim() == "")
        {
            document.getElementById("search_table").style.display = "none"
        }
        else
        {
            document.getElementById("search_table").style.display = "table"
        }
    })
})