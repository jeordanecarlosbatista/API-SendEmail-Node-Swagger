'use strict';

const url = require('url');
const path = require('path');

var email = require('../services/email.service');

module.exports.sendEmail = (req, res, next) => {
  email.senEmail(req.swagger.params, res, next);
};

