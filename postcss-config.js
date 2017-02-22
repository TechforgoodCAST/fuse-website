module.exports = {
  input: 'css/index.css',
  output: 'source/stylesheets/style.css',
  use: [
    'postcss-import',
    'autoprefixer',
    'postcss-custom-media',
    'postcss-clean',
    'postcss-custom-properties'
  ]
}
