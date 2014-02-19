from random import randint


def solver(sn, radix):
    try:
        return int(sn, radix)
    except:
        return -1

tests = [
    ["F0", 16],
    ["1111111111", 2],
    ["255", 7],
    ["IDDQD", 30],
    ["1000", 10],
    ["ASD", 15],
    ["222", 3],
    ["XYZ", 36],
    ["909", 9],
    ["1234567890", 11],
    ["5A6E", 10],
    ["1000000", 31],

]

for n, r in tests:
    ans = solver(n, r)
    print('{{"input": {0},\n"answer": {1}\n}},\n'.format([n, r], ans))


