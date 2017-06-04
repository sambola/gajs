function Canvas(id) {
  try {
    this._canvas = document.getElementById(id);
    if(this._canvas.nodeName != 'CANVAS'){
      console.error("Invalide Canvas element Id pass :"+ id);
    }else{
      console.log("setup canvas :"+ id);
    }
  }catch(error){

    console.log(error);

  }


}

function Layer2D(canvas){
Canvas.prototype.addLayer = function (layer) {
  try {
    this._2Dcontext = canvas._canvas.getContext("2d");

    layer._2Dcontext = this._canvas.getContext("2d");


  } catch (error) {
    console.log(error);
  }
};

function Layer(){
   this._2Dcontext = null;
}

Layer2D.prototype.add = function (element) {


Layer.prototype.add = function (element) {
  try {
    if (element.tag == "line") {
      this._2Dcontext.moveTo(element._startPoint.x,element._startPoint.y);
      this._2Dcontext.lineTo(element._endPoint.x,element._endPoint.y);
      this._2Dcontext.stroke();
    }else if (element.tag == "circle") {
      this._2Dcontext.beginPath();
      this._2Dcontext.arc(element._centerPint.x,element._centerPint.y,element._radius, 0, 2 * Math.PI);
      this._2Dcontext.stroke();
    }
    element._2Dcontext = this._2Dcontext;
  } catch (error) {
    console.log(error);
  }


};

function Line(point_start,point_end) {
  this.tag ="line"
  this._2Dcontext = null;
  this._startPoint = point_start
  this._endPoint = point_end


}




function Circle(point_center,radius) {
  this.tag ="circle"
  this._centerPint = point_center
  this._radius = radius
}


function Point(_x,_y) {
  return {x:_x,y:_y}
}
