var module = angular.module("NestedController",[]);
module.controller("ctrl1",ctrl1);
module.controller("ctrl2",ctrl2);

function ctrl1() {
    this.message1="hello world D: :D";
}

function ctrl2() {
    this.message1 ="hello world P: :P";
}