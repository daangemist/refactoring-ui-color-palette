<script lang="ts">
  import { greys } from '../constants';
  import Color from 'color';
  import { getTextColor, copyColor } from '../utils';

  // divide the greys into columns, 6 width
  const greysByColumn = greys.reduce((acc, curr, i) => {
    const col = Math.floor(i / 5);
    if (!acc[col]) {
      acc[col] = [];
    }
    acc[col].push(new Color(curr));
    return acc;
  }, []);
</script>

<h2 class="subtitle">Greys</h2>
<p>Text, backgrounds, panels, form controls — almost everything in an interface is grey.</p>
<div class="box">
  {#each greysByColumn as column}
    <div class="columns">
      {#each column as grey}
        <div class="column is-one-fifth">
          <button
            class="button is-rounded is-fullwidth has-text-weight-bold"
            style={`background-color: ${grey.hex()}; color: ${getTextColor(grey)}`}
            on:click={() => copyColor(grey.hex())}
          >
            {grey.hex()}
          </button>
        </div>
      {/each}
    </div>
  {/each}
</div>
