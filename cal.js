

  var lastoperation = 1;
  var result = 0;
  var type =1 ;
  



$('#one').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "1"
  } 
  else {
    document.getElementById("display").innerHTML += "1"
  };

  type = 0;
});

$('#two').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "2"
  } 
  else {
    document.getElementById("display").innerHTML += "2"
  };

  type = 0;
});

$('#three').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "3"
  } 
  else {
    document.getElementById("display").innerHTML += "3"
  };

  type = 0;
});

$('#four').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "4"
  } 
  else {
    document.getElementById("display").innerHTML += "4"
  };

  type = 0;
});

$('#five').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "5"
  } 
  else {
    document.getElementById("display").innerHTML += "5"
  };

  type = 0;
});

$('#six').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "6"
  } 
  else {
    document.getElementById("display").innerHTML += "6"
  };

  type = 0;
});

$('#seven').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "7"
  } 
  else {
    document.getElementById("display").innerHTML += "7"
  };

  type = 0;
});

$('#eight').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "8"
  } 
  else {
    document.getElementById("display").innerHTML += "8"
  };

  type = 0;
});

$('#nine').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "9"
  } 
  else {
    document.getElementById("display").innerHTML += "9"
  };

  type = 0;
});

$('#zero').click(function(){
  if (type == 1) {
    document.getElementById("display").innerHTML = "0"
  } 
  else {
    document.getElementById("display").innerHTML += "0"
  };

  type = 0;
});

$('#plus').click(function(){

  type = 1;

  switch(lastoperation) {
    case 1:
        result = result + parseInt($('#display').text());
        $('#display').text(result);
        break;
    case 2:
        
        result = result - parseInt($('#display').text());
        $('#display').text(result);
        break;
      

    case 3:
        result = result*parseInt($("#display").text());
        $("#display").text(result);
        break;

    case 4:
        result = result/parseInt($("#display").text());
        $("#display").text(result);
        break;
    
}
  
  
  lastoperation = 1;
});

$('#sub').click(function(){

  type = 1;

  switch(lastoperation) {
    case 1:
        result = result + parseInt($('#display').text());
        $('#display').text(result);
        break;
    case 2:
        
        result = result - parseInt($('#display').text());
        $('#display').text(result);
        break;
      

    case 3:
        result = result*parseInt($("#display").text());
        $("#display").text(result);
        break;

    case 4:
        result = result/parseInt($("#display").text());
        $("#display").text(result);
        break;
    
}
  
  lastoperation = 2;
});

$('#mult').click(function(){

  type = 1;

switch(lastoperation) {
    case 1:
        result = result + parseInt($('#display').text());
        $('#display').text(result);
        break;
    case 2:        
        result = result - parseInt($('#display').text());
        $('#display').text(result);
        break;
      

    case 3:
        result = result*parseInt($("#display").text());
        $("#display").text(result);
        break;

    case 4:
        result = result/parseInt($("#display").text());
        $("#display").text(result);
        break;
    
}

lastoperation = 3;


});


$('#divide').click(function(){

  type = 1;

  switch(lastoperation) {
    case 1:
        result = result + parseInt($('#display').text());
        $('#display').text(result);
        break;
    case 2:
        
        result = result - parseInt($('#display').text());
        $('#display').text(result);
        break;
        

    case 3:
        result = result*parseInt($("#display").text());
        $("#display").text(result);
        break;

    case 4:
        result = result/parseInt($("#display").text());
        $("#display").text(result);
        break;
    
}

lastoperation = 4;


});

$('#equal').click(function(){

  type = 1;

  switch(lastoperation) {
    case 1:
        result = result + parseInt($('#display').text());
        $('#display').text(result);
        break;
    case 2:
        
        result = result - parseInt($('#display').text());
        $('#display').text(result);
        break;
      
    case 3:
        result = result*parseInt($("#display").text());
        $("#display").text(result);
        break;

    case 4:
        result = result/parseInt($("#display").text());
        $("#display").text(result);
        break;
    
}
  
  lastoperation = 0;
});

$('#clear').click(function(){

  lastoperation =1;
  type = 1; 
  result=0;
  $("#display").text('');

});