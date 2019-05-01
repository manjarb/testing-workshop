const isTest = String(process.env.NODE_ENV) === 'test'
module.exports =  function() {
  return {
    presets: [['@babel/preset-env', {modules: isTest ? 'commonjs' : false}], '@babel/preset-react'],
    plugins: [
      'syntax-dynamic-import',
      'transform-class-properties',
      'transform-object-rest-spread',
      isTest ? 'dynamic-import-node' : null,
    ].filter(Boolean)
  }
}
