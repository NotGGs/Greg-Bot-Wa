let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau cari apa?\n\n${usedPrefix + command} `
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'Inget Tuhan';
	try {
		let res = await fetch(`https://fakebokep.online/?s=${text}`)
		let cap = `Pencarian dari: ${text}\n`
	 cap += `Link: https://fakebokep.online/?s=${text}
`
cap +=  '\n' + '================' + '\n'
  
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = [''].map(v => v + ' <query>')
handler.tags = ['']
handler.command = /^(s?earch)?$/i

handler.register = true
handler.premium = true
handler.private = false

module.exports = handler