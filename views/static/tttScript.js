var player = 0;
function MakeMove(button) {
    if (player % 2 == 0) {
        if (button.innerHTML != "X") {
            button.innerHTML = "O";
            button.style.color = 'red';
        }
        else return;
    }
    else {
        if (button.innerHTML != "O")
            button.innerHTML = "X";
        else return;
    }
    player = (player + 1) % 2;
}