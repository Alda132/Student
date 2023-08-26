

 var students = [];
 var student1={

  emer:"emer",
  pike: [23,34,55,68]

 }
 function createStudent(name,pike){
return{ 
    name: name,
    pike: pike
}
   
 };
 var a= createStudent("Artan", [12,50,40,55])
 var b =createStudent("Blerta", [30,50,45,55]) 
 var c = createStudent("Djana", [25,20,40,70])
console.log(a);
console.log(b);
console.log(c);

students.push(a);
students.push(b);
students.push(c);
console.log ("The array students is :" , students);
//Emrat e studenteve.
function afishoNames(){
 var names=[]
for (var i=0; i < students.length; i++ ){

var name = students[i].name;
names.push(name);
}
console.log(names);
}
afishoNames();

// Nr i provimeve 
function examsNumber(){
for (var i=0;i<students.length;i++){
var examNum= students[i].pike.length;

}
console.log (examNum);
}
examsNumber();

function mesatarja(){
//var arrayMes=[]
for (var i=0;i<students.length;i++){
var sum=0;
for (var j=0;j<students[i].pike.length;j++){
sum+=students[i].pike[j]/students[i].pike.length;
}
console.log("Mesatarja e " ,students[i].name," is ",  sum);
   
}
}
mesatarja()

function maxPoints(){
for (var i =0 ;i<students.length;i++){ 

var maxValue = students[i].pike[0];
for (var j=1;j<students[i].pike.length;j++){
  if (maxValue<students[i].pike[j]){

    maxValue=students[i].pike[j];
  }


}
console.log("Vlera max e studentit :", students[i].name ,"eshte ", maxValue);
}

}

maxPoints();


function minPoints(){
    for (var i =0 ;i<students.length;i++){ 
    
    var minValue = students[i].pike[0];
    for (var j=1;j<students[i].pike.length;j++){
      if (minValue>students[i].pike[j]){
    
        minValue=students[i].pike[j];
      }
    
    }
    console.log("Vlera min e studentit :", students[i].name ,"eshte ", minValue);
    }
    
    }
    
    minPoints();
    


function avarageGroup(){
  var array=[];
for (var i=0;i<students.length;i++){
  

  var sum=0;
  for (var j=0;j<students[i].pike.length;j++){
  sum+=students[i].pike[j]/students[i].pike.length;
  
  }
  array.push(sum);
  var studentNr =students.length;
}


  console.log( "Vektori me 3 mesataret" ,array);
  console.log ("Numri i studenteve eshte : " ,studentNr  )
  var sum1=0;
  for (z=0; z<array.length;z++){
  sum1+= array[z];

  }
 var average = sum1/studentNr;
console.log("Mesatarja eshte " , average);

}

avarageGroup();








