class Form {
    

        constructor() {
          this.button1 = createButton('Harry');
          this.button2 = createButton('Draco');
          this.reset = createButton('Reset');
          this.title = createElement('h1');
          this.image = loadImage("formBg.jpg");
        }
        hide(){
           this.button1.hide();
           this.button2.hide();
        }
      
        display(){
          image(this.image, -25, -20, 1375, 620);
          this.title.html("Quidditch");
          this.title.position(displayWidth/2 - 100, 0);
      
          this.button1.position(displayWidth/2 - 100, displayHeight/2);
          this.button2.position(displayWidth/2, displayHeight/2);
          this.reset.position(displayWidth - 100, displayHeight/2 + 190);
      
           this.button1.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            //player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           
          });

          this.button2.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            //player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           
          });
      
            this.reset.mousePressed(()=> {
              player.updateCount(0);
              game.update(0);
          }) 
        }
      }
      
