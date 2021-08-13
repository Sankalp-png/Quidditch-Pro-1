class Game {
  constructor(){

  }
 //there are two types of functions- getters and setters;
 //this is a getter function
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  //this is a setter function
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

    }

    harry = createSprite(100,200);
    harry.addImage("Harry", harryImg);
    draco = createSprite(300,200);
    draco.addImage("Draco", dracoImg);
    players = [harry, draco];

  }

  play(){
    
    
    Player.getPlayersInfo();

    player.getPlayersAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(ciel, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

    

      //x and y position of the cars
      var x = 175 ;
      var y;

      // this (in) is called for each loop
      //The for/in statement loops through the properties of an object.
      //The block of code inside the loop will be executed once for each property.

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("tomato");
          ellipse(x, y, 60, 60);

          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
      Player.updatePlayersAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
