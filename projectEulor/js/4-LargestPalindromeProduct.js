// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143

//  判断是否是回文数
function isPalindrome(product) {
	var product = product.toString()
	var reverse = product.split('').reverse().join('')
	console.log(reverse)
	var product = parseInt(product)
	var reverse = parseInt(reverse)
	if(product == reverse){
		console.log("你是回文数吧")
	}
}

// 判断某个范围内的回文数
var temp = []
var result = 0
for(var i = 100;i<1000;i++){
	for (var j = 100; j < 1000; j++) {
		var product = i * j
		var product = product.toString()
		var reverse = product.split('').reverse().join('')
		var product = parseInt(product)
		var reverse = parseInt(reverse)
		if(product == reverse){
			if(product > result){
				result = product
			}
		}
	}
}
console.log(result)















