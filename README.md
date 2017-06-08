# gajs
game development java script helper library all about html 5 canvas works

## syntax

```

var canvas = new Canvas("canvasid");

var line = new Line(Point(0,0),Point(100,50));
line._startPoint = Point(10,10);
canvas.add(line);




line._startPoint = Point(40,40);
var circle = new Circle(Point(40,20),20);
var circle2 = new Circle(Point(40,20),20);
circle.centerPint = Point(40,40);
circle.name = "circle";

circle2.name = "circle2";
console.log(circle);
circle.fillColor = "red";
console.log(circle2);
circle2.fillColor = "blue";

canvas.add(circle);

canvas.add(circle2);


```
