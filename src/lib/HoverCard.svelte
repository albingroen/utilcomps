<script lang="ts">
	import classNames from './classNames';
	import { fade } from 'svelte/transition';
	import { tw } from 'twind';

	export let align: 'left' | 'center' | 'right' = 'center';
	export let trigger: any;
	let hovering = false;
</script>

<div
	on:mouseleave={() => {
		if (hovering) {
			hovering = false;
		}
	}}
	class={tw('relative')}
	style="max-width: max-content;"
>
	<div
		on:click={() => {
			if (hovering) {
				hovering = false;
			}
		}}
		on:mouseenter={() => {
			if (!hovering) {
				hovering = true;
			}
		}}
	>
		<svelte:component this={trigger} />
	</div>

	{#if hovering}
		<div
			out:fade={{ duration: 75, delay: 200 }}
			in:fade={{ duration: 75, delay: 750 }}
			class={tw(
				classNames(
					'absolute w-96 z-10 transform',
					align === 'center' && 'left-1/2 -translate-x-1/2',
					align === 'right' && 'right-0'
				)
			)}
		>
			<slot />
		</div>
	{/if}
</div>
