// //part 1

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
  
const createPoints = function(count, canvasWidth, canvasHeight) {

  	const rand = function(num) {
		  return Math.floor(Math.random() * num) + 1;
    };
	
  canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	

  	const array = [];
    
    
  const func = function(num){
    if (num >= count){
      return; 
    }
	  const guyn = [
      "green",
      "red",
      "yellow",
      "purple",
      "crimson"
    ];
  
  	const something = {
		  x: rand(canvas.width - 15),
		  y: rand(canvas.height - 15),
		  width: 15,
      height: 15,
      xDelta: 1,
      yDelta: 1,
      color: guyn[rand(guyn.length-1)]
    };

       array[num] = something; 
       
       return func(num+1);
  };
  
    return func(0);   
    
};      
  createPoints(60, 800, 400);


// //part2

  
  
  const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  };
      const BadGuy = [];
  const colorsArray= ['red','blue','green', 'orange','pink', 'brown', 'aqua','BlueViolet ','BurlyWood ','Chartreuse','Chocolate','Crimson','LawnGreen'];
  
  const createPoint = function(count, canvasWidth, canvasHeight) {
    const recursion = function(num) {
      if (num < 1) {return}
      BadGuy.push({
        x: rand(canvasWidth - 100),
        y: rand(canvasHeight - 100),
        width: 100,
        height: 100,
        xDelta: 5,
        yDelta: 5,
        color: colorsArray[rand(13)-1]
      });
      recursion(num-1)
    }
    recursion(count);
    return BadGuy;
  };
  
  const points = createPoint(11, canvas.width, canvas.height);	
  
  
  const draw = function() {
    context.clearRect(0,0, canvas.width, canvas.height);
    const drawevery = function(array, i) {
      if(i === array.length) {
        return;
      }
      
      context.fillStyle = array[i].color;
      context.fillRect(array[i].x, array[i].y, array[i].width, array[i].height);
      drawevery(array, i+1);
    };
    drawevery(points, 0);
  };
  
  const updateData = function() {
    const updateEvery = function(array, m){
      if(m === array.length) {
        return;
      }
      
      if(array[m].x >= canvas.width-array[m].width || array[m].x<=0){
        array[m].xDelta = -array[m].xDelta;
		array[m].color = colorsArray[rand(13)-1];
      }
      
      if(array[m].y >= canvas.height-array[m].height || array[m].y<=0){
        array[m].yDelta = -array[m].yDelta;
		array[m].color = colorsArray[rand(13)-1];
      }
      
      array[m].x = array[m].x + array[m].xDelta;
      array[m].y = array[m].y + array[m].yDelta;
      updateEvery(array, m+1);
    };
    updateEvery(points, 0)
  };
  
  const loop = function(){
    
    draw();
    updateData();
    requestAnimationFrame(loop);
  };
  
  loop();



  //part 3

  

const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
    const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  };
  canvas.width = 1000;
  canvas.height = 600;
    const backImage = new Image();
  backImage.src = 'https://s3.envato.com/files/170596024/City_Background_Ny_4267x2133.jpg';
  
  const marioImg = new Image();
  marioImg.src = 'https://www.iskconbangalore.org/blog/wp-content/uploads/2015/11/cartone-cow-1.png';
  
  const knikImg = new Image() ;
  knikImg.src = 'https://images2.storyjumper.com/transcoder.png?trim&id=7h-xk3r8q5aax-5925x6jaw&maxw=256&maxh=256';
  
  const gameoverImg = new Image();
  gameoverImg.src = 'http://zynga2-a.akamaihd.net/farmville/assets/hashed/assets/decorations/094ccaba13165729e464d2f570e57238.png';
  
   const floorYknik = canvas.height - 146;
	const floorY = canvas.height - 162;
  
const gameData = {
    hero: {
      x: 10,
      y: floorY,
      img: marioImg,
      width: 145,
      height: 115,
      xD: 0,
      yD: 0
    },
    knikArray: [],
	killed: false
  };
	const forEach = function(arr, func) {
    const helper = function(idx) {
      if(idx === arr.length)
        return;
      
      func(arr[idx]);
      helper(idx + 1); 
    };
    helper(0);
  };
   	 const hero = gameData.hero;
 	 const draw = function() {  
		 ctx.clearRect(0,0, canvas.width, canvas.height);
		 ctx.drawImage(backImage, 0, 0, canvas.width, canvas.height);
		 ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height);
		 forEach(gameData.knikArray, function(knik) {
			 ctx.drawImage(knik.img, knik.x, knik.y, knik.width, knik.height);
		 })
  };
  
    const badGuys = function(count) {
    
      const func = function(n) {
		if(n <= 0) {
		  return;
		}
		gameData.knikArray.push({
				x: rand(700) + 180,
				y: floorYknik,
				img: knikImg,
				width:100,
				height:100,
				xDelta: 1,
				yDelta: 1
			  });
		func(n - 1);
      };
      func(count);
  };
badGuys(2)
  const knik = function() {
    //knktiq
    const forEachknik = function(arr, i) {
      if (i >= arr.length) {
        return;
      }
      ctx.drawImage(arr[i].img, arr[i].x, arr[i].y, arr[i].width, arr[i].height);
      forEachknik(arr, i + 1);
      
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backImage, 0, 0, canvas.width, canvas.height);
    //hero
    ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height);
    forEachknik(badGuy, 0);
  };
  
  const update = function() {
  	const hero = gameData.hero;
    if(hero.y <= 300) {
    	hero.yD = -hero.yD;
	} else if (hero.y > floorY) {
		hero.y = floorY;
		hero.yD = 0;
	}
	hero.y = hero.y - hero.yD;
	forEach(gameData.knikArray, function(knik) {
		
      if(knik.x+knik.width>=canvas.width || knik.x <= 0) {
        knik.xDelta = -1*knik.xDelta;
      }
      knik.x +=knik.xDelta;
	  if(knik.x < hero.x + hero.width && hero.x + knik.width > knik.x) {
        alert("You loser :((");
		  gameData.killed = true;
	  }
	})
  }
  
  
  const loop = function() {
	if(gameData.killed) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(gameoverImg, 0, 0, canvas.width, canvas.height);
	} else {
		draw();
		update();
    	requestAnimationFrame(loop);
	}

  };
  
  loop();
  
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;
  
  
  
document.addEventListener('keydown', function(event) {
    const hero = gameData.hero;
    if(event.keyCode === rightKey) {
      hero.x = hero.x + 15;
      if(hero.x >= canvas.width) {
        hero.x = 0-hero.width;
      }
    } else if(event.keyCode === leftKey) {
      hero.x = hero.x - 15; 
      if(hero.x <= 0-hero.width) {
        hero.x = canvas.width;
      }     
    } else if (event.keyCode === upKey){
    	hero.yD += 3;
    }
    
  }, false);
