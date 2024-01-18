import App from './components/app.svelte';

import 'bulma/css/bulma.css';

document.addEventListener('DOMContentLoaded', function () {
  new App({ target: document.getElementById('app') as HTMLElement });
});
