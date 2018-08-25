'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About Webmark 1',
      contact: 'Developed by Webmark Associates, WIT, Waterford.',
    };
    response.render('about', viewData);
  },

};

module.exports = about;
