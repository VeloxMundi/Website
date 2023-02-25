
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/.well-known");

  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md').filter(function (l) {
          return l.date < new Date()
    });
  });
  eleventyConfig.addCollection('docs', function(collectionApi) {
    let col = collectionApi.getFilteredByGlob(['src/docs/**/*.md','src/docs/**/*.html']).filter(function (l) {
          return l.data.status=='published'
    });
    for (let i=0; i<col.length; i++) {      
      if (!col[i].data.sortOrder || col[i].data.sortOrder=='') {
        col[i].data.sortOrder = '0.0.0';
      }
      let sortSplit = col[i].data.sortOrder.split('.');
      col[i].data.topicNum=sortSplit[0];
      col[i].data.topicEnd = '';
      for (let j=1; j<sortSplit.length; j++) {
        col[i].data.topicEnd += sortSplit[j] + 
          (j<sortSplit.length-1 ? '.' : '');;
      }
      col[i].data.currentLevel = '';
      for (let j=0; j<sortSplit.length-1; j++) {
        col[i].data.currentLevel += sortSplit[j] + 
          (j<sortSplit.length-2 ? '.' : '');
      }
    }
    return col.sort(function(a, b) {
      if (!a.data.sortOrder || a.data.sortOrder=='') {
        a.data.sortOrder = '0.0.0';
      }
      if (!b.data.sortOrder || b.data.sortOrder=='') {
        b.data.sortOrder='0.0.0';
      }
      let asort = a.data.sortOrder.split('.');
      let bsort = b.data.sortOrder.split('.');
      let sorted = false;
      let i=0;
      try {
        while (i<asort.length && i<bsort.length) {
            let at = parseInt(asort[i]) || 0;
            let bt = parseInt(bsort[i]) || 0;
            if (at<bt) {
              sorted=true;
              return -1;
            }
            else if (bt<at) {
              sorted=true;
              return 1;
            }
            i++;
        }
      }
      catch {
        return 0;
      }
    });
  });

  eleventyConfig.addNunjucksFilter('dateFilter', require('./filters/dateFilter'));

  // Card Exapmle
  const Card = require('./src/_includes/components/Card');
  eleventyConfig.addShortcode('Card', Card);



  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'docs',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    pathPrefix: "/" // This is the default, but I'm setting it for reference. Use this if your URLs should have a base prefix (deployed to a subdirectory, for example). Use the HTML plugin instead after v2.0
  };
};