var email = require('../../infrastructure/email');
var RelatorioModel = function () {};

/**
 * Envio e-mail
 */
RelatorioModel.prototype.sendEmail = async function(destinatario, mensagem,callback) {
    try {
        var result = await email.send(destinatario, mensagem);
        callback(result);
    } catch(err) {
        callback(err.message);
    }
}

module.exports = RelatorioModel;