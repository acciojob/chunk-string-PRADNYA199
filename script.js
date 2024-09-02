function stringChop(str, size) {
  // your code here
	for(str==NULL || str!=='string' || size<=0 )
		{
		return [];
		}
	let chunk=[];
	for(let i=0;i<str.length;i=+size)
		{
			chunk.push(str.slice(i,i+size))
		}
	return chunk;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
