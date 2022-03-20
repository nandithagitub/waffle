array_1 = ["pen","binoculars","pig","ribbon","screw driver","sky scraper","tennis bat","shirt","popsicle","candy"];
var random_number = Math.floor((Math.random()*array_1.length) + 1); 
Element_of_array = array_1[random_number];
console.log(array_1[random_number]);
sketch = array_1[random_number];
document.getElementById("sketch").innerHTML = "Sketch To be drawn :"  + sketch;
var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;

//118

function updateCanvas() {
    background("white");
    random_number = Math.floor((Math.random() * array_1.length) + 1);
    console.log(array_1[random_number]);
    sketch = array_1[random_number];
    document.getElementById("sketch").innerHTML = "Sketch To be drawn :" + sketch;
}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}


function draw(){
check_sketch();
if(drawn_sketch == sketch){
    answer_holder = "set";
    document.getElementById("score").innerHTML = "Score :" + score;
    score++;
}
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer :" + timer_counter;
    console.log(timer_counter);
    if(timer_counter > 400){
        timer_counter = 0;
        timer_check = "completed";
    }
        if(timer_check == "completed" || answer_holder == "set"){
         timer_check = 0;
         answer_holder = "";
         updateCanvas();
        }
}

