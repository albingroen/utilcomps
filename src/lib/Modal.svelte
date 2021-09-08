<script lang="ts">
	import Box from './Box.svelte';
	import Panel from './Panel.svelte';
	import PanelContent from './PanelContent.svelte';
	import Stack from './Stack.svelte';
	import Text from './Text.svelte';
	import { clickOutside } from './utils';
	import { fade } from 'svelte/transition';
	import { tw } from 'twind';

	export let handleClose: () => void = undefined;
	export let description: string = undefined;
	export let header: string = undefined;
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			handleClose();
		}
	}}
/>

<div
	class={tw(
		'fixed h-screen w-screen z-20 left-0 top-0 bg-scorpion-900 bg-opacity-40 flex items-center justify-center'
	)}
	transition:fade={{ duration: 100 }}
>
	<div
		use:clickOutside={() => {
			handleClose();
		}}
		class={tw('max-w-md')}
	>
		<Panel class={tw('relative')} rounded>
			<PanelContent>
				<Stack direction="vertical">
					<Stack spacing={4} direction="vertical">
						{#if header}
							<Text level="h2">{header}</Text>
						{/if}

						{#if description}
							<Text>{description}</Text>
						{/if}
					</Stack>

					<Box>
						<slot />
					</Box>
				</Stack>
			</PanelContent>
		</Panel>
	</div>
</div>
