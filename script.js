
/*

Part I

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

*/

// refactor 
const filterOutOdds = (...nums)=>{
    return nums.filter((num) => num % 2 === 0);
}




/* 
Part II
*/

function findMin(...nums){
    const arr = [...nums]; 
    return arr.reduce((a,b)=> (a > b) ? b : a); 
}

/* 
Part III
*/

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}


/*
Part IV
*/

function doubleAndReturnArgs(arr, ...rest){
    return [...arr, ...rest.map((b)=>b*2)]; 
}


/* 
Part V
*/

const removeRandom = (items) =>{
    const i = Math.floor(Math.random() * items.length); 
    const clone =  items.slice();
    clone.splice(i, 1); 
    return clone;
}
const extend = (array1, array2) =>{
    return array1.concat(array2); 
}

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}; 
}

const removeKey = (obj, key) => {
    const obj2 = {...obj}; 
    delete obj2[key]; 
    return obj2;
}

const combine = (obj1, obj2) =>{
    return {...obj1, ...obj2}; 
}

const update = (obj, key, val) => {
    return {...obj, [key]: val};
}
