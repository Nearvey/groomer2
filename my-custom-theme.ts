
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #E3A6A6 
		"--color-primary-50": "251 242 242", // #fbf2f2
		"--color-primary-100": "249 237 237", // #f9eded
		"--color-primary-200": "248 233 233", // #f8e9e9
		"--color-primary-300": "244 219 219", // #f4dbdb
		"--color-primary-400": "235 193 193", // #ebc1c1
		"--color-primary-500": "227 166 166", // #E3A6A6
		"--color-primary-600": "204 149 149", // #cc9595
		"--color-primary-700": "170 125 125", // #aa7d7d
		"--color-primary-800": "136 100 100", // #886464
		"--color-primary-900": "111 81 81", // #6f5151
		// secondary | #9CBCC1 
		"--color-secondary-50": "240 245 246", // #f0f5f6
		"--color-secondary-100": "235 242 243", // #ebf2f3
		"--color-secondary-200": "230 238 240", // #e6eef0
		"--color-secondary-300": "215 228 230", // #d7e4e6
		"--color-secondary-400": "186 208 212", // #bad0d4
		"--color-secondary-500": "156 188 193", // #9CBCC1
		"--color-secondary-600": "140 169 174", // #8ca9ae
		"--color-secondary-700": "117 141 145", // #758d91
		"--color-secondary-800": "94 113 116", // #5e7174
		"--color-secondary-900": "76 92 95", // #4c5c5f
		// tertiary | #D9D9D9 
		"--color-tertiary-50": "249 249 249", // #f9f9f9
		"--color-tertiary-100": "247 247 247", // #f7f7f7
		"--color-tertiary-200": "246 246 246", // #f6f6f6
		"--color-tertiary-300": "240 240 240", // #f0f0f0
		"--color-tertiary-400": "228 228 228", // #e4e4e4
		"--color-tertiary-500": "217 217 217", // #D9D9D9
		"--color-tertiary-600": "195 195 195", // #c3c3c3
		"--color-tertiary-700": "163 163 163", // #a3a3a3
		"--color-tertiary-800": "130 130 130", // #828282
		"--color-tertiary-900": "106 106 106", // #6a6a6a
		// success | #e491ea 
		"--color-success-50": "251 239 252", // #fbeffc
		"--color-success-100": "250 233 251", // #fae9fb
		"--color-success-200": "248 228 250", // #f8e4fa
		"--color-success-300": "244 211 247", // #f4d3f7
		"--color-success-400": "236 178 240", // #ecb2f0
		"--color-success-500": "228 145 234", // #e491ea
		"--color-success-600": "205 131 211", // #cd83d3
		"--color-success-700": "171 109 176", // #ab6db0
		"--color-success-800": "137 87 140", // #89578c
		"--color-success-900": "112 71 115", // #704773
		// warning | #4793a2 
		"--color-warning-50": "227 239 241", // #e3eff1
		"--color-warning-100": "218 233 236", // #dae9ec
		"--color-warning-200": "209 228 232", // #d1e4e8
		"--color-warning-300": "181 212 218", // #b5d4da
		"--color-warning-400": "126 179 190", // #7eb3be
		"--color-warning-500": "71 147 162", // #4793a2
		"--color-warning-600": "64 132 146", // #408492
		"--color-warning-700": "53 110 122", // #356e7a
		"--color-warning-800": "43 88 97", // #2b5861
		"--color-warning-900": "35 72 79", // #23484f
		// error | #06284e 
		"--color-error-50": "218 223 228", // #dadfe4
		"--color-error-100": "205 212 220", // #cdd4dc
		"--color-error-200": "193 201 211", // #c1c9d3
		"--color-error-300": "155 169 184", // #9ba9b8
		"--color-error-400": "81 105 131", // #516983
		"--color-error-500": "6 40 78", // #06284e
		"--color-error-600": "5 36 70", // #052446
		"--color-error-700": "5 30 59", // #051e3b
		"--color-error-800": "4 24 47", // #04182f
		"--color-error-900": "3 20 38", // #031426
		// surface | #3580af 
		"--color-surface-50": "225 236 243", // #e1ecf3
		"--color-surface-100": "215 230 239", // #d7e6ef
		"--color-surface-200": "205 223 235", // #cddfeb
		"--color-surface-300": "174 204 223", // #aeccdf
		"--color-surface-400": "114 166 199", // #72a6c7
		"--color-surface-500": "53 128 175", // #3580af
		"--color-surface-600": "48 115 158", // #30739e
		"--color-surface-700": "40 96 131", // #286083
		"--color-surface-800": "32 77 105", // #204d69
		"--color-surface-900": "26 63 86", // #1a3f56
		
	}
}