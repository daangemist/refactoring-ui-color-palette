import { notification } from '../states';

export function setNotification(message: string) {
  notification.set(message);
}
