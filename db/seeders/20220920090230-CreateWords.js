const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const wordsArr = fs.readFileSync('./fixtures/word_list.txt', 'utf-8').split('\n');
    const arrToPush = [];
    for (let i = 0; i < wordsArr.length; i++) {
      arrToPush.push({
        word: wordsArr[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('Words', arrToPush, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  },
};
