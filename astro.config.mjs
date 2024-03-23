import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jiu Jitero Api Place',
			social: {
				github: 'https://github.com/Kmicac/Jiujitero-Api',
			},
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'Introduction', link: '/guides/introduction.md/' },
					],
				},
				{
					label: 'Rest API',
					autogenerate: { directory: 'reference' },
					items: [
						{ label: 'Academys', link: ''},
						{ label: 'Athletes', link: ''},
						{ label: 'Filter athletes', link: ''},
						{ label: 'Users', link: ''},
						{ label: 'Auth JWT', link: ''},
						{ label: 'Swagger Docs', link: ''}
					],
				},
				{
					label: 'GraphQL',
					items: [
						{ label: 'Academys', link: ''},
						{ label: 'Athletes', link: ''},
						{ label: 'Filter athletes', link: ''},
						{ label: 'Users', link: ''},
						{ label: 'Auth JWT', link: ''},
						{ label: 'Playground', link: ''}
					],

				},
				{
					label: 'Resources',
					items: [
						{label: 'Insomnia', link: ''},
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
