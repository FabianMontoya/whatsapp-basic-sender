import { notification } from 'ant-design-vue';
import type { NotificationInstance } from 'ant-design-vue/lib/notification';

export const antNotification = notification;
export const openNotificationWithIcon = (type: keyof NotificationInstance, message: string, description: string) => {
  notification[type]({
    message,
    description
  });
};

export const getStaticAssetUrl = (path: string): string => new URL(`../../assets/${path}`, import.meta.url).href;

export default {};
