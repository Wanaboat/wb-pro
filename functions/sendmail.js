const nodemailer = require('nodemailer');


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
        subject: `[Form] : de ${data.name}`,
        html: `
            <h3>Message de ${data.name} (${data.email})</h3>
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