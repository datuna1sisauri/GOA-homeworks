from turtle import *

speed (7)
width(7)



color("orange")
#we are drawing castles first half
forward(200)
left(90)
forward(270)
left(30)
forward(40)
left(120)
forward(40)
left(30)
forward(120)
right(140)
forward(95)


penup()
goto(0,0)
pendown()


color("orange")
#now we are drawing castles second half
right(40)
forward(270)
right(30)
forward(40)
right(120)
forward(40)
right(30)
forward(120)
left(140)
forward(95)
#end of drawing castle

penup()
goto(70,0)
pendown()

#now we need to draw a door
left(40)
forward(80)
right(90)
forward(60)
right(90)
forward(80)
#end of drawing door

penup()
goto(20,90)
pendown()

color("orange")
#now we need windows
right(180)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)


penup()
goto(165,90)
pendown()

color("orange")

forward(20)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(20)
#end of the work on castle


exitonclick()