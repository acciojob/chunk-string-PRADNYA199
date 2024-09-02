function stringChop(str, size) {
  // your code here
	if (str === null || typeof str !== 'string' || size <= 0) {
    return [];
  }

  // Initialize an empty array to hold the chunks
  let chunks = [];

  // Loop over the string, incrementing by the chunk size
  for (let i = 0; i < str.length; i += size) {
    // Push the current chunk into the chunks array
    chunks.push(str.slice(i, i + size));
  }

  // Return the array of chunks
  return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
