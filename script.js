
prompt = "What would you like your lettershop to be called?";

shopName = prompt; 
// random shop name generator

shop_first = ["funny", "funky", "awkward", "speedy", "direct", "laughable", "perfect", "express"]; 
shop_last = ["mail", "letter", "package", "communications", "post" ]; 


// on random name generator click, generate two random numbers, concatentate shop_first + " " + shop_last 

rnum1 = (Math.floor(Math.random() * 8));
rnum2 = (Math.floor(Math.random()* 5));

console.log(rnum1, rnum2);


console.log(shop_first[rnum1]+ " " + shop_last[rnum2]);