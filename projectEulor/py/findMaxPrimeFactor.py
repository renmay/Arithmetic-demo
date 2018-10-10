# Largest prime factor
# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?
# 这个算法比较难


def findMaxPrimeFactor(n):
    m = 1
    i = 2
    while i <= n:
        if n % i == 0:
            n = n / i
            m = i
            while n % i == 0:
                n = n / i
        i = i+1
    return m


result = findMaxPrimeFactor(20)
print(result)
