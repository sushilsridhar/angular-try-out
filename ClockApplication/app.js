var module = angular.module("ClockModule", []);
module.controller("getTime", gettime);
module.controller("validatePwd",validatePwd);

function gettime($scope) {
    $scope.date = new Date().toTimeString();
    
    $scope.updateDate = function () {

        $scope.date = new Date().toTimeString();
    }
}

function validatePwd($scope) {

    $scope.pwdValidate = function() {

        if($scope.password.length < 4)
            $scope.message="password too short";
        else
            $scope.message="strong password :D";
    }
}