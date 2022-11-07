
<script>
// import { onBackgroundMessage } from "firebase/messaging/sw";
import { onMessage } from "firebase/messaging";
import { getToken } from 'firebase/messaging'

export default {
  name: 'NotificationService',

  create() {
    console.log('firebawse, oemnoasef', this.$messaging)
  },
  mounted() {

    onMessage(this.$messaging, (payload) => {
      console.log('frontend push', payload);
      // eslint-disable-next-line no-unused-vars
      const notification = new Notification(payload.notification.title, { body: payload.notification.body });
    })

  },
  methods: {
    async setNotificationToken() {
      Notification.requestPermission().then((getperm) => {
        if (getperm === "granted") {
          console.log('Notification permission granted.');

          // eslint-disable-next-line no-unused-vars

          // Get Token
          getToken(this.$messaging, { vapidKey: 'BLOjYR6_W7SCWT3iloqWTuZjHdesGtTTdr4zVWU0JjeyebtKGl1exIL7f3nIqy6pZDTLTD-o0bTEdAYYGA-Qm_0' })
            .then((currentToken) => {
              if (currentToken) {
                console.log('current token for client: ', currentToken);
                // axios.put('Utenti/idUtente', { ...utente, notificationToken: currentToken })
                localStorage.setItem('FCMToken', currentToken.toString());


                //POST APIENDPOINT TO SET NOTIFICATION TOKEN
                // ApiService.post('Notification/SetToken', {
                //   token: currentToken.toString()
                // }).then((res) => {
                //   // const data = res.data;
                // });

                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
              } else {
                console.log('No registration token available. Request permission to generate one.');

                // shows on the UI that permission is required
              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
              // catch error while creating client token
            });
        } else {
          console.log('Permission to notify not granted');
        }
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
  },
}
</script>