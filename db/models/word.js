const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static async anagrams(word) {
      const wordsArr = await this.findAll({ raw: true });
      const anagrams = [];
      wordsArr.forEach((w) => {
        if (w.word.split('').sort().join('') === word.split('').sort().join('')) {
          anagrams.push(w.word);
        }
      });
      return anagrams;
    }

    static associate(models) {
      // define association here
    }
  }
  Word.init({
    word: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
