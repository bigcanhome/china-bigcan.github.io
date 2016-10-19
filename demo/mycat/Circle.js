
function Circle(){
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        this._circleType = type;
        switch (type){
            case Circle.TYPE_UNSELECTED:
                this.setColor("#cccccc");
                break;
            case Circle.TYPE_SELECTED:
                this.setColor("#ff6600");
                break;
            case Circle.TYPE_CAT:
                this.setColor("#0000ff");
                break;
        }
    }

    this.setColor = function (colorString){
        this.graphics.clear();
        this.graphics.beginFill(colorString).drawCircle(0,0,25).endFill();
    }
    this.getCircleType = function(){
        return this._circleType;
    }
    this.setCircleType(1);
}
Circle.prototype = new createjs.Shape();
Circle.TYPE_UNSELECTED = 1;
Circle.TYPE_SELECTED = 2;
Circle.TYPE_CAT = 3;
