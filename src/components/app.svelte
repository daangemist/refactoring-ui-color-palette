<script lang="ts">
  import Accent from './accent.svelte';
  import Demo from './demo.svelte';
  import Greys from './greys.svelte';
  import Notification from './notification.svelte';
  import Primary from './primary.svelte';
  import Template from './template.svelte';
</script>

<Notification />
<section class="section">
  <div class="container">
    <h1 class="title">Refactoring UI - Color Palette</h1>
    <p>
      This tool is in no way affiliated with Refactoring UI or its authors. It's based on this Refactoring UI preview
      post: <a href="https://www.refactoringui.com/previews/building-your-color-palette" target="_blank" rel="noreferer"
        >Building Your Color Palette</a
      >.
    </p>
    <Greys />
    <Primary />
    <Accent />
    <Demo />
    <Template />
  </div>
</section>
