function Selfy(posx, posy, sizew, sizeh, file)
{
    this.component = new P5component(posx, posy, sizew, sizeh);

    this.image_file = loadImage(file);
    this.specs = { left_eye : [0,0,0,0], right_eye : [0,0,0,0] };

    this.left_eye =
    {
        x : 0,
        y : 0,
        w : 0,
        h : 0,
        pupil : { x : 0, y : 0 }
    };

    this.right_eye =
    {
        x : 0,
        y : 0,
        w : 0,
        h : 0,
        pupil : { x : 0,  y : 0 }
    };

    this.loadJSON = function(file)
    {
        require([file], data=> {this.specs = data.specs; this.setupEyes()});
    }

    this.setupEyes = function()
    {
        this.left_eye = { 
            x : Number(this.specs.left_eye[0])*this.component.width,
            y : Number(this.specs.left_eye[1])*this.component.height,
            w : Number(this.specs.left_eye[2])*this.component.width,
            h : Number(this.specs.left_eye[3])*this.component.height,
            pupil : { 
                x : Number(this.specs.left_eye[0])*this.component.width, 
                y : Number(this.specs.left_eye[1])*this.component.height 
            }
        };

        this.right_eye = { 
            x : Number(this.specs.right_eye[0])*this.component.width,
            y : Number(this.specs.right_eye[1])*this.component.height,
            w : Number(this.specs.right_eye[2])*this.component.width,
            h : Number(this.specs.right_eye[3])*this.component.height,
            pupil : { 
                x : Number(this.specs.right_eye[0])*this.component.width, 
                y : Number(this.specs.right_eye[1])*this.component.height 
            }
        };
    }

    this.setPosition = function(atx, aty)
    {
        this.component.setPosition(atx, aty);
    }

    this.move = function(dx, dy)
    {
        this.component.move(dx, dy);
    }

    /**
     * 
     * @param { Number } px x-coord of the point to follow
     * @param { Number } py y-coord of the point to follow
     */
    this.follow = function(px, py)
    {
        thisCompo = this.component;
        let controlEye = function (eye)
        {
            actualPos = { x: eye.x + thisCompo.x, y: eye.y + thisCompo.y };
            if(isInEllipse(px, py, eye.w/2, eye.h/2, actualPos.x, actualPos.y))
            {
                eye.pupil.x = px - thisCompo.x;
                eye.pupil.y = py - thisCompo.y; 
            } else
            {
                let [aLine, bLine] = getLineCoef(px, py, actualPos.x, actualPos.y);
                let limiter = 0.6;
                let target = intersectionLineEllipse(aLine, bLine, actualPos.x, actualPos.y, limiter*eye.w/2, limiter*eye.h/2);
                if(dist(target[0][0], target[0][1], px, py) > dist(target[1][0], target[1][1], px, py))
                {
                    eye.pupil.x = target[1][0] - thisCompo.x;
                    eye.pupil.y = target[1][1] - thisCompo.y;
                } else
                {
                    eye.pupil.x = target[0][0] - thisCompo.x;
                    eye.pupil.y = target[0][1] - thisCompo.y;   
                }
            }
        }
        try
        {
            controlEye(this.right_eye); 
        } catch(err) {
            console.log(err.message);
        }
        try
        {
            controlEye(this.left_eye);
        } catch(err) {
            console.log(err.message);
        }
    }

    this.show = function()
    {
        // left eye ball
        noStroke();
        fill(255,255,255);
        ellipse(this.left_eye.x+this.component.x, this.left_eye.y+this.component.y, this.left_eye.w, this.left_eye.h);
        noFill();

        // left eye iris
        stroke(113,58,38);
        strokeWeight(this.specs.left_eye[3]*this.component.width);
        point(this.left_eye.pupil.x+this.component.x, this.left_eye.pupil.y+this.component.y);
        // left eye pupil
        stroke(0,0,0);
        strokeWeight(this.specs.left_eye[3]*this.component.width*.5);
        point(this.left_eye.pupil.x+this.component.x, this.left_eye.pupil.y+this.component.y);


        // right eye ball
        noStroke();
        fill(255,255,255);
        ellipse(this.right_eye.x+this.component.x, this.right_eye.y+this.component.y, this.right_eye.w, this.right_eye.h);
        noFill();

        // right eye iris
        stroke(113,58,38);
        strokeWeight(this.specs.right_eye[3]*this.component.width);
        point(this.right_eye.pupil.x+this.component.x, this.right_eye.pupil.y+this.component.y);
        // right eye pupil
        stroke(0,0,0);
        strokeWeight(this.specs.right_eye[3]*this.component.width*.5);
        point(this.right_eye.pupil.x+this.component.x, this.right_eye.pupil.y+this.component.y);
        
        image(this.image_file, this.component.x, this.component.y, this.component.width, this.component.height);

    }

}