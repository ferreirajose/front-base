const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://sistemasdesenv.tce.pe/pgp-8963',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/services'],
    target: 'https://sistemasdesenv.tce.pe/pgp-8963',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
