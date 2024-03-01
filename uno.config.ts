import {
	defineConfig,
	presetTypography,
	presetWind,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

import { unoConfigCommon } from './uno.common'

export default defineConfig({
	...unoConfigCommon,
	presets: [
		presetWind(),
		presetTypography(),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
})
