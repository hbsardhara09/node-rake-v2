# node-rake-v2

A NodeJS implementation of the Rapid Automatic Keyword Extraction algorithm.

Note: New version of existing NPM - https://www.npmjs.com/package/node-rake

# Installation
`npm install node-rake-v2`

# Usage

```javascript
rake.generate(text, options);
```

The `options` param is an object that allows to pass custom params to generate method. Options:

- `stopwords`: Optional. An `array` containing a custom stopwords list. By default, the method uses a stopwords list which comes along (take a look at [Stopwords source](#stopwords-source)).

```javascript
rake.addStopWords(stopwords);
// rake.addStopWords(['for', 'the', 'a', 'stands', 'test', 'man', 'woman']);
```
You can add more stop words in existing stopwords list which comes along with this module.


If you want to manage stopwords list in object scope then you can use this module as following:

```javascript
const NodeRakeV2 = require('node-rake-v2').NodeRakeV2;

const node_rake_v2 = new NodeRakeV2();
node_rake_v2.addStopWords(['for', 'the', 'a', 'stands', 'test', 'man', 'woman']);
const keywords = node_rake_v2.generate("LDA stands for Latent Dirichlet Allocation");
```

## Example of usage:

```javascript
const rake = require('node-rake-v2');
const keywords = rake.generate("LDA stands for Latent Dirichlet Allocation");
// it'll output: [ 'Latent Dirichlet Allocation', 'LDA stands' ]

//or

const myStopwords = ['for', 'the', 'a', 'stands', 'test', 'man', 'woman'];
const opts = {stopwords: myStopwords};

const keywords = rake.generate("LDA stands for Latent Dirichlet Allocation", opts);
// it'll output: [ 'Latent Dirichlet Allocation', 'LDA' ]
```

#### Algorithm sources:
  1.https://www.researchgate.net/publication/227988510_Automatic_Keyword_Extraction_from_Individual_Documents
  2.https://www.ijarcsse.com/docs/papers/Volume_6/5_May2016/V6I5-0392.pdf
  
#### Stopwords source:
  1. https://github.com/hbsardhara09/node-rake-v2/blob/master/stopWords.txt
  
  
  
[![npm](https://img.shields.io/npm/l/node-rake.svg)]()


#### Note
New version of existing NPM - https://www.npmjs.com/package/node-rake
