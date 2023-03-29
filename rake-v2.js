const Rake = require("./rake");
const path = require("path");
const fs = require("fs");
const utils = require("./utils").Utils;

const stopwordsPath = path.resolve(`${__dirname}/stopWords.txt`);

class NodeRakeV2 {
    constructor() {
        this.defaultStopWords = fs.readFileSync(stopwordsPath).toString().split("\n");
    }

    /**
     * Function to generate keywords list
     * @param {string} content - Content String
     * @param {JSON} options - Options - { stopwords }
     * @returns {[string]} - Array of keywords
     */
    generate (content, options = {}) {
        const stopwordsList = options.stopwords || this.defaultStopWords;

        const instance = new Rake(content, stopwordsList);
        let keywords = instance.generate();
        if (options.removeDuplicates) {
            keywords = utils.removeDuplicates(keywords);
        }
        return keywords;
    }

    /**
     * Function to add new stop words in the list of existing stopWords.txt
     * @param {[string]} stopwords - Array of stop words
     */
    addStopWords (stopwords) {
        if (utils.isValidVal(stopwords)) {
            this.defaultStopWords = this.defaultStopWords.concat(stopwords);
        }
    }
}

module.exports.NodeRakeV2 = NodeRakeV2;
