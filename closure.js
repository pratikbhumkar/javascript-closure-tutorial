const addTo= (passed)=>{
    let nonexistent=5;      
    //On console.dir you will not find "nonexistent" variable. 
    //This is because it would lazy look for the objects it need. 
    //It doesnt need non existent for its functionality and hence will not load.
    const add=(inner)=>{
        return (passed+inner);
    }
    return add;
}

//Open console to see the closure content.
console.dir(addTo(1));
console.dir(addTo(2));

//It will store the values previously passed method to calculate at the next step.
const addTo1= addTo(1);
const addTo2= addTo(2);

//Gets values 1 and 2 from closures.
console.log(addTo1(5));
console.log(addTo2(5));

//It will print 3 because of combination of Lazy loading and closure. 
//By the time it decides to print the value of the index var is 3.
//Can fix it by using let index instead of var index.
for (var index = 0; index < 3; index++) {
    setTimeout(()=>{
        console.log(index)
    }, 1000);
}