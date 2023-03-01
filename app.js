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
   * @param {JSON} opts - Options - { stopwords }
   * @returns {[string]} - Array of keywords
   */
  generate(content, opts = {}) {
    const stopwordsList = opts.stopwords || defaultStopWords;

    const instance = new Rake(content, stopwordsList);
    return instance.generate();
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
