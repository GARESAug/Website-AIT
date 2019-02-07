function init() {
    document.getElementById("test").innerHTML = "init says Hi!";
}
function test_button() {
    
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML = "Button clicked!";
    my_test_div.style.backgroundColor = "green";
    alert("Clicked");
}