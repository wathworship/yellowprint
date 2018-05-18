export class I18n {
  translate: any;
  defaultLocale: string;
  locale: string;

  constructor() {
  }

  t(key: string) {
    this.translates = window.translates;
    this.defaultLocale = window.defaultLocale;
    this.locale = window.locale;

    var lang;

    if(this.locale) {
      lang = this.locale;
    } else if (this.defaultLocale) {
      lang = this.defaultLocale;
    } else {
      lang = 'en';
    }
    try {
      var selectedTranslatesSet = this.translates[lang];
      return this.deepDown(selectedTranslatesSet, key);
    } catch {
      throw 'Cannot translate ' + key;
    }
  }

  deepDown(selectedTranslatesSet: any, keyStr: string) {
    var keys = keyStr.split(".");
    var firstKey = keys.shift();
    var valueOfFirstKey = selectedTranslatesSet[firstKey]

    if(keys.length > 0) {
      return this.deepDown(
        valueOfFirstKey,
        keys.join(".")
      );
    } else {
      if (typeof valueOfFirstKey !== "string") {
        throw 'Translation error';
      }
      return valueOfFirstKey;
    }
  }
}
