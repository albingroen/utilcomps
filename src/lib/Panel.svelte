<script lang="ts">
	import { tw } from 'twind';
	import classNames from './classNames';

	export let rounded: boolean = false;
</script>

<div
	{...$$props}
	class={tw(
		classNames(
			'bg-scorpion-600 divide-y divide-[#494949] border border-[#494949]',
			rounded && 'rounded-md',
			$$props.class
		)
	)}
>
	<slot />
</div>
