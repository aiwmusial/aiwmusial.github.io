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