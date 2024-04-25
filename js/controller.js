var myapp = angular.module('myapp', []);

myapp.controller('Mycontroller',['$scope', '$http', function fanController($scope, $http) {
    $http.get('../student-data.json').then(function(response) {
        $scope.students = response.data;
    });
}]);
    // $scope.disstudents=[
    //     {  
    //         'name':'Hazem',
    //         'gender':'Male',
    //         'physics':'88',
    //         'maths':'87',
    //         'english':'78'
    //      },
    //      {  
    //         'name':'Fahem',
    //         'gender':'Male',
    //         'physics':'96',
    //         'maths':'100',
    //         'english':'95'
    //      },
    //      {  
    //         'name':'Mohammed',
    //         'gender':'Male',
    //         'physics':'89',
    //         'maths':'90',
    //         'english':'70'
    //      },
    //      {  
    //         'name':'Ali',
    //         'gender':'Male',
    //         'physics':'30',
    //         'maths':'25',
    //         'english':'40'
    //      }     
    //     ];
   