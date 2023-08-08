let fs = require('fs')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendFile(m.chat, cita, 'anime.jpg', 'Nih Kak', m)
}
handler.tags = ['']
handler.help = ['']
handler.command = /^()$/i

handler.register = false
handler.limit = true

module.exports = handler