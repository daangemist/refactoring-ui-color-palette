<script lang="ts">
  import Color from 'color';
  import { random, getTextColor, copyColor } from '../utils';

  export let storeColor;

  function randomize() {
    storeColor.set(
      new Color({
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
      })
    );
  }

  function setColor(event) {
    storeColor.set(new Color(event.target.value));
  }

  let shades: { color: Color; label: string }[] = [];
  $: shades = [
    { label: 'Lightest', color: $storeColor.lighten(0.3) },
    { label: 'Lightish', color: $storeColor.lighten(0.2) },
    { label: 'Light', color: $storeColor.lighten(0.1) },
    { label: 'Base', color: $storeColor },
    { label: 'Dark', color: $storeColor.darken(0.1) },
    { label: 'Darkish', color: $storeColor.darken(0.2) },
    { label: 'Darkest', color: $storeColor.darken(0.3) },
  ];
</script>

<div class="box">
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="control">
          <input class="input color" type="color" value={$storeColor.hex()} on:change={setColor} />
        </div>
      </div>
    </div>
    <div class="column">
      <button class="button" on:click={randomize}>🔀Randomize</button>
    </div>
  </div>
  <hr />
  <div class="columns">
    {#each shades as { color, label }}
      <div class="column has-text-centered has-text-weight-bold">
        <button
          class="button"
          style="background-color: {color.hex()}; color: {getTextColor(color)}"
          on:click={() => storeColor.set(color)}>{label}</button
        ><br /><a on:click={() => copyColor(color.hex())}>{color.hex()}</a>
      </div>
    {/each}
  </div>
</div>

<style>
  .color {
    width: 100px;
  }
</style>
