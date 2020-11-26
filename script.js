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

function save(){
    var dataToSave = $('#target_value2').val()
    var dataToSave2 = $('#inputId2').val();
    localStorage.setItem("data", dataToSave);
    localStorage.setItem("dataa", dataToSave2);
    alert(dataToSave)
}
function show(){
    var dataToShow = localStorage.getItem("data");
    var dataToShow2 = localStorage.getItem("dataa");
    $("#target_value2").val(dataToShow);
    $("#inputId2").val(dataToShow2);
    
    }
function clear(){
    localStorage.removeItem('data');
    localStorage.removeItem('dataa');

}
function vs(){
    if(Number($('#inputId2').val())>=Number($('#target_value2').val())){
        var retVal = confirm("목표값 달성!! 축하드립니다. 리셋하시겠습니까?");
        if(retVal == true){
            localStorage.clear();
            show();
            $('#inputId').val("")
        }
        else{
            alert("리셋하지 않으셨습니다.")
        }

       
    }
}
