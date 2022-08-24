module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
    fallback:{
      stream: require.resolve("stream-browserify"),
    },
    fallback:{
      zlib: require.resolve("browserify-zlib")
    },
    fallback:{
      crypto: require.resolve("crypto-browserify")
    },
    fallback:{
      http: require.resolve("stream-http")
    }
  }
}
