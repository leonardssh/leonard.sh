const axios = require('axios');
const fs = require('fs');

const RESUME_URL = 'https://github.com/leonardssh/resume/raw/main/resume.pdf';
const OUTPUT_DIR = './dist';

async function getResumePDF() {
	if (!fs.existsSync(OUTPUT_DIR)) {
		return;
	}

	axios({
		method: 'get',
		url: RESUME_URL,
		responseType: 'stream'
	}).then((response) => {
		response.data.pipe(fs.createWriteStream(`${OUTPUT_DIR}/resume.pdf`));
	});
}

getResumePDF();
