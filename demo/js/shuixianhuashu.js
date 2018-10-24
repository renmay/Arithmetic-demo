// 三位数的水仙花数，其中各位数字的立方等于该数本身，变成求出所有有的水仙花数

var i,j,k,n
for ( n = 100; n < 1000 ; n++){
    i = parseInt(n / 100);
    j = parseInt(n / 10 % 10);
    k = parseInt(n % 10);
    if( i* 100 + j*10 + k == i*i*i+ j*j*j + k*k*k ){
        console.log(n)
    }
}
