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
  try {
    this._2Dcontext = canvas._canvas.getContext("2d");
  } catch (error) {
    console.log(error);
  }
}

Layer2D.prototype.add = function (element) {
  try {
    if (element.tag == "line") {
      this._2Dcontext.moveTo(element._startPoint.x,element._startPoint.y);
      this._2Dcontext.lineTo(element._endPoint.x,element._endPoint.y);
      this._2Dcontext.stroke();
    }
  } catch (error) {
    console.log(error);
  }


};

function Line(point_start,point_end) {
  this.tag ="line"
  this._startPoint = point_start
  this._endPoint = point_end
}


function Point(_x,_y) {
  return {x:_x,y:_y}
}
