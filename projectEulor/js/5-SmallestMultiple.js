// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// 2520是最小的数，可以除以1到10的每个数，没有余数。
// 能被1到20的数整除的最小正数是多少?

// 是否满足被1-20整除的条件
function isStisfy(n) {
	for (var i = 1;i <= 20;i++){
		if(n % i == 0){
			continue
		}else{
			return false
		}
	}
	return true
}

// 这是我的薄弱点以及需要掌握的重点

// 方法一：使用while循环
n = 1
while(true){
	if (isStisfy(n)){
		console.log(n)
		break
		// 如果找到满足条件的就终止while循环
	}
	//  没有找到满足条件的就继续找，直到找到满足条件的那个为止
	n = n+1
}

// 方法二：使用for循环，由于不知道n的范围那就先假设一个n的范围，如果在这个范围还没找打那就继续扩大范围来找符合条件的那个数字
for (var n = 1;n < 1000000;n++){
	if(isStisfy(n)){
		console.log(n)
		break
		// 找到满足条件的那一个就终止这个循环
	}
}