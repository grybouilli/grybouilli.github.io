//import selfy from './images/selfy.json' assert { type: 'json' };
const selfy = require(['json!./images/selfy.json']);

function Selfy(posx, posy, sizew, sizeh, file)
{
    this.component = new P5component(posx, posy, sizew, sizeh);

    this.image_file = loadImage(file);
    this.properties = selfy;

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
        image(this.image_file, this.component.x, this.component.y, this.component.width, this.component.height);
    }

}