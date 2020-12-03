var app = angular.module("TodoApp",[]);

app.controller("todoController",todoController);

function todoController() {
    
    this.todoList=[];

    this.addItem = function() {

        this.todoList.push(this.todoItem);
        this.todoItem="";
    }

    this.deleteItem = function(index) {

        console.log(index);
        delete this.todoList.splice(index,1);
    }

    this.editItem = function(val) {

        this.flag=val;
    }

    this.updateItem = function(index,i) {

        console.log("this. i value: ",this.i);
        console.log("value: ",i)
        console.log("old",this.todoList[index]);
        this.todoList[index]=i;
        console.log("new",this.todoList[index]);
    }
}