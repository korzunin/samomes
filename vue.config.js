module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/udo' : '/', // change this if you need static files from project folder
  'transpileDependencies': [
    'vuetify'
  ]
}
