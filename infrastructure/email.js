var nodemailer = require('nodemailer');
// Configurações do transporte de email
var transporte = nodemailer.createTransport({
    pool: true,
    host: 'smtp.host',
    port: 999,
    secure: true, // use TLS
    auth: {
        user: 'user',
        pass: 'pass'
    }
});

// Configurações default dos e-mails.
var config = {
  remetente: 'remetente',
  assunto: 'Envio de email'
};

var Email = {
    send: function(destinatario, mensagem) {
        let dest = destinatario;
        let msg = mensagem;
         return new Promise ((resolve, reject) => {
            // Enviar email com as configurações pré definidas.
            transporte.sendMail({
                from: config.remetente,
                to: dest,
                subject: config.assunto,
                html: msg,
                attachments: []
            },function(response) {
                resolve(response.message);
            }, function(err){
                if(err)
                    reject(error);
            });    
         });
    }
}


module.exports = Email;