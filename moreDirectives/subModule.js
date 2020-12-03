var app = angular.module("subModule",[]);

app.controller("controller",controller);

function controller() {

    this.message="hello world sub module :P";
}