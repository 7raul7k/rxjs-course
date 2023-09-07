function getProductDetails(){

    setTimeout(function(){
        console.log("Getting customers");
        setTimeout(function() {
            console.log("Getting orders");
            setTimeout(function () {
                console.log("Getting products");
            }, 1000);

        },1000);
    },1000);
}