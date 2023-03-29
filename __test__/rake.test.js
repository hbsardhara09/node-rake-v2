import rake from '../app';

describe('rake', () => {
  it('can be imported', () => {
    expect(rake).toBeTruthy();
  });

  describe('generate', () => {
    const text = 'LDA stands for Latent Dirichlet Allocation. As already mentioned it is one of the more popular topic models which was initially proposed by Blei, Ng and Jordan in 2003. It is a generative model which, according to Wikipedia, allows sets of observations to be explained by unobserved groups that explain why some parts of the data are similar.';

    it('extracts keywords from text', () => {
      const results = rake.generate(text);
      expect(results.length).toEqual(18);
    });

    it('extracts keywords from text using a custom stopwords list', () => {
      const opts = { stopwords: ['for', 'the', 'a', 'stands', 'test', 'man', 'woman'] };
      const keywords = rake.generate(text, opts);
      expect(keywords.length).toEqual(7);
    });

    it('trims leading and trailing spaces from keywords', () => {
      const keywords = rake.generate(text);
      expect(keywords).toEqual(expect.arrayContaining(['Latent Dirichlet Allocation']));
    });

    it('check for removeDuplicates flags', function () {
      const duplicateText = text + ' ' + text.toLowerCase();
      let keywords = rake.generate(duplicateText);
      keywords = keywords.filter((keyword) => {
        return keyword.toLowerCase() === 'latent dirichlet allocation';
      });
      expect(keywords.length).toEqual(2);

      keywords = rake.generate(duplicateText, { removeDuplicates: true });
      keywords = keywords.filter((keyword) => {
        return keyword.toLowerCase() === 'latent dirichlet allocation';
      });
      expect(keywords.length).toEqual(1);
    });
  });
});
