const express=require('express');
const app=express();
const port=8000;




app.listen(port, function(err){
if(err){
    console.log(`Error on runnig port: ${port}`);
    return;
}
console.log("server is up !!");

});