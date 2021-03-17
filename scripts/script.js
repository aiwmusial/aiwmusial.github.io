//validating form input: name
function nameCheck(){
    let fieldInput = document.getElementById("from_name").value;
    if(fieldInput.length>=2){
        document.getElementById('name_validator').innerHTML = 'Input accepted!';
    }else{
        document.getElementById('name_validator').innerHTML = 'We accept name input of at least two characters!';
    }
}
//validating form input: email
function emailCheck(){
    let fieldInput = document.getElementById("from_email").value;
    if(fieldInput.includes('@')){
        document.getElementById('email_validator').innerHTML = 'Input accepted!';
    }else{;
        document.getElementById('email_validator').innerHTML = 'Seems that you are missing the \'@\' sign!';
    }
}
// function to send messages from the model form
function sendMail(params){
    let messageBody = {
        to_name: 'Anna',
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_w329smh','template_tbg4p7f', messageBody)
    .then(function(res){
        console.log('sucsess',res.status);
    })
}