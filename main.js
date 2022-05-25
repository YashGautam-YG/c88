

ball_y=0
ball_x=0
hole_y=400
hole_x=800



block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromurl("ball.png", function (Img) {
		ball_obj= Img;
		ball_obj.sacletowidth(50);
		ball_obj.scaletoheight(50);
		ball_obj.set({
		top:ball_y,
		bottom:ball_x
		});
	   canvas.add(hole_obj)
		});
	new_image();
}

function new_image()
{
	fabric.image.fromurl("ball.png", function (Img) {
    ball_obj= Img;
	ball_obj.sacletowidth(50);
	ball_obj.scaletoheight(50);
	ball_obj.set({
    top:ball_y,
	bottom:ball_x
	});
   canvas.add(ball_obj)
	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	ball_y=0
	ball_x=0
	hole_y=400
	hole_x=800
	
	
else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y<=450){
			ball_y=ball_y+block_image_height;
			console.log("block image height="+block_image_height);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=450){
			ball_y=ball_y+block_image_height;
			console.log("block image height="+block_image_height);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	function left()
	{
		if(ball_x >5)
		{
			if(ball_x<=450){
				ball_y=ball_y+block_image_height;
				console.log("block image height="+block_image_height);
				canvas.remove(ball_obj);
				new_image();
			}
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ball_x<=1050){
				ball_y=ball_y+block_image_height;
				console.log("block image height="+block_image_height);
				canvas.remove(ball_obj);
				new_image();
			}
		}
	}
	
}

