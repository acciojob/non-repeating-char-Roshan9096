function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map();
	for(let x of str){
		let val = map.has(x)?map.get(x)?0;
		map.set(x,val+1)
	}
	for(let x of str){
		if(map.get(x)==2)return x;
	}
	return null;
}
// aa
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
