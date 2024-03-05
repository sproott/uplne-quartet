import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetWind,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

import { unoConfigCommon } from './uno.common'

export default defineConfig({
	...unoConfigCommon,
	presets: [presetIcons(), presetWind(), presetTypography()],
	transformers: [transformerVariantGroup(), transformerDirectives()],
})
