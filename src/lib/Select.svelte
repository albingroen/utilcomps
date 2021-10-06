<script lang="ts">
	import Button from './Button.svelte';
	import classNames from './classNames';
	import { fade } from 'svelte/transition';
	import { clickOutside } from './utils';
	import { tw } from 'twind';

	interface SelectOption {
		value: string;
		label: string;
	}

	export let handleChange: (value: any) => void = undefined;
	export let placeholder: string = undefined;
	export let options: SelectOption[] = [];
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let value: any = undefined;
	export let block: boolean = false;

	$: label = options.find((option) => option.value === value)?.label;

	let open: boolean = false;
</script>

<svelte:window
	on:keydown={(e) => {
		if (open && e.key === 'Escape') {
			open = false;
		}
	}}
/>

<div
	use:clickOutside={() => {
		if (open) {
			open = false;
		}
	}}
	class={tw(classNames('inline-block relative', block && 'block w-full', $$props.class))}
>
	<Button
		{disabled}
		{loading}
		{block}
		handleClick={() => {
			open = !open;
		}}
	>
		<span class={tw(classNames(!block && 'pr-6'))}>
			{label ?? placeholder ?? 'Select a option'}
		</span>
	</Button>

	{#if open}
		<div
			transition:fade={{ duration: 75 }}
			class={tw(
				'bg-scorpion-500 shadow-sm absolute min-w-full rounded-md overflow-hidden transform translate-y-2 z-10'
			)}
		>
			{#each options as option}
				<div
					tabindex={0}
					role="button"
					on:click={() => {
						handleChange(option.value);
						open = false;
					}}
					on:keydown={(e) => {
						if (e.key === ' ' || e.key === 'Enter') {
							handleChange(option.value);
							open = false;
						} else if (e.key === 'Escape') {
							open = false;
						}
					}}
					class={tw(
						classNames(
							'py-1 px-3 text-sm cursor-default text-white hover:bg-scorpion-400 focus:outline-none focus:bg-scorpion-400',
							option.value === value && 'bg-blue-500 hover:bg-blue-500 focus:bg-blue-500'
						)
					)}
				>
					{option.label}
				</div>
			{/each}
		</div>
	{/if}
</div>
