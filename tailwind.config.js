module.exports = {
    content: [
      './*.html',
      './**/*.html',
      './*.js',
      './**/*.js',
      // Add your custom file types (e.g., .jsx, .tsx, etc.)
    ],
    safelist: [
      // List any classes you want to ensure are not purged
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: true,
    },
  }
  