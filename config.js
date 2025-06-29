const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314110070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_21_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSlBTWTVUYnJOUUFNK0VtNWJSc3d6ZXRPVmxrZklDWEZuelgxUjR0VUMzbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaFVCRkt1U2dSVEdiOXoxUThtUFgyZ1wiLFxuICBcInBob25lSWRcIjogXCJiMWUzODA2NC04NWQ1LTQwN2EtYThhOS1iMGUxNWVlZDk4Y2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMzUsXG4gICAgICAyMjksXG4gICAgICAyMjgsXG4gICAgICAxMTgsXG4gICAgICAxNDEsXG4gICAgICA3LFxuICAgICAgMTU0LFxuICAgICAgMTU5LFxuICAgICAgMTc1LFxuICAgICAgNzUsXG4gICAgICAxNDgsXG4gICAgICA1NixcbiAgICAgIDc1LFxuICAgICAgMjMxLFxuICAgICAgMjE5LFxuICAgICAgNDcsXG4gICAgICAxOTQsXG4gICAgICA1MyxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyNDMsXG4gICAgICAyMTAsXG4gICAgICAyNDcsXG4gICAgICAxNDQsXG4gICAgICA4LFxuICAgICAgNDgsXG4gICAgICA0OCxcbiAgICAgIDY3LFxuICAgICAgMjEsXG4gICAgICA0MyxcbiAgICAgIDE1NixcbiAgICAgIDI3LFxuICAgICAgMzksXG4gICAgICAxNjUsXG4gICAgICAyMzAsXG4gICAgICA3NCxcbiAgICAgIDExOCxcbiAgICAgIDE3MyxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piYjE4Z0RFUEt6aGNNR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFBqNGdNWTVVYmREWmkxK1FXcURSa1haWEc5ZUd4R2hmK00xTTNlc0VVST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3UlRBTVkwL0FoYjNmTHJiVmNXWnZ2WTBmME5HMUJUTEtkQi91SkM2ZFFkNjBValoza3RPTllveXRXcDJ1a1BjT0REdGR6UmNNckJkcDhSazZCSUxEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxTXBUdGQwU29pWEdURzkvbFZuYkVGblNST3VHdEw5YXkxSkd1b2pycUJYamxrUjV1SjBlNnVRVGV2eGI4YStYRlJIZXNHM2ErMmY1SG04eXVhUzFqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDExMDA3MDo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4MDE4MDQ1MTYxNzE0Ojg2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0MTEwMDcwOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUxMjEwNDg2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
