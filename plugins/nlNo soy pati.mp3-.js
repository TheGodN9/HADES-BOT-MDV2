import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/No soy pati.mp3'
conn.sendFile(m.chat, vn, 'No soy pati.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /No soy pati|no soy pati/
handler.command = new RegExp
export default handler
