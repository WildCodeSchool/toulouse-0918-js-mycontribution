const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd
  ? require('./settings.json')
  : require('./settings.local.json');
