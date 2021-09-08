<script>
import Text from "./Text.svelte";
import { tw } from "twind";
</script>

<Text level="span" class="{tw('text-red-500')}">
  <slot />
</Text>
