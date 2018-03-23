import { Notifications, Permissions } from 'expo'
import { NOTIFICATION_KEY } from './keys'
import { AsyncStorage } from 'react-native'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Learn your cards!',
    body: "👋 don't forget to learn your cards for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        return Permissions.askAsync(Permissions.NOTIFICATIONS) 
      }
    })
    .then(({ status }) => {
      if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync()

        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(12)
        tomorrow.setMinutes(0)

        Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time: tomorrow,
            repeat: 'day',
          }
        )

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
      }
    })
}