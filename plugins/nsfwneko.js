import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let nemko = `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${global.lolhuman}`
	conn.sendMessage(m.chat, { image: { url: nemko }, caption: 'Pecinta kucing' }, m)
}
handler.command = /^()$/i
handler.tags = ['']
handler.help = ['']
handler.premium = true
handler.limit = true

export default handler