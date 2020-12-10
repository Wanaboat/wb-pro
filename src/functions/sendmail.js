const nodemailer = require('nodemailer');

// $mail->SMTPDebug  = 0;
// $mail->SMTPAuth   = TRUE;
// $mail->SMTPSecure = "tls";
// $mail->Port       = 587;
// $mail->Host       = "smtp.gmail.com";
// $mail->Username   = "vhf@wanaboat.fr";
// $mail->Password   = '1AZ"ertyui$';


exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
         user:"vhf@wanaboat.fr",
         pass:"1AZ\"ertyui$"
    }
    });

    transporter.sendMail({
        from: "vhf@wanaboat.fr",
        to: "vhf@wanaboat.fr",
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}