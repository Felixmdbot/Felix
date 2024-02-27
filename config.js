global.owner = ['6285236226786'];
global.mods = ['6285236226786'];
global.prems = ['6285236226786'];

global.nameowner = 'Sazumi Viki';
global.numberowner = '6285236226786';
global.mail = 'hi@sazumiviki.dev';

global.namebot = '🐱 Sazumi - Bot Whatsapp';
global.gc = 'https://chat.whatsapp.com/GSGo630lZlJB9Sr6hKaxSl';
global.web = 'https://chat.whatsapp.com/GSGo630lZlJB9Sr6hKaxSl';
global.instagram = 'https://instagram.com/moe.sazumiviki';

global.lolkey = 'ayakaviki';
global.sazumiviki_title = '🐱 Sazumi - Bot Whatsapp'
global.sazumiviki_thumb = 'https://cdn.jsdelivr.net/gh/SazumiVicky/sazumi-bot@main/storage/20230810_130446.jpg'
global.sazumiviki_source = 'https://instagram.com/moe.sazumiviki'
global.sazumiviki_profile = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/510e37bebbf7a780e7ade93a66f268ff.jpg'
global.sig = 'https://instagram.com/moe.sazumiviki'
global.sazumi_version = '© sazumi-bot v1.0.0 (Beta)'
global.footer = '≈ ꜱᴀᴢᴜᴍɪ-ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴢᴜᴍɪ ᴠɪᴋɪ'
global.wm = '🐱 Sazumi - Bot Whatsapp';
global.watermark = wm;
global.wait = 'Wait a moment..';
global.sazumiviki_imgur = 'Client-ID xxxxxxxxxx'; // Example: Client-ID 823974dh3h
global.rose = 'Rs-lojembot';
global.xzn = 'sazumiviki';
global.sourceUrl = 'https://Instagram.com/moe.sazumiviki';

global.stiker_wait = 'Wait a moment..';
global.packname = '@moe.sazumiviki';
global.author = 'sazumi-bot\n';

global.APIs = {
  lolhuman: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  skizo: 'https://xzn.wtf/',
  sazumiviki: 'https://api.sazumiviki.me'
};

global.APIKeys = {
  'https://api.sazumiviki.me': 'sazumiviki',
  'https://xzn.wtf/': 'sazumiviki',
  'https://api.itsrose.life': 'Rs-lojembot',
  'https://api.lolhuman.xyz': 'ayakaviki',
};

global.multiplier = 45;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈',
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

let fs = require('fs');
let chalk = require('chalk');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});