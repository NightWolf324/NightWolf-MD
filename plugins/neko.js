// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  //conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
  conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, json.url, [['Next','.neko']],m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^neko$/i

module.exports = handler
