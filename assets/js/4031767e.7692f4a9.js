"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1546],{2832:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/Announcements","metadata":{"permalink":"/announcement/Announcements","source":"@site/announcement/Announcements.md","title":"Announcements","description":"This snapshot is not suitable for end-users. It is intended for beta-testers. Please realise that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care","date":"2023-10-08T07:06:24.000Z","formattedDate":"October 8, 2023","tags":[],"readingTime":0.27,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Announcements","sidebar_position":100},"nextItem":{"title":"snapshot 2.0.0-20230912","permalink":"/announcement/snapshot 2.0.0-20230912"}},"content":":::danger\\n This snapshot is not suitable for end-users. It is intended for beta-testers. Please realise that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care\\n\\n If you wish to become involved in testing these snapshots please contact us on the [Discord](https://discord.gg/6QUySXdEvd) \\n:::"},{"id":"/snapshot 2.0.0-20230912","metadata":{"permalink":"/announcement/snapshot 2.0.0-20230912","source":"@site/announcement/snapshot 2.0.0-20230912.md","title":"snapshot 2.0.0-20230912","description":"Rotorflight snapshot 2.0.0-20230912 is ready","date":"2023-10-08T07:06:24.000Z","formattedDate":"October 8, 2023","tags":[],"readingTime":1.45,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20230912","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"Announcements","permalink":"/announcement/Announcements"}},"content":"Rotorflight snapshot 2.0.0-20230912 is ready\\nNOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.\\n\\n* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230912).\\n* The Blackbox is available to download [here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230912).\\n* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230912).\\n\\nPlease also read the Snapshots Wiki page for general information about snapshots.\\n\\nChanges to the Firmware:\\n* Governor gov_max_throttle parameter added\\n* Governor tracking_speed fixed in passthrough mode\\n* RPM filter fixed if only main rotor RPM available\\n* RPM filter update fixed for lower CPU load\\n* Cyclic Cross-Coupling refactored\\n* Collective-to-yaw precomp not used during spoolup\\n* TTA Collective correction refactored\\n* TTA not used during spoolup\\n* H7 TIMUP configuration bug fixed\\n* BlackBox multi-file logging fixed (works on W25N01G too)\\n* BlackBox erase refactored - works also while logging\\n* Boost and Offset terms added to BlackBox\\n* PID Test Mode 3 added for HSI testing\\n* Tail center trim scaling changed\\n* Tail motor thrust law changed to linear\\n* Many new parameters added to MSP\\n* Many new parameters added to Adjustment Functions\\n\\nChanges to the Configurator:\\n* Chinese translation added\\n* MSP aligned with the firmware\\n* PID Test Mode 3 added to Profiles\\n* Boost gains and cutoffs added to Profiles\\n* Offset gains and limits added to Profiles\\n* Cyclic Cross-coupling compensation added to Profiles\\n* Governor max throttle added to Profiles\\n* Tail Center Trim added to Mixer\\n\\nChanges to the Blackbox:\\n* Fix a drag&drop bug\\n* Fix adjustment labels\\n* Fix RPM_FILTER debug mode labels\\n* Fix collective setpoint scaling\\n* Changes to the LUA Scripts:\\n\\nAligned MSP messages with firmware 20230912\\nAdded Boost cutoffs\\nAdded Offset gains\\nAdded Cyclic Cross-Coupling\\nAdded Governor Max Throttle"}]}')}}]);