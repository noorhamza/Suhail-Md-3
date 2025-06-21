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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_08_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJibnBJSzM3VUx6NEVWZ0FHRGJSRWsycWVYTTM5Z1hmVlBSVm9XYit4OXE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLdWFIVHNnUlJsNks3ZzhoeGJKY3BRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiYTk5Y2VmLTg2ZjYtNGM4Ny1iZTBjLTRiN2JkMmMwZTQzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxODcsXG4gICAgICAyMTgsXG4gICAgICAyNTAsXG4gICAgICAxMDgsXG4gICAgICA0OCxcbiAgICAgIDE5MyxcbiAgICAgIDEsXG4gICAgICA2MixcbiAgICAgIDIyOCxcbiAgICAgIDE1OSxcbiAgICAgIDE0MixcbiAgICAgIDQzLFxuICAgICAgMTc5LFxuICAgICAgMjIxLFxuICAgICAgNzUsXG4gICAgICA5OCxcbiAgICAgIDEzOSxcbiAgICAgIDExNCxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAyMTQsXG4gICAgICAyMzAsXG4gICAgICAxMDYsXG4gICAgICA5NCxcbiAgICAgIDIwOCxcbiAgICAgIDc2LFxuICAgICAgNjksXG4gICAgICAxODgsXG4gICAgICAyNDcsXG4gICAgICAyMjYsXG4gICAgICAxMDIsXG4gICAgICA0MixcbiAgICAgIDIwMixcbiAgICAgIDE4LFxuICAgICAgMTA2LFxuICAgICAgNjUsXG4gICAgICAxNjcsXG4gICAgICA5MSxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRiMThnREVQdTAyY0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoUGo0Z01ZNVViZERaaTErUVdxRFJrWFpYRzllR3hHaGYrTTFNM2VzRVVJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhZYS8xWGIrMVBJaW9kSlRzSU9XRUpmeGVncU1NOUdNTy9YREhiVGlKYVpoZlRUR045UmZkZ3NwbTNuL2ZNZHlreDlNTU1YLy9JYlZNNW1uaHcvOEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlYrK3pUYjJsMS9YdEljMlhKU21DZUZ3MFU3VkpNNStaNG1WSFlzWUVyMmpPbmFhcEdoWUtXcHcrTnQvUzgvalJjc08vVkZlU1JTK0F6MUtQaVhMd0J3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE0MTEwMDcwOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDgwMTgwNDUxNjE3MTQ6ODBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQxMTAwNzA6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTA0ODk3MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMDRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwwNC5qc29uIjogIntcImtleURhdGFcIjpcIlNQVk1yUTgvczhCRVd0VXJqSVlxckZDVGNIQjZkWUUrVitBaTZiUEo3S0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU3NzM4Mzg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTA0ODk3MzM4NjVcIn0iCn0="  // PUT your SESSION_ID 


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
