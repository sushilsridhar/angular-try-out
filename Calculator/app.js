var module = angular.module("Calculator",[]);
module.controller("calculatorCtrl",calculatorCtrl);

function calculatorCtrl() {

    this.ButtonClicked = function(button) {
        this.operationDisplay=button;
    }

    this.calculate = function() {
        var number1 = this.num1;
        var number2 = this.num2;

        if(this.operationDisplay === '+')
            this.result= this.num1 + this. num2;
        else if(this.operationDisplay === '-')
            this.result= this.num1 - this. num2;
        else if(this.operationDisplay === '*')
            this.result= this.num1 * this. num2;
        else if(this.operationDisplay === '/')
            this.result= this.num1 / this. num2;
    }

}

    

