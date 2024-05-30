// Question 1:

let obj = { name: 'Sample Object' };
console.log(obj.toString());  // Normally works

// Set prototype to null
obj.__proto__ = null;
try {
    console.log(obj.toString()); 
} catch (e) {
    console.log("Error:", e.message);
}