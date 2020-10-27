let stops = [];
let Amount = 5;
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < Amount; i++){
    stops.push([round(random(0,width)),round(random(0,height))]);
  }

  background(0);
  console.log(stops);
  let test = ['a','b','c','d'];
  for (let i = 0; i< test.length; i++){
    console.log(move(test,i,0))
  }
}
let possibleRoutes = Amount*(Amount-1);
let record = Infinity;
let order = [];
let index = 0
let num = 0
function draw() {
  order = 0;

  for (stop of stops){
    ellipse(stop[0],stop[1],10,10);
  }

}
function move(list,times,index){
  

}
