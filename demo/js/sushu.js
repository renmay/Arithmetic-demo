// 求出1000以内的素数（除了能被1和本身整除，不能被其他整数整除的数）

for (var i = 2; i< 1000; i++){
    if(isPrime(i)){
        console.log(i)
    }
}


function isPrime(n){
    temp = 0
    for(var j = 2; j < n; j++){
        if(n % j === 0){
            temp = 1
        }
    }
    if(temp === 0){
        return true
    }
    return false
}
