function Selfy(posx, posy, sizew, sizeh, file)
{
    this.component = new P5component(posx, posy, sizew, sizeh);

    this.image_file = loadImage(file);
    this.specs = { left_eye : [0,0,0,0], right_eye : [0,0,0,0] };

    this.loadJSON = function(file)
    {
        require([file], data=> {this.specs = data.specs});
    }

    this.setPosition = function(atx, aty)
    {
        this.component.setPosition(atx, aty);
    }

    this.move = function(dx, dy)
    {
        this.component.move(dx, dy);
    }

    this.show = function()
    {
        let left_eye = { 
            x : Number(this.specs.left_eye[0])*this.component.width,
            y : Number(this.specs.left_eye[1])*this.component.height,
            w : Number(this.specs.left_eye[2])*this.component.width,
            height : Number(this.specs.left_eye[3])*this.component.height
        };

        let right_eye = { 
            x : Number(this.specs.right_eye[0])*this.component.width,
            y : Number(this.specs.right_eye[1])*this.component.height,
            w : Number(this.specs.right_eye[2])*this.component.width,
            height : Number(this.specs.right_eye[3])*this.component.height
        };

        // left eye pupil
        stroke(255,255,255);
        ellipse(left_eye.x, left_eye.y, left_eye.w, left_eye.h);
        
        // left eye iris
        stroke(113,58,38);
        strokeWeight(this.specs.left_eye[3]*this.component.width);
        point(left_eye.x, left_eye.y);


        // right eye pupil
        stroke(255,255,255);
        ellipse(right_eye.x, right_eye.y, right_eye.w, right_eye.h);
        
        // right eye iris
        stroke(113,58,38);
        strokeWeight(this.specs.right_eye[3]*this.component.width);
        point(right_eye.x, right_eye.y);
        
        image(this.image_file, this.component.x, this.component.y, this.component.width, this.component.height);
    }

}