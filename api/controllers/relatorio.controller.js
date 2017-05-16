'use strict';

const url = require('url');
const path = require('path');

var relatorio = require('../../domain/relatorio/relatorio.service');

module.exports.sendEmail = (req, res, next) => {
  relatorio.senEmail(req.swagger.params, res, next);
};

