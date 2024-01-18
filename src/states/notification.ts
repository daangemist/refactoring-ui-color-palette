import { get, writable } from 'svelte/store';

export const notification = writable<string | undefined>(undefined);
const notificationTimeout = writable<number | undefined>(undefined);

notification.subscribe((value) => {
  const timeout = get(notificationTimeout);
  if (timeout) {
    clearTimeout(timeout);
  }

  if (!value) {
    return;
  }

  const newTimeout = setTimeout(() => {
    notification.set(undefined);
    notificationTimeout.set(undefined);
  }, 5000);
});
