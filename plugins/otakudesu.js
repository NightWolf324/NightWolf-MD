let { otakudesu } = require('hxz-api')
let fetch = require('node-fetch')
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    const result = await otakudesu(text)
    
let otaku = `
*JUDUL:* ${result.judul}
*RATE:* ${result.rate}
*PRODUSER:* ${result.produser}
*TIPE:* ${result.tipe}
*STATUS:* ${result.status}
*EPISODE:* ${result.episode}
*DURASI:* ${result.durasi}
*RILIS:* ${result.rilis}
*STUDIO:* ${result.studio}
*GENRE:* ${result.genre}
*DESC:* ${result.desc}
*BATCH:* ${result.batch}

*BATCHSD:* ${result.batchSD}

*BATCHHD:* ${result.batchHD}`
let gambar = await(await fetch(result.img)).buffer()
await conn.sendFile(m.chat, gambar, '', otaku, m)
}

handler.help = ['otakudesu'].map(v => v + ' <Apa>')
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i

module.exports = handler
