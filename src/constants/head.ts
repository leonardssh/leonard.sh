const title = 'Narcis B. | Resume';
const image = 'https://leonard.sh/images/og-image.png';
const icon = 'https://leonard.sh/images/icon.ico';
const description =
	"Full-Stack Web Developer, currently looking for new challenges in my career therefore I'm currently looking for hire. Check my resume for more information on my skills and personal projects";

const keywords =
	'samp, sa-mp, sa:mp, gamemode, gm, resurse, plugin, fs, textdraw, td, gm optimizat, gamemode optimizat, optimizat, mape, bug, buguri, bug-uri, bugs, gamemode fara buguri, gm fara buguri, gm fara bug-uri, fara buguri, gamemode samp, gamemode sa-mp, gm sa-mp, gm samp, comanda, sistem, eroare, intrebare, sisteme, gratis, free, playeri, boti, bots, hack, crasher, crash, gta, san andreas, multiplayer, mta, mc, minecraft, bugged, gamemode bugged, gm bugged, nephrite, gamemode nephrite, gm nephrite, gm ruby, gamemode ruby, b-hood, bhood, gm b-hood, gm bhood, gamemode b-hood, gamemode bhood, og-times, gm og-times, gm ogtimes, gamemode og-times, gamemode ogtimes, eclipsed, gm eclipsed, gamemode eclipsed, panel, userpanel, panel nephrite, panel laravel, panel wcode, bbgaming, wcode, panel burned, burned, panel bigzone, bigzone, gm bigzone, gamemode bigzone, b-zone, gm b-zone, saints, vortex, vxrp, Ksenon, Shad0w, Bobo, Caen, Awake, moduri, download, ajutor, prezentare, reclama, troll, anticheat, anti-cheat, edit, proiect, prezentare proiect,Leonard, LeonardAdv, LeonardSSH, LeonardAdevaratu, keNN., ViewS, Emrys, Leaks.ro, leaks, donatii, youtube, neveu, colo, roxana, hacker, cit, cits, cheats, v2, v3, v4, leaks group, pawno, zeex, sublime, rich presence, sublime text, mysql, streamer, sscanf, crashdetect, gta 5, ragemp, fivem, unic, sistem unic, sisteme unice, copiat, server, server unic, gamemode unic, gm unic, romania, rusi, rusia, pawn, include, ysi, scripting, online, tutorial, tutoriale, leaks, templates, teme, index, skin, skins, hook, aplicatie, application, cont, conturi, nulled, null, retail, php, c++, c, alt:V, altv, leonard.sh, leonardadv.ro, leonard.pw, ryse.mp, ryse, ryse multiplayer, ryse.ro, ryse alt:V, ryse ragemp, leonardssh22, leonardssh, leonard ssh, leo ssh, leonard ssh 22';

const appleMeta = [
	{ name: 'apple-mobile-web-app-capable', content: 'yes' },
	{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
	{ name: 'apple-touch-icon', content: icon },
	{ name: 'apple-touch-icon-precomposed', content: icon },
	{ name: 'apple-touch-startup-image', content: icon },
	{ name: 'apple-mobile-web-app-title', content: title },
	{ name: 'application-name', content: title },
	{ name: 'msapplication-TileColor', content: '#121a27' },
	{ name: 'msapplication-TileImage', content: icon }
];

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
		},
		{
			rel: 'shortcut icon',
			type: 'image/x-icon',
			href: icon
		},
		{
			rel: 'canonical',
			href: 'https://leonard.sh/'
		}
	],
	meta: [
		...appleMeta,
		{
			hid: 'author',
			name: 'author',
			content: 'Narcis B.'
		},
		{
			hid: 'robots',
			name: 'robots',
			content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1'
		},
		{
			hid: 'keywords',
			name: 'keywords',
			content: keywords
		},
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
