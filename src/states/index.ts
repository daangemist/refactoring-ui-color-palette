import { writable, get, derived } from 'svelte/store';
import Color from 'color';
import { random } from '../utils';
import { TEMPLATE, greys } from '../constants';
import throttle from 'lodash.throttle';

export { notification } from './notification';

const LOCAL_STORAGE_KEY_COLORS = 'stored-colors';
const LOCAL_STORAGE_KEY_TEMPLATE = 'stored-template';

type ColorMode = {
  primary: Color;
  primaryText: Color;
  accent: Color;
  accentText: Color;
  text: Color;
  background: Color;
};

type StoredColors = {
  primary: string | { r: number; g: number; b: number };
  accent: string | { r: number; g: number; b: number };
};

function readStoredColors(): StoredColors | null {
  return localStorage.getItem(LOCAL_STORAGE_KEY_COLORS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_COLORS) as string)
    : null;
}

function storeColors(primary: Color, accent: Color): void {
  localStorage.setItem(
    LOCAL_STORAGE_KEY_COLORS,
    JSON.stringify({
      primary: primary?.rgb().object(),
      accent: accent?.rgb().object(),
    })
  );
}

const storedValues: StoredColors = readStoredColors() ?? {
  primary: { r: random(0, 255), g: random(0, 255), b: random(0, 255) },
  accent: { r: random(0, 255), g: random(0, 255), b: random(0, 255) },
};

export const primary = writable<Color>(new Color(storedValues.primary));
export const accent = writable<Color>(new Color(storedValues.accent));

primary.subscribe((value) => {
  throttle(() => storeColors(value, get(accent)), 1000)();
});
accent.subscribe((value) => {
  throttle(() => storeColors(get(primary), value), 1000)();
});

export const lightMode = derived<[typeof primary, typeof accent], ColorMode>(
  [primary, accent],
  ([$primary, $accent]) => {
    return {
      primary: $primary,
      primaryText: $primary.isLight() ? new Color('#000000') : new Color('#ffffff'),
      accent: $accent,
      accentText: $accent.isLight() ? new Color('#000000') : new Color('#ffffff'),
      text: new Color('#000000'),
      background: new Color(greys[greys.length - 1]),
    };
  }
);
export const darkMode = derived<[typeof primary, typeof accent], ColorMode>(
  [primary, accent],
  ([$primary, $accent]) => {
    return {
      primary: $primary.negate(),
      primaryText: $primary.isLight() ? new Color('#000000') : new Color('#ffffff'),
      accent: $accent.negate(),
      accentText: $accent.isLight() ? new Color('#000000') : new Color('#ffffff'),
      text: new Color('#ffffff'),
      background: new Color(greys[0]),
    };
  }
);

export const template = writable<string>(localStorage.getItem(LOCAL_STORAGE_KEY_TEMPLATE) ?? TEMPLATE);
template.subscribe((value) => {
  throttle(() => localStorage.setItem(LOCAL_STORAGE_KEY_TEMPLATE, value), 1000)();
});
