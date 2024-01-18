import Color from 'color';
import { setNotification } from '../actions';

// random between min and max
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getTextColor(color: Color) {
  return color.isDark() ? 'white' : 'black';
}

export function copyColor(color: string) {
  setNotification('Copied to clipboard.');
  navigator.clipboard.writeText(color);
}
