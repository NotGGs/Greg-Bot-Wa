
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply('Tunggu Sebentar...')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  let dann = `Fitur Tidak Tersedia`
  conn.sendFile(m.chat, pickRandom(animemiku), 'animemiku.jpg', `${dann}`, m)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^()$/i

handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const animemiku = [

     "https://i.pinimg.com/736x/c8/51/37/c8513776e11430d2fad512e13f1a4519.jpg",
        "https://i.pinimg.com/originals/39/c6/c6/39c6c604231fa82f13c4eea24f6a49ef.jpg",
        "https://i.pinimg.com/550x/18/44/a1/1844a11ae709a1a9ea78395fce55f107.jpg",
        "https://i.pinimg.com/originals/40/a5/f7/40a5f7f6107211311dead1dfce33f592.jpg",
        "https://i.pinimg.com/originals/e2/6f/39/e26f39eef5e9a6dd14589afe27b52e9b.jpg",
        "https://i.pinimg.com/736x/e2/f3/ab/e2f3ab0cd0fca89b7e3d3210907e666e.jpg",
        "https://i.pinimg.com/736x/6d/5f/60/6d5f60477b077fc2ee2f118f517f85c6.jpg",
        "https://i.pinimg.com/originals/05/7e/47/057e472e23a53adf7b6e3fa407025585.jpg",
        "https://i.pinimg.com/originals/cb/ae/c2/cbaec24f7cbcfbeb8496b8f8b6331bff.png",
        "https://i.pinimg.com/originals/38/ca/43/38ca43b2c30852fe6f0e6ed57d67c750.jpg",
        "https://i.pinimg.com/736x/6e/2d/c3/6e2dc356bdd2bedd09bc9231396ab1cf.jpg",
        "https://i.pinimg.com/originals/e6/6a/ef/e66aef52dd2705db8f0a44d5087a541e.jpg",
        "https://i.pinimg.com/originals/9c/9e/56/9c9e56c94d99dba07e3574e639d49673.jpg",
        "https://i.pinimg.com/1200x/4d/3b/97/4d3b97cccb4a90e82e18f3ce714e0a92.jpg",
        "https://i.pinimg.com/736x/2b/73/3a/2b733a6e52267c713b8af1d8c28b443a.jpg",
        "https://i.pinimg.com/originals/56/4c/5c/564c5cad9daa64812d0bf2fb7e54916e.gif",
        "https://i.pinimg.com/originals/d0/57/92/d0579203714d188a3335bf696cc6ce06.jpg",
        "https://i.pinimg.com/originals/49/25/9a/49259ac2d3139f8b58c043e8f637745c.jpg",
        "https://i.pinimg.com/originals/31/4e/5f/314e5fd2080b6421cb9cdd1018f4d231.jpg",
        "https://i.pinimg.com/736x/d1/c6/37/d1c637ccb5357a5e25393c980ffc78f2.jpg",
        "https://i.pinimg.com/originals/19/3c/96/193c96b3df20904208b44eb7daf299f9.jpg",
        "https://i.pinimg.com/originals/fe/8b/b2/fe8bb2495fbd2db4f0748318aab863a5.png",
        "https://i.pinimg.com/originals/84/1f/1f/841f1fbbc81ef2637d219f888ca45e6f.jpg",
        "https://i.pinimg.com/736x/7c/1f/4d/7c1f4d05f8c72f427ffe92721fc45265.jpg",
        "https://i.pinimg.com/236x/9d/09/6b/9d096b40e6ce53976af999f92ff7c6f9.jpg",
        "https://i.pinimg.com/originals/70/98/4a/70984a2e41cbf5d61b3fee5a121797bf.jpg",
        "https://i.pinimg.com/736x/44/82/04/44820499a25ef61b2494ed19b26e41f3.jpg",
        "https://i.pinimg.com/736x/e8/f9/0a/e8f90a01cb532ea6f0dd044f70c39237.jpg",
        "https://i.pinimg.com/originals/c6/8b/7c/c68b7cb8099cbc54c3f9b8efff449098.png",
        "https://i.pinimg.com/222x/b6/82/31/b68231e4ac2874f95bef86bfd025c6f9.jpg",
        "https://i.pinimg.com/736x/49/7f/d8/497fd8edfba65e720224afb2ee1de5b9.jpg",
        "https://i.pinimg.com/564x/11/80/43/1180433bbd93956daeb19ce9a11090c9.jpg",
        "https://i.pinimg.com/736x/7d/6d/99/7d6d9906d4e6abbb13b3780596aa8963.jpg",
        "https://i.pinimg.com/736x/c4/9f/c8/c49fc8375174e3d5d79bbc6365a774f2--girl-train-wallpapers-android.jpg",
        "https://i.pinimg.com/736x/d3/26/8c/d3268cf40e7cce29db9dffd6a53c357f.jpg",
        "https://i.pinimg.com/originals/cf/06/7e/cf067ee06c051cb43dc64eadc61c1a5f.jpg",
        "https://i.pinimg.com/originals/39/4a/4b/394a4b3be66bcf640266aaa9e138ebc9.jpg",
        "https://i.pinimg.com/736x/f3/09/a2/f309a22ef3bbe4ed45db1b90a3151abc.jpg",
        "https://i.pinimg.com/originals/93/30/a4/9330a4abae7fceaf8372e30507f0cd3f.jpg",
        "https://i.pinimg.com/736x/89/1a/c5/891ac576c4d06c8d968283c07b83c901--manga-pictures-drawing-pictures.jpg",
        "https://i.pinimg.com/originals/4a/3e/3d/4a3e3d39b275c4f64849c09c77cdecc0.jpg",
        "https://i.pinimg.com/originals/1c/4f/4c/1c4f4c7010a0b7ca14e32baa83fe2181.jpg",
        "https://i.pinimg.com/564x/3b/98/a5/3b98a5b6e7344c0b9168360e4e65d72b--singer-group.jpg",
        "https://i.pinimg.com/736x/0f/c2/4a/0fc24aa2aad615be6956645bc18a48cc.jpg",
        "https://i.pinimg.com/originals/78/af/2a/78af2a107118fab398478a112ab7be00.gif",
        "https://i.pinimg.com/564x/2f/fb/34/2ffb346788ff939dccbccd0f111031ed.jpg",
        "https://i.pinimg.com/originals/6a/a6/3c/6aa63c7df0fdb0607163bbdcaec5a06c.jpg",
        "https://i.pinimg.com/222x/74/13/c7/7413c79acba88fac368f1eaf4c1a21ae.jpg",
        "https://i.pinimg.com/236x/a0/42/d2/a042d2dba497434c54ea97d73ca31ddc.jpg",
        "https://i.pinimg.com/736x/cd/98/15/cd98158e56dd970ce959b2fbacc0baa9.jpg",
        "https://i.pinimg.com/736x/85/f1/2f/85f12fd56a351ae0bbb7f866ded34a5a.jpg",
        "https://i.pinimg.com/564x/eb/fa/98/ebfa98eec09251cb3874e81794b5b1f1.jpg",
        "https://i.pinimg.com/736x/9c/ca/e9/9ccae9d681d0d6bdecc2a10829e48116.jpg",
        "https://i.pinimg.com/236x/c8/5d/31/c85d315263db51e9a8620156af39c9b3.jpg",
        "https://i.pinimg.com/736x/b3/0f/f1/b30ff1580597f96561f7a8d32712889e.jpg",
        "https://i.pinimg.com/originals/2f/fa/86/2ffa86f8faf261130fa8300f72c26d53.jpg",
        "https://i.pinimg.com/736x/08/36/ee/0836ee5f3b0baf8e7356b5aca47d5834.jpg",
        "https://i.pinimg.com/originals/b3/2a/83/b32a830aec68c6c911c96ef1841fd40d.jpg",
        "https://i.pinimg.com/originals/44/19/9a/44199a260ac61c23e1f643b799d3a0e3.jpg",
        "https://i.pinimg.com/originals/fa/ab/a3/faaba309f7d5771b3be972e8cd829b1e.jpg",
        "https://i.pinimg.com/736x/f0/91/d6/f091d646eeee9b925816a7face87a83b.jpg",
        "https://i.pinimg.com/564x/2b/8e/d1/2b8ed1a6a66f18a7fb03b8134824ecf1--rolling-girl-hatsune-miku.jpg",
        "https://i.pinimg.com/736x/40/b5/1a/40b51aaa82a42ded316cd6fd3fcafc4b.jpg",
        "https://i.pinimg.com/736x/87/1c/e7/871ce7944fb1d953aacf3d048433e6ff--hatsune-miku-anime-art.jpg",
        "https://i.pinimg.com/236x/40/ee/86/40ee868be85b0c4b1ff4b57cd778a5dd--kawaii-anime-hatsune-miku.jpg",
        "https://i.pinimg.com/originals/0f/bf/0a/0fbf0ac5733cfbc40e055efaafb81438.jpg",
        "https://i.pinimg.com/736x/2b/cb/00/2bcb007e13495b6a9b686bf91c076e4e.jpg",
        "https://i.pinimg.com/736x/62/6f/85/626f85b230c979f1005bce95a95632db--anime-dark-blue-hair.jpg",
        "https://i.pinimg.com/originals/84/dd/8a/84dd8a7606bb43bb12ce80b5143e4e82.jpg",
        "https://i.pinimg.com/474x/2e/5c/e9/2e5ce97fb18c299daac408ea82bda2d6.jpg",
        "https://i.pinimg.com/474x/27/f8/5f/27f85f9e50fd838ff7c7a51245044ac8--anime-eyes-anime-manga.jpg",
        "https://i.pinimg.com/736x/bf/04/f3/bf04f32e83b639b47d3b635bc9fa5ce1--hatsune-miku-kaito.jpg",
        "https://i.pinimg.com/736x/2f/32/ac/2f32ac673d6f33a042dff6f74d7902a2.jpg",
        "https://i.pinimg.com/originals/44/af/6b/44af6b73ae5d086eeb0c75339fa71920.jpg",
        "https://i.pinimg.com/originals/b2/f7/59/b2f75944bf379c9ba76f8b9f3727865b.jpg",
        "https://i.pinimg.com/736x/46/59/cc/4659cc515191a41479b45762e0a672e1--anime-dark-anime-images.jpg",
        "https://i.pinimg.com/originals/f3/3e/a3/f33ea333df05ca1ccdc3fe9a04f8fbf2.jpg",
        "https://i.pinimg.com/originals/f0/f8/c5/f0f8c573d21c6991f9efca1a7466ae5c.jpg",
        "https://i.pinimg.com/originals/56/a7/75/56a7750440a472814a3e4600333726c0.png",
        "https://i.pinimg.com/736x/6c/4d/27/6c4d27c5b426fdd196c3b0fff5cdf43e--anime-princess-anime-version.jpg",
        "https://i.pinimg.com/originals/12/37/1e/12371e55ff3d75824aedd70f6ee78956.jpg",
        "https://i.pinimg.com/originals/fb/00/13/fb001386a2b85cec05c5841a25077a27.jpg",
        "https://i.pinimg.com/originals/89/5a/c5/895ac50025e4ae654cfedc0225f29e09.jpg",
        "https://i.pinimg.com/564x/c0/d7/56/c0d756a9c6e3c2fd733c4194aac3eafa.jpg",
        "https://i.pinimg.com/736x/2d/d6/68/2dd668c8a6c65f4fa2d629525899cd01.jpg",
        "https://i.pinimg.com/originals/a9/92/a9/a992a9e428d15b008f96ac13d2f442af.jpg",
        "https://i.pinimg.com/736x/5a/df/b6/5adfb6a17c6623397dc60e9642634b2d.jpg",
        "https://i.pinimg.com/564x/21/85/a3/2185a3444bd0eae72f6378cd02d023e2.jpg",
        "https://i.pinimg.com/originals/2a/ae/8d/2aae8d87a1c2f30d7cd2778035568c83.jpg",
        "https://i.pinimg.com/564x/b0/cd/8e/b0cd8ed87a53f6b005752157f7df7540--kawaii-anime-girl-anime-girls.jpg",
        "https://i.pinimg.com/736x/1f/d6/9c/1fd69c67c587d96a16121fe84c9eb654--anime-fantasy-babies.jpg",
        "https://i.pinimg.com/736x/51/81/f7/5181f76463035a9f684e159135d21640.jpg",
        "https://i.pinimg.com/736x/bd/8a/2c/bd8a2c31fe09efe23c0751abb619f3ef.jpg",
        "https://i.pinimg.com/736x/54/a7/bc/54a7bcf42996624586d47dbb2e0670e0.jpg",
        "https://i.pinimg.com/originals/9a/82/bf/9a82bf97b0c372d47c41241f17a7b8ec.jpg",
        "https://i.pinimg.com/474x/11/2f/23/112f23d73d86fbabfe55b87d2408c8f3.jpg",
        "https://i.pinimg.com/originals/f2/b3/52/f2b3520d3a366e777ecd65982549cc2c.jpg",
        "https://i.pinimg.com/736x/1b/70/4c/1b704c79a0700f1ac58bf367045c8e94.jpg",
        "https://i.pinimg.com/736x/bd/39/40/bd3940f07bb69c4b1c2b8fa99d5d4a6f--chibi-miku-hatsune-miku-vocaloid.jpg",
        "https://i.pinimg.com/736x/c3/53/d5/c353d5b69271d572a1b1bec8ff50f4b2.jpg"
]