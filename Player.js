class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  
  //static function  is a public bathroom and astatic(normal) are private home bathrooms;                   
  static getPlayersInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
//getter
  getPlayersAtEnd() {
    var playersAtEndRef = database.ref('playersAtEnd');
      playersAtEndRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }
//setter 
//setter function always take arguments;
  static updatePlayersAtEnd(rank) {
    database.ref('/').update({
      playersAtEnd: rank
    });
  }
}
