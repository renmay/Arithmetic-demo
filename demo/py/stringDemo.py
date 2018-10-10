# 先让最大值max等于0，如果i大于max就把这个i复制给max

max = 0
for i in range(100):
    if i > max:
        max = i
print(max)