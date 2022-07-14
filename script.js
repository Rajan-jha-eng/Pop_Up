$(document).ready(function(){
    $('.click').on('click',function(){
        $('.one').css('display','block')
    });
    $('i').on('click', function() {
        $('.one').css('display', 'none')
    });
});

$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();

    var Error=true;
    var email_error=true;

    /* for username */
    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
        if(username_val.length<3 || username_val.length>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('invalid user name');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }
    /* for email */
    $('#emailid').keyup(function(){
        email_validation();
    });
    function email_validation(){
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val=$('#emailid').val();
        if(emailregex.test(email_val)){
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email is invalid');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
    }
    $('#btn').click(function(){
        username_validation();
        email_validation();
        if(Error==true && email_error==true){
            return true;
          }
        else{
            return false;
        }
    });  
      
});