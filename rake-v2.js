const Rake = require("./rake");
const path = require("path");
const fs = require("fs");
const utils = require("./utils").Utils;

const stopwordsPath = path.resolve(`${__dirname}/stopWords.txt`);

class NodeRakeV2 {
    defaultStopWords = fs.readFileSync(stopwordsPath).toString().split("\n");

    /**
     * Function to generate keywords list
     * @param {string} content - Content String
     * @param {JSON} opts - Options - { stopwords }
     * @returns {[string]} - Array of keywords
     */
    generate = (content, opts = {}) => {
        const stopwordsList = opts.stopwords || this.defaultStopWords;

        const instance = new Rake(content, stopwordsList);
        return instance.generate();
    };

    /**
     * Function to add new stop words in the list of existing stopWords.txt
     * @param {[string]} stopwords - Array of stop words
     */
    addStopWords = (stopwords) => {
        if (utils.isValidVal(stopwords)) {
            this.defaultStopWords = this.defaultStopWords.concat(stopwords);
        }
    };
}

module.exports.NodeRakeV2 = NodeRakeV2;
