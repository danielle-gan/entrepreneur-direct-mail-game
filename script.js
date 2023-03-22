
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

// How long would you like to play for? 3 months? 6 months? 12 months? 
num_months = 3;

// some variable set up 
money = 10000000; 
num_clients = 1 
//  for every $10,000 spent on marketing, increase clients by +1 

// time variables
current_day = 0; 
days_left = num_months * 30 - current_day;

// printers
printers = 1; 


// ink = paper: need  at least 



