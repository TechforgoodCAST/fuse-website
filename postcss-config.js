module.exports = {
  input: 'source/tachyons/index.css',
  output: 'source/style.min.css',
  use: [
    'postcss-import',
    'autoprefixer',
    'postcss-custom-media',
    'postcss-clean',
    'postcss-custom-properties'
  ]
}
