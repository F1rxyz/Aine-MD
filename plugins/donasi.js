let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6285806459088]
│ •  [6285806459088]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
