<script lang="ts">
  import { primary } from '../states';
  import Color from './color.svelte';
</script>

<h2 class="subtitle">Primary color</h2>
<p>
  Most sites need one, maybe two colors that are used for primary actions, emphasizing navigation elements, etc. These
  are the colors that determine the overall look of a site — the ones that make you think of Facebook as "blue", even
  though it's really mostly grey.
</p>
<Color storeColor={primary} />
