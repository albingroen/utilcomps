<script lang="ts">
import { tw } from "twind";
import classNames from "./classNames";
import Spinner from "./Spinner.svelte";
export let color: "default" | "primary" | "warning" | "danger" = "default";
export let handleClick: () => void = undefined;
export let disabled: boolean = false;
export let loading: boolean = false;
export let block: boolean = false;

const buttonStyles = {
  base: "flex items-center justify-center space-x-2.5 relative border-none text-white text-sm rounded-md py-1 px-3 transition cursor-default focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  colors: {
    warning:
      "bg-yellow-500 active:bg-yellow-600 focus:bg-yellow-600 text-gray-900 disabled: bg-yellow-500",
    danger:
      "bg-red-600 bg-opacity-50 active:bg-opacity-75 focus:bg-opacity-75 disabled:bg-red-600",
    default:
      "bg-scorpion-500 active:bg-scorpion-400 focus:bg-scorpion-400 disabled:bg-scorpion-500",
    primary:
      "bg-blue-600 active:bg-blue-500 focus:bg-blue-500 disabled:bg-blue-600",
  },
  block: "w-full",
};
</script>

<button
  on:click="{() => {
    if (handleClick) {
      setTimeout(() => {
        handleClick();
      }, 0);
    }
  }}"
  class="{tw(
    classNames(
      buttonStyles.base,
      buttonStyles.colors[color],
      block && buttonStyles.block,
      $$props.class
    )
  )}"
  disabled="{disabled || loading}">
  <span>
    <slot />
  </span>
  {#if loading}
    <span>
      <Spinner />
    </span>
  {/if}
</button>
