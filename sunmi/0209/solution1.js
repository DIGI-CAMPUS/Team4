let result = '';
for(let i = 1; i <= 20; i++){
	for(let j = 1; j <= i; j++){
    	result += '*';
        document.write("<div>")
        document.write(result)
    }
    result += '\n';
    document.write("</div>")
}



// let result = '';

// for(let i = 1; i <= 5; i++){
// 	for(let j = 1; j <= i; j++){
//     	result += '*';
//     }
//   result += '\n';
// }

// console.log(result);