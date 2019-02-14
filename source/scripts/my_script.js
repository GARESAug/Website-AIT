var value_left = 0;
var state_move = 0;
var go_return = 1;
function init() {
    document.getElementById("test").innerHTML = "init says Hi!";
}
function test_button() {

    /* var my_test_div = document.getElementById("test");
     my_test_div.innerHTML = "Button clicked!";
     my_test_div.style.backgroundColor = "green";
     alert("Clicked");*/
    setInterval(movesquare, 50);
}
function movesquare() {
    document.getElementById("car").style.left = value_left + "px";
    if (go_return <= 3) {
        if (state_move == 0) {
            value_left = value_left + 50;
            if (value_left >= 500) {
                state_move = 1;
            }
        }
        else {
            value_left = value_left - 50;
            if (value_left <= 0) {
                state_move = 0;
                go_return = go_return + 1;
            }
        }
    }

}