let { MessageType } = require('@adiwajshing/baileys')

const miningxp = 5000
const miningmoney = 5000
const mininglimit = 10
const timeout = 3600000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmining + 3600000
  if (new Date - global.db.data.users[m.sender].lastmining< 3600000) throw `Anda sudah mengambil hadiah\ntunggu selama ${msToTime(time - new Date())} lagi`
	//let xpee = `${Math.floor(Math.random(global.db.data.users[m.sender].exp += miningxp) * 5000)}`.trim()
	// let moneyy = `${Math.floor(Math.random(global.db.data.users[m.sender].money += miningmoney) * 5000)}`.trim()
	//let limitt = `${Math.floor(Math.random(global.db.data.users[m.sender].limit += mininglimit) * 15)}`.trim()
	let limitt = `${Math.floor(Math.random() * 15)}`.trim()
	let xpee = `${Math.floor(Math.random() * 5000)}`.trim()
	let moneyy = `${Math.floor(Math.random() * 5000)}`.trim()
	let pajak = 0.02
	//global.db.data.users[m.sender].limit += limitt * 1
	global.db.data.users[m.sender].exp += xpee * 1
	global.db.data.users[m.sender].money += moneyy * 1
	//global.db.data.users[m.sender].exp -= 500
	global.db.data.users[m.sender].money -= pajak * moneyy
	global.db.data.users[m.sender].lastmining = new Date * 1
  m.reply(`Selamat kamu mendapatkan : \n+${xpee} XP\n+${moneyy} Money\n\nDipotong pajak :\n -${pajak * moneyy} Money`)
  setTimeout(() => {
					conn.reply(m.chat, `Hadiah sudah bisa di dapatkan kembali`, m)
					}, timeout)
}
handler.help = ['hadiah']
handler.tags = ['rpgabsen']
handler.command = /^(hadiah)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.exp = 0
handler.money = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}