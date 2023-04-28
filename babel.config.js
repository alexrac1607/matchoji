module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-classname-to-style',
      [
        'react-native-platform-specific-extensions',
        { extensions: ['scss', 'sass'] },
      ],
      ['react-native-reanimated/plugin'],
    ],
  }
}

//react native reanimated plugin has to be listed last (official doc)
