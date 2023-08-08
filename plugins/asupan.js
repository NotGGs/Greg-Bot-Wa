let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://dannteam.com/api/asupan/video/random?apikey=DannTeam', 'asupan.mp4', 'Nih Kak', m)
}
handler.help = ['']
handler.tags = ['']

handler.command = /^()$/i
handler.premium = false
handler.register = true
handler.limit = 500
module.exports = handler