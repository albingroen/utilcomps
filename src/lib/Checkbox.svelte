<script lang="ts">
	import { tw } from 'twind';
	import Stack from './Stack.svelte';

	export let handleChange: (checked: boolean) => void = undefined;
	export let label: string = undefined;
</script>

<Stack spacing="small" align="center">
	<button
		on:click={() => handleChange(!$$props.checked)}
		class="container {tw(
			'focus:outline-none rounded-md border border-[#494949] focus:border-scorpion-400'
		)}"
	>
		<input {...$$props} class={tw('absolute opacity-0 h-0 w-0')} type="checkbox" />
		<div class={tw('h-5 w-5 flex items-center justify-center bg-scorpion-700 ')}>
			{#if $$props.checked}
				<div
					class={tw(
						'transform rotate-45 -translate-y-[1.5px] w-1.5 h-3 border-2 border-white border-l-0 border-t-0'
					)}
				/>
			{/if}
		</div>
	</button>

	{#if label}
		<label class={tw('text-sm text-scorpion-300')} for={$$props.id}
			>{label}{$$props.required ? '*' : ''}</label
		>
	{/if}
</Stack>
