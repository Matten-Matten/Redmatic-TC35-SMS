# Redmatic-TC35-SMS
Subfow to send and receive SMS

![picture](https://cdn.shopify.com/s/files/1/1978/9859/products/img_3048_compact.jpg)

---

Forum: https://homematic-forum.de/forum/viewtopic.php?f=77&t=63796&p=628663#p628663

---

![picture](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/gifs/Modul%20Start.gif)
![picture](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/gifs/sms%20empfangen.gif)

---
## INPUT:

Input from Serial Modul

`msg.input` = `SERIAL_INPUT`

`msg.payload` = payload from Serial Modul

---
Start Connection to GSM Modul

`msg.input` = `START`

---
Stop Connection

`msg.input` = `STOP`

---
Reset TC35

`msg.input` = `RESET`

---
Send Message SMS

`msg.input` = `SEND_SMS`

`msg.payload` = {"number":"01741234567","message":"Nodered Test SMS"}

---
SMS via web API:

`http://`IP-Adresse der CCU`/addons/red/TC35sendSMS?number=`01741234567`&message=`Test Message

---
SMS Webinterface:

`http://`IP-Adresse der CCU`/addons/red/TC35`

---
## OUTPUT

 1. to Serial Modul
 2. Messenger_LetzterPruefStatus
 3. Messenger_LetzteSignalstaerke
 4. Messenger_Modus
 5. Messenger_LetzterSendeStatus
 6. Messenger_SMSEmfangAbsenderID
 7. Messenger_SMSEmfangText
 8. Messenger_Warteschlange

---

![picture](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/TC35%20GSM%20Modul%20Properties%20only.png)
![picture](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/TC35%20GSM%20Modul%201.png)
![picture](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/TC35%20GSM%20Modul-Webif.png)

---

### Changelog:

- V.1.1.0 - Add SIM PIN Show Support
- V.1.1.0 - correction Provider registration check

- V.1.0.2 - Add SMS API Input

- V.1.0.1 - first publication
