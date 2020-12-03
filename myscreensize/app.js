var app = angular.module("myscreenSize",[]);

app.controller("screenController",screenController);

function screenController($window) {
    
    this.message = ":P";
    //$window.alert("hello");
    this.innerheight = $window.innerHeight;
    this.innerwidth = $window.innerWidth;
    this.outerheight = $window.outerHeight;
    this.outerwidth = $window.outerWidth;
    
    this.offsetwidth = screen.pixelDepth;
    this.offsetheight = screen.colorDepth;
    
    this.height=screen.height;
    this.width=screen.width;
    
    var devicePixelRatio = window.devicePixelRatio || 1;
    console.log(devicePixelRatio);
    
}