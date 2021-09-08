<script lang="ts">
import { tw } from "twind";
import classNames from "./classNames";
import Stack from "./Stack.svelte";

export let label: string = undefined;
</script>

<Stack justify="between" align="center">
  {#if label}
    <label
      class="{tw('w-1/5 text-sm text-right text-scorpion-300')}"
      for="{$$props.id}">{label}{$$props.required ? "*" : ""}:</label>
  {/if}

  <input
    {...$$props}
    class="{tw(
      classNames(
        'bg-scorpion-700 border border-[#494949] rounded-md py-1 text-white px-2 placeholder-scorpion-500 text-sm focus:outline-none focus:border-scorpion-400',
        Boolean(label) && 'w-4/5',
        $$props.classNames
      )
    )}" />
</Stack>
