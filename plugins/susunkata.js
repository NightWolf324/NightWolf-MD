let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Tipe : ${json.tipe}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}suska untuk bantuan
Bonus: ${poin} XP
TiketCoin: ${tiketcoin} Tiketcoin
`.trim()
    conn.susunkata[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', '.suska', m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Susun Kata', '.susunkata', conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

handler.group = true

module.exports = handler