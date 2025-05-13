// function stringChop(str, size) {
//   // your code here
// }

// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));

function chunkString(str, chunkLength) {
    // Handle edge case: if the input string is null, return an empty array
    if (str === null) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];

    // Loop through the string and create chunks
    for (let i = 0; i < str.length; i += chunkLength) {
        // Use substring to get the chunk of the specified length
        chunks.push(str.substring(i, i + chunkLength));
    }

    return chunks;
}

// Example usage:
console.log(chunkString("Hello, world!", 5)); 
console.log(chunkString("12345", 2));          
console.log(chunkString("abc", 5));            
console.log(chunkString(null, 3));            
