from turtle import *
width(4)
speed(9)




color("brown")
begin_fill()
forward(200)
left(90)
forward(200)
left(45)
forward(140)
left(90)
forward(140)
left(45)
forward(200)
end_fill()

penup()
goto(70,0)
pendown()

color("light blue")
begin_fill()
left(180)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(20, 140)
pendown()
 
color("white")
begin_fill()
right(180)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()

penup()
goto(140, 140)
pendown()

color("white")
begin_fill()
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()

penup()
goto(310 , 0)
pendown()


color("brown")
begin_fill()
right(90)
forward(250)
right(90)
forward(40)
right(90)
forward(250)
right(90)
forward(40)
end_fill()

penup()
goto(330 , 340)
pendown()

color("green")
begin_fill()
circle(90 , 360)
end_fill()


exitonclick()