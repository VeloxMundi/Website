const nunjucksDateFilter = require('nunjucks-date-filter')


const defaultFormat = "MMMM D, YYYY";
nunjucksDateFilter.setDefaultFormat(defaultFormat);

function dateFilter(date, format) {
	return nunjucksDateFilter(date, format);
}

module.exports = dateFilter;

/*
function dateFilter() {
	return '';
}

module.exports = dateFilter;
*/