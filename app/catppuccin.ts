import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const CatppuccinTheme: CustomThemeConfig = {
	name: 'catppuccin',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #8caaee
		'--color-primary-50': '238 242 252', // #eef2fc
		'--color-primary-100': '232 238 252', // #e8eefc
		'--color-primary-200': '226 234 251', // #e2eafb
		'--color-primary-300': '209 221 248', // #d1ddf8
		'--color-primary-400': '175 196 243', // #afc4f3
		'--color-primary-500': '140 170 238', // #8caaee
		'--color-primary-600': '126 153 214', // #7e99d6
		'--color-primary-700': '105 128 179', // #6980b3
		'--color-primary-800': '84 102 143', // #54668f
		'--color-primary-900': '69 83 117', // #455375
		// secondary | #85c1dc
		'--color-secondary-50': '237 246 250', // #edf6fa
		'--color-secondary-100': '231 243 248', // #e7f3f8
		'--color-secondary-200': '225 240 246', // #e1f0f6
		'--color-secondary-300': '206 230 241', // #cee6f1
		'--color-secondary-400': '170 212 231', // #aad4e7
		'--color-secondary-500': '133 193 220', // #85c1dc
		'--color-secondary-600': '120 174 198', // #78aec6
		'--color-secondary-700': '100 145 165', // #6491a5
		'--color-secondary-800': '80 116 132', // #507484
		'--color-secondary-900': '65 95 108', // #415f6c
		// tertiary | #f4b8e4
		'--color-tertiary-50': '253 244 251', // #fdf4fb
		'--color-tertiary-100': '253 241 250', // #fdf1fa
		'--color-tertiary-200': '252 237 248', // #fcedf8
		'--color-tertiary-300': '251 227 244', // #fbe3f4
		'--color-tertiary-400': '247 205 236', // #f7cdec
		'--color-tertiary-500': '244 184 228', // #f4b8e4
		'--color-tertiary-600': '220 166 205', // #dca6cd
		'--color-tertiary-700': '183 138 171', // #b78aab
		'--color-tertiary-800': '146 110 137', // #926e89
		'--color-tertiary-900': '120 90 112', // #785a70
		// success | #a6d189
		'--color-success-50': '242 248 237', // #f2f8ed
		'--color-success-100': '237 246 231', // #edf6e7
		'--color-success-200': '233 244 226', // #e9f4e2
		'--color-success-300': '219 237 208', // #dbedd0
		'--color-success-400': '193 223 172', // #c1dfac
		'--color-success-500': '166 209 137', // #a6d189
		'--color-success-600': '149 188 123', // #95bc7b
		'--color-success-700': '125 157 103', // #7d9d67
		'--color-success-800': '100 125 82', // #647d52
		'--color-success-900': '81 102 67', // #516643
		// warning | #ef9f76
		'--color-warning-50': '253 241 234', // #fdf1ea
		'--color-warning-100': '252 236 228', // #fcece4
		'--color-warning-200': '251 231 221', // #fbe7dd
		'--color-warning-300': '249 217 200', // #f9d9c8
		'--color-warning-400': '244 188 159', // #f4bc9f
		'--color-warning-500': '239 159 118', // #ef9f76
		'--color-warning-600': '215 143 106', // #d78f6a
		'--color-warning-700': '179 119 89', // #b37759
		'--color-warning-800': '143 95 71', // #8f5f47
		'--color-warning-900': '117 78 58', // #754e3a
		// error | #e78284
		'--color-error-50': '251 236 237', // #fbeced
		'--color-error-100': '250 230 230', // #fae6e6
		'--color-error-200': '249 224 224', // #f9e0e0
		'--color-error-300': '245 205 206', // #f5cdce
		'--color-error-400': '238 168 169', // #eea8a9
		'--color-error-500': '231 130 132', // #e78284
		'--color-error-600': '208 117 119', // #d07577
		'--color-error-700': '173 98 99', // #ad6263
		'--color-error-800': '139 78 79', // #8b4e4f
		'--color-error-900': '113 64 65', // #714041
		// surface | #414559
		'--color-surface-50': '227 227 230', // #e3e3e6
		'--color-surface-100': '217 218 222', // #d9dade
		'--color-surface-200': '208 209 214', // #d0d1d6
		'--color-surface-300': '179 181 189', // #b3b5bd
		'--color-surface-400': '122 125 139', // #7a7d8b
		'--color-surface-500': '65 69 89', // #414559
		'--color-surface-600': '59 62 80', // #3b3e50
		'--color-surface-700': '49 52 67', // #313443
		'--color-surface-800': '39 41 53', // #272935
		'--color-surface-900': '32 34 44' // #20222c
	}
};
