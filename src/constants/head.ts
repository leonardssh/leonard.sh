const title = 'Narcis B. | Resume';
const image = 'https://leonard.sh/images/og-image.png';
const icon = 'https://leonard.sh/images/icon.ico';
const description =
	"Full-Stack Web Developer, currently looking for new challenges in my career therefore I'm currently looking for hire. Check my resume for more information on my skills and personal projects";

export default {
	htmlAttrs: {
		class: "bg-[url('/images/left-bg.jpg')]",
		lang: 'en'
	},
	title,
	charset: 'utf-8',
	viewport: 'width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: icon
		}
	],
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: description
		},
		/**
		 * Twitter
		 */
		{
			hid: 'twitter:card',
			name: 'twitter:card',
			content: 'summary'
		},
		{
			hid: 'twitter:site',
			name: 'twitter:site',
			content: '@leonardssh22'
		},
		{
			hid: 'twitter:creator',
			name: 'twitter:creator',
			content: '@leonardssh22'
		},
		{
			hid: 'twitter:title',
			name: 'twitter:title',
			content: title
		},
		{
			hid: 'twitter:description',
			name: 'twitter:description',
			content: description
		},
		{
			hid: 'twitter:image',
			name: 'twitter:image',
			content: image
		},
		/**
		 * Open-Graph
		 */
		{
			hid: 'og:type',
			name: 'og:type',
			content: 'website'
		},
		{
			hid: 'og:site_name',
			name: 'og:site_name',
			content: title
		},
		{
			hid: 'og:description',
			name: 'og:description',
			content: description
		},
		{
			hid: 'og:image',
			name: 'og:image',
			content: image
		},
		/**
		 * Others
		 */
		{
			hid: 'theme-color',
			name: 'theme-color',
			content: '#121a27'
		}
	]
};
