let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix }) => {

                   if (args.length == 0) return conn.reply(m.chat, `Harap masukan perintah ${usedPrefix}kill monster`, m)
                   if (args[0] == 'monster') {
                   let time = global.db.data.users[m.sender].lastwarpet + 7200000
                   // if (new Date - global.db.data.users[m.sender].lastwarpet > 3600000) {
                   if (new Date - global.db.data.users[m.sender].lastwarpet < 7200000) throw `Anda sudah berperang melawan monster\nDan kamu harus kembali ke markas , Siap melanjutkan kembali ${msToTime(time - new Date())} lagi..`
                   if (global.db.data.users[m.sender].health > 79) {
                   if (global.db.data.users[m.sender].healtmonster > 99) {
                   let timeout = 1000
                   let timeouts = 60000
                   let timeout5 = 120000
                   let timeout10 = 180000
                   let timeout15 = 240000
                   let armor = global.db.data.users[m.sender].armor 
                   let armormonster = global.db.data.users[m.sender].armormonster
                 //  let healtmonster = `${Math.floor(Math.random() * 50)}`.trim()
                   let expnye = `${Math.floor(Math.random() * 100000)}`.trim()
                   // let nabungnye = `${Math.floor(Math.random() * 100000)}`.trim()
                   let limitnye = `${Math.floor(Math.random() * 10)}`.trim()
                   let moneynye = `${Math.floor(Math.random() * 100000)}`.trim()
                   let legendary = `${Math.floor(Math.random() * 2)}`.trim()
                   let berliannye = `${Math.floor(Math.random() * 2)}`.trim()
                   let pet = `${Math.floor(Math.random() * 2)}`.trim()
                   let boxs = `${Math.floor(Math.random() * 5)}`.trim()
                   let ____health = `${Math.floor(Math.random() * 101)}`.trim() 
                   let ___health = (____health * 1)
                   let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
                   let armornyo = (armormonster == 0 ? 0 : '' || armormonster == 1 ? 5 : '' || armormonster == 2 ? 10 : '' || armormonster == 3 ? 15 : '' || armormonster == 4 ? 21 : '' || armormonster == 5 ? 30 : '')
                   let __health = (___health > 60 ? ___health - armornya : ___health)
                   let healt = (armor == 0 ? pickRandom(['30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20']) : armornya > 0 ? __health : ___health)
                   
                   let ____healtmonster = `${Math.floor(Math.random() * 101)}`.trim() 
                   let ___healtmonster = (____healtmonster* 1)
            //       let armornyo = (armormonster == 0 ? 0 : '' || armormonster == 1 ? 5 : '' || armormonster == 2 ? 10 : '' || armormonster == 3 ? 15 : '' || armormonster == 4 ? 21 : '' || armormonster == 5 ? 30 : '')
            //       let __healtmonster = (___healtmonster > 60 ? ___healtmonster - armornyo : ___healtmonster)
                   let healtmonster = `${pickRandom(['50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40','39','38','37','36','35','34','33','32','31','30'])}`
                   
                   
                   let _potion = `${Math.floor(Math.random() * 1)}`.trim()
                   let potion = (_potion * 1)
                   global.db.data.users[m.sender].health -= healt * 1                   
                   global.db.data.users[m.sender].healtmonster -= healtmonster * 1
                   global.db.data.users[m.sender].potion += potion * 1
                   global.db.data.users[m.sender].exp += expnye * 1
                   global.db.data.users[m.sender].limit += limitnye * 1
                   global.db.data.users[m.sender].tiketcoin += 1
                  // global.db.data.users[m.sender].nabung += nabungnye * 1
                   global.db.data.users[m.sender].berlian += berliannye * 1
                   global.db.data.users[m.sender].money += moneynye * 1
                   global.db.data.users[m.sender].legendary += legendary * 1
                   global.db.data.users[m.sender].pet += pet * 1
                   global.db.data.users[m.sender].boxs += boxs * 1
                   global.db.data.users[m.sender].lastwarpet = new Date * 1
                 //  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/monster.json')).json()
                //   let json = src[Math.floor(Math.random() * src.length)]
                   let str = `
Berhasil mengalahkan monster 
Nyawa mu berkurang -${healt * 1} karena Kamu telah berperang melawan ${pickRandom(['Monster Nemean Lion','Monster Lernaean Hydra','Monster Lamia','Monster Golems','Monster Scorpion Z'])} dan mendapatkan
*Exp :* ${expnye}
*Money :* ${moneynye}
*Limit :* ${limitnye}
*Tiketcoin :* 1
*Berlian :* ${berliannye}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${pet == 0 ? '' : '\n*Pet:* ' + pet + ''}${boxs == 0 ? '' : '\n*Boxs:* ' + boxs + ''}
`.trim()
                    setTimeout(() => {
					conn.reply(m.chat, str, m)
					conn.reply(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate', m)
					}, timeout15) 
					setTimeout(() => {
					conn.reply(m.chat, `Darah monster saat ini -${healtmonster * 1}\nHati hati monster saat ini berevolusi..`, m)
					}, timeout10)
					setTimeout(() => {
					conn.reply(m.chat, `Seraangg...!! `, m)
					}, timeout5)
					setTimeout(() => {
					conn.reply(m.chat, `Argghh Aku adalah ${pickRandom(['Monster Nemean Lion','Monster Lernaean Hydra','Monster Lamia','Monster Golems','Monster Scorpion Z'])} 👹`, m)
					}, timeouts)
					setTimeout(() => {
					conn.reply(m.chat, `Persiapan menyerang monster, yang datang dari planet lain\nDarah monster saat ini +100`, m)
					}, timeout)
                    } else conn.reply(m.chat, 'Minimal 100 tiketm untuk bisa melawan\nBeli tiketm dulu dengan ketik *' + usedPrefix + 'shop buy tiketm <jumlah>*\n\n_Minimal tiketm 100/1 monster_', m)
                 } else conn.reply(m.chat, 'Minimal 80 health untuk bisa melawan\nBeli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'daily*', m)
             } else {
                conn.reply(m.chat, `Command salah!!\nContoh : ${usedPrefix}kill monster`, m)
             }
          }

          
handler.help = ['kill monster']
handler.tags = ['game']
handler.command = /^(kill)$/i

handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

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

