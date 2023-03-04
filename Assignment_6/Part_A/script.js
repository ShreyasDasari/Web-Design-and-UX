// Displaying Username

// const url = new URL(document.location.href);
// $("#welcome").html(`Welcome, ${url.searchParams.get("name")}`);



// Validations

$(document).ready()
    {
        $('#num1check').hide();
        $('#num1validatecheck').hide();

        $('#num2check').hide();
        $('#num2validatecheck').hide();

        $('#num3check').hide();
        $('#num3validatecheck').hide();

        var num1valid = false;
        var num2valid = false;
        var num3valid = false;


    };



$('#number1').keyup(validateNumber);
$('#number2').keyup(validateNumber);

function validateNumber() {
    let regexNum = /^\d*$/;
    let num1 = $('#number1').val();
    let num2 = $('#number2').val();

    console.log(num1.length)
        if (num1 == "") {
            $('#num1check').show();
            $('#num1validatecheck').hide();
            } else if (num1 && !num1.trim().match(regexNum)) {
                $('#num1check').hide();
                $('#num1validatecheck').show();
            } else {
                $('#num1check').hide();
                $('#num1validatecheck').hide();
            }

    console.log(num2.length)
        if (num2 == "") {
            $('#num2check').show();
            $('#num2validatecheck').hide();
            } else if (num2 && !num2.trim().match(regexNum)) {
                $('#num2check').hide();
                $('#num2validatecheck').show();
            } else {
                $('#num2check').hide();
                $('#num2validatecheck').hide();
            }
}

//display logged in username
$(document).ready(function(){
    $('.error').hide();
    $("#submit").click(function(){
        var emailid = $("email").val();
        var username = $("name").val();
        var passwrd = $("password").val();

        var data = $(".form").serializeArray();
        for(i in data){
            console.log(data[i]);
        }

        if(emailid.length<1){
            $("#emailid").next().show();
            return false;
        }

        if(username.length<1){
            $("#username").next().show();
            return false;
        }

        if(IsEmail(emailid) == false){
            $('#invalidemail').show();
            return false;
        }

        if(passswrd.length<1){
            $("#passwrd").next().show();
            return false;
        }

        if(IsPassword(passwrd) == false){
            $('#invalidpassword').show();
            return false;
        }

        else{
           
            document.location.href = 'c.html?username=' + username;
            alert("success");
            return true;
        }

    })
})





// Calculator function

function Operation(operand) { 
				
    var firstValue = parseInt(document.getElementById('number1').value);
    var secondValue = parseInt(document.getElementById('number2').value);
    var result = 0;

    switch(operand){

        case '+' : 	result = ( (x, y) => {	return x + y; } )( firstValue, secondValue);
                    break;
        case '-' : 	result = ( (x, y) => {	return x - y; } )( firstValue, secondValue);
                    break;
        case '*' : 	result = ( (x, y) => {	return x * y; } )( firstValue, secondValue);
                    break;
        case '/' : 	result = ( (x, y) => {	return x / y; } )( firstValue, secondValue);
                    break;
    }



    document.getElementsByName('display')[0].value= result;
    //console.log(('display')[0].valueOf= this.result);
    //$("#displayValue").val(result);
    //alert(result);
    $(document).ready(function () {
        $("#display").click(function () {
            $("input:number").val(result);
        });
    });
}








