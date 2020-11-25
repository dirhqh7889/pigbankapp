function getInputValue(){
    var valueById = $('#inputId').val();
    var valueById2 = $('#inputId2').val();
    valueById2 = Number(valueById2) + Number(valueById)
    
    $("#inputId2").val(valueById2);  
}
function getInputValuemino(){
    var valueById = $('#inputId').val();
    var valueById2 = $('#inputId2').val();
    valueById2 = Number(valueById2) - Number(valueById)
    
    $("#inputId2").val(valueById2);  
}
function gettarget(){
    var targetvalue = $('#target_value').val();
    var targetvalue2 = $('#target_value2').val();

    targetvalue2 = Number(targetvalue)
    $("#target_value2").val(targetvalue2);
    
}


    

function calc() {
    var val1 = $("#inputId").val(); // input 값을 가져올 때 사용하는 방식
    var result = val1;
    $("#result").val(result);    // result 값을 input에 넣을 때 사용하는 방식
    alert
}

