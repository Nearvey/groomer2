
import { myCustomTheme } from './my-custom-theme'
// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			fontFamily: {
				'Akaya': ['Akaya Kanadaka'],
				},
		},
	},
	plugins: [
    skeleton({
      themes: {
        custom: [
          myCustomTheme
        ]
      }
    })
  ]
}

// module.exports = {
//   theme: {
//      extend: {
//         fontFamily: {
//            'poppins': ['Poppins'],
//         }
//      }
//   }
// }
