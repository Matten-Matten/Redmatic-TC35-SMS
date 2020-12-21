[
    {
        "id": "ebecf65.ff5b608",
        "type": "subflow",
        "name": "TC35 GSM Modul",
        "info": "![Logo](https://cdn.shopify.com/s/files/1/1978/9859/products/img_3048_compact.jpg)\n\n# TC35 GSM Modul Subflow\n\n---\n## INPUT:\n\nInput from Serial Modul\n\n`msg.input` = `SERIAL_INPUT`\n\n`msg.payload` = payload from Serial Modul\n\n---\nStart Connection to GSM Modul\n\n`msg.input` = `START`\n\n---\nStop Connection\n\n`msg.input` = `STOP`\n\n---\nReset SIM800\n\n`msg.input` = `RESET`\n\n---\nSend Message SMS\n\n`msg.input` = `SEND_SMS`\n\n`msg.payload` = {\"number\":\"01741234567\",\"message\":\"Nodered Test SMS\"}\n\n---\n## OUTPUT\n\n 1. to Serial Modul\n 2. Messenger_LetzterPruefStatus\n 3. Messenger_LetzteSignalstaerke\n 4. Messenger_Modus\n 5. Messenger_LetzterSendeStatus\n 6. Messenger_SMSEmfangAbsenderID\n 7. Messenger_SMSEmfangText\n 8. Messenger_Warteschlange",
        "category": "SMS",
        "in": [
            {
                "x": 380,
                "y": 3400,
                "wires": [
                    {
                        "id": "b3b39815.6ee6d8"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 380,
                "y": 3460,
                "wires": [
                    {
                        "id": "b5f9e123.56d4e",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1580,
                "y": 200,
                "wires": [
                    {
                        "id": "91902959.f926a8",
                        "port": 0
                    },
                    {
                        "id": "a77e9ae7.81e098",
                        "port": 0
                    },
                    {
                        "id": "19ee5260.1c2c6e",
                        "port": 0
                    },
                    {
                        "id": "f97dd876.f0d5c8",
                        "port": 0
                    },
                    {
                        "id": "45e181e2.ac083",
                        "port": 0
                    },
                    {
                        "id": "dbe6c2cb.10c3b",
                        "port": 0
                    },
                    {
                        "id": "a15957e5.549c58",
                        "port": 0
                    },
                    {
                        "id": "910bdeca.2371d",
                        "port": 0
                    },
                    {
                        "id": "234ee791.332b78",
                        "port": 0
                    },
                    {
                        "id": "4f8eeb26.61deb4",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1540,
                "y": 1480,
                "wires": [
                    {
                        "id": "44338a78.f84504",
                        "port": 0
                    },
                    {
                        "id": "f9fc1e5c.b780e",
                        "port": 0
                    },
                    {
                        "id": "4978f7a2.dbfc18",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1540,
                "y": 1600,
                "wires": [
                    {
                        "id": "b0301b0a.d1cce8",
                        "port": 0
                    },
                    {
                        "id": "4c949c0b.dac5f4",
                        "port": 0
                    },
                    {
                        "id": "5f69e3c6.dcb4bc",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2540,
                "wires": [
                    {
                        "id": "f5b615a5.25bbb8",
                        "port": 0
                    },
                    {
                        "id": "7e1e939e.b2030c",
                        "port": 0
                    },
                    {
                        "id": "bcb1005e.f25b8",
                        "port": 0
                    },
                    {
                        "id": "c21b67b8.8ea938",
                        "port": 0
                    },
                    {
                        "id": "db17b742.2541b8",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2200,
                "wires": [
                    {
                        "id": "1d037572.91a44b",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2280,
                "wires": [
                    {
                        "id": "4193a5c3.6129fc",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2860,
                "wires": [
                    {
                        "id": "70830f32.86b73",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [
            {
                "name": "",
                "type": "str",
                "value": "TC35",
                "ui": {
                    "icon": "font-awesome/fa-signal",
                    "label": {
                        "en-US": "TC35 GSM Modul Subflow - to send and receive SMS."
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "SERIAL",
                "type": "str",
                "value": "/dev/USB0",
                "ui": {
                    "icon": "font-awesome/fa-compress",
                    "label": {
                        "en-US": "Serial"
                    },
                    "type": "input",
                    "opts": {
                        "types": [
                            "str"
                        ]
                    }
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "text",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Wenn PIN deaktiviert, einfach leer lassen!"
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "PIN",
                "type": "str",
                "value": "",
                "ui": {
                    "icon": "font-awesome/fa-unlock-alt",
                    "label": {
                        "en-US": "PIN ****"
                    },
                    "type": "input",
                    "opts": {
                        "types": [
                            "str"
                        ]
                    }
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "text",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Startet bei Systemstart oder Deploy automatisch"
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "AUTOSTART",
                "type": "bool",
                "value": "false",
                "ui": {
                    "icon": "font-awesome/fa-history",
                    "label": {
                        "en-US": "Auto Start"
                    },
                    "type": "checkbox",
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "Version",
                "ui": {
                    "label": {
                        "en-US": "Version 1.0.1"
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "DEBUG",
                "type": "bool",
                "value": "false",
                "ui": {
                    "icon": "font-awesome/fa-bug",
                    "label": {
                        "en-US": "Debug"
                    },
                    "type": "checkbox",
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "http://IP-Adresse/addons/red/TC35",
                "ui": {
                    "icon": "font-awesome/fa-info",
                    "label": {
                        "en-US": "Webinterface:   http://{IP-Adresse}/addons/red/TC35"
                    },
                    "type": "none",
                    "opts": {}
                }
            }
        ],
        "color": "#FFCC66",
        "inputLabels": [
            "SERIAL INPUT"
        ],
        "outputLabels": [
            "SERIAL OUTPUT",
            "Messenger_LetzterPruefStatus",
            "Messenger_LetzteSignalstaerke",
            "Messenger_Modus",
            "Messenger_LetzterSendeStatus",
            "Messenger_SMSEmfangAbsenderID",
            "Messenger_SMSEmfangText",
            "Messenger_Warteschlange"
        ],
        "icon": "font-awesome/fa-signal",
        "status": {
            "x": 380,
            "y": 3520,
            "wires": [
                {
                    "id": "6588523.61cdfac",
                    "port": 0
                }
            ]
        }
    },
    {
        "id": "58dbbe07.4dc0d",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "+ \\r",
        "func": "var at_cmd = msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1130,
        "y": 120,
        "wires": [
            [
                "bd459f7a.ea414",
                "6e489b8a.6edef4"
            ]
        ]
    },
    {
        "id": "d28d93b0.81891",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+ cmd \"\\r\"",
        "func": "var at_cmd = \"AT+\"+msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1330,
        "y": 2360,
        "wires": [
            [
                "55b12a6e.aaf824"
            ]
        ]
    },
    {
        "id": "45adb5a0.b20cac",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "10 Sekunden bis zum vollständigen Einloggen beim Provider warten",
        "info": "",
        "x": 640,
        "y": 1260,
        "wires": []
    },
    {
        "id": "f5dba6c6.01bb28",
        "type": "exec",
        "z": "ebecf65.ff5b608",
        "command": "stty -F ",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "/dev/ttyUSBx",
        "x": 1270,
        "y": 3460,
        "wires": [
            [
                "d6a03ecd.d64ae"
            ],
            [
                "d6a03ecd.d64ae"
            ],
            []
        ]
    },
    {
        "id": "d6a03ecd.d64ae",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "SET BAUD",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1490,
        "y": 3460,
        "wires": []
    },
    {
        "id": "7437d0af.247a8",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "#Gelesene SMS löschen",
        "topic": "settings",
        "payload": "CMGD=1",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 1070,
        "y": 2360,
        "wires": [
            [
                "d28d93b0.81891"
            ]
        ]
    },
    {
        "id": "d1e3a4e7.1653f8",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "CMGL/CMGD",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CMGL:",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "AT+CMGD=",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 420,
        "y": 2220,
        "wires": [
            [
                "1d037572.91a44b"
            ],
            [
                "a5a13719.3b72a8"
            ]
        ]
    },
    {
        "id": "1d037572.91a44b",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "SMS_INDEX",
        "func": "var incommingSMS = msg.payload.split(\",\");\nvar SMSindex = parseFloat((incommingSMS[0]).replace(\"+CMGL: \", ''));\nmsg.payload = (incommingSMS[2]).replace(/\"/g, '');\nflow.set('SMS_INPUT',true);\nflow.set('SMS_INDEX',SMSindex);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 2200,
        "wires": [
            [
                "23db24b.0f355dc"
            ]
        ]
    },
    {
        "id": "7a3ee96e.427e28",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "d": true,
        "name": "SetInitalVar",
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 1910,
        "y": 320,
        "wires": [
            [
                "3a4d8ca.2f49c74"
            ]
        ]
    },
    {
        "id": "3a4d8ca.2f49c74",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "SetVar",
        "func": "flow.set('SMS_INPUT',false);\nflow.set('SMS_Delete',false);\nflow.set('SMS_SEND',false);\n\nflow.set('GSM_CMEE',false);\nflow.set('GSM_CMGF',false);\nflow.set('GSM_PING',false);\nflow.set('SMS_SEND',false);\n\nflow.set('GSM_POLL',false);",
        "outputs": 1,
        "noerr": 0,
        "x": 2070,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "81cf25f1.288208",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "Nummer",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1120,
        "y": 2180,
        "wires": []
    },
    {
        "id": "ab8e0c54.1fd2e",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "SMS Input",
        "property": "SMS_INPUT",
        "propertyType": "flow",
        "rules": [
            {
                "t": "false"
            },
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 210,
        "y": 2260,
        "wires": [
            [
                "d1e3a4e7.1653f8"
            ],
            [
                "eb75cf82.7e708"
            ]
        ]
    },
    {
        "id": "eb75cf82.7e708",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "SMS_Delete",
        "func": "msg.payload = msg.payload;\nflow.set('SMS_INPUT',false);\nflow.set('SMS_Delete',true);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 2300,
        "wires": [
            [
                "8f1fe2b3.c7ec9",
                "4193a5c3.6129fc"
            ]
        ]
    },
    {
        "id": "8183c92.bfa5c38",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "Text",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1130,
        "y": 2260,
        "wires": []
    },
    {
        "id": "82fb80c3.a9094",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "Index NR",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1120,
        "y": 2320,
        "wires": []
    },
    {
        "id": "8f1fe2b3.c7ec9",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "SMS_INDEX",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 2320,
        "wires": [
            [
                "6a43ead2.eee5a4",
                "2df84e4d.808cd2"
            ]
        ]
    },
    {
        "id": "a6ce489c.2a2af8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+ CMGD= \"\\r\"",
        "func": "var at_cmd = \"AT+CMGD=\"+msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 2400,
        "wires": [
            [
                "80b17093.02a7c"
            ]
        ]
    },
    {
        "id": "a5a13719.3b72a8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_Delete",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 2240,
        "wires": [
            []
        ]
    },
    {
        "id": "6a43ead2.eee5a4",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "SMS Input",
        "property": "SMS_Delete",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 170,
        "y": 2400,
        "wires": [
            [
                "ae1efb47.cd3238"
            ]
        ]
    },
    {
        "id": "c39d1219.3bb36",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "+CMTI:",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CMTI:",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 2080,
        "wires": [
            [
                "8976d0b.17fbd3",
                "ecb6e849.21bf28",
                "5b26b7e6.951128"
            ]
        ]
    },
    {
        "id": "5b26b7e6.951128",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+ CMGL=\"ALL\" \"\\r\"",
        "func": "var index = msg.payload.split(\",\");\nindex = parseFloat(index[1]);\n\n\n\n\nvar at_cmd = 'AT+CMGL=\"ALL\"'/* + index*/;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 2080,
        "wires": [
            [
                "1613cc9a.bc2983"
            ]
        ]
    },
    {
        "id": "1f092110.46884f",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "sende sms",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMGS=",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "> ",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "+CMGS: ",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "ERROR",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 5,
        "x": 230,
        "y": 2620,
        "wires": [
            [
                "926069ce.02b038"
            ],
            [
                "70830f32.86b73"
            ],
            [
                "a85fe6d7.9ed658"
            ],
            [
                "a85fe6d7.9ed658"
            ],
            [
                "ff8482a3.d96c3"
            ]
        ]
    },
    {
        "id": "dcf53d31.d81e5",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "SEND SMS",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1390,
        "y": 2740,
        "wires": []
    },
    {
        "id": "a85fe6d7.9ed658",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "",
        "property": "SMS_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 2600,
        "wires": [
            [
                "3c08c40d.32a38c",
                "7c286be2.acfa14"
            ]
        ]
    },
    {
        "id": "926069ce.02b038",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 460,
        "y": 2540,
        "wires": [
            [
                "602d9973.c386c8"
            ]
        ]
    },
    {
        "id": "3c08c40d.32a38c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 2600,
        "wires": [
            [
                "86c7169.cb4a7e8"
            ]
        ]
    },
    {
        "id": "ff8482a3.d96c3",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "",
        "property": "SMS_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 2680,
        "wires": [
            [
                "b051cce8.0b859",
                "7c286be2.acfa14"
            ]
        ]
    },
    {
        "id": "b051cce8.0b859",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 2680,
        "wires": [
            [
                "9b8abea4.600fd"
            ]
        ]
    },
    {
        "id": "ecec2346.85a96",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "+CSQ: ",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CSQ: ",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 190,
        "y": 1500,
        "wires": [
            [
                "b22195dd.868698"
            ]
        ]
    },
    {
        "id": "b22195dd.868698",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Signalstärke",
        "func": "var signal = msg.payload.split(\",\");\nsignal = parseFloat((signal[0]).replace(\"+CSQ: \", ''));\n\nif (signal < 2) {\n\tmsg.payload = 1;\n\treturn msg;\n}\nelse if (signal >= 2 && signal <=9) {\n\tmsg.payload = 2;\n\treturn msg;\n}\nelse if (signal >= 10 && signal <=14) {\n\tmsg.payload = 3;\n\treturn msg;\n}\nelse if (signal >= 15 && signal <=19) {\n\tmsg.payload = 4;\n\treturn msg;\n}\nelse if (signal >= 20) {\n\tmsg.payload = 5;\n\treturn msg;\n}\nelse if (signal === 99) {\n\tmsg.payload = 99;\n\treturn msg;\n} else {\n\tmsg.payload = 0;\n\treturn msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 1500,
        "wires": [
            [
                "44338a78.f84504",
                "e1058056.6a3b5",
                "2bd9be29.f9f612"
            ]
        ]
    },
    {
        "id": "a482c1f4.fa2d8",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "GSM Signal Stärke",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1210,
        "y": 1500,
        "wires": []
    },
    {
        "id": "9a031f19.a67d7",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "+CREG:",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CREG:",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 1320,
        "wires": [
            [
                "4bf058eb.974268"
            ]
        ]
    },
    {
        "id": "4bf058eb.974268",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "angemeldet",
        "func": "var signal = msg.payload.split(\",\");\nsignal = parseFloat(signal[1]);\n\nif (signal === 5/* || signal === 1*/) {\n\tmsg.payload = true;\n\treturn msg;\n} else {\n\tmsg.payload = false;\n\treturn msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 1320,
        "wires": [
            [
                "5e1eacbd.ac4374"
            ]
        ]
    },
    {
        "id": "5ea67b1f.4c0184",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "bei Mobilfunkprovider angemeldet",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1160,
        "y": 1300,
        "wires": []
    },
    {
        "id": "adcd3971.885338",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "60s nach Reset",
        "pauseType": "delay",
        "timeout": "60",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 900,
        "y": 1340,
        "wires": [
            [
                "ad56a4bc.cde7e8"
            ]
        ]
    },
    {
        "id": "ad56a4bc.cde7e8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CREG? \"\\r\"",
        "func": "var at_cmd = \"AT+CREG?\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1340,
        "wires": [
            [
                "2ff9846.355ef7c"
            ]
        ]
    },
    {
        "id": "5e1eacbd.ac4374",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "true false",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 580,
        "y": 1320,
        "wires": [
            [
                "85c40.1e5843c1",
                "45e181e2.ac083",
                "88a044ef.0c3fd8"
            ],
            [
                "dbe6c2cb.10c3b",
                "6439a33c.f558cc"
            ]
        ]
    },
    {
        "id": "95d0a6cd.9bde48",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "== AT",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "T",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 170,
        "y": 260,
        "wires": [
            [
                "5b7319d.ed051e8"
            ],
            []
        ]
    },
    {
        "id": "5b7319d.ed051e8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "f89f28d1.f95038",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_PING",
        "property": "GSM_PING",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "eq",
                "v": "true",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 330,
        "y": 280,
        "wires": [
            [
                "af4c92a5.1a9df"
            ],
            [
                "af4c92a5.1a9df"
            ]
        ]
    },
    {
        "id": "af4c92a5.1a9df",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 510,
        "y": 280,
        "wires": [
            [
                "3ac6acda.efb424",
                "ba138219.92006",
                "9ad76c81.3118c",
                "f1d466d7.3cefd8"
            ],
            []
        ]
    },
    {
        "id": "3ac6acda.efb424",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 690,
        "y": 200,
        "wires": [
            [
                "674ee4ce.21f28c"
            ]
        ]
    },
    {
        "id": "b8fb445b.296688",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "GSM PING",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1230,
        "y": 200,
        "wires": []
    },
    {
        "id": "da8120b1.9e90e",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "6",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 520,
        "y": 160,
        "wires": [
            [
                "6c34f01d.3117"
            ]
        ]
    },
    {
        "id": "6c34f01d.3117",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "NOT OK",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "NOT OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 160,
        "wires": [
            [
                "674ee4ce.21f28c",
                "91902959.f926a8",
                "ee03d2dc.bd999"
            ]
        ]
    },
    {
        "id": "ba138219.92006",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 180,
        "wires": [
            [
                "da8120b1.9e90e"
            ]
        ]
    },
    {
        "id": "740dcb44.e19724",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "1. START",
        "info": "",
        "x": 60,
        "y": 80,
        "wires": []
    },
    {
        "id": "7897df6d.9b4a6",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CMEE=2 \"\\r\"",
        "func": "var at_cmd = \"AT+CMEE=2\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 640,
        "wires": [
            [
                "4eff93be.07023c"
            ]
        ]
    },
    {
        "id": "25669454.d3a5bc",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "AT+CMEE=2",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMEE=2",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 680,
        "wires": [
            [
                "7a70c38b.dc866c"
            ]
        ]
    },
    {
        "id": "9abd738e.fd6f1",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CMGF=1 \"\\r\"",
        "func": "var at_cmd = \"AT+CMGF=1\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 860,
        "wires": [
            [
                "dd82aa62.2b47e8"
            ]
        ]
    },
    {
        "id": "7a70c38b.dc866c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "be95eabc.f1bf98",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_CMEE",
        "property": "GSM_CMEE",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 720,
        "wires": [
            [
                "28b3fdd9.84b962"
            ]
        ]
    },
    {
        "id": "28b3fdd9.84b962",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 720,
        "wires": [
            [
                "ef78a0f2.ce807",
                "c8e6b4c7.d89228"
            ],
            [
                "a77e9ae7.81e098"
            ]
        ]
    },
    {
        "id": "ef78a0f2.ce807",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 680,
        "wires": [
            [
                "216be3b0.dff3ec",
                "3309ef8.3916d1"
            ]
        ]
    },
    {
        "id": "26045dc4.78c202",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "AT+CMGF=1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMGF=1",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 900,
        "wires": [
            [
                "d7d9ec3d.73118"
            ]
        ]
    },
    {
        "id": "d7d9ec3d.73118",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "5e072b60.57bdc4",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_CMGF",
        "property": "GSM_CMGF",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 940,
        "wires": [
            [
                "5634d7c0.7e7368"
            ]
        ]
    },
    {
        "id": "5634d7c0.7e7368",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 940,
        "wires": [
            [
                "a80f2f40.d1a02",
                "dd20e940.3db758"
            ],
            [
                "19ee5260.1c2c6e"
            ]
        ]
    },
    {
        "id": "a80f2f40.d1a02",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 900,
        "wires": [
            [
                "874e3038.04586",
                "58f18366.c0034c"
            ]
        ]
    },
    {
        "id": "276e93b3.82ba5c",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CPIN? \"\\r\"",
        "func": "var at_cmd = \"AT+CPIN?\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1020,
        "wires": [
            [
                "eee63c6d.2225f"
            ]
        ]
    },
    {
        "id": "84563816.eb3078",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "+CPIN: READY",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CPIN: READY",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 460,
        "y": 1140,
        "wires": [
            [
                "8883ac57.ee28e",
                "f4c3830f.4cc0c"
            ],
            [
                "f97dd876.f0d5c8"
            ]
        ]
    },
    {
        "id": "8883ac57.ee28e",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "10",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 190,
        "y": 1260,
        "wires": [
            [
                "7ae2f0ec.f3e2d"
            ]
        ]
    },
    {
        "id": "7ae2f0ec.f3e2d",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CREG? \"\\r\"",
        "func": "var at_cmd = \"AT+CREG?\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1260,
        "wires": [
            [
                "2ff9846.355ef7c"
            ]
        ]
    },
    {
        "id": "c5dfea6f.b7c008",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "Extended Errormessage aktiv",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1230,
        "y": 680,
        "wires": []
    },
    {
        "id": "98879e4f.dd2f2",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "TC35 in SMS-Textmodus versetzt",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1220,
        "y": 900,
        "wires": []
    },
    {
        "id": "e0c0177b.4fdb88",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "Sim PIN ok, warte 10 sec.",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1130,
        "y": 1100,
        "wires": []
    },
    {
        "id": "34976a9a.6d27f6",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CFUN=1,1 \"\\r\"",
        "func": "var at_cmd = \"AT+CFUN=1,1\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 1740,
        "wires": [
            [
                "5ba82dba.f60664"
            ]
        ]
    },
    {
        "id": "2bac1a00.ca7056",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "AT+CFUN=1,1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CFUN=1,1",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 1780,
        "wires": [
            [
                "22aa64ea.14d1fc",
                "27c8ae63.0a2aa2"
            ]
        ]
    },
    {
        "id": "1efd5204.6d608e",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 260,
        "y": 1740,
        "wires": [
            [
                "34976a9a.6d27f6"
            ]
        ]
    },
    {
        "id": "b5cb0f01.7ef19",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 640,
        "wires": [
            [
                "7897df6d.9b4a6"
            ]
        ]
    },
    {
        "id": "c8e6b4c7.d89228",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 860,
        "wires": [
            [
                "9abd738e.fd6f1"
            ]
        ]
    },
    {
        "id": "dd20e940.3db758",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 1060,
        "wires": [
            [
                "df0223fa.376b"
            ]
        ]
    },
    {
        "id": "7ba00edd.5113",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Send SMS to number",
        "func": "var num = msg.payload.number;\nvar at_cmd = \"AT+CMGS=\\\"\"+num+\"\\\"\"; \n\nmsg.payload=at_cmd+\"\\r\";\n//msg.payload.msg =msg.payload.message;\n\nreturn msg;",
        "outputs": "1",
        "noerr": 0,
        "x": 460,
        "y": 3020,
        "wires": [
            [
                "8e80bb80.c29c88",
                "bc5c7bad.bca038",
                "78de9b2.fbcf664"
            ]
        ]
    },
    {
        "id": "b04f302d.eebaa",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Send Message",
        "func": "var sms_msg = msg.payload.message;\n\nmsg.payload=sms_msg+\"\\x1A\";\n//msg.payload.msg =msg.payload.message;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 3100,
        "wires": [
            [
                "bc5c7bad.bca038"
            ]
        ]
    },
    {
        "id": "b18beaf5.17d7c8",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "Wait for > prompt",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 450,
        "y": 3100,
        "wires": [
            [
                "7d0f5e1d.07fc6"
            ]
        ]
    },
    {
        "id": "d6f817ae.a2a358",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "Wait 1 sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 430,
        "y": 3060,
        "wires": [
            [
                "985005fe.af4648"
            ]
        ]
    },
    {
        "id": "985005fe.af4648",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Write newline",
        "func": "//msg.payload=\"\\r\\n\";\nmsg.payload=\"\\r\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 810,
        "y": 3060,
        "wires": [
            [
                "bc5c7bad.bca038"
            ]
        ]
    },
    {
        "id": "8e80bb80.c29c88",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 770,
        "y": 3020,
        "wires": [
            []
        ]
    },
    {
        "id": "4cc3aab4.d97b54",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "25",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 870,
        "y": 2640,
        "wires": [
            [
                "b051cce8.0b859"
            ]
        ]
    },
    {
        "id": "7c286be2.acfa14",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 2640,
        "wires": [
            [
                "4cc3aab4.d97b54"
            ]
        ]
    },
    {
        "id": "d81356f.4c21fa8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CNMI=2,1 \"\\r\"",
        "func": "var at_cmd = \"AT+CNMI=2,1\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 420,
        "wires": [
            [
                "f87027e1.a04b68"
            ]
        ]
    },
    {
        "id": "120656c8.4c5ad9",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CMGL=\"ALL\" \"\\r\"",
        "func": "var at_cmd = 'AT+CMGL=\"ALL\"';\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1980,
        "wires": [
            [
                "5ddeb36e.b7a6cc"
            ]
        ]
    },
    {
        "id": "85c40.1e5843c1",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 1460,
        "wires": [
            [
                "a0caf765.e91e38",
                "59aca4d8.cd2b9c"
            ]
        ]
    },
    {
        "id": "a0caf765.e91e38",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CSQ \"\\r\"",
        "func": "var at_cmd = \"AT+CSQ\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 1460,
        "wires": [
            [
                "6a59dc6d.2efcc4"
            ]
        ]
    },
    {
        "id": "4193a5c3.6129fc",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "\u001e",
                "fromt": "str",
                "to": "ß",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "^",
                "fromt": "str",
                "to": "Ü",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "\\",
                "fromt": "str",
                "to": "Ö",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "[",
                "fromt": "str",
                "to": "Ä",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "~",
                "fromt": "str",
                "to": "ü",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "|",
                "fromt": "str",
                "to": "ö",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "{",
                "fromt": "str",
                "to": "ä",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 2280,
        "wires": [
            [
                "9ce2f58a.5ad748"
            ]
        ]
    },
    {
        "id": "ee927a1f.a81d88",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Filtern",
        "func": "var antwort = msg.payload;\n\nif (antwort.length > 3 && antwort.length !== \"\"){\n    msg.payload = (antwort.slice(0, antwort.length)).replace(\"\\n\", '').replace(\"\\r\", '');\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 1000,
        "y": 3300,
        "wires": [
            [
                "a368b80d.246688",
                "db3b7209.3bd75"
            ]
        ]
    },
    {
        "id": "9ddf9866.1e4068",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Sonderzeichen",
        "info": ".replace(\"{\", 'ä').replace(\"|\", 'ö').replace(\"~\", 'ü').replace(\"[\", 'Ä').replace(\"\\\", 'Ö').replace(\"^\", 'Ü').replace(\"\u001e\", 'ß')\n\n.replace(\"{\", 'ä')\n.replace(\"|\", 'ö')\n.replace(\"~\", 'ü')\n.replace(\"[\", 'Ä')\n.replace(\"\\\", 'Ö')\n.replace(\"^\", 'Ü')\n.replace(\"\u001e\", 'ß')",
        "x": 640,
        "y": 2160,
        "wires": []
    },
    {
        "id": "7d0f5e1d.07fc6",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ß",
                "fromt": "str",
                "to": "\u001e",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ü",
                "fromt": "str",
                "to": "^",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ö",
                "fromt": "str",
                "to": "\\",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ä",
                "fromt": "str",
                "to": "[",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ü",
                "fromt": "str",
                "to": "~",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ö",
                "fromt": "str",
                "to": "|",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ä",
                "fromt": "str",
                "to": "{",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 3100,
        "wires": [
            [
                "b04f302d.eebaa"
            ]
        ]
    },
    {
        "id": "3059cba1.e2a184",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "GSM MODUL",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1220,
        "y": 1540,
        "wires": []
    },
    {
        "id": "5293491.f9e5db8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "Bereit",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Bereit",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 1560,
        "wires": [
            [
                "ede8eb75.26ae88"
            ]
        ]
    },
    {
        "id": "b0301b0a.d1cce8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "true",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 1600,
        "wires": [
            []
        ]
    },
    {
        "id": "45e181e2.ac083",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "910bdeca.2371d",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1410,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "a77e9ae7.81e098",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "5",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "19ee5260.1c2c6e",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "6",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "6",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "dbe6c2cb.10c3b",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "9",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "9",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1340,
        "wires": [
            []
        ]
    },
    {
        "id": "f97dd876.f0d5c8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "7",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "7",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "cf2fbfdb.9a386",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "",
        "info": "Nicht verfügbar;\nErfolgreich;\nTC35 Initialisierung-ShellBefehl fehlgeschlagen;\nTC35 Initialisierung fehlgeschlagen;\nModem nicht bereit;\nAktivierung erweiterte Fehlermeldungen fehlgeschlagen;\nUmschalten SMS-Textmodus fehlgeschlagen;\nSIM-Pin wird benötigt;\nSetzen SIM-Pin fehlgeschlagen;\nProvider nicht registiert;\nErmittlung Signalstärke fehlgeschlagen;\nModem Reset fehlgeschlagen;\nSIM-Fehler (siehe Messenger-Log für mehr Details)",
        "x": 1690,
        "y": 160,
        "wires": []
    },
    {
        "id": "9c0c3b55.208388",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "== 99",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "99",
                "vt": "num"
            },
            {
                "t": "lt",
                "v": "99",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 650,
        "y": 1540,
        "wires": [
            [
                "a15957e5.549c58",
                "3c956ad6.68a636"
            ],
            [
                "5293491.f9e5db8",
                "b0301b0a.d1cce8",
                "11620498.e12c0b"
            ]
        ]
    },
    {
        "id": "a15957e5.549c58",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "10",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "10",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1540,
        "wires": [
            []
        ]
    },
    {
        "id": "91902959.f926a8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "4",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "4",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "b5efbd0a.97c82",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "2.  #Extended Errormessage aktivieren",
        "info": "",
        "x": 230,
        "y": 600,
        "wires": []
    },
    {
        "id": "b5f9e123.56d4e",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL OUT",
        "links": [
            "5ddeb36e.b7a6cc",
            "5ba82dba.f60664",
            "55b12a6e.aaf824",
            "bd459f7a.ea414",
            "4eff93be.07023c",
            "80b17093.02a7c",
            "f87027e1.a04b68",
            "2ff9846.355ef7c",
            "6a59dc6d.2efcc4",
            "dd82aa62.2b47e8",
            "1613cc9a.bc2983",
            "eee63c6d.2225f",
            "bc5c7bad.bca038",
            "1ab6649.6695f9b"
        ],
        "x": 195,
        "y": 3460,
        "wires": [
            []
        ]
    },
    {
        "id": "bd459f7a.ea414",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e",
            "9ce3728f.65814",
            "d7e4ea09.3a4f18",
            "336f515c.b297fe"
        ],
        "x": 1215,
        "y": 120,
        "wires": []
    },
    {
        "id": "f87027e1.a04b68",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 420,
        "wires": []
    },
    {
        "id": "876acf85.3740a",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN normalize",
        "links": [
            "6875f42f.75d1cc",
            "16eb4d1e.5a1cd3",
            "82dbe0f.6bdf82",
            "4898bbd1.81b294",
            "e6eadfb0.3e1f8",
            "52726a4.e40d094",
            "5eeac166.873bc",
            "67624b11.92ac04",
            "a2792ac3.5f3fb8",
            "5b9f2c47.184234",
            "8d1225c0.39a818",
            "cb5e8b68.828fb8"
        ],
        "x": 1375,
        "y": 3300,
        "wires": []
    },
    {
        "id": "6875f42f.75d1cc",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 55,
        "y": 280,
        "wires": [
            [
                "95d0a6cd.9bde48",
                "f89f28d1.f95038"
            ]
        ]
    },
    {
        "id": "67624b11.92ac04",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 680,
        "wires": [
            [
                "25669454.d3a5bc",
                "be95eabc.f1bf98"
            ]
        ]
    },
    {
        "id": "82dbe0f.6bdf82",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 900,
        "wires": [
            [
                "26045dc4.78c202",
                "5e072b60.57bdc4"
            ]
        ]
    },
    {
        "id": "78261a2f.5b8b04",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "3.   TC35 in SMS-Textmodus versetzen",
        "info": "",
        "x": 230,
        "y": 820,
        "wires": []
    },
    {
        "id": "b8a3cf91.98038",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "AT+CNMI=2,1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CNMI=",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 460,
        "wires": [
            [
                "21ca33c3.7d41ec"
            ]
        ]
    },
    {
        "id": "21ca33c3.7d41ec",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "e3b798f5.d89898",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_CNMI",
        "property": "GSM_CNMI",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 500,
        "wires": [
            [
                "755c1b6e.ce4694"
            ]
        ]
    },
    {
        "id": "755c1b6e.ce4694",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 500,
        "wires": [
            [
                "92e08e08.83ad6",
                "b5cb0f01.7ef19"
            ],
            [
                "234ee791.332b78"
            ]
        ]
    },
    {
        "id": "92e08e08.83ad6",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 460,
        "wires": [
            [
                "20e1a70e.676d78",
                "8ce50ee3.61ef4"
            ]
        ]
    },
    {
        "id": "8a3c7df.359eb8",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "SMS Push aktiv",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1240,
        "y": 460,
        "wires": []
    },
    {
        "id": "f1d466d7.3cefd8",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 420,
        "wires": [
            [
                "d81356f.4c21fa8"
            ]
        ]
    },
    {
        "id": "322df197.822a3e",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "1. Neue SMS-Nachrichtenanzeigen Push",
        "info": "",
        "x": 240,
        "y": 380,
        "wires": []
    },
    {
        "id": "a2792ac3.5f3fb8",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 460,
        "wires": [
            [
                "b8a3cf91.98038",
                "e3b798f5.d89898"
            ]
        ]
    },
    {
        "id": "4eff93be.07023c",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 640,
        "wires": []
    },
    {
        "id": "dd82aa62.2b47e8",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 860,
        "wires": []
    },
    {
        "id": "1d8e151e.c93c7b",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "4. SIMPin prüfen",
        "info": "",
        "x": 160,
        "y": 1020,
        "wires": []
    },
    {
        "id": "f1170262.46a33",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "AT+CPIN",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CPIN",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 1100,
        "wires": [
            [
                "82747ade.57c328"
            ]
        ]
    },
    {
        "id": "82747ade.57c328",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "f4c3830f.4cc0c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 1100,
        "wires": [
            [
                "49e4f0ef.daa11",
                "7e2500fb.9e343"
            ]
        ]
    },
    {
        "id": "6c900634.e2f8f8",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_CPIN",
        "property": "GSM_CPIN",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 1140,
        "wires": [
            [
                "84563816.eb3078"
            ]
        ]
    },
    {
        "id": "16eb4d1e.5a1cd3",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 1100,
        "wires": [
            [
                "6c900634.e2f8f8",
                "f1170262.46a33"
            ]
        ]
    },
    {
        "id": "ce859b6a.2f5558",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "5. Prüfen ob bei Mobilfunkprovider angemeldet",
        "info": "",
        "x": 260,
        "y": 1220,
        "wires": []
    },
    {
        "id": "eee63c6d.2225f",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 1020,
        "wires": []
    },
    {
        "id": "2ff9846.355ef7c",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 1260,
        "wires": []
    },
    {
        "id": "5eeac166.873bc",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 1320,
        "wires": [
            [
                "9a031f19.a67d7"
            ]
        ]
    },
    {
        "id": "6a59dc6d.2efcc4",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 1460,
        "wires": []
    },
    {
        "id": "1274564e.7c2daa",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "6. Signalstärke ermitteln",
        "info": "",
        "x": 190,
        "y": 1420,
        "wires": []
    },
    {
        "id": "44338a78.f84504",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "99 = 0",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "99",
                "fromt": "num",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 1480,
        "wires": [
            []
        ]
    },
    {
        "id": "3c956ad6.68a636",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "NICHT",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "NICHT Bereit",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 1520,
        "wires": [
            [
                "ede8eb75.26ae88"
            ]
        ]
    },
    {
        "id": "5b9f2c47.184234",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 1500,
        "wires": [
            [
                "ecec2346.85a96"
            ]
        ]
    },
    {
        "id": "90ba3def.cfd79",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "# Modem Reset durchführen ----------------------------------------------------------------------------------------------------------------------------------",
        "info": "",
        "x": 500,
        "y": 1700,
        "wires": []
    },
    {
        "id": "c68bcc1b.96e43",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "# Modem Reset durchführen ----------------------------------------------------------------------------------------------------------------------------------",
        "info": "",
        "x": 500,
        "y": 1820,
        "wires": []
    },
    {
        "id": "22aa64ea.14d1fc",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "nach Modem Reset",
        "links": [
            "8257aacd.6a8898"
        ],
        "x": 415,
        "y": 1780,
        "wires": []
    },
    {
        "id": "8257aacd.6a8898",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": " Mobilfunkprovider angemeldet",
        "links": [
            "22aa64ea.14d1fc"
        ],
        "x": 775,
        "y": 1340,
        "wires": [
            [
                "adcd3971.885338"
            ]
        ]
    },
    {
        "id": "4898bbd1.81b294",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 1780,
        "wires": [
            [
                "2bac1a00.ca7056"
            ]
        ]
    },
    {
        "id": "b28dacf0.d3238",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "Modem Reset ausführen",
        "links": [
            "6439a33c.f558cc"
        ],
        "x": 95,
        "y": 1740,
        "wires": [
            [
                "1efd5204.6d608e"
            ]
        ]
    },
    {
        "id": "6439a33c.f558cc",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "nicht angemeldet",
        "links": [
            "b28dacf0.d3238"
        ],
        "x": 735,
        "y": 1340,
        "wires": []
    },
    {
        "id": "5ba82dba.f60664",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1275,
        "y": 1740,
        "wires": []
    },
    {
        "id": "9849d339.77f49",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "Modem Reset",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1100,
        "y": 1780,
        "wires": []
    },
    {
        "id": "d5bbf82c.df12f8",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "== 99",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "lt",
                "v": "99",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 150,
        "y": 1980,
        "wires": [
            [
                "82e86514.f572e8",
                "120656c8.4c5ad9",
                "f1085a50.2ce4c8"
            ]
        ]
    },
    {
        "id": "3f6ffce5.fc7274",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "7.  # SMS Speicher prüfen",
        "info": "",
        "x": 190,
        "y": 1940,
        "wires": []
    },
    {
        "id": "5ddeb36e.b7a6cc",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1275,
        "y": 1980,
        "wires": []
    },
    {
        "id": "55b12a6e.aaf824",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1435,
        "y": 2360,
        "wires": []
    },
    {
        "id": "5d6566aa.b891a8",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "SMS Speicher prüfen",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1080,
        "y": 2020,
        "wires": []
    },
    {
        "id": "82e86514.f572e8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "checke Eingeganene SMS",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 2020,
        "wires": [
            [
                "70aa2514.f4fe9c"
            ]
        ]
    },
    {
        "id": "bc1020c7.7e891",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Incomming SMS PUSH",
        "info": "",
        "x": 180,
        "y": 2040,
        "wires": []
    },
    {
        "id": "e6eadfb0.3e1f8",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 2080,
        "wires": [
            [
                "c39d1219.3bb36"
            ]
        ]
    },
    {
        "id": "1613cc9a.bc2983",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1275,
        "y": 2080,
        "wires": []
    },
    {
        "id": "44e29d68.f309d4",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SMS INPUT",
        "info": "",
        "x": 150,
        "y": 2220,
        "wires": []
    },
    {
        "id": "8d1225c0.39a818",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 2260,
        "wires": [
            [
                "ab8e0c54.1fd2e"
            ]
        ]
    },
    {
        "id": "80b17093.02a7c",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 2400,
        "wires": []
    },
    {
        "id": "ae1efb47.cd3238",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "Wait 1 sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 610,
        "y": 2400,
        "wires": [
            [
                "a6ce489c.2a2af8"
            ]
        ]
    },
    {
        "id": "facd6da8.cb149",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Lösche SMS von SIM",
        "info": "",
        "x": 180,
        "y": 2360,
        "wires": []
    },
    {
        "id": "52726a4.e40d094",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL IN",
        "links": [
            "876acf85.3740a"
        ],
        "x": 95,
        "y": 2620,
        "wires": [
            [
                "1f092110.46884f"
            ]
        ]
    },
    {
        "id": "88a044ef.0c3fd8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 1300,
        "wires": [
            [
                "e2aeaddc.a4d2b",
                "7fe9bf48.1e6c1"
            ]
        ]
    },
    {
        "id": "8976d0b.17fbd3",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "checke Eingeganene SMS",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS eingegangen!",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 480,
        "y": 2120,
        "wires": [
            [
                "667a79af.5abb08"
            ]
        ]
    },
    {
        "id": "d12b42a2.672b7",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "name": "SMS Push",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1110,
        "y": 2120,
        "wires": []
    },
    {
        "id": "602d9973.c386c8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "sende SMS...",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "sende SMS...",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 880,
        "y": 2540,
        "wires": [
            [
                "7e1e939e.b2030c",
                "75e14ae4.af99f4",
                "c83bc65.499b938"
            ]
        ]
    },
    {
        "id": "7e1e939e.b2030c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "15",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "15",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2540,
        "wires": [
            []
        ]
    },
    {
        "id": "c21b67b8.8ea938",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2600,
        "wires": [
            []
        ]
    },
    {
        "id": "86c7169.cb4a7e8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "SMS erfolgreich Versand",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS erfolgreich Versand",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 2600,
        "wires": [
            [
                "c21b67b8.8ea938",
                "75e14ae4.af99f4",
                "c363cf29.d23f3"
            ]
        ]
    },
    {
        "id": "9b8abea4.600fd",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "SMS NICHT Versand",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS konnte NICHT Versand werden",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 2680,
        "wires": [
            [
                "bcb1005e.f25b8",
                "75e14ae4.af99f4",
                "811c781d.54d9e8"
            ]
        ]
    },
    {
        "id": "bcb1005e.f25b8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "13",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "13",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2680,
        "wires": [
            []
        ]
    },
    {
        "id": "f5b615a5.25bbb8",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1370,
        "y": 2480,
        "wires": [
            []
        ]
    },
    {
        "id": "4c949c0b.dac5f4",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "",
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1410,
        "y": 1640,
        "wires": [
            []
        ]
    },
    {
        "id": "b3b39815.6ee6d8",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "msg.input",
        "property": "input",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "SERIAL_INPUT",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "START",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "STOP",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "RESET",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SET_BAUD",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SEND_SMS",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 6,
        "x": 500,
        "y": 3400,
        "wires": [
            [
                "bfda4082.3a9c"
            ],
            [
                "36b5448.a7a98bc"
            ],
            [
                "a8e92a68.61b3b8"
            ],
            [
                "eadcd4ef.63e208"
            ],
            [
                "fff31643.223d28"
            ],
            [
                "a7534b78.7b1cd8"
            ]
        ],
        "icon": "node-red/inject.svg"
    },
    {
        "id": "bfda4082.3a9c",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL_INPUT",
        "links": [
            "b74e4376.97edb",
            "d131a127.66928"
        ],
        "x": 675,
        "y": 3300,
        "wires": []
    },
    {
        "id": "b74e4376.97edb",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL_INPUT",
        "links": [
            "bfda4082.3a9c"
        ],
        "x": 895,
        "y": 3300,
        "wires": [
            [
                "ee927a1f.a81d88"
            ]
        ]
    },
    {
        "id": "97f08d3f.3124c",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SERIAL_INPUT",
        "info": "",
        "x": 780,
        "y": 3300,
        "wires": []
    },
    {
        "id": "36b5448.a7a98bc",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "START",
        "links": [
            "1e6f7169.db996f"
        ],
        "x": 675,
        "y": 3340,
        "wires": []
    },
    {
        "id": "a979747c.1c5518",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "START",
        "info": "",
        "x": 750,
        "y": 3340,
        "wires": []
    },
    {
        "id": "1e6f7169.db996f",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "START",
        "links": [
            "36b5448.a7a98bc",
            "58c422b1.7e439c"
        ],
        "x": 95,
        "y": 120,
        "wires": [
            [
                "4f140e8c.7d4",
                "56d1b823.a6de98"
            ]
        ]
    },
    {
        "id": "8314b468.82c128",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "RESET",
        "links": [
            "eadcd4ef.63e208"
        ],
        "x": 895,
        "y": 1720,
        "wires": [
            [
                "34976a9a.6d27f6"
            ]
        ]
    },
    {
        "id": "eadcd4ef.63e208",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "RESET",
        "links": [
            "8314b468.82c128",
            "3aa0b6fb.9f1d1a",
            "336f515c.b297fe",
            "d7e4ea09.3a4f18",
            "9ce3728f.65814",
            "d9e95a61.c84778"
        ],
        "x": 675,
        "y": 3420,
        "wires": []
    },
    {
        "id": "f3866d34.a8ec6",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "RESET",
        "info": "",
        "x": 750,
        "y": 3420,
        "wires": []
    },
    {
        "id": "2de40c6a.4f8e34",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SET_BAUD",
        "links": [
            "fff31643.223d28"
        ],
        "x": 895,
        "y": 3460,
        "wires": [
            [
                "7e4e43f0.82f56c"
            ]
        ]
    },
    {
        "id": "fff31643.223d28",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "SET_BAUD",
        "links": [
            "2de40c6a.4f8e34"
        ],
        "x": 675,
        "y": 3460,
        "wires": []
    },
    {
        "id": "79bdb757.dbcad8",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SET_BAUD",
        "info": "",
        "x": 770,
        "y": 3460,
        "wires": []
    },
    {
        "id": "7e4e43f0.82f56c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "CONF",
        "rules": [
            {
                "t": "set",
                "p": "SERIAL",
                "pt": "msg",
                "to": "SERIAL",
                "tot": "env"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 990,
        "y": 3460,
        "wires": [
            [
                "4d93c6f8.cb71c8"
            ]
        ]
    },
    {
        "id": "75e14ae4.af99f4",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1080,
        "y": 2740,
        "wires": [
            [
                "dcf53d31.d81e5"
            ]
        ]
    },
    {
        "id": "2df84e4d.808cd2",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2320,
        "wires": [
            [
                "82fb80c3.a9094"
            ]
        ]
    },
    {
        "id": "9ce2f58a.5ad748",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2260,
        "wires": [
            [
                "8183c92.bfa5c38"
            ]
        ]
    },
    {
        "id": "667a79af.5abb08",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 960,
        "y": 2120,
        "wires": [
            [
                "d12b42a2.672b7"
            ]
        ]
    },
    {
        "id": "70aa2514.f4fe9c",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 880,
        "y": 2020,
        "wires": [
            [
                "5d6566aa.b891a8"
            ]
        ]
    },
    {
        "id": "27c8ae63.0a2aa2",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 920,
        "y": 1780,
        "wires": [
            [
                "9849d339.77f49"
            ]
        ]
    },
    {
        "id": "ede8eb75.26ae88",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1020,
        "y": 1540,
        "wires": [
            [
                "3059cba1.e2a184"
            ]
        ]
    },
    {
        "id": "e1058056.6a3b5",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1020,
        "y": 1500,
        "wires": [
            [
                "a482c1f4.fa2d8"
            ]
        ]
    },
    {
        "id": "e2aeaddc.a4d2b",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 920,
        "y": 1300,
        "wires": [
            [
                "5ea67b1f.4c0184"
            ]
        ]
    },
    {
        "id": "7e2500fb.9e343",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 900,
        "y": 1100,
        "wires": [
            [
                "e0c0177b.4fdb88"
            ]
        ]
    },
    {
        "id": "874e3038.04586",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 960,
        "y": 900,
        "wires": [
            [
                "98879e4f.dd2f2"
            ]
        ]
    },
    {
        "id": "216be3b0.dff3ec",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1000,
        "y": 680,
        "wires": [
            [
                "c5dfea6f.b7c008"
            ]
        ]
    },
    {
        "id": "20e1a70e.676d78",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1040,
        "y": 460,
        "wires": [
            [
                "8a3c7df.359eb8"
            ]
        ]
    },
    {
        "id": "674ee4ce.21f28c",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 200,
        "wires": [
            [
                "b8fb445b.296688"
            ]
        ]
    },
    {
        "id": "56d1b823.a6de98",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "AT",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "AT",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 120,
        "wires": [
            [
                "da8120b1.9e90e",
                "58dbbe07.4dc0d",
                "41b541f1.1776d"
            ]
        ]
    },
    {
        "id": "4d93c6f8.cb71c8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "payload",
        "func": "msg.payload = msg.SERIAL + \" cs8 -parenb -cstopb clocal -echo raw speed 9600\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1120,
        "y": 3460,
        "wires": [
            [
                "f5dba6c6.01bb28"
            ]
        ]
    },
    {
        "id": "a7534b78.7b1cd8",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "SEND_SMS",
        "links": [
            "c0085404.f04648"
        ],
        "x": 675,
        "y": 3500,
        "wires": []
    },
    {
        "id": "65035920.224048",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SEND_SMS",
        "info": "",
        "x": 770,
        "y": 3500,
        "wires": []
    },
    {
        "id": "c0085404.f04648",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SEND_SMS",
        "links": [
            "a7534b78.7b1cd8",
            "ce199e70.9b183"
        ],
        "x": 75,
        "y": 3020,
        "wires": [
            [
                "81b6ab99.8fec58"
            ]
        ]
    },
    {
        "id": "a368b80d.246688",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "d": true,
        "name": "Serial-In",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1180,
        "y": 3260,
        "wires": []
    },
    {
        "id": "4bb96e52.67ae1",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Messenger_LetzterPruefStatus",
        "info": "",
        "x": 1750,
        "y": 200,
        "wires": []
    },
    {
        "id": "c685d25c.e25b2",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Messenger_LetzteSignalstaerke",
        "info": "",
        "x": 1710,
        "y": 1480,
        "wires": []
    },
    {
        "id": "9455279b.a0ba68",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Messenger_Modus",
        "info": "",
        "x": 1670,
        "y": 1600,
        "wires": []
    },
    {
        "id": "6c70f603.e4e418",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Messenger_LetzterSendeStatus",
        "info": "",
        "x": 1670,
        "y": 2540,
        "wires": []
    },
    {
        "id": "c53d7a7a.6c7258",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Messenger_SMSEmfangAbsenderID",
        "info": "",
        "x": 1680,
        "y": 2200,
        "wires": []
    },
    {
        "id": "1299b178.96397f",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Messenger_SMSEmfangText",
        "info": "",
        "x": 1660,
        "y": 2280,
        "wires": []
    },
    {
        "id": "f9fc1e5c.b780e",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1410,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "234ee791.332b78",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "5",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "9ad76c81.3118c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "41b541f1.1776d",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "9ce3728f.65814",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "0",
        "links": [
            "bd459f7a.ea414",
            "a8e92a68.61b3b8",
            "eadcd4ef.63e208"
        ],
        "x": 1315,
        "y": 240,
        "wires": [
            [
                "4f8eeb26.61deb4"
            ]
        ]
    },
    {
        "id": "4f8eeb26.61deb4",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "d7e4ea09.3a4f18",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "0",
        "links": [
            "bd459f7a.ea414",
            "a8e92a68.61b3b8",
            "eadcd4ef.63e208"
        ],
        "x": 1315,
        "y": 1420,
        "wires": [
            [
                "4978f7a2.dbfc18"
            ]
        ]
    },
    {
        "id": "4978f7a2.dbfc18",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1420,
        "wires": [
            []
        ]
    },
    {
        "id": "336f515c.b297fe",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "0",
        "links": [
            "bd459f7a.ea414",
            "a8e92a68.61b3b8",
            "eadcd4ef.63e208"
        ],
        "x": 1275,
        "y": 2440,
        "wires": [
            [
                "db17b742.2541b8"
            ]
        ]
    },
    {
        "id": "db17b742.2541b8",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2440,
        "wires": [
            []
        ]
    },
    {
        "id": "70830f32.86b73",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "leer",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 410,
        "y": 2860,
        "wires": [
            []
        ]
    },
    {
        "id": "f15114b5.9aa108",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "Poll",
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 410,
        "y": 1420,
        "wires": [
            [
                "5bf749b4.ee2e78"
            ]
        ]
    },
    {
        "id": "5bf749b4.ee2e78",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_POLL",
        "property": "GSM_POLL",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 810,
        "y": 1420,
        "wires": [
            [
                "a0caf765.e91e38"
            ]
        ]
    },
    {
        "id": "6e489b8a.6edef4",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1360,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "59aca4d8.cd2b9c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "66e7e2a2.a0a43c",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 240,
        "y": 1580,
        "wires": [
            []
        ]
    },
    {
        "id": "2bd9be29.f9f612",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "GSM_CSQ",
        "property": "GSM_CSQ",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 510,
        "y": 1540,
        "wires": [
            [
                "9c0c3b55.208388",
                "d5bbf82c.df12f8",
                "66e7e2a2.a0a43c"
            ]
        ]
    },
    {
        "id": "81b6ab99.8fec58",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "nicht leer",
        "property": "payload.message",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 3020,
        "wires": [
            [
                "7ba00edd.5113",
                "d6f817ae.a2a358",
                "b18beaf5.17d7c8"
            ]
        ]
    },
    {
        "id": "8b448a42.cc5138",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SMS INPUT",
        "info": "",
        "x": 130,
        "y": 2980,
        "wires": []
    },
    {
        "id": "4f140e8c.7d4",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status Start",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ Starte...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 80,
        "wires": [
            [
                "9aac2165.71552"
            ]
        ]
    },
    {
        "id": "673e3b47.767d24",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "9aac2165.71552",
            "f44b8fc4.110af",
            "e8cd123f.84245",
            "66872fae.1146c",
            "95c20b75.adc518",
            "2572d19f.8cae6e",
            "860ed964.b61de8",
            "2c2e35ed.3d5d1a",
            "d0ab7e72.100fb",
            "5b2a890e.a91f88",
            "4c150ba9.6bee24",
            "87fc6496.62e698",
            "b37674eb.aad858",
            "f84e5225.d2d74",
            "972f6319.a34f4",
            "865c3944.51acf8",
            "659ee8fc.c911f8",
            "dfbd136e.3558d"
        ],
        "x": 195,
        "y": 3520,
        "wires": [
            [
                "6588523.61cdfac"
            ]
        ]
    },
    {
        "id": "9aac2165.71552",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 355,
        "y": 80,
        "wires": []
    },
    {
        "id": "8ce50ee3.61ef4",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️️️️️️️️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ SMS Push aktiviert\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 970,
        "y": 540,
        "wires": [
            [
                "f44b8fc4.110af"
            ]
        ]
    },
    {
        "id": "f44b8fc4.110af",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1105,
        "y": 540,
        "wires": []
    },
    {
        "id": "3309ef8.3916d1",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️️⚫️⚫️⚫️⚫️⚫️⚫️ Errormessage aktiviert\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 990,
        "y": 760,
        "wires": [
            [
                "e8cd123f.84245"
            ]
        ]
    },
    {
        "id": "e8cd123f.84245",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1125,
        "y": 760,
        "wires": []
    },
    {
        "id": "58f18366.c0034c",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️️⚫️⚫️⚫️⚫️⚫️ Text Modus aktiviert\"};\nreturn msg;\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 980,
        "wires": [
            [
                "66872fae.1146c"
            ]
        ]
    },
    {
        "id": "66872fae.1146c",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1145,
        "y": 980,
        "wires": []
    },
    {
        "id": "49e4f0ef.daa11",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️️⚫️⚫️⚫️⚫️ warte auf Provider...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 910,
        "y": 1180,
        "wires": [
            [
                "95c20b75.adc518"
            ]
        ]
    },
    {
        "id": "95c20b75.adc518",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1045,
        "y": 1180,
        "wires": []
    },
    {
        "id": "7fe9bf48.1e6c1",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️️⚫️⚫️⚫️ bei Provider angemeldet\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 910,
        "y": 1380,
        "wires": [
            [
                "2572d19f.8cae6e"
            ]
        ]
    },
    {
        "id": "2572d19f.8cae6e",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1045,
        "y": 1380,
        "wires": []
    },
    {
        "id": "11620498.e12c0b",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️️⚫️⚫️ Signalstärke:\" + msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 850,
        "y": 1640,
        "wires": [
            [
                "860ed964.b61de8"
            ]
        ]
    },
    {
        "id": "860ed964.b61de8",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1275,
        "y": 1640,
        "wires": []
    },
    {
        "id": "6588523.61cdfac",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "limit",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 290,
        "y": 3520,
        "wires": [
            []
        ]
    },
    {
        "id": "ee03d2dc.bd999",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status Start",
        "func": "msg.payload = {fill:\"red\",shape:\"dot\",text:\"keine Verbindung\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 140,
        "wires": [
            [
                "d0ab7e72.100fb"
            ]
        ]
    },
    {
        "id": "d0ab7e72.100fb",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 975,
        "y": 140,
        "wires": []
    },
    {
        "id": "c83bc65.499b938",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 2560,
        "wires": [
            [
                "5b2a890e.a91f88"
            ]
        ]
    },
    {
        "id": "5b2a890e.a91f88",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1195,
        "y": 2560,
        "wires": []
    },
    {
        "id": "c363cf29.d23f3",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 2640,
        "wires": [
            [
                "4c150ba9.6bee24",
                "2a6fd8a0.715278"
            ]
        ]
    },
    {
        "id": "4c150ba9.6bee24",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1395,
        "y": 2640,
        "wires": []
    },
    {
        "id": "811c781d.54d9e8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 2700,
        "wires": [
            [
                "87fc6496.62e698"
            ]
        ]
    },
    {
        "id": "87fc6496.62e698",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1195,
        "y": 2700,
        "wires": []
    },
    {
        "id": "e25e6fc9.9a81b",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1310,
        "y": 2640,
        "wires": [
            [
                "4c150ba9.6bee24"
            ]
        ]
    },
    {
        "id": "2a6fd8a0.715278",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "1sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1190,
        "y": 2640,
        "wires": [
            [
                "e25e6fc9.9a81b"
            ]
        ]
    },
    {
        "id": "ecb6e849.21bf28",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"blue\",shape:\"dot\",text:\"SMS empfangen!\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 2060,
        "wires": [
            [
                "b37674eb.aad858",
                "4f777a22.201b14"
            ]
        ]
    },
    {
        "id": "b37674eb.aad858",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 755,
        "y": 2060,
        "wires": []
    },
    {
        "id": "4f777a22.201b14",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "3sec",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 2060,
        "wires": [
            [
                "aca47ee.8ba418"
            ]
        ]
    },
    {
        "id": "aca47ee.8ba418",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 650,
        "y": 2060,
        "wires": [
            [
                "b37674eb.aad858"
            ]
        ]
    },
    {
        "id": "96266da7.a0bef",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "STOP",
        "links": [
            "a8e92a68.61b3b8"
        ],
        "x": 1955,
        "y": 360,
        "wires": [
            [
                "3a4d8ca.2f49c74"
            ]
        ]
    },
    {
        "id": "a8e92a68.61b3b8",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STOP",
        "links": [
            "96266da7.a0bef",
            "9ce3728f.65814",
            "336f515c.b297fe",
            "d7e4ea09.3a4f18",
            "3932a9da.34f5e6",
            "d9e95a61.c84778",
            "6f316bec.59ba14"
        ],
        "x": 675,
        "y": 3380,
        "wires": []
    },
    {
        "id": "ef2561a3.e54ce",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "STOP",
        "info": "",
        "x": 750,
        "y": 3380,
        "wires": []
    },
    {
        "id": "3aa0b6fb.9f1d1a",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "RESET",
        "links": [
            "eadcd4ef.63e208"
        ],
        "x": 895,
        "y": 3420,
        "wires": [
            [
                "8ca6de72.8598d"
            ]
        ]
    },
    {
        "id": "3932a9da.34f5e6",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "STOP",
        "links": [
            "a8e92a68.61b3b8"
        ],
        "x": 895,
        "y": 3380,
        "wires": [
            [
                "2280f843.034c48"
            ]
        ]
    },
    {
        "id": "2280f843.034c48",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Stop\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 3380,
        "wires": [
            [
                "972f6319.a34f4"
            ]
        ]
    },
    {
        "id": "972f6319.a34f4",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1135,
        "y": 3380,
        "wires": []
    },
    {
        "id": "8ca6de72.8598d",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Reset\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 3420,
        "wires": [
            [
                "659ee8fc.c911f8"
            ]
        ]
    },
    {
        "id": "659ee8fc.c911f8",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1135,
        "y": 3420,
        "wires": []
    },
    {
        "id": "d9e95a61.c84778",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "AUS",
        "links": [
            "a8e92a68.61b3b8",
            "eadcd4ef.63e208"
        ],
        "x": 1315,
        "y": 1680,
        "wires": [
            [
                "5f69e3c6.dcb4bc"
            ]
        ]
    },
    {
        "id": "5f69e3c6.dcb4bc",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "false",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1680,
        "wires": [
            []
        ]
    },
    {
        "id": "bc5c7bad.bca038",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 975,
        "y": 3020,
        "wires": []
    },
    {
        "id": "629e3e64.40aea",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "99d2588e.871218",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "5dec1f4d.e21c2",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "b8b6e2f9.58d78",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "3f73ddb5.133122",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "d019faaf.e8f218",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "16389df3.8f6232",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "8cedce96.0ca7e",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1810,
        "y": 400,
        "wires": [
            [
                "629e3e64.40aea",
                "99d2588e.871218",
                "5dec1f4d.e21c2",
                "b8b6e2f9.58d78",
                "3f73ddb5.133122",
                "16389df3.8f6232",
                "d019faaf.e8f218",
                "ea132413.b5ce08",
                "edc91d7c.36888",
                "b9c8387a.1aa218",
                "23befef0.5c24a2",
                "fc0e6a64.f7cf18"
            ]
        ]
    },
    {
        "id": "6f316bec.59ba14",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "STOP",
        "links": [
            "a8e92a68.61b3b8"
        ],
        "x": 1875,
        "y": 840,
        "wires": [
            [
                "629e3e64.40aea",
                "99d2588e.871218",
                "5dec1f4d.e21c2",
                "b8b6e2f9.58d78",
                "3f73ddb5.133122",
                "16389df3.8f6232",
                "d019faaf.e8f218",
                "ea132413.b5ce08",
                "edc91d7c.36888",
                "b9c8387a.1aa218",
                "23befef0.5c24a2",
                "fc0e6a64.f7cf18"
            ]
        ]
    },
    {
        "id": "ea132413.b5ce08",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "b9c8387a.1aa218",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_INDEX",
                "pt": "flow",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "edc91d7c.36888",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_Delete",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "23befef0.5c24a2",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "fc0e6a64.f7cf18",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_INPUT",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "db3b7209.3bd75",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1220,
        "y": 3300,
        "wires": [
            [
                "876acf85.3740a"
            ]
        ]
    },
    {
        "id": "23db24b.0f355dc",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2180,
        "wires": [
            [
                "81cf25f1.288208"
            ]
        ]
    },
    {
        "id": "f1085a50.2ce4c8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️⚪️️⚫️ prüfe ungelesene SMS\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 1920,
        "wires": [
            [
                "dfbd136e.3558d",
                "9503bacc.d75328",
                "8c6f12c3.00bf1"
            ]
        ]
    },
    {
        "id": "9503bacc.d75328",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "1sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 1940,
        "wires": [
            [
                "fdb41733.81d6f8"
            ]
        ]
    },
    {
        "id": "fdb41733.81d6f8",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 1940,
        "wires": [
            [
                "dfbd136e.3558d"
            ]
        ]
    },
    {
        "id": "dfbd136e.3558d",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "STATUS",
        "links": [
            "673e3b47.767d24"
        ],
        "x": 1275,
        "y": 1920,
        "wires": []
    },
    {
        "id": "df0223fa.376b",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "OK",
        "property": "PIN",
        "propertyType": "env",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 670,
        "y": 1040,
        "wires": [
            [
                "276e93b3.82ba5c"
            ],
            [
                "bd98ae8d.9feca"
            ]
        ]
    },
    {
        "id": "fa9d77f4.49f098",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "AT+CPIN=0000 \"\\r\"",
        "func": "var at_cmd = \"AT+CPIN=\" + msg.PIN;\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 1060,
        "wires": [
            [
                "1ab6649.6695f9b"
            ]
        ]
    },
    {
        "id": "1ab6649.6695f9b",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "to SERIAL OUT",
        "links": [
            "b5f9e123.56d4e"
        ],
        "x": 1235,
        "y": 1060,
        "wires": []
    },
    {
        "id": "bd98ae8d.9feca",
        "type": "change",
        "z": "ebecf65.ff5b608",
        "name": "PIN",
        "rules": [
            {
                "t": "set",
                "p": "PIN",
                "pt": "msg",
                "to": "PIN",
                "tot": "env"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 890,
        "y": 1060,
        "wires": [
            [
                "fa9d77f4.49f098"
            ]
        ]
    },
    {
        "id": "50b15dd9.b4e4f4",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "🔵;🔴;⚫️;⚪️;🟢;🔘;",
        "info": "⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️️️️️️️️⚫️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️⚪️️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️",
        "x": 140,
        "y": 3560,
        "wires": []
    },
    {
        "id": "8c6f12c3.00bf1",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "2sec",
        "pauseType": "delay",
        "timeout": "2",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 1900,
        "wires": [
            [
                "b51e8ad3.cc3878"
            ]
        ]
    },
    {
        "id": "b51e8ad3.cc3878",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 1900,
        "wires": [
            [
                "dfbd136e.3558d"
            ]
        ]
    },
    {
        "id": "e22c86f.9877078",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "AUTOSTART",
        "property": "AUTOSTART",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 420,
        "y": 20,
        "wires": [
            [
                "58c422b1.7e439c"
            ]
        ]
    },
    {
        "id": "e8d696c.545f268",
        "type": "inject",
        "z": "ebecf65.ff5b608",
        "name": "",
        "topic": "",
        "payload": "Autostart",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "3",
        "x": 120,
        "y": 20,
        "wires": [
            [
                "e22c86f.9877078"
            ]
        ]
    },
    {
        "id": "58c422b1.7e439c",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "AUTOSTART",
        "links": [
            "1e6f7169.db996f"
        ],
        "x": 755,
        "y": 20,
        "wires": []
    },
    {
        "id": "fa1deb58.aef978",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SIM PIN setzen",
        "info": "",
        "x": 1340,
        "y": 1060,
        "wires": []
    },
    {
        "id": "2491c30d.6c259c",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SIM prüfen",
        "info": "",
        "x": 1320,
        "y": 1020,
        "wires": []
    },
    {
        "id": "78de9b2.fbcf664",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "send SMS",
        "links": [
            "82e7ff44.74a0e"
        ],
        "x": 675,
        "y": 2980,
        "wires": []
    },
    {
        "id": "82e7ff44.74a0e",
        "type": "link in",
        "z": "ebecf65.ff5b608",
        "name": "SMS Timeout",
        "links": [
            "78de9b2.fbcf664"
        ],
        "x": 735,
        "y": 2640,
        "wires": [
            [
                "4cc3aab4.d97b54"
            ]
        ]
    },
    {
        "id": "a256584e.d5c1f8",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "to Serial",
        "info": "",
        "x": 100,
        "y": 3460,
        "wires": []
    },
    {
        "id": "8ec32b5d.567518",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Status",
        "info": "",
        "x": 90,
        "y": 3520,
        "wires": []
    },
    {
        "id": "52e38efd.9af37",
        "type": "http in",
        "z": "ebecf65.ff5b608",
        "name": "",
        "url": "/TC35",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 220,
        "y": 3760,
        "wires": [
            [
                "de770649.232b08"
            ]
        ]
    },
    {
        "id": "a81424e8.c1ca68",
        "type": "http in",
        "z": "ebecf65.ff5b608",
        "name": "",
        "url": "/TC35",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 220,
        "y": 3840,
        "wires": [
            [
                "761d7e59.5ac21"
            ]
        ]
    },
    {
        "id": "de770649.232b08",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "msg.url = \"addons/red/TC35\";",
        "func": "msg.url = \"addons/red/TC35\";\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 3760,
        "wires": [
            [
                "e09eef1.c7e4b1"
            ]
        ]
    },
    {
        "id": "e09eef1.c7e4b1",
        "type": "template",
        "z": "ebecf65.ff5b608",
        "name": "JavaScript",
        "field": "payload.script",
        "fieldType": "msg",
        "format": "javascript",
        "syntax": "plain",
        "template": "$(document).ready(function(e) {\n    \n    $(\"form[ajax=true]\").submit(function(e) {\n        \n        e.preventDefault();\n        \n        var form_data = $(this).serialize();\n        var form_url = $(this).attr(\"action\");\n        var form_method = $(this).attr(\"method\").toUpperCase();\n        \n        $(\"#loadingimg\").show();\n        \n        $.ajax({\n            url: form_url, \n            type: form_method,      \n            data: form_data,     \n            cache: false,\n            success: function(returnhtml){                          \n                $(\"#result\").html(returnhtml); \n                $(\"#loadingimg\").hide();                    \n            }           \n        });    \n        \n    });\n    \n});",
        "x": 730,
        "y": 3760,
        "wires": [
            [
                "ea355e6f.9e769"
            ]
        ]
    },
    {
        "id": "f2d5ba45.639fc8",
        "type": "http response",
        "z": "ebecf65.ff5b608",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1130,
        "y": 3780,
        "wires": []
    },
    {
        "id": "49e29f1.7f67f6",
        "type": "template",
        "z": "ebecf65.ff5b608",
        "name": "HTML",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n  <head>\n    <title>TC35 GSM Modul</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\n    <meta charset=\"utf-8\">\n    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js\"></script>\n    <style>{{{payload.style}}}</style>\n  </head>\n\n<div>\n  <h2>SMS senden</h2>\n  <form method=\"post\" action=\"/{{url}}\" ajax=\"true\">\n    <label for=\"number\">Nummer</label>\n    <input type=\"text\" id=\"number\" name=\"number\">\n    \n    <label for=\"message\">SMS Text</label>\n    <input type=\"text\" id=\"message\" name=\"message\">\n  \n    <input type=\"submit\" value=\"senden\">\n  </form>\n  <span id=\"result\"></span>\n</div>\n\n</body>\n</html>\n<script>{{{payload.script}}}</script>",
        "x": 990,
        "y": 3760,
        "wires": [
            [
                "f2d5ba45.639fc8"
            ]
        ]
    },
    {
        "id": "ea06b038.b0aaa",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Website",
        "info": "",
        "x": 180,
        "y": 3720,
        "wires": []
    },
    {
        "id": "b0738cbe.26507",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "Form Submission",
        "info": "",
        "x": 200,
        "y": 3800,
        "wires": []
    },
    {
        "id": "761d7e59.5ac21",
        "type": "switch",
        "z": "ebecf65.ff5b608",
        "name": "nicht leer",
        "property": "payload.message",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 440,
        "y": 3800,
        "wires": [
            [
                "4d96558.d3bfcac",
                "68539aa.0354d64"
            ]
        ]
    },
    {
        "id": "d928003e.b3fbe",
        "type": "comment",
        "z": "ebecf65.ff5b608",
        "name": "SMS WEBIF",
        "info": "",
        "x": 110,
        "y": 3680,
        "wires": []
    },
    {
        "id": "4d96558.d3bfcac",
        "type": "delay",
        "z": "ebecf65.ff5b608",
        "name": "Limiter",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "5",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 610,
        "y": 3840,
        "wires": [
            [
                "1c1823e6.ccc6fc",
                "ce199e70.9b183"
            ]
        ]
    },
    {
        "id": "ea355e6f.9e769",
        "type": "template",
        "z": "ebecf65.ff5b608",
        "name": "CSS",
        "field": "payload.style",
        "fieldType": "msg",
        "format": "html",
        "syntax": "mustache",
        "template": "input[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 100%;\n    background-color: #285E8A;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #1990C7;\n}\n\ndiv {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    background-color: #f2f2f2;\n    padding: 20px;\n}\n\nh2 {\n    color: #285E8A;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    text-align: center;\n}",
        "x": 870,
        "y": 3760,
        "wires": [
            [
                "49e29f1.7f67f6"
            ]
        ]
    },
    {
        "id": "1c1823e6.ccc6fc",
        "type": "debug",
        "z": "ebecf65.ff5b608",
        "d": true,
        "name": "mysitepost",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1110,
        "y": 3840,
        "wires": []
    },
    {
        "id": "ce199e70.9b183",
        "type": "link out",
        "z": "ebecf65.ff5b608",
        "name": "SEND_SMS",
        "links": [
            "c0085404.f04648"
        ],
        "x": 735,
        "y": 3840,
        "wires": []
    },
    {
        "id": "68539aa.0354d64",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "return msg.payload to client",
        "func": "msg.payload = 'OK';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 920,
        "y": 3800,
        "wires": [
            [
                "f2d5ba45.639fc8"
            ]
        ]
    },
    {
        "id": "bf65b4f0.338938",
        "type": "function",
        "z": "ebecf65.ff5b608",
        "name": "Filtern",
        "func": "//msg.payload = msg.payload.split(\"\\n\");\n\nvar antwort = msg.payload;\n\nif (antwort.length > 2 && antwort.length !== \"\"){\n    msg.payload = antwort.slice(1, antwort.length);\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 990,
        "y": 3260,
        "wires": [
            []
        ]
    },
    {
        "id": "8afe8f08.31baf",
        "type": "tab",
        "label": "TC35",
        "disabled": false,
        "info": ""
    },
    {
        "id": "29b35b21.7d6214",
        "type": "subflow:ebecf65.ff5b608",
        "z": "8afe8f08.31baf",
        "name": "TC35 GSM Modul",
        "env": [
            {
                "name": "AUTOSTART",
                "type": "bool",
                "value": "true"
            }
        ],
        "x": 970,
        "y": 580,
        "wires": [
            [
                "ad76b8db.6a0f28"
            ],
            [
                "a042c153.e760d"
            ],
            [
                "b7c36d51.d86f5"
            ],
            [
                "f98d4ddc.20471"
            ],
            [
                "74a5e6c1.553708"
            ],
            [
                "a36258f0.99cfe8"
            ],
            [
                "72eb574a.e61a08"
            ],
            [
                "92d3ce87.227ff"
            ]
        ]
    },
    {
        "id": "5ed99990.bfa0d8",
        "type": "change",
        "z": "8afe8f08.31baf",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "input",
                "pt": "msg",
                "to": "SERIAL_INPUT",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 140,
        "wires": [
            [
                "29b35b21.7d6214"
            ]
        ],
        "inputLabels": [
            "SERIAL IN"
        ],
        "outputLabels": [
            "to GSM TC35"
        ],
        "icon": "node-red/inject.svg"
    },
    {
        "id": "eaeeb93b.1d9198",
        "type": "inject",
        "z": "8afe8f08.31baf",
        "name": "START",
        "topic": "",
        "payload": "START",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 370,
        "y": 220,
        "wires": [
            [
                "8d362eaa.4dbdd"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "ab0af23e.d0067",
        "type": "inject",
        "z": "8afe8f08.31baf",
        "name": "Sende Test SMS",
        "topic": "",
        "payload": "{\"number\":\"0049123456789\",\"message\":\"Nodered SMS Text Deine CCU3\"}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 400,
        "y": 380,
        "wires": [
            [
                "a14902bd.bbea4"
            ]
        ]
    },
    {
        "id": "72d1ca66.f871a4",
        "type": "inject",
        "z": "8afe8f08.31baf",
        "name": "STOP",
        "topic": "",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 370,
        "y": 300,
        "wires": [
            [
                "be427924.bc43c8"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "8d362eaa.4dbdd",
        "type": "change",
        "z": "8afe8f08.31baf",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "START",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 220,
        "wires": [
            [
                "29b35b21.7d6214"
            ]
        ]
    },
    {
        "id": "a14902bd.bbea4",
        "type": "change",
        "z": "8afe8f08.31baf",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "SEND_SMS",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 380,
        "wires": [
            [
                "29b35b21.7d6214"
            ]
        ]
    },
    {
        "id": "be427924.bc43c8",
        "type": "change",
        "z": "8afe8f08.31baf",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "STOP",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 300,
        "wires": [
            [
                "29b35b21.7d6214"
            ]
        ]
    },
    {
        "id": "b7c36d51.d86f5",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_LetzteSignalstaerke",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1310,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "a042c153.e760d",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_LetzterPruefStatus",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1310,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "f98d4ddc.20471",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_Modus",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1270,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "74a5e6c1.553708",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_LetzterSendeStatus",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1310,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "a36258f0.99cfe8",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_SMSEmfangAbsenderID",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1330,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "72eb574a.e61a08",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_SMSEmfangText",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1300,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "92d3ce87.227ff",
        "type": "ccu-sysvar",
        "z": "8afe8f08.31baf",
        "name": "Messenger_Warteschlange",
        "ccuConfig": "",
        "topic": "ReGaHSS/${Name}",
        "change": false,
        "cache": false,
        "x": 1300,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "dd6d867a.cd7188",
        "type": "ccu-poll",
        "z": "8afe8f08.31baf",
        "name": "",
        "script": "",
        "ccuConfig": "",
        "x": 530,
        "y": 460,
        "wires": []
    },
    {
        "id": "196edcae.87f893",
        "type": "ccu-get-value",
        "z": "8afe8f08.31baf",
        "name": "number",
        "ccuConfig": "",
        "iface": "ReGaHSS",
        "channel": "",
        "sysvar": "Messenger_SMSNummer",
        "sysvarProperty": "value",
        "datapoint": "",
        "datapointProperty": "value",
        "setProp": "number",
        "setPropType": "msg",
        "x": 360,
        "y": 580,
        "wires": [
            [
                "64998b41.d0cd94"
            ]
        ]
    },
    {
        "id": "64998b41.d0cd94",
        "type": "ccu-get-value",
        "z": "8afe8f08.31baf",
        "name": "message",
        "ccuConfig": "",
        "iface": "ReGaHSS",
        "channel": "",
        "sysvar": "Messenger_Warteschlange",
        "sysvarProperty": "value",
        "datapoint": "",
        "datapointProperty": "value",
        "setProp": "message",
        "setPropType": "msg",
        "x": 520,
        "y": 580,
        "wires": [
            [
                "c338d264.361b2"
            ]
        ]
    },
    {
        "id": "9a2e5bd0.183728",
        "type": "inject",
        "z": "8afe8f08.31baf",
        "name": "Send",
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 370,
        "y": 460,
        "wires": [
            [
                "dd6d867a.cd7188",
                "68ea592d.530358"
            ]
        ]
    },
    {
        "id": "68ea592d.530358",
        "type": "delay",
        "z": "8afe8f08.31baf",
        "name": "500ms",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 520,
        "wires": [
            [
                "196edcae.87f893"
            ]
        ]
    },
    {
        "id": "c338d264.361b2",
        "type": "function",
        "z": "8afe8f08.31baf",
        "name": "msg.input",
        "func": "msg.input = \"SEND_SMS\";\nmsg.payload = {\"number\":msg.number,\"message\":msg.message}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 700,
        "y": 580,
        "wires": [
            [
                "29b35b21.7d6214"
            ]
        ]
    },
    {
        "id": "892f3e46.72926",
        "type": "ccu-rpc-event",
        "z": "8afe8f08.31baf",
        "name": "",
        "iface": "BidCos-RF",
        "ccuConfig": "",
        "rooms": "",
        "roomsRx": "str",
        "functions": "",
        "functionsRx": "str",
        "device": "BidCoS-RF",
        "deviceRx": "str",
        "deviceName": "",
        "deviceNameRx": "str",
        "deviceType": "",
        "deviceTypeRx": "str",
        "channel": "BidCoS-RF:1",
        "channelRx": "str",
        "channelName": "",
        "channelNameRx": "str",
        "channelType": "VIRTUAL_KEY",
        "channelTypeRx": "str",
        "channelIndex": "",
        "channelIndexRx": "str",
        "datapoint": "PRESS_SHORT",
        "datapointRx": "str",
        "change": false,
        "working": false,
        "cache": false,
        "topic": "${CCU}/${Interface}/${channelName}/${datapoint}",
        "x": 360,
        "y": 520,
        "wires": [
            [
                "dd6d867a.cd7188",
                "68ea592d.530358"
            ]
        ]
    },
    {
        "id": "49d22408.4207ec",
        "type": "serial in",
        "z": "8afe8f08.31baf",
        "name": "Serial-In",
        "serial": "527c23a3.96193c",
        "x": 540,
        "y": 140,
        "wires": [
            [
                "5ed99990.bfa0d8"
            ]
        ]
    },
    {
        "id": "ad76b8db.6a0f28",
        "type": "serial out",
        "z": "8afe8f08.31baf",
        "name": "Serail-Out",
        "serial": "527c23a3.96193c",
        "x": 1240,
        "y": 120,
        "wires": []
    },
    {
        "id": "73debf2f.80c45",
        "type": "template",
        "z": "8afe8f08.31baf",
        "name": "Systemvariablen",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "! Zeichenkette\nstring  svName = \"Messenger_SMSEmfangAbsenderID\";\nobject  svObj  = dom.GetObject(svName);\nif (!svObj){   \nobject svObjects = dom.GetObject(ID_SYSTEM_VARIABLES);\nsvObj = dom.CreateObject(OT_VARDP);\nsvObjects.Add(svObj.ID());\nsvObj.Name(svName);   \nsvObj.ValueType(ivtString);\nsvObj.ValueSubType(istChar8859);\nsvObj.DPInfo(\"Absender Telefonnummer empfangene SMS\");\nsvObj.ValueUnit(\"\");\nsvObj.DPArchive(false);\nsvObj.State(\"\");\nsvObj.Internal(false);\nsvObj.Visible(true);\ndom.RTUpdate(0);\n}\n! Zeichenkette\nstring  svName = \"Messenger_SMSNummer\";\nobject  svObj  = dom.GetObject(svName);\nif (!svObj){   \nobject svObjects = dom.GetObject(ID_SYSTEM_VARIABLES);\nsvObj = dom.CreateObject(OT_VARDP);\nsvObjects.Add(svObj.ID());\nsvObj.Name(svName);   \nsvObj.ValueType(ivtString);\nsvObj.ValueSubType(istChar8859);\nsvObj.DPInfo(\"Empfänger Telefonnummer\");\nsvObj.ValueUnit(\"\");\nsvObj.DPArchive(false);\nsvObj.State(\"\");\nsvObj.Internal(false);\nsvObj.Visible(true);\ndom.RTUpdate(0);\n}",
        "output": "str",
        "x": 680,
        "y": 760,
        "wires": [
            [
                "69bb836e.be1c1c"
            ]
        ]
    },
    {
        "id": "69bb836e.be1c1c",
        "type": "ccu-script",
        "z": "8afe8f08.31baf",
        "name": "Sysvar erstellen",
        "script": "",
        "ccuConfig": "",
        "topic": "${CCU}/${Interface}",
        "x": 860,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "b0136155.3c8d1",
        "type": "inject",
        "z": "8afe8f08.31baf",
        "name": "Systemvariablen anlegen",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 470,
        "y": 760,
        "wires": [
            [
                "73debf2f.80c45"
            ]
        ]
    },
    {
        "id": "b5ca9a6.dcf2168",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "1. Fehlende Systemvariablen anlegen",
        "info": "",
        "x": 510,
        "y": 720,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "a5e4e23d.b109f",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "Neue Systemvariable ->",
        "info": "",
        "x": 200,
        "y": 580,
        "wires": [],
        "icon": "font-awesome/fa-exclamation-triangle"
    },
    {
        "id": "45a3ebd6.f24a84",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "<- Neue Systemvariable",
        "info": "",
        "x": 1560,
        "y": 420,
        "wires": [],
        "icon": "font-awesome/fa-exclamation-triangle"
    },
    {
        "id": "ae04b29c.d991d",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "TC35 Modul Subflow -> Alternative zum Messenger Addon",
        "info": "Folgende Systemvariable wird nicht mehr bedient:\n\n- Messenger_SMSBefehle",
        "x": 490,
        "y": 60,
        "wires": []
    },
    {
        "id": "f0bb2a36.4751d8",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "2. tty Pfad anpassen \"/ttyUSB0\" oder \"/ttyUSB1\"...",
        "info": "",
        "x": 300,
        "y": 140,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "d0f92d1c.bc3c7",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "3. Taster auswählen",
        "info": "",
        "x": 210,
        "y": 520,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "b6fb612d.bbf0c",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "4. Config bearbeiten",
        "info": "",
        "x": 970,
        "y": 500,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "362138a1.106e38",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "5. Empfänger bearbeiten",
        "info": "",
        "x": 210,
        "y": 380,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "9df8743a.a6e328",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "6. SysVar prüfen",
        "info": "",
        "x": 1100,
        "y": 420,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "4bff29c1.0061f8",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "7. Fertig zum Start deploy!",
        "info": "",
        "x": 1330,
        "y": 720,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "f111344e.3af408",
        "type": "comment",
        "z": "8afe8f08.31baf",
        "name": "8. Webinterface öffnen unter:   http://IPderCCU/addons/red/TC35",
        "info": "",
        "x": 1450,
        "y": 760,
        "wires": [],
        "icon": "font-awesome/fa-exclamation"
    },
    {
        "id": "527c23a3.96193c",
        "type": "serial-port",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "newline": "\\r",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    }
]
