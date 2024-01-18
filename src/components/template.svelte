<script lang="ts">
  import { template } from '../states';
</script>

<div class="template box is-full-width columns">
  <div class="column is-two-third">
    <textarea class="textarea" rows="15" bind:value={$template}></textarea>
  </div>
  <div class="column is-one-third variables">bbb</div>
</div>

<style>
  .template {
    min-height: 300px;
  }

  .variables {
    border-left: 1px solid #555555;
  }
</style>
