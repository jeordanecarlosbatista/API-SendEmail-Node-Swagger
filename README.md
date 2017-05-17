# API with Swagger on Node
Simple example of how to send email with nodejs

# Installation
1. git clone https://github.com/jeordanecarlosbatista/API-SendEmail-Node-Swagger.git
2. cd API-SendEmail-Node-Swagger
2. npm install

# Test
1. Edit the SMTP, Remente, Assunto, etc. settings in the "./infrastructure/email.js" file
2. API for sending mail is "host _server/api/v1/email'. Method POST. Body {"destinatario": "", "mensagem": "teste"}.
