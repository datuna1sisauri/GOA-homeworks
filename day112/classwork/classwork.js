let num = [5,2,12,32,11];

let updatenum = num.map(num => num %2 === 0 ? num +10: num -10);


console.log("განახლებული მასივი:", updatenum);

function sum(a,b,c,d,e){
    console.log("ჯამი:", a + b + c + d + e)
};

sum(...updatenum)