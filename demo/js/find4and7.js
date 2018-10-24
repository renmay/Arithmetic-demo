// 求出个位数是4并且能被7整除的所有三位数的和
var sum = 0
for (var i = 100; i < 1000;i++){
    if(i % 10 == 4 && i % 7 == 0){
        sum = sum +i
        i++
        console.log(sum)
    }
}

// var i = 100
// var sum = 0
// do {
// 	if(i % 10 == 4 && i % 7 == 0){
// 		sum = sum +i
// 		i++
// 	}
// }while(i< 1000)
// console.log(sum)
