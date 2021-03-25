class Translation {
    constructor(sourceLang, targetLang, text) {
        this.sourceLang = sourceLang;
        this.targetLang = targetLang;
        this.text = text
    }

    // Imports the Google Cloud Translation library
    TSC = require('@google-cloud/translate');

    // Instantiates a client
    translationClient = new this.TSC.TranslationServiceClient();

    async translateText() {
        // Construct request
        const request = {
            parent: `projects/telephonetranslate/locations/global`,
            contents: [this.text],
            mimeType: 'text/plain', // mime types: text/plain, text/html
            sourceLanguageCode: this.sourceLang,
            targetLanguageCode: this.targetLang,
        };

        // Run request
        try {
            const [response] = await this.translationClient.translateText(request);
        } catch (err) {
            console.log(err);
        }

        for (const translation of response.translations) {
            console.log(`Translation: ${translation.translatedText}`);
        }
    }

    getTranslation () {
        let response = await this.translateText();
        return response;
    }
};

module.exports = Translation;