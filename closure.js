const addTo= (passed)=>{
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