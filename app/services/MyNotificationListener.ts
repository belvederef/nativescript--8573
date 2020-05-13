import { Utils } from '@nativescript/core';

@JavaProxy('com.belvedere.MyNotificationListener')
class MyNotificationListener extends android.service.notification
  .NotificationListenerService {
  constructor() {
    super();
    return global.__native(this);
  }

  onBind(intent: android.content.Intent): android.os.IBinder {
    return super.onBind(intent);
  }

  onNotificationPosted(
    sbn: android.service.notification.StatusBarNotification,
  ): void {
    const notificationExtras = sbn.getNotification().extras;
    const notificationClass = android.app.Notification;

    // Might check also
    // notificationClass.EXTRA_TEXT_LINES,
    // notificationClass.EXTRA_INFO_TEXT),
    const notificationTitle = notificationExtras.getString(
      notificationClass.EXTRA_TITLE,
    );
    const notificationMessage = notificationExtras.getString(
      notificationClass.EXTRA_TEXT,
    );
    const intent = new android.content.Intent(
      'com.belvedere.app.readNotification',
    );
    intent.putExtra(
      'notification',
      JSON.stringify({
        title: notificationTitle,
        message: notificationMessage,
      }),
    );
    // const Utils = require('@nativescript/core').Utils;
    const context = Utils.android.getApplicationContext();
    context.sendBroadcast(intent);
  }

  onNotificationRemoved(
    sbn: android.service.notification.StatusBarNotification,
  ): void {
    // console.log('removed: ', sbn.toString());
  }
}
