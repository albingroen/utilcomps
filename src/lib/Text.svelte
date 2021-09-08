<script lang="ts">
import { tw } from "twind";
import classNames from "./classNames";

type TextLevel = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export let level: TextLevel = "p";
</script>

{#if level === "p"}
  <p
    {...$$props}
    class="{tw(
      classNames('text-sm leading-relaxed text-scorpion-300', $$props.class)
    )}">
    <slot />
  </p>
{:else if level === "span"}
  <span {...$$props}>
    <slot />
  </span>
{:else if level === "h1"}
  <h1
    {...$$props}
    class="{tw(classNames('text-xl text-white', $$props.class))}">
    <slot />
  </h1>
{:else if level === "h2"}
  <h2
    {...$$props}
    class="{tw(classNames('text-lg text-white'), $$props.class)}">
    <slot />
  </h2>
{:else if level === "h3"}
  <h3
    {...$$props}
    class="{tw(classNames('text-base text-white', $$props.class))}">
    <slot />
  </h3>
{:else if level === "h4"}
  <h4
    {...$$props}
    class="{tw(classNames('text-sm text-white', $$props.class))}">
    <slot />
  </h4>
{:else if level === "h5"}
  <h5
    {...$$props}
    class="{tw(classNames('text-xs text-white', $$props.class))}">
    <slot />
  </h5>
{:else if level === "h6"}
  <h6
    {...$$props}
    class="{tw(classNames('text-2xs text-white', $$props.class))}">
    <slot />
  </h6>
{/if}
