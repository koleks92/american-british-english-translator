'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;

      if (text === "") {
        res.json({ error: 'No text to translate'})
      }
      
      if (!text || !locale) {
        res.json({ error: 'Required field(s) missing'})
      }




      let translation
      if (locale == "american-to-british") {
        translation = translator.a2b(text);
      } else if (locale == "british-to-american") {
        translation = translator.b2a(text);
      } else {
        res.json({ error: 'Invalid value for locale field' })
      }

      if (text === translation) {
        translation = "Everything looks good to me!"
      }

      res.json({
        text: text,
        translation: translation
      })
      
    });
};
