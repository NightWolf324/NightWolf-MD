let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
   let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
`.trim()
    conn.tebakkata[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', '.teka', m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Tebak Kata', '.tebakkata', conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

handler.group = true

module.exports = handler