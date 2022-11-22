//1

let groceries = [
    {
    name: "milk",
    amount: "6 liters",
    bought: true,
    },
    {
        name: "sugar",
        amount: "4 kg",
        bought: true,
        },
        {
            name: "apples",
            amount: "2 kg",
            bought: false,
            }
]

function displayArray(arr) {
    return arr.forEach((item)=>{
        console.log(item);
    });
}
displayArray(groceries);



document.write(`Grocery List: <br>`);
for(let i=0; i<groceries.length; i++) {
    document.write(`${groceries[i].name}, ${groceries[i].amount}, ${groceries[i].bought}    <br>`);
}


function purchase(name,amount) {
    let exists=false;
    for(let i=0; i<groceries.length; i++){
        if(name == groceries[i].name){
            groceries[i].amount += amount;
            exists=true;
            break;
        }
    }
    
    if(!exists){
        groceries.push( 
            { name:name, amount:amount, bought:false }
            );
    }
}
purchase('Ice Cream',5);



document.write(`<br><br>Grocery List:<br>`);
for(let i=0; i<groceries.length; i++){
    document.write(`${groceries[i].name}, ${groceries[i].amount} <br>`);
}



//2

let receipt = [
    {
    name: "nutella",
    amount: "800 g",
    price:6,
    },
    {
        name: "tomatoes",
        amount: "3 kg",
        price:2,
        },
        {
            name: "apples",
            amount: "1 doz",
            price:1,
            }
]


function displayArray(arr) {
    return arr.forEach((item)=>{
        console.log(item);
    });
}
displayArray(receipt);


document.write(`<br> Receipt:     <br> `);
for(let i=0; i<receipt.length; i++) {
    document.write(`${receipt[i].name}, ${receipt[i].amount}, ${receipt[i].price}    <br>`);
}

    // for (const value of arr) {
    // sum += value;
    // }
  

  function sum(purchase) {
    let sum=0;
    for(let i=0; i<purchase.length; i++) {
        sum += purchase[i].price;
    }
    return sum;
}
console.log('Sum of the purchase: ',sum(receipt));


function avg(purchase) {
    let sum=0;
    for(let i=0; i<purchase.length; i++){
        sum += purchase[i].price;
    }
    return sum/purchase.length;
}
console.log('Average item price: ',avg(receipt));


//4

let classroom = [
    {
        name:"Data Base",
        seats:25,
        faculty:"FIEK",
    },
    {
        name:"Math",
        seats:25,
        faculty:"FIEK",
    },
    {
        name:"Object Oriented Programming",
        seats:20,
        faculty:"FIEK",
    }
];


function displayArray(arr) {
    return arr.forEach((item)=>{
        console.log(item);
    });
}
displayArray(classroom);



function display(array) {
    array.forEach(item => {
        document.write(`<p>${item.name},${item.seats},${item.faculty}</p>`)
    });
}

display(classroom);