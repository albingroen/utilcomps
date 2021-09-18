export const tailwindConfig = {
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				scorpion: {
					DEFAULT: '#585858',
					50: '#CBCBCB',
					100: '#BEBEBE',
					200: '#A4A4A4',
					300: '#8B8B8B',
					400: '#727272',
					500: '#5A5A5A',
					600: '#3D3D3D',
					700: '#323232',
					800: '#0B0B0B',
					900: '#000000'
				}
			}
		}
	}
};

export { default as Box } from './Box.svelte';
export { default as Button } from './Button.svelte';
export { default as ButtonGroup } from './ButtonGroup.svelte';
export { default as Checkbox } from './Checkbox.svelte';
export { default as Content } from './Content.svelte';
export { default as Divider } from './Divider.svelte';
export { default as Error } from './Error.svelte';
export { default as Modal } from './Modal.svelte';
export { default as Panel } from './Panel.svelte';
export { default as PanelContent } from './PanelContent.svelte';
export { default as Select } from './Select.svelte';
export { default as Spinner } from './Spinner.svelte';
export { default as Stack } from './Stack.svelte';
export { default as Tab } from './Tab.svelte';
export { default as Table } from './Table.svelte';
export { default as Tabs } from './Tabs.svelte';
export { default as Text } from './Text.svelte';
export { default as TextInput } from './TextInput.svelte';
export { default as HoverCard } from './HoverCard.svelte';
export { default as Avatar } from './Avatar.svelte';
