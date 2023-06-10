function distance(p1, p2)
{
    return sqrt((p2.x-p1.x)**2 + (p2.y-p1.y)**2);
}

function distance(x1, y1, x2, y2)
{
    return sqrt((x2-x1)**2 + (y2-y1)**2);
}

function inCircle(cx, cy, radius, px, py)
{
    return  cx - radius <= px && px <= cx + radius && cy - radius <= py && py <= cy + radius;
}

function getLineEquation(x1, y1, x2, y2)
{
    let a = (y2-y1)/(x2-x1);
    return (x) => a*x + y1 - a * x1;
}

function getLineCoef(x1, y1, x2, y2)
{
    let a = (y2-y1)/(x2-x1);
    let b =  y1 - a * x1;
    return [a,b];
}

/**
 * @brief gives intersection point coords between line of equation y=ax+b and ellipse of equation ((x-x0)/w)^2+ ((y-y0)/h)^2 = 1.
 * @param { Number } a a coef of line equation
 * @param { Number } b b coef of line equation
 * @param { Number } x0 x coord of ellipse center
 * @param { Number } y0 y coord of ellipse center
 * @param { Number } w ellipse semi large axis
 * @param { Number } h ellipse semi short axis
 */
function intersectionLineEllipse(a, b, x0, y0, w, h)
{
    // problem is equivalent to solving Ax^2 + Bx + C = 0
    let A = a**2 * w**2 + h**2;
    let B = -2 * x0 * h**2 + 2 * a * w**2 * (b-y0);
    //(b2 h2 + a2 *( k2 + B2 - 2 B k - b2))
    let C = h**2 *x0**2 + w**2 * (y0**2 + b **2 - 2*b*y0-h**2);

    let delta = B**2 - 4*A*C;
    if( delta >= 0)
    {
        let x = [ (-B-Math.sqrt(delta))/(2*A), (-B+Math.sqrt(delta))/(2*A)];
        let y = [a * x[0] + b, a * x[1] + b];

        return [
            [x[0], y[0]],
            [x[1], y[1]],
        ];
    } else
    {
        throw new Error("No intersection");
    }
}

function isInEllipse(px, py, a, b, u, v)
{
    return (px - u)**2 / a**2 + (py - v)**2 / b**2 <= 1.;
}