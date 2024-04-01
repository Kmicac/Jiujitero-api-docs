import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jiu Jitero Api',
			logo: {
				src: "./src/assets/logo.png",
			  },
			social: {
				github: 'https://github.com/Kmicac/Jiujitero-Api',
			},
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'Introduction', link: 'en/about/introduction/' },
					],
				},
				{
					label: 'Rest API',
					autogenerate: { directory: 'reference' },
					items: [
						{ label: 'Academys', link: 'en/rest/academy' },
						{ label: 'Athletes', link: 'en/rest/athlete' },
						{ label: 'Filter athletes', link: 'en/rest/filterathlete' },
						{ label: 'Users', link: 'en/rest/user' },
						{ label: 'Auth JWT', link: 'en/rest/auth' },
						{ label: 'Swagger Docs', link: '' }
					],
				},
				{
					label: 'GraphQL',
					items: [
						{ label: 'Academys', link: '' },
						{ label: 'Athletes', link: '' },
						{ label: 'Filter athletes', link: '' },
						{ label: 'Users', link: '' },
						{ label: 'Auth JWT', link: '' },
						{ label: 'Playground', link: '' }
					],

				},
				{
					label: 'Resources',
					items: [
						{ label: 'Insomnia', link: '' },
					],
				},
			],
			customCss: [
				"@fontsource/ibm-plex-serif/400.css",
				"@fontsource/ibm-plex-serif/600.css",
				"./src/styles/custom.css",
			],
		}),
	],
});
