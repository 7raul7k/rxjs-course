function getCustomers(){

    let promise = new Promise({
        function(resolve, reject){
         console.log("Getting customers");

         setTimeout(function(){
            let success = true;
            if(success){
                resolve("John Smith");
            }else{
                reject("Can't get customers");
            }
         },1000);
        }
    },1000);
}