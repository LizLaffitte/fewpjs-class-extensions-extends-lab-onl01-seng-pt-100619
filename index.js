// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((runningTotal, side) => runningTotal + side)
    }
}

class Triangle extends Polygon{
    get isValid(){
        this.sides.sort()
        if(this.countSides != 3){
            return false
        } else {
            return this.sides[0] + this.sides[1] > this.sides[2]
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides != 4){
            return false
        } else {
            return this.sides.every( side => side === this.sides[0] )
        }
    }

    get area(){
        return (this.sides[0] ** 2 )
    }
    
}