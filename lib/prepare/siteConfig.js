const path = require('path');
const fs = require('fs-extra');

module.exports = function loadSiteConfig(siteDir, deleteCache = true) {
	const configPath = path.resolve(siteDir, 'siteConfig.js');

	if (deleteCache) {
		delete require.cache[configPath];
	}

	let config = {};
	if (fs.existsSync(configPath)) {
		config = require(configPath);
	}

	if (!config.docsDir) {
		config.defaultDocsPath = 'docs';
	}

	if (!config.pagesDir) {
		config.defaultPagesPath = 'pages';
	}

	if (!config.componentsDir) {
		config.defaultComponentsPath = 'components';
	}

	return config;
};
