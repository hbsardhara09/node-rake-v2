const Rake = require('./rake');
const NodeRakeV2 = require('./rake-v2').NodeRakeV2;
const path = require('path');
const fs = require('fs');
const utils = require('./utils').Utils;

const stopwordsPath = path.resolve(`${__dirname}/stopWords.txt`);
let defaultStopWords = fs.readFileSync(stopwordsPath).toString().split('\n');

module.exports = {
  /**
   * Function to generate keywords list
   * @param {string} content - Content String
   * @param {JSON} options - Options - { stopwords }
   * @returns {[string]} - Array of keywords
   */
  generate(content, options = {}) {
    const stopwordsList = options.stopwords || defaultStopWords;

    const instance = new Rake(content, stopwordsList);
    let keywords = instance.generate();
    if (options.removeDuplicates) {
      keywords = utils.removeDuplicates(keywords);
    }
    return keywords;
  },

  /**
   * Function to add new stop words in the list of existing stopWords.txt
   * @param {[string]} stopwords - Array of stop words
   */
  addStopWords(stopwords) {
    if (utils.isValidVal(stopwords)) {
      defaultStopWords = defaultStopWords.concat(stopwords);
    }
  },

  NodeRakeV2
};
