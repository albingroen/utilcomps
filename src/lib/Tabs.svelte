<script lang="ts">
import Text from "./Text.svelte";
import { tw } from "twind";
import classNames from "./classNames";
import Stack from "./Stack.svelte";

interface Tab {
  header: string;
  key: string;
}

export let handleChange: (key: string) => void = undefined;
export let tabs: Tab[] = [];

export let activeTab: string = undefined;
</script>

<Stack>
  <slot />

  <div>
    {#each tabs as tab}
      <div
        on:click="{() => {
          if (handleChange) {
            handleChange(tab.key);
          }
        }}"
        role="button">
        <Text
          class="{tw(
            classNames(
              'cursor-default hover:text-white hover:opacity-100 transition py-2.5 px-1.5',
              activeTab === tab.key ? 'bg-scorpion-600' : 'bg-[#323232]'
            )
          )}"
          style="writing-mode: vertical-rl;">{tab.header}</Text>
      </div>
    {/each}
  </div>
</Stack>
