let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (!text) throw `Mau hapus fitur di plugins mana?`
  if (global.conn.user.jid != conn.user.jid) return
  m.reply('Executing...')
  let o
  try {
    o = await exec(`rm -rf ./plugins/${text}.js`)
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
handler.help = ['delfitur (file)']
handler.tags = ['owner']
handler.command = /^(deleteplugins|delplug|delp|delf|delfitur)$/i

handler.owner = true

module.exports = handler
