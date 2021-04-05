$(document).ready(function () {
    
    function checkName() {
        if ($("#myName").val() == '') {
            $("#myName").css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_name").text("* You have to enter your first name!");
        }
    }
    function checkLastName() {
        if ($("#lastname").val() == '') {
            $("#lastname").css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_lastname").text("* You have to enter your Last name!");
        }

    }
    function checkEmail() {
        if ($("#email").val() == ''||$("#email").val().indexOf('@') == -1) {
            $("#email").css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_email").text("* Enter Valid Email");
        }

    }
    function checkDOB() {

        if ($("#dob").val() == '') {
            $("#dob").css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_dob").text("* You have to enter your Date of Birth!");
        }
        else {
            let date = $("#dob").val()
            let age = Math.floor((new Date() - new Date(date).getTime()) / 3.15576e+10)
            if (age < 18) {
                $("#dob").css("border-color", "#FF0000");
                $('#submit').attr('disabled', true);
                $("#error_dob").text("* You are not old enough");

            }
        }

    }
    function checkPhone() {
        if ($("#phone").val() == '') {
            $("#phone").css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_phone").text("* You have to enter your Phone Number!");
        }

    }
    $("#submit").click(function () {
        checkName()
        checkLastName()
        checkDOB()
        checkPhone()
        checkEmail()
    });



});