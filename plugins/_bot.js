let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
//let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: "123", contextInfo: {
          externalAdReply: {
showAdAttribution: true,
title: "Iya, Ada Apa?",
body: "??",
thumbnailUrl: "https://i.ibb.co/pnRZs1v/31d3h8.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    throw stiker.toString()
    
}

handler.customPrefix = /^(@62895388290404|Greg)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
"https://telegra.ph/file/d193547d62cec53bff1e9.png"
]