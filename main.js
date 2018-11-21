var app = angular.module('app', [])

app.controller('main-controller', function($scope){

    $scope.searchedPhrase = null
    $scope.models = new Array(5).fill().map(function(){return {visible: true, values: []}})
    $scope.counter = $scope.models.length    
    
    $scope.getNumber = function(num){
        return new Array(num);
    };

    $scope.filterContent = function(){
        $scope.counter = 0
        if($scope.searchedPhrase.length > 0){
            $scope.models.forEach(function(row){
                row.visible = row.values.some(function(value){
                    return value.indexOf($scope.searchedPhrase) > -1 ? true : false
                })
            })
        }else{
            $scope.models.forEach(function(row){
                row.visible = true;
            })
        }   

        $scope.models.forEach(function(row){
            if(row.visible) $scope.counter++
        })

    }

});