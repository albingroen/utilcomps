<script lang="ts">
import { tw } from "twind";
import classNames from "./classNames";

type StackSpacing = "small" | "normal" | "large" | number;
type StackDirection = "horizontal" | "vertical";
type StackAlign = "stretch" | "center" | "start" | "end";
type StackJustify = "stretch" | "center" | "start" | "end" | "between";

export let spacing: StackSpacing = "normal";
export let direction: StackDirection = "horizontal";
export let justify: StackJustify = "stretch";
export let align: StackAlign = "stretch";

const s =
  typeof spacing === "number"
    ? `[${spacing}px]`
    : spacing === "normal"
    ? "4"
    : spacing === "large"
    ? "6"
    : "2";
</script>

<div
  class="{tw(
    classNames(
      `flex items-${align} justify-${justify}`,
      direction === 'horizontal'
        ? `flex-row space-x-${s}`
        : `flex-col space-y-${s}`,
      $$props.class
    )
  )}">
  <slot />
</div>
