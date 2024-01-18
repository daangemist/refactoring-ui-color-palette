<script lang="ts">
  import { notification } from '../states';
</script>

{#if $notification}
  <div class="notification is-success">
    <button class="delete" on:click={() => notification.set(undefined)}></button>
    {$notification}
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
  }
</style>
