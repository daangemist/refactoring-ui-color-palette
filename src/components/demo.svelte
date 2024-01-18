<script lang="ts">
  import { lightMode, darkMode } from '../states';
  import { greys } from '../constants';

  let enabledDarkMode: boolean = false;
  let modeColor = enabledDarkMode ? $darkMode : $lightMode;

  $: modeColor = enabledDarkMode ? $darkMode : $lightMode;
</script>

<div
  class="demo box is-full-width content"
  style="background-color: {modeColor.background.hex()}; color: {modeColor.text.hex()}"
>
  <div class="toggle">
    <button
      class="button"
      on:click={() => (enabledDarkMode = !enabledDarkMode)}
      style="background-color: {modeColor.accent.hex()}"
    >
      {enabledDarkMode ? '🌙' : '☀️'}
    </button>
  </div>
  <h1 class="title" style="color: {modeColor.text.hex()}">Demo of the selected primary and accent color.</h1>
  <div class="notification" style="background: {modeColor.primary.hex()}; color: {modeColor.primaryText.hex()}">
    This is some demo notification text, showing what it looks like when it is displayed.
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Quam quisque id diam vel quam elementum pulvinar. Quis commodo odio aenean sed adipiscing diam. Amet mauris
    commodo quis imperdiet massa. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Mattis enim ut
    tellus elementum sagittis. Sed vulputate mi sit amet mauris commodo quis imperdiet. Senectus et netus et malesuada
    fames. Erat velit scelerisque in dictum non consectetur a erat nam. Interdum velit euismod in pellentesque massa
    placerat duis ultricies lacus. Neque volutpat ac tincidunt vitae semper quis lectus nulla at.
  </p>
  <button
    class="button mt-2 mb-2"
    style="background-color: {modeColor.primary.hex()}; color: {modeColor.primaryText.hex()}"
    >Click me for primary actions!</button
  >
  <p>
    Suscipit adipiscing bibendum est ultricies integer. Iaculis nunc sed augue lacus viverra vitae. Cursus vitae congue
    mauris rhoncus. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Enim ut sem viverra aliquet eget.
    Diam volutpat commodo sed egestas egestas fringilla. Vitae suscipit tellus mauris a diam maecenas sed. Cursus
    euismod quis viverra nibh cras pulvinar mattis. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.
    Sed viverra ipsum nunc aliquet bibendum. Enim eu turpis egestas pretium aenean pharetra. Semper feugiat nibh sed
    pulvinar. Quis viverra nibh cras pulvinar. Tristique magna sit amet purus gravida quis blandit. Pellentesque
    pulvinar pellentesque habitant morbi tristique senectus. Ultrices tincidunt arcu non sodales neque sodales ut etiam
    sit. Sapien faucibus et molestie ac feugiat sed. Egestas congue quisque egestas diam in. Euismod elementum nisi quis
    eleifend quam adipiscing vitae.
  </p>
  <button
    class="button mb-2 mt-2"
    style="background-color: {modeColor.accent.hex()};color: {modeColor.accentText.hex()}">Accent activities</button
  >
  <div class="notification" style="background: {modeColor.accent.hex()}; color: {modeColor.accentText.hex()}">
    The same thing as the other notification, but now in the accent colors.
  </div>
</div>

<style>
  .demo {
    min-height: 300px;
    position: relative;
  }

  .toggle {
    position: absolute;
    right: 5px;
    top: 5px;
  }
</style>
