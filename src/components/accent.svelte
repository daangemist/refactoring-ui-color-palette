<script lang="ts">
  import { accent } from '../states';
  import { random } from '../utils';
  import Color from './color.svelte';
</script>

<h2 class="subtitle">Accent color</h2>
<p>On top of primary colors, every site needs a few accent colors for communicating different things to the user.</p>
<p>For example, you might want to use an eye-grabbing color like yellow, pink, or teal to highlight a new feature.</p>

<Color storeColor={accent} />
