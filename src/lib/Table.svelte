<script lang="ts">
import { tw } from "twind";

import Text from "./Text.svelte";

interface TableColumn {
  render?: (row: any) => any;
  dataIndex?: string;
  header: string;
  component?: any;
}

type TableRow = Record<string, any>;

export let columns: TableColumn[] = [];
export let rows: TableRow[] = [];
</script>

<table class="{tw('divide-y divide-[#494949] rounded-md overflow-hidden')}">
  <thead class="{tw('bg-scorpion-600')}">
    <tr class="{tw('divide-x divide-[#494949]')}">
      {#each columns as column}
        <th
          scope="col"
          class="{tw('px-3 py-2 text-left font-normal tracking-wide')}">
          <Text>{column.header}</Text>
        </th>
      {/each}
    </tr>
  </thead>

  <tbody class="{tw('divide-y divide-[#494949]')}">
    {#each rows as row}
      <tr class="{tw('bg-scorpion-600 divide-x divide-[#494949]')}">
        {#each columns as column}
          <td
            class="{tw(
              'px-3 py-2 whitespace-nowrap text-sm text-gray-200 font-normal'
            )}">
            {#if column.component}
              <svelte:component this="{column.component}" row="{row}" />
            {:else if column.render}
              {column.render(row)}
            {:else}
              {row[column.dataIndex]}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
