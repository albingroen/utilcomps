<script lang="ts">
	import { tw } from 'twind';

	import { Stack, Text } from '../lib';

	export let header: string;
</script>

<Stack class={tw('w-full')} direction="vertical">
	<Text>{header}</Text>

	<slot />
</Stack>
