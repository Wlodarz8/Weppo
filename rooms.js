class room{
    name;
    room_ID;
    ID_first;
    ID_second;
    current_game;
    players;
    ttt;

    constructor(ttt,name,id) {
        this.name = name;
        this.ttt = ttt;
        this.room_ID = id;
        this.players = 0;
    }

    newgame(){
        this.current_game = new this.ttt;
    }
    
    getstate(){
        return {
            board: this.current_game.getstate().board(),
            name: "Tic Tac Toe"
        };
    }
}

exports.room = room;
