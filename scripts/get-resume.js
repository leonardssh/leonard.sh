const axios = require('axios');
const fs = require('fs');

const RESUME_URL = 'https://github.com/leonardssh/resume/raw/main/resume.pdf';

async function getResumePDF() {
	axios({
		method: 'get',
		url: RESUME_URL,
		responseType: 'stream'
	}).then((response) => {
		response.data.pipe(fs.createWriteStream('./dist/resume.pdf'));
	});
}

getResumePDF();
