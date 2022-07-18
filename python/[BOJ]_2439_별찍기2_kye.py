user_input = input("몇 번째 줄까지 출력할까요?")
line = int(user_input)

for i in range(1, line+1):
        print(" "*(line-i) + "*"*i)
