from turtle import *

def squeare(x,y):
    penup()
    goto(x,y)
    pendown()

    for i in range(4):
        forward(200)
        left(90)

squeare(100,100)
squeare(-300,100)
squeare(-300,-300)
squeare(100,-300)


exitonclick()