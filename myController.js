/**
 * Created by Shahzad on 5/10/2015.
 */
/*
var myApp = angular.module("Appjs",[]);
myApp.controller("myCtrl",function($scope){
    $scope.name = '23scope';
    $scope.fullName = function(){
        return $scope.name;
    }
});
*/


angular.module("Appjs1",[]).controller("myCtrl",function($scope){
    $scope.name = [
        {fName :'fn1',lName:'Cln1'},
        {fName :'fn2',lName:'Bln2'},
        {fName :'fn3',lName:'Aln3'}
    ];

});
