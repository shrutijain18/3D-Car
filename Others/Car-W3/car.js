function setup()
{
	createCanvas(1700,800,WEBGL)
	//cam=createCapture(VIDEO);
	//cam.size(320,240);
	//cam.hide();
}
/*function shape()
{
contain= document.craeteElement('div');
docment.body.appendChild(contain);
camera= new THREE.Perspective Camera(50, window.innerWidth/window.innerHeight,1,1000);
camera.position.set(0,150,150);
*/
function draw()
{
let dx= mouseX-width/2;
let dy= mouseY-height/2;
let v= createVector(dx,dy,0);
//let camX= map(mouseX, 0, width, -200,0);
//camera(camX,0,(height/2)/tan(PI/6),0,0,0,0);
//v.div(100);

 ambientLight(255,255,255,v);
  background("#fae");
  
	//amera(0,0,sin(frameCount*0.01)*100,0,0,0,0,1,0);
		translate(0,0,mouseY);
	  


//rect(0,0,400,100);

//rect(200,-100,200,100);
//triangle(0,0,10,10,10,20);
//ellipse(70,70,150,150);
//shearX(PI/4);

	//translate(10,10,10);
rotateX(millis()/1000);
     rotateY(millis()/1000);
      rotateZ(millis()/1000);
scale(0.5, 1.3);
normalMaterial();
//texture(cam);
box(300,100,75);
translate(-100, 100, 0);
box(500,100,100);
translate(150, 65, 0);
sphere(70);
translate(-300, -10, 0);
sphere(70);

/*translate(0,200,0);
rotateX(HALF_PI);
//ambientMaterial();
PLANE(200,200);
 //translate(100, -50, 0);*/
}
