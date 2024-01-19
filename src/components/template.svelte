<script lang="ts">
  import { template, lightMode, darkMode } from '../states';
  import slugify from 'slugify';
  import Color from 'color';
  import { getTextColor } from '../utils';
  import { setNotification } from '../actions';

  let lightColors: { label: string; color: Color }[] = [];
  let darkColors: { label: string; color: Color }[] = [];
  let textArea: HTMLTextAreaElement;

  $: lightColors = [
    { label: 'Primary Lightest', color: $lightMode.primary.lighten(0.3) },
    { label: 'Primary Lightish', color: $lightMode.primary.lighten(0.2) },
    { label: 'Primary Light', color: $lightMode.primary.lighten(0.1) },
    { label: 'Primary Base', color: $lightMode.primary },
    { label: 'Primary Dark', color: $lightMode.primary.darken(0.1) },
    { label: 'Primary Darkish', color: $lightMode.primary.darken(0.2) },
    { label: 'Primary Darkest', color: $lightMode.primary.darken(0.3) },
    { label: 'Accent Lightest', color: $lightMode.accent.lighten(0.1) },
    { label: 'Accent Lightish', color: $lightMode.accent.lighten(0.2) },
    { label: 'Accent Light', color: $lightMode.accent.lighten(0.3) },
    { label: 'Accent Base', color: $lightMode.accent },
    { label: 'Accent Dark', color: $lightMode.accent.darken(0.1) },
    { label: 'Accent Darkish', color: $lightMode.accent.darken(0.2) },
    { label: 'Accent Darkest', color: $lightMode.accent.darken(0.3) },
    { label: 'Text', color: $lightMode.text },
    { label: 'Background', color: $lightMode.background },
  ];
  $: darkColors = [
    { label: 'Primary Lightest', color: $darkMode.primary.lighten(0.3) },
    { label: 'Primary Lightish', color: $darkMode.primary.lighten(0.2) },
    { label: 'Primary Light', color: $darkMode.primary.lighten(0.1) },
    { label: 'Primary Base', color: $darkMode.primary },
    { label: 'Primary Dark', color: $darkMode.primary.darken(0.1) },
    { label: 'Primary Darkish', color: $darkMode.primary.darken(0.2) },
    { label: 'Primary Darkest', color: $darkMode.primary.darken(0.3) },
    { label: 'Accent Lightest', color: $darkMode.accent.lighten(0.3) },
    { label: 'Accent Lightish', color: $darkMode.accent.lighten(0.2) },
    { label: 'Accent Light', color: $darkMode.accent.lighten(0.1) },
    { label: 'Accent Base', color: $darkMode.accent },
    { label: 'Accent Dark', color: $darkMode.accent.darken(0.1) },
    { label: 'Accent Darkish', color: $darkMode.accent.darken(0.2) },
    { label: 'Accent Darkest', color: $darkMode.accent.darken(0.3) },
    { label: 'Text', color: $darkMode.text },
    { label: 'Background', color: $darkMode.background },
  ];

  function insertTextAtCursor(text: string) {
    const cursorPosition = textArea.selectionStart;
    const start = $template.slice(0, cursorPosition);
    const end = $template.slice(cursorPosition);

    template.set(`${start}${text}${end}`);
  }

  function generate() {
    let text = $template;
    for (const colorDefinition of [...lightColors, ...darkColors]) {
      text = text.replace(
        new RegExp(`\\[\\[${slugify(colorDefinition.label, { lower: true })}\\]\\]`, 'ig'),
        colorDefinition.color.hex()
      );
    }
    navigator.clipboard.writeText(text);
    setNotification('Copied template result to clipboard!');
  }
</script>

<h2 class="subtitle">Template / style generation</h2>
<p>
  Here you can write/insert a template and have the placeholders inside it replaced with the actual color. Use the
  buttons on the right to insert the respective placeholder inside the template.
</p>
<div class="template box is-full-width columns">
  <div class="column is-two-third is-relative">
    <button class="button copy is-primary is-small" on:click={generate}>Generate &amp; Copy</button>
    <textarea class="textarea" rows="25" bind:value={$template} bind:this={textArea}></textarea>
  </div>
  <div class="column is-one-third variables">
    <div class="columns">
      <div
        class="column is-half has-text-centered"
        style="background-color: {$lightMode.background.hex()};color: {$lightMode.text.hex()}"
      >
        <h3 class="title is-5" style="color: {$lightMode.text.hex()}">Light</h3>
        {#each lightColors as { label, color }}
          <button
            class="button is-fullwidth has-text-weight-bold mb-3"
            style={`background-color: ${color.hex()}; color: ${getTextColor(color)}`}
            on:click={() => insertTextAtCursor(`[[${slugify(label, { lower: true })}]]`)}
          >
            {label}
          </button>
        {/each}
      </div>
      <div class="column is-half has-text-centered" style="background-color: {$darkMode.background.hex()};">
        <h3 class="title is-5" style="color: {$darkMode.text.hex()}">Dark</h3>
        {#each darkColors as { label, color }}
          <button
            class="button is-fullwidth has-text-weight-bold mb-3"
            style={`background-color: ${color.hex()}; color: ${getTextColor(color)}`}
            on:click={() => insertTextAtCursor(`[[${slugify(label, { lower: true })}]]`)}
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .template {
    min-height: 300px;
  }

  .variables {
    border-left: 1px solid #555555;
  }

  .copy {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 100;
  }
</style>
