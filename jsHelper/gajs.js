function Canvas(id) {
  try {
    this._canvas = document.getElementById(id);
    this._2Dcontext = this._canvas.getContext("2d");
    if(this._canvas.nodeName != 'CANVAS'){
      console.error("Invalide Canvas element Id pass :"+ id);
    }else{
      console.log("setup canvas :"+ id);
    }
  }catch(error){

    console.log(error);

  }


}

Canvas.prototype.add = function (element) {
  try {
    if (element.tag == "line") {
      this._2Dcontext.moveTo(element._startPoint.x,element._startPoint.y);
      this._2Dcontext.lineTo(element._endPoint.x,element._endPoint.y);
      this._2Dcontext.stroke();
    }else if (element.tag == "circle") {
      this._2Dcontext.beginPath();
      this._2Dcontext.arc(element._centerPint.x,element._centerPint.y,element._radius, 0, 2 * Math.PI);
      this._2Dcontext.stroke();
      if(element.emptyContext != null){
        emptyContextConfig(this._2Dcontext,element.emptyContext);
      }
    }
    element._2Dcontext = this._2Dcontext;
  } catch (error) {
    console.log(error);
  }


};
//line
function Line(point_start,point_end) {
  this.tag ="line"
  this._startPoint = point_start
  this._endPoint = point_end
}

//end circle
//circle
function Circle(point_center,radius) {
  this.tag ="circle";
  this.centerPint = point_center;
  this.radius = radius;
  this.emptyContext = new Object();


}

Object.defineProperty(Circle.prototype, "centerPint", {
    get : function(){ return this.centerPint;},
    set: function(center){   this._centerPint = center;}
});
Object.defineProperty(Circle.prototype, "radius", {
    get : function(){ return this.radius;},
    set: function(radius){   this._radius = radius;}
});
Object.defineProperty(Circle.prototype, "fillColor", {
    get : function(){ return this.centerPint;},
    set: function(color){
      console.log(this.name);
        this._fillColor = color;
        if(this._2Dcontext == null) {
          this.emptyContext.fillColor = color;
        }else{
          this._2Dcontext.fillStyle = color;
          this._2Dcontext.fill();
        }

      }
});
//end circle

function Point(_x,_y) {
  return {x:_x,y:_y}
}
//emptyContext config cuntion
function emptyContextConfig(context,emptyContext){

  if(emptyContext.fillColor != null){

      context.fillStyle = emptyContext.fillColor
      context.fill();

  }

}
