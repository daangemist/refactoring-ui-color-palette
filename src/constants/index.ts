export const greys = [
  '#21252A',
  '#343A40',
  '#495057',
  '#868E96',
  '#ADB5BD',
  '#CFD4DA',
  '#DEE2E6',
  '#EAEDEF',
  '#F1F3F5',
  '#F8F9FA',
] as const;

export const TEMPLATE = `:root {
  --primary-color: {{primary}};
  --accent-color: {{accent}};
  --text-color: #334155;
  --background-color: #ffffff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

a {
  color: var(--primary-color);
}

button {
  background-color: var(--accent-color);
  color: var(--text-color);
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: {{dark-primary}};
    --accent-color: {{dark-accent}};
    --text-color: #FFFFFF;
    --background-color: #111111;
  }
}`;
