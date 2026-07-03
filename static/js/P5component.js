function P5component(posx, posy, sizew, sizeh)
{
    this.x = posx;
    this.y = posy;

    this.width = sizew;
    this.height = sizeh;

    this.setPosition = function(atx, aty)
    {
        this.x = atx;
        this.y = aty;
    }

    this.move = function(dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }
}