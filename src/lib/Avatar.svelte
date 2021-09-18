<script lang="ts">
	import classNames from './classNames';
	import { tw } from 'twind';

	export let size: 'small' | 'default' | 'large' = 'default';
	export let shape: 'square' | 'round' = 'square';

	const avatarStyles = {
		base: 'object-center object-fit',
		size: {
			default: 'w-10 h-10 rounded-md',
			small: 'h-8 w-8 rounded-md',
			large: 'h-12 w-12 rounded-lg'
		}
	};
</script>

<img
	{...$$props}
	alt={$$props.alt}
	class={tw(
		classNames(
			avatarStyles.base,
			avatarStyles.size[size],
			shape === 'round' && '!rounded-full',
			$$props.class
		)
	)}
/>
