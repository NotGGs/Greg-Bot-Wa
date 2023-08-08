let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Inget Allah
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Upgrade Ke Premium Dulu!', 'status@broadcast')
}
handler.help = ['']
handler.tags = ['']
handler.command = /^()$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/