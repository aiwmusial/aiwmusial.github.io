// declaring variables
let fieldInputName;
let fieldInputEmail;
let fieldInputBody;
let messageBody;

//validating form input: name
function nameCheck(){
    fieldInputName = document.getElementById("from_name").value;
    if(fieldInputName.length >= 2){
        document.getElementById('name_validator').innerHTML = 'Input accepted!';
    }else{
        document.getElementById('name_validator').innerHTML = 'We accept name input of at least two characters!';
    }
}
//validating form input: email
function emailCheck(){
    fieldInputEmail = document.getElementById("from_email").value;
    if(fieldInputEmail.includes('@')){
        document.getElementById('email_validator').innerHTML = 'Input accepted!';
    }else{;
        document.getElementById('email_validator').innerHTML = 'Seems that you are missing the \'@\' sign!';
    }
}
//validating form input: message
function messageCheck(){
    fieldInputBody = document.getElementById("msg_body").value;
    if(fieldInputBody.length != 0){
        document.getElementById('msg_validator').innerHTML = 'Input accepted!';
    }else{;
        document.getElementById('msg_validator').innerHTML = 'Did you leave any message?';
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
            document.getElementsByTagName('form')[0].reset();
        }else{
            alert('Did you try to submitt empty or invalid form? Please chack your input!');
            document.getElementsByTagName('form')[0].reset();

        }

}
