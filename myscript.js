const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http)=> {


    //this is controller
    $scope.title = "Stay Home Stay Safe"

    ///$scope.changevalue = () =>{
       // $scope.title = "Covid-19"
    //}

    console.log("App Loaded")

    //Call API

    $http.get(URL).then(
        (response)=>{

            //Code for success
            console.log(response);

            $scope.all_data = response.data;

        },
        (errors)=>{

            console.log(errors);

            //Code for failure

        } );

    $scope.get_c_data=()=>{

        let country = $scope.c;
        if(country==''){

            return;
        }

        $http.get('${URL}/countries/${country}')
        .then((response)=>{

            console.log(response.data);
            $scope.c_data = response.data;

        }, 
        (errors)=>{

            console.log(errors);

        });
    };


        


});