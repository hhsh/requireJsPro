//告诉Require需知道的baseUrl和paths
requirejs.config({     
    baseUrl: 'js/lib',    
    paths: {
		jquery: 'jquery-1.11.1',
        moduleDir: '../module',
		yourCar:'../module/car'
    }
});

//运行你的代码
requirejs(['jquery','moduleDir/drive'],function($,driveObj){
	 driveObj.run();
	 $("body").append("<b>Hello</b>");
});

console.log(requirejs.version);//2.1.15

 