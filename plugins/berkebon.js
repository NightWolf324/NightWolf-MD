const timeout = 1800000
                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let apelu = global.db.data.users[m.sender].bibitapel
                                     let angguru = global.db.data.users[m.sender].bibitanggur
                                     let manggau = global.db.data.users[m.sender].bibitmangga
                                     let pisangu = global.db.data.users[m.sender].bibitpisang
                                     let jeruku = global.db.data.users[m.sender].bibitjeruk 
	                                 let time = global.db.data.users[m.sender].lastberkebon + 1200000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${usedPrefix}shop buy bibitmangga 500\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`)
                                     if (new Date - global.db.data.users[m.sender].lastberkebon< 1200000) throw `Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`
                                     if (global.db.data.users[m.sender].bibitmangga > 9) {
                                 	if (global.db.data.users[m.sender].bibitapel > 9) {
                                 	if (global.db.data.users[m.sender].bibitpisang > 9) {
                                 	if (global.db.data.users[m.sender].bibitjeruk > 9) {
                                 	if (global.db.data.users[m.sender].bibitanggur > 9) {
                                     let pisangpoin = `${Math.floor(Math.random() * 10)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 10)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 10)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 10)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 10)}`.trim()
                                     global.db.data.users[m.sender].pisang += pisangpoin * 1
                                     global.db.data.users[m.sender].anggur += anggurpoin * 1
                                     global.db.data.users[m.sender].mangga += manggapoin * 1
                                     global.db.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.db.data.users[m.sender].apel += apelpoin * 1
                                     global.db.data.users[m.sender].tiketcoin += 1
                                     global.db.data.users[m.sender].bibitpisang -= 10
                                     global.db.data.users[m.sender].bibitanggur -= 10
                                     global.db.data.users[m.sender].bibitmangga -= 10
                                     global.db.data.users[m.sender].bibitjeruk -= 10
                                     global.db.data.users[m.sender].bibitapel -= 10
                                     global.db.data.users[m.sender].lastberkebon = new Date * 1
                                     m.reply(`Selamat kamu mendapatkan : \n+${pisangpoin} Pisang\n+${manggapoin} Mangga\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${apelpoin} Apel\n+1 Tiketcoin`)
                                     setTimeout(() => {
					                      conn.reply(m.chat, `Waktunya berkebon lagi kak 😅`, m)
					                  }, timeout)
                                  } else m.reply(`Pastikan bibit anggur kamu *10* untuk bisa berkebon`)
                              } else m.reply(`Pastikan bibit jeruk kamu *10* untuk bisa berkebon`)
                          } else m.reply(`Pastikan bibit pisang kamu *10* untuk bisa berkebon`)
                      } else m.reply(`Pastikan bibit apel kamu *10* untuk bisa berkebon`)
                  } else m.reply(`Pastikan bibit mangga kamu *10* untuk bisa berkebon`)
              }
handler.help = ['berkebon']
handler.tags = ['rpg']
handler.command = /^(berkebon)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

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
