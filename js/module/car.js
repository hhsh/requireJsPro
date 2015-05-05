define('yourCar',{
    color: "黑色",
    brand: "宝马",
    price: 350,
    startEngine:function(){
        console.log('started',this.color,this.brand,this.price);
    }
});