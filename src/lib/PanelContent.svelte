<script lang="ts">
import { tw } from "twind";
import classNames from "./classNames";
</script>

<div {...$$props} class="{tw(classNames('p-6', $$props.class))}">
  <slot />
</div>
