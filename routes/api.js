'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      // Get data
      const text = req.body.text;
      const locale = req.body.locale;

      // If text is empty
      if (text === "") {
        res.json({ error: 'No text to translate'})
      }

      // If not text or locale provided
      if (!text || !locale) {
        res.json({ error: 'Required field(s) missing'})
      }

      // Translate
      let translation
      if (locale == "american-to-british") {
        translation = translator.a2b(text);
      } else if (locale == "british-to-american") {
        translation = translator.b2a(text);
      } else {
        // If wrong locale provided
        res.json({ error: 'Invalid value for locale field' })
      }

      // If not translation needed
      if (text === translation) {
        translation = "Everything looks good to me!"
      }

      // Return json file
      res.json({
        text: text,
        translation: translation
      })
      
    });
};
