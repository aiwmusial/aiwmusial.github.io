// declaring variables
let fieldInputName;
let name_validator;
let fieldInputEmail;
let email_validator;
let fieldInputBody;
let messageBody;
let msg_validator;

//validating form input: name
function nameCheck(){
    fieldInputName = document.getElementById("from_name").value;
    name_validator = document.getElementById('name_validator');

    if(fieldInputName.length >= 2){
        name_validator.innerHTML = 'Input accepted!';
    }else{
        name_validator.innerHTML = 'We accept name input of at least two characters!';
    }
}
//validating form input: email
function emailCheck(){
    fieldInputEmail = document.getElementById("from_email").value;
    email_validator = document.getElementById('email_validator');

    if(fieldInputEmail.includes('@')){
        email_validator.innerHTML = 'Input accepted!';
    }else{;
        email_validator.innerHTML = 'Seems that you are missing the \'@\' sign!';
    }
}
//validating form input: message
function messageCheck(){
    fieldInputBody = document.getElementById("msg_body").value;
    msg_validator = document.getElementById('msg_validator');

    if(fieldInputBody.length != 0){
        msg_validator.innerHTML = 'Input accepted!';
    }else{;
        msg_validator.innerHTML = 'Did you leave any message?';
    }
}

// function to send messages from the model form

function sendMail(params){

        messageBody = {
            to_name: 'Anna',
            from_name: fieldInputName,
            from_email: fieldInputEmail,
            message: fieldInputBody
        };

        if(fieldInputName.length >= 2 && fieldInputEmail.includes('@') && fieldInputBody.length != 0){
            emailjs.send('service_w329smh','template_tbg4p7f', messageBody)
            .then(function(res){
                console.log('sucsess',res.status);
            })
        }else{
            alert('Did you try to submitt empty or invalid form? Please chack your input!');
        }
        document.getElementsByTagName('form')[0].reset();
        name_validator.innerHTML = '';
        email_validator.innerHTML = '';
        msg_validator.innerHTML = '';

}
