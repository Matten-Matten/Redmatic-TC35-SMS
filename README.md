# Redmatic-TC35-SMS
Subfow to send and receive SMS

![Logo](https://cdn.shopify.com/s/files/1/1978/9859/products/img_3048_compact.jpg)

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

![Logo](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/TC35%20GSM%20Modul%20Properties%20only.png)
![Logo](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/TC35%20GSM%20Modul%201.png)
![Logo](https://raw.githubusercontent.com/Matten-Matten/Redmatic-TC35-SMS/main/TC35%20GSM%20Modul-Webif.png)
