from turtle import *
#we want to paint a house


#step 1: draw a squear 


speed(4)
width(7)


color("green")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#and of squear

#drawing a door

forward(70)
color("brown")
begin_fill()
left(90)
forward(120)  #height of door 
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()


color("blue")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(20,140)
pendown()


color("pink")
begin_fill()
right(150)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)


penup()
goto(135,140)
pendown()


forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
end_fill()

exitonclick()