<script lang="ts">
	import { tw } from 'twind';
	import classNames from './classNames';
	export let block: boolean = false;
</script>

<div
	class="ButtonGroup {tw(
		classNames(
			'inline-flex items-center rounded-md overflow-hidden',
			block && 'flex',
			$$props.class
		)
	)}"
>
	<slot />
</div>

<style>
	.ButtonGroup :global(button) {
		border-right: 1px solid #383838;
		border-radius: 0;
		display: block;
		flex: 1;
	}

	.ButtonGroup :global(button):last-child {
		border-right: none;
	}
</style>
