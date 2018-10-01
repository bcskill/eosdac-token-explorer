import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

export default ({
  app,
  Vue
}) => {
  Vue.use(VueI18n)
  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us',
    messages: {
      'de': messages['de'],
      'en-gb': messages['en-gb'],
      'en-us': messages['en-us'],
      'es': messages['es'],
      'fr': messages['fr'],
      'it': messages['it'],
      'ja': messages['ja'],
      'ko': messages['ko'],
      'nl': messages['nl'],
      'ru': messages['ru'],
      'vi': messages['vi'],
      'zh-hans': messages['zh-hans'],
    }
  })
}
