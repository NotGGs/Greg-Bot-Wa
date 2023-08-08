let didyoumean = require('didyoumean')
let similarity = require('similarity')

let handler = m => m

handler.before = function (m, { match, usedPrefix, text, args }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
       	let reel = `• Apakah Anda mencari menu berikut? 

 ◦ Nama Command: *${usedPrefix + mean}* 
 ◦ Hasil Kemiripan: *${parseInt(som)}%*
 `
	 if (mean) this.sendMessage(m.chat, {
text: reel,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namebot,
body: wm,
thumbnailUrl: "https://i.ibb.co/pnRZs1v/31d3h8.jpg",
sourceUrl: syt,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
	}
  }

module.exports = handler