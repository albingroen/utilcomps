<script>
	import { tw } from 'twind';
	import classNames from './classNames';
</script>

<div class={tw(classNames('p-4', $$props.class))}>
	<slot />
</div>
