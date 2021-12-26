require('dotenv').config()
const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  host : process.env.HOST || '0.0.0.0',
  AdminEmail: process.env.ADMINEMAIL,
  EmailPass: process.env.EMAILPASS,

}
module.exports = { config }
