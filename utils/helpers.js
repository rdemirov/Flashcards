import { Notifications, Permissions } from 'expo'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'Flashcards:notifications'

export const getPercentage = (part,total) => {
    if(part===0) return 0;
    else return (part*100)/total;
}

function createNotification () {
    return {
      title: 'Do a quiz',
      body: 'Please remember to study today',
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
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let initialNotificationDate = new Date()
                initialNotificationDate.setDate(initialNotificationDate.getDate()+1)
                initialNotificationDate.setHours(8)
                initialNotificationDate.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: initialNotificationDate,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }