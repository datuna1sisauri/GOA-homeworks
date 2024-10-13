from turtle import *

speed (7)
width(7)


#we are drawing castles first half
color("orange")
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
forward(90)

penup()
goto(0,0)
pendown()

#now we are drawing castles second half
color("orange")
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
#end of drawing door\
    
penup()
goto(20,90)
pendown()

#now we re drawing windows
right(180)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)


penup()
goto(165,90)
pendown()

color("orange")
left(90)
forward(20)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)



penup()
goto(5,150)
pendown()

right(90)
forward(40)


penup()
goto(160,150)
pendown()

forward(40)

penup()


#end of the work on castle

exitonclick()