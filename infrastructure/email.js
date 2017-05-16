var nodemailer = require('nodemailer');
// Configurações do transporte de email
var transporte = nodemailer.createTransport({
  service: 'Nome do serviço',
  auth: {
    user: 'email',
    pass: 'senha'
  } 
});

// Configurações default dos e-mails.
var config = {
  remetente: 'remetente',
  assunto: 'Envio de email'
};

var Email = {
    send: function(destinatario, mensagem) {
         return new Promise ((resolve, reject) => {
            // Enviar email com as configurações pré definidas.
            transporte.sendMail({
                from: config.remetente,
                to: destinatorio,
                subject: config.assunto,
                html: mensagem,
                attachments: []
            }, function(err){
                if(err)
                    reject(error);
                
                resolve('E-mail para %s enviado!', destinatorio);
            });    
         });
    }
}


module.exports = Email;