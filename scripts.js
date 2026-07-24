// ===== PLAYLIST DATA =====
const playlist = [
    { title:"Iris", artist:"Goo Goo Dolls", album:"Dizzy Up The Girl", year:"1998", src:"musik/iris-goo-goo-dolls.mp3", cover:"https://pbs.twimg.com/amplify_video_thumb/1308529629615943680/img/edgHGc8avhOs_ZN1.jpg", duration:"4:09" },
    { title:"Just Pretend", artist:"Bad Omens", album:"The Death of Peace of Mind", year:"2022", src:"musik/just-pretend-bad-omens.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/a/af/TheDeathOfPeaceOfMind.jpg", duration:"3:25" },
    { title:"LoSt", artist:"Bring Me The Horizon", album:"Post Human: Survival Horror", year:"2020", src:"musik/lost-bring-me-the-horizon.mp3", cover:"https://i.scdn.co/image/ab67616d0000b273df51a3d66223e5b01813e0c4", duration:"3:25" },
    { title:"Drown", artist:"Bring Me The Horizon", album:"That's the Spirit", year:"2014", src:"musik/drown-bring-me-the-horizon.mp3", cover:"https://i.scdn.co/image/ab67616d0000b273dcd553dee87b1736d18cc932", duration:"3:42" },
    { title:"Helena", artist:"My Chemical Romance", album:"Three Cheers for Sweet Revenge", year:"2004", src:"musik/helena.mp3", cover:"https://upload.wikimedia.org/wikipedia/id/7/73/MCRThreeCheers.jpg", duration:"3:22" },
    { title:"I'm Not Okay (I Promise)", artist:"My Chemical Romance", album:"Three Cheers for Sweet Revenge", year:"2004", src:"musik/im-not-okay.mp3", cover:"https://upload.wikimedia.org/wikipedia/id/7/73/MCRThreeCheers.jpg", duration:"3:08" },
    { title:"I Don't Love You", artist:"My Chemical Romance", album:"The Black Parade", year:"2006", src:"musik/i-dont-love-you.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg", duration:"3:58" },
    { title:"Cancer", artist:"My Chemical Romance", album:"The Black Parade", year:"2006", src:"musik/cancer.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg", duration:"2:22" },
    { title:"The World Is Ugly", artist:"My Chemical Romance", album:"Conventional Weapons", year:"2013", src:"musik/the-world-is-ugly.mp3", cover:"https://i.scdn.co/image/ab67616d0000b273a67cf0d53d5f2170077e8ef5", duration:"4:54" },
    { title:"December", artist:"Neck Deep", album:"Life's Not Out to Get You", year:"2015", src:"musik/december.mp3", cover:"https://f4.bcbits.com/img/a2588659074_16.jpg", duration:"3:38" },
    { title:"Multo", artist:"Cup of Joe", album:"Silakbo", year:"2025", src:"musik/Multo.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/9/9f/Multo_%282024%29_by_Cup_of_Joe_cover_art.jpg", duration:"4:01" },
    { title:"End of Beginning", artist:"Joe Keery", album:"Decide", year:"2022", src:"musik/End-of-beginning.mp3", cover:"https://asset.kompas.com/crops/sFzKxBizDInGQTsbjMWtm-Vvxus=/117x0:1024x605/1200x1200/data/photo/2024/04/24/6628b81a54245.jpg", duration:"2:40" },
    { title:"Back To Friends", artist:"Sombr", album:"I Barely Know Her", year:"2025", src:"musik/back-to-friends.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Official_single_cover_of_%22Back_to_Friends%22_by_Sombr.jpeg/250px-Official_single_cover_of_%22Back_to_Friends%22_by_Sombr.jpeg", duration:"3:15" }
];

// ===== HSK DATA =====
const hskWords = [
    { char:'细节', pinyin:'xìjié', meaning:'rincian, detail', example:'细节决定成败。', exampleIndo:'Detail menentukan keberhasilan.' },
    { char:'电台', pinyin:'diàntái', meaning:'stasiun radio', example:'我喜欢听电台节目。', exampleIndo:'Saya suka mendengarkan program radio.' },
    { char:'恩爱', pinyin:'ēnài', meaning:'saling mencintai, mesra', example:'他们是一对恩爱的夫妻。', exampleIndo:'Mereka adalah pasangan yang saling mencintai.' },
    { char:'对比', pinyin:'duìbǐ', meaning:'membandingkan, kontras', example:'对比两者，哪个更好？', exampleIndo:'Bandingkan keduanya, mana yang lebih baik?' },
    { char:'入围', pinyin:'rùwéi', meaning:'masuk nominasi', example:'他的电影入围了比赛。', exampleIndo:'Filmnya masuk nominasi kompetisi.' },
    { char:'评委', pinyin:'píngwěi', meaning:'juri, panitia penilai', example:'评委们认真听他们的叙述。', exampleIndo:'Para juri mendengarkan cerita mereka dengan serius.' },
    { char:'如何', pinyin:'rúhé', meaning:'bagaimana', example:'你如何学习中文？', exampleIndo:'Bagaimana kamu belajar bahasa Mandarin?' },
    { char:'瘫痪', pinyin:'tānhuàn', meaning:'lumpuh, macet total', example:'交通因事故而瘫痪。', exampleIndo:'Lalu lintas macet total karena kecelakaan.' },
    { char:'离婚', pinyin:'líhūn', meaning:'bercerai', example:'他们结婚五年后离婚了。', exampleIndo:'Mereka bercerai setelah lima tahun menikah.' },
    { char:'自杀', pinyin:'zìshā', meaning:'bunuh diri', example:'我们要预防自杀。', exampleIndo:'Kita harus mencegah bunuh diri.' },
    { char:'抱怨', pinyin:'bàoyuàn', meaning:'mengeluh, mengadu', example:'他从不抱怨困难。', exampleIndo:'Dia tidak pernah mengeluh soal kesulitan.' },
    { char:'爱护', pinyin:'àihù', meaning:'merawat, menjaga', example:'我们要爱护环境。', exampleIndo:'Kita harus menjaga lingkungan.' },
    { char:'婚姻', pinyin:'hūnyīn', meaning:'pernikahan', example:'婚姻需要两人共同努力。', exampleIndo:'Pernikahan butuh usaha bersama.' },
    { char:'吵架', pinyin:'chǎojià', meaning:'bertengkar', example:'他们偶尔会吵架。', exampleIndo:'Mereka kadang-kadang bertengkar.' },
    { char:'相敬如宾', pinyin:'xiāngjìng rúbīn', meaning:'saling menghormati seperti tamu', example:'他们相敬如宾，感情很好。', exampleIndo:'Mereka saling menghormati dan sangat harmonis.' },
    { char:'暗暗', pinyin:'àn àn', meaning:'diam-diam, secara rahasia', example:'她暗暗喜欢他。', exampleIndo:'Dia diam-diam menyukainya.' },
    { char:'轮', pinyin:'lún', meaning:'roda; giliran', example:'轮到你了，快点！', exampleIndo:'Giliran kamu, cepat!' },
    { char:'不耐烦', pinyin:'bù nàifán', meaning:'tidak sabar, jengkel', example:'等了太久，她开始不耐烦了。', exampleIndo:'Sudah terlalu lama menunggu, dia mulai tidak sabar.' },
    { char:'靠', pinyin:'kào', meaning:'bersandar, mengandalkan', example:'他把头靠在肩膀上。', exampleIndo:'Dia menyandarkan kepalanya di bahu.' },
    { char:'肩膀', pinyin:'jiānbǎng', meaning:'bahu', example:'她把头靠在他的肩膀上。', exampleIndo:'Dia menyandarkan kepalanya di bahunya.' },
    { char:'喊', pinyin:'hǎn', meaning:'berteriak, memanggil', example:'妈妈喊我回家吃饭。', exampleIndo:'Ibu memanggil saya pulang makan.' },
    { char:'伸', pinyin:'shēn', meaning:'merentangkan, menjulurkan', example:'她伸出手帮助他。', exampleIndo:'Dia mengulurkan tangan untuk membantunya.' },
    { char:'手指', pinyin:'shǒuzhǐ', meaning:'jari tangan', example:'她伸出手指示意安静。', exampleIndo:'Dia mengangkat jari memberi isyarat diam.' },
    { char:'歪歪扭扭', pinyin:'wāiwainiǔniǔ', meaning:'miring-miring, tidak lurus', example:'他写的字歪歪扭扭的。', exampleIndo:'Tulisannya miring-miring tidak lurus.' },
    { char:'递', pinyin:'dì', meaning:'menyampaikan, memberikan', example:'她把纸条递给评委。', exampleIndo:'Dia memberikan catatan kepada juri.' },
    { char:'脑袋', pinyin:'nǎodài', meaning:'kepala, otak', example:'他靠着她睡着了。', exampleIndo:'Dia tertidur bersandar padanya.' },
    { char:'叙述', pinyin:'xùshù', meaning:'menceritakan, menguraikan', example:'请叙述你的经历。', exampleIndo:'Tolong ceritakan pengalamanmu.' },
    { char:'居然', pinyin:'jūrán', meaning:'ternyata, sungguh tak disangka', example:'她居然放弃了这次机会！', exampleIndo:'Dia ternyata melepaskan kesempatan ini!' },
    { char:'催', pinyin:'cuī', meaning:'mendesak, mempercepat', example:'别催我，我会完成的。', exampleIndo:'Jangan desak aku, aku akan menyelesaikannya.' },
    { char:'等待', pinyin:'děngdài', meaning:'menunggu', example:'我在这里等待你的回复。', exampleIndo:'Aku menunggu balasanmu di sini.' },
    { char:'蚊子', pinyin:'wénzi', meaning:'nyamuk', example:'夏天蚊子很多。', exampleIndo:'Di musim panas banyak nyamuk.' },
    { char:'半夜', pinyin:'bànyè', meaning:'tengah malam', example:'他半夜醒来赶蚊子。', exampleIndo:'Dia terbangun tengah malam mengusir nyamuk.' },
    { char:'叮', pinyin:'dīng', meaning:'menggigit (nyamuk); dering', example:'我被蚊子叮了。', exampleIndo:'Saya digigit nyamuk.' },
    { char:'老婆', pinyin:'lǎopo', meaning:'istri (informal)', example:'他很爱他的老婆。', exampleIndo:'Dia sangat mencintai istrinya.' },
    { char:'吵', pinyin:'chǎo', meaning:'berisik, ribut; bertengkar', example:'外面太吵了，我睡不着。', exampleIndo:'Di luar terlalu ribut, aku tidak bisa tidur.' },
    { char:'对', pinyin:'duì', meaning:'benar; pasangan; menghadap', example:'你说得对！', exampleIndo:'Kamu benar!' },
    { char:'坚持', pinyin:'jiānchí', meaning:'bertahan, gigih', example:'他坚持每天练习。', exampleIndo:'Dia gigih berlatih setiap hari.' },
    { char:'成就', pinyin:'chéngjiù', meaning:'pencapaian, prestasi', example:'这是他一生中最大的成就。', exampleIndo:'Ini adalah pencapaian terbesar dalam hidupnya.' },
    { char:'传统', pinyin:'chuántǒng', meaning:'tradisi, tradisional', example:'春节是中国的传统节日。', exampleIndo:'Tahun Baru Imlek adalah hari raya tradisional Tiongkok.' },
    { char:'道德', pinyin:'dàodé', meaning:'moral, etika', example:'道德是做人的基础。', exampleIndo:'Moral adalah dasar menjadi manusia.' },
    { char:'独立', pinyin:'dúlì', meaning:'mandiri, independen', example:'她很独立，不依赖别人。', exampleIndo:'Dia sangat mandiri, tidak bergantung pada orang lain.' },
    { char:'丰富', pinyin:'fēngfù', meaning:'kaya, melimpah', example:'这里的文化非常丰富。', exampleIndo:'Budaya di sini sangat kaya.' },
    { char:'环境', pinyin:'huánjìng', meaning:'lingkungan', example:'我们要保护环境。', exampleIndo:'Kita harus melindungi lingkungan.' },
    { char:'科技', pinyin:'kējì', meaning:'sains dan teknologi', example:'科技改变了我们的生活。', exampleIndo:'Teknologi mengubah kehidupan kita.' },
    { char:'目标', pinyin:'mùbiāo', meaning:'tujuan, sasaran', example:'我的目标是学好中文。', exampleIndo:'Tujuan saya adalah belajar Mandarin dengan baik.' },
    { char:'培养', pinyin:'péiyǎng', meaning:'melatih, mengembangkan', example:'父母培养孩子的好习惯。', exampleIndo:'Orang tua mengembangkan kebiasaan baik anak.' },
    { char:'社会', pinyin:'shèhuì', meaning:'masyarakat, sosial', example:'我们都是社会的一部分。', exampleIndo:'Kita semua adalah bagian dari masyarakat.' },
    { char:'文化', pinyin:'wénhuà', meaning:'budaya, kebudayaan', example:'中国文化历史悠久。', exampleIndo:'Budaya Tiongkok memiliki sejarah yang panjang.' },
    { char:'内部', pinyin:'nèibù', meaning:'dalam, internal', example:'内部问题需要内部解决。', exampleIndo:'Masalah internal harus diselesaikan secara internal.' },
    { char:'外部', pinyin:'wàibù', meaning:'luar, eksternal', example:'外部环境影响我们的决策。', exampleIndo:'Lingkungan eksternal mempengaruhi keputusan kita.' },
    { char:'评审', pinyin:'píngshěn', meaning:'penilaian, evaluasi', example:'评审团对参赛作品进行了认真评审。', exampleIndo:'Panitia penilaian melakukan evaluasi menyeluruh terhadap karya peserta.' },
    { char:'验货', pinyin:'yànhuò', meaning:'inspeksi, pemeriksaan barang', example:'验货员检查了货物的质量。', exampleIndo:'Petugas inspeksi memeriksa kualitas barang.' },
    { char:'验证', pinyin:'yànzhèng', meaning:'verifikasi, memastikan', example:'我们需要验证这个信息的准确性。', exampleIndo:'Kita perlu memverifikasi akurasi informasi ini.' },
    { char:'来料', pinyin:'láiliào', meaning:'IQC, material masuk', example:'来料检验是生产过程中的重要环节。', exampleIndo:'Inspeksi material masuk adalah bagian penting dari proses produksi.' },
    { char:'移印', pinyin:'yíyìn', meaning:'cetak transfer', example:'移印技术广泛应用于电子产品制造。', exampleIndo:'Teknologi cetak transfer banyak digunakan dalam produksi perangkat elektronik.' },
    {char:'喷油', pinyin:'pēn yóu', meaning:'spray minyak', example:'喷油机用于给机械设备加油。', exampleIndo:'Mesin spray digunakan untuk memberi minyak pada peralatan mekanis.' },
    { char:'工程', pinyin:'gōngchéng', meaning:'proyek, teknik sipil', example:'中国文化历史悠久。', exampleIndo:'Budaya Tiongkok memiliki sejarah yang panjang.' },
    { char:'文件', pinyin:'wénjiàn', meaning:'dokumen', example:'请查看文件。', exampleIndo:'Silakan lihat dokumen.' },
];

// ===== KEWEN DATA =====
const KEWEN = [
{
  id:'k1',
  title:'第一课。 爱的细节',
  badge:'24 baris',
  lines:[
    {num:1, pinyin:'', hanzi:'电台要选择出一对最恩爱的大夫', indo:'Radio ingin memilih pasangan yang paling mesra.'},
    {num:2, pinyin:'Duìbǐ hòu, yǒu sān duì fūqī rùwéi.', hanzi:'对比后，有三对夫妻入围。', words:['对比','入围'], indo:'Setelah dibandingkan, tiga pasangan masuk nominasi.'},
    {num:3, pinyin:'Píngwěi ràng dì yī duì fūqī shuōshuō.', hanzi:'评委叫第一对夫妻说说他们俩是如何恩爱的。', words:['评委','如何','恩爱'], indo:'Juri meminta pasangan pertama menceritakan kisah mereka.'},
    {num:4, pinyin:'Qīzi shuō tā céng quánshēn tānhuàn.', hanzi:'妻子说，前几年她全身瘫痪了，', words:['瘫痪'], indo:'Sang istri berkata dulu ia pernah lumpuh total.'},
    {num:5, pinyin:'Zhàngfu yīzhí zài tā shēnbiān péiyǎng.', hanzi:'医生说他站起来的可能性很小。', words:['培养'], indo:'Suaminya terus merawatnya.'},
    {num:5, pinyin:'Biérén juéde zhàngfu huì líhūn.', hanzi:'别人都觉得她的丈夫会跟她离婚。', words:['离婚'], indo:'Orang lain mengira suaminya akan menceraikannya.'},
    {num:6, pinyin:'Tā yě xiǎngguò zìshā.', hanzi:'她也想过要自杀。', words:['自杀'], indo:'Ia bahkan sempat berpikir untuk bunuh diri.'},
    {num:7, pinyin:'Dàn zhàngfu yīzhí gǔlì tā.', hanzi:'但丈夫一直鼓励她。', words:['坚持'], indo:'Namun suaminya terus menyemangatinya.'},
    {num:8, pinyin:'Bìngqiě zhàogù tā cóng bù bàoyuàn.', hanzi:'并且照顾她，从不抱怨。', words:['抱怨','爱护'], indo:'Dan merawatnya tanpa pernah mengeluh.'},
    {num:9, pinyin:'Zuìhòu tā zhōngyú zhàn qǐlái le.', hanzi:'她终于又站了起来。', indo:'Akhirnya ia bisa berdiri kembali.'},
    {num:10, pinyin:'Píngwěi dōu hěn gǎndòng.', hanzi:'评委们听了都很感动。', indo:'Para juri sangat terharu.'},
    {num:11, pinyin:'Dì èr duì fūqī jìnlái.', hanzi:'第二对夫妻进来了。', indo:'Pasangan kedua masuk.'},
    {num:12, pinyin:'Tāmen cóng bù chǎojià.', hanzi:'他们从来没有吵过架。', words:['吵架'], indo:'Mereka tidak pernah bertengkar.'},
    {num:13, pinyin:'Yīzhí xiāngjìng rúbīn.', hanzi:'一直相敬如宾。', words:['相敬如宾'], indo:'Selalu saling menghormati.'},
    {num:14, pinyin:'Píngwěi àn\'àn diǎntóu.', hanzi:'评委们暗暗点头。', words:['暗暗'], indo:'Para juri diam-diam mengangguk.'},
    {num:15, pinyin:'Lún dào dì sān duì fūqī.', hanzi:'轮到第三对夫妻。', words:['轮'], indo:'Giliran pasangan ketiga.'},
    {num:16, pinyin:'Píngwěi děng de bù nàifán.', hanzi:'评委们等得有些不耐烦。', words:['等待','不耐烦'], indo:'Para juri mulai tidak sabar.'},
    {num:17, pinyin:'Nánrén kào zài jiānbǎng shàng shuìzhe.', hanzi:'男人的头靠在女人的肩膀上睡着了。', words:['靠','肩膀'], indo:'Pria itu tertidur di bahu istrinya.'},
    {num:18, pinyin:'Nǚrén shēn chū shǒuzhǐ ràng biérén ānjìng.', hanzi:'女人伸出手指示意大家安静。', words:['伸','手指'], indo:'Wanita itu memberi isyarat agar semua diam.'},
    {num:19, pinyin:'Tā xiě xià zì tiáo.', hanzi:'她写下一行字递给评委。', words:['递'], indo:'Ia menulis catatan dan memberikannya ke juri.'},
    {num:20, pinyin:'"Bié chū shēng, tā méi shuì hǎo."', hanzi:'"别出声，他昨晚没睡好。"', indo:'"Jangan bersuara, dia kurang tidur."'},
    {num:21, pinyin:'Hòulái cái zhīdào yuányīn.', hanzi:'后来才知道原因。', indo:'Kemudian diketahui alasannya.'},
    {num:22, pinyin:'Nánrén wèi le gǎn wénzi.', hanzi:'男人昨晚一直为妻子赶蚊子。', words:['蚊子'], indo:'Pria itu semalaman mengusir nyamuk.'},
    {num:23, pinyin:'Zuìhòu diàntái zuòchū juédìng.', hanzi:'最后电台做出了决定。', words:['电台'], indo:'Akhirnya radio membuat keputusan.'},
    {num:24, pinyin:'Dì sān duì shì zuì ēn\'ài de.', hanzi:'第三对夫妻获得最恩爱夫妻奖。', words:['恩爱'], indo:'Pasangan ketiga menjadi yang paling mesra.'},
  ]
}
];

// ===== ANIME DATA =====
const animeList = [
    { image:'https://cdn.myanimelist.net/images/anime/1286/99889.jpg', title:'Demon Slayer', genre:'Action · Fantasy', rating:'9.0' },
    { image:'https://cdn.myanimelist.net/images/anime/1441/122795.jpg', title:'Spy x Family', genre:'Comedy · Slice of Life', rating:'8.8' },
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4jTxPhcDSELgIomzoBdmS4x_pHq9Otq9Y5F4mjrMx857NHpc', title:'Nanatsu No Tanzai', genre:'Action · Fantasy', rating:'9.5' },
    { image:'https://cdn.myanimelist.net/images/anime/1522/128039.jpg', title:'Re:Zero', genre:'Drama · Fantasy', rating:'9.9' },
    { image:'https://cdn.myanimelist.net/images/anime/1613/102576.jpg', title:'Dr. Stone', genre:'Sci-Fi · Adventure', rating:'9.8' },
    { image:'https://cdn.myanimelist.net/images/anime/1087/115166.jpg', title:'The Case Study of Vanitas', genre:'Fantasy · Supernatural', rating:'8.1' },
    { image:'https://cdn.myanimelist.net/images/anime/1410/144419.jpg', title:'That Time I Got Reincarnated as a Slime S3', genre:'Fantasy · Isekai', rating:'8.4' },
    { image:'https://cdn.myanimelist.net/images/anime/1244/138851.jpg', title:'One Piece', genre:'Adventure · Action', rating:'9.4' },
    { image:'https://cdn.myanimelist.net/images/anime/1172/121852.jpg', title:'Jujutsu Kaisen Season 2', genre:'Action · Supernatural', rating:'8.9' },
    { image:'https://cdn.myanimelist.net/images/anime/1806/126216.jpg', title:'Chainsaw Man', genre:'Action · Dark Fantasy', rating:'8.5' },
    { image:'https://cdn.myanimelist.net/images/anime/1841/141692.jpg', title:'Solo Leveling', genre:'Action · Fantasy', rating:'8.2' },
    { image:'https://cdn.myanimelist.net/images/anime/1172/121852.jpg', title:'Attack on Titan: Final Season', genre:'Action · Drama', rating:'9.1' },
    { image:'https://cdn.myanimelist.net/images/anime/1087/115166.jpg', title:'Black Butler: Public School Arc', genre:'Mystery · Supernatural', rating:'7.9' },
    { image:'https://cdn.myanimelist.net/images/anime/1613/102576.jpg', title:'Haikyu!! The Dumpster Battle', genre:'Sports · Drama', rating:'8.5' },
    { image:'https://cdn.myanimelist.net/images/anime/1286/99889.jpg', title:'Noragami', genre:'Action · Supernatural', rating:'8.3' },
];

// ===== QUIZ WORDS =====
const quizWords = [
    { char:'细节', pinyin:'xìjié', meaning:'rincian, detail' },
    { char:'电台', pinyin:'diàntái', meaning:'stasiun radio' },
    { char:'恩爱', pinyin:'ēnài', meaning:'saling mencintai, mesra' },
    { char:'对比', pinyin:'duìbǐ', meaning:'membandingkan, kontras' },
    { char:'入围', pinyin:'rùwéi', meaning:'masuk nominasi' },
    { char:'评委', pinyin:'píngwěi', meaning:'juri, panitia penilai' },
    { char:'如何', pinyin:'rúhé', meaning:'bagaimana' },
    { char:'瘫痪', pinyin:'tānhuàn', meaning:'lumpuh, macet total' },
    { char:'离婚', pinyin:'líhūn', meaning:'bercerai' },
    { char:'自杀', pinyin:'zìshā', meaning:'bunuh diri' },
    { char:'抱怨', pinyin:'bàoyuàn', meaning:'mengeluh, mengadu' },
    { char:'爱护', pinyin:'àihù', meaning:'merawat, menjaga' },
    { char:'婚姻', pinyin:'hūnyīn', meaning:'pernikahan' },
    { char:'吵架', pinyin:'chǎojià', meaning:'bertengkar' },
    { char:'暗暗', pinyin:'àn àn', meaning:'diam-diam, secara rahasia' },
    { char:'轮', pinyin:'lún', meaning:'roda; giliran' },
    { char:'不耐烦', pinyin:'bù nàifán', meaning:'tidak sabar, jengkel' },
    { char:'靠', pinyin:'kào', meaning:'bersandar, mengandalkan' },
    { char:'肩膀', pinyin:'jiānbǎng', meaning:'bahu' },
    { char:'喊', pinyin:'hǎn', meaning:'berteriak, memanggil' },
    { char:'手指', pinyin:'shǒuzhǐ', meaning:'jari tangan' },
    { char:'递', pinyin:'dì', meaning:'menyampaikan, memberikan' },
    { char:'脑袋', pinyin:'nǎodài', meaning:'kepala, otak' },
    { char:'叙述', pinyin:'xùshù', meaning:'menceritakan, menguraikan' },
    { char:'居然', pinyin:'jūrán', meaning:'ternyata, sungguh tak disangka' },
    { char:'催', pinyin:'cuī', meaning:'mendesak, mempercepat' },
    { char:'等待', pinyin:'děngdài', meaning:'menunggu' },
    { char:'坚持', pinyin:'jiānchí', meaning:'bertahan, gigih' },
    { char:'成就', pinyin:'chéngjiù', meaning:'pencapaian, prestasi' },
    { char:'传统', pinyin:'chuántǒng', meaning:'tradisi, tradisional' },
    { char:'道德', pinyin:'dàodé', meaning:'moral, etika' },
    { char:'独立', pinyin:'dúlì', meaning:'mandiri, independen' },
    { char:'丰富', pinyin:'fēngfù', meaning:'kaya, melimpah' },
    { char:'环境', pinyin:'huánjìng', meaning:'lingkungan' },
    { char:'科技', pinyin:'kējì', meaning:'sains dan teknologi' },
    { char:'目标', pinyin:'mùbiāo', meaning:'tujuan, sasaran' },
    { char:'培养', pinyin:'péiyǎng', meaning:'melatih, mengembangkan' },
    { char:'社会', pinyin:'shèhuì', meaning:'masyarakat, sosial' },
    { char:'文化', pinyin:'wénhuà', meaning:'budaya, kebudayaan' },
    { char:'智慧', pinyin:'zhìhuì', meaning:'kebijaksanaan, kecerdasan' },
];

// ============================================================
// PLAYER STATE
// ============================================================
let currentTrack = 0, isShuffled = false, isRepeating = false;
let shuffledOrder = [], previousVolume = 0.7;

const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const vinylEl = document.getElementById('vinylRecord');

// ============================================================
// PERSISTENT STATE
// ============================================================
let quizXP         = parseInt(localStorage.getItem('quizXP') || '0');
let quizStreak     = parseInt(localStorage.getItem('quizStreak') || '0');
let quizBestStreak = parseInt(localStorage.getItem('quizBestStreak') || '0');
let quizTotalAns   = parseInt(localStorage.getItem('quizTotalAns') || '0');
let quizTotalRight = parseInt(localStorage.getItem('quizTotalRight') || '0');
let streakDays     = JSON.parse(localStorage.getItem('streakDays') || '[]');
let userPhoto      = localStorage.getItem('userPhoto') || '';

// Quiz session
let subMode = 'both', sessionQ = 0, sessionCorrect = 0, sessionWrong = 0;
let sessionXPGained = 0, sessionStreak = 0, sessionBestStreak = 0;
let lives = 3, answered = false, quizQueue = [], wrongWords = [];
let currentWord = null, currentQType = null;
const SESSION_LEN = 10, XP_PER_LEVEL = 100;
const PREVIEW_CHARS = ['学','习','语','好','乐','智','心','梦','坚','持'];
let previewIdx = 0;

// HSK state
let currentHskIndex = null;
let hskFlipped = false;

// Kewen state
let currentKwnId = null;
let readerShowPinyin = true;
let readerShowIndo   = false;
let readerNight      = false;

// ============================================================
// UTILS
// ============================================================
function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
function setT(id,v){ const el=document.getElementById(id); if(el) el.textContent=v; }
function setW(id,v){ const el=document.getElementById(id); if(el) el.style.width=v; }

// ============================================================
// TTS — Text-to-Speech (Web Speech API)
// ============================================================
function ttsSpeak(text){
    if(!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'zh-CN';
    utt.rate = 0.85;
    utt.pitch = 1;
    window.speechSynthesis.speak(utt);
}

// ============================================================
// CLOCK
// ============================================================
function updateClock(){
    const now = new Date();
    const h = now.getHours().toString().padStart(2,'0');
    const m = now.getMinutes().toString().padStart(2,'0');
    const days = ['周日','周一','周二','周三','周四','周五','周六'];
    const txt = `${days[now.getDay()]}, ${h}:${m}`;
    ['headerTime','headerTime2'].forEach(id => setT(id, txt));
}
updateClock();
setInterval(updateClock, 10000);

// ============================================================
// GREETING
// ============================================================
function updateGreeting(){
    const h = new Date().getHours();
    const msg = h < 12 ? '早安！你已经吃饭了吗？我们学习一会儿吧~'
              : h < 15 ? '中午好！你在休息吧？'
              : h < 18 ? '下午好！马上学习！！'
              : '晚安！来我们学习一会儿吧！';
    setT('greetSub', msg);
}
updateGreeting();

// ============================================================
// WORD OF DAY
// ============================================================
function initWordOfDay(){
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(),0,0)) / 86400000);
    const word = hskWords[dayOfYear % hskWords.length];
    setT('wodChar', word.char);
    setT('wodPinyin', word.pinyin);
    setT('wodMeaning', word.meaning);
    const el = document.getElementById('wodDate');
    if(el){
        const month = now.getMonth() + 1;
        const day = now.getDate();
        el.textContent = `${month}月${day}日`;
    }
}
initWordOfDay();

function goToQuizFromWod(){
    openPanel('quiz');
    setTimeout(()=> startQuiz(), 300);
}

// ============================================================
// STREAK CALENDAR
// ============================================================
function initCalendar(){
    const grid = document.getElementById('calGrid');
    if(!grid) return;
    const now = new Date();
    const todayStr = now.toDateString();
    if(!streakDays.includes(todayStr)){
        streakDays.push(todayStr);
        localStorage.setItem('streakDays', JSON.stringify(streakDays));
    }
    let streak = 0;
    for(let i=0; i<30; i++){
        const d = new Date(now); d.setDate(now.getDate()-i);
        if(streakDays.includes(d.toDateString())) streak++;
        else break;
    }
    setT('streakCount', `${streak} hari berturut-turut`);
    ['周日','周一','周二','周三','周四','周五','周六'].forEach(d=>{
        const el = document.createElement('div');
        el.className='cal-day-label'; el.textContent=d;
        grid.appendChild(el);
    });
    for(let i=20; i>=0; i--){
        const d = new Date(now); d.setDate(now.getDate()-i);
        const el = document.createElement('div');
        el.className = 'cal-day';
        el.textContent = d.getDate();
        if(d.toDateString()===todayStr) el.classList.add('today');
        else if(streakDays.includes(d.toDateString())) el.classList.add('active');
        grid.appendChild(el);
    }
}
initCalendar();

// ============================================================
// PAGE NAVIGATION
// ============================================================
function switchPage(name){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const t = document.getElementById('page-'+name);
    if(t) t.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    const nav = document.getElementById('nav-'+name);
    if(nav) nav.classList.add('active');
    if(name==='about') updateAboutPage();
}

document.getElementById('nav-belajar').addEventListener('click', ()=> openPanel('hsk'));

// ============================================================
// ABOUT PAGE
// ============================================================
function updateAboutPage(){
    const acc = quizTotalAns>0 ? Math.round((quizTotalRight/quizTotalAns)*100) : 0;
    setT('aboutXP', quizXP);
    setT('aboutStreak', quizBestStreak);
    setT('aboutAccuracy', acc+'%');
    setT('greetLevel', 'Lv.'+(Math.floor(quizXP/XP_PER_LEVEL)+1));
    applyPhoto();
}

function handlePhotoUpload(e){
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        userPhoto = ev.target.result;
        localStorage.setItem('userPhoto', userPhoto);
        applyPhoto();
    };
    reader.readAsDataURL(file);
}

function applyPhoto(){
    ['aboutPhotoInner','avatarWrapHome'].forEach(id=>{
        const el = document.getElementById(id); if(!el) return;
        el.innerHTML = userPhoto ? `<img src="${userPhoto}" alt="foto">` : '\u{1F425}';
    });
}

// ============================================================
// PANELS
// ============================================================
function openPanel(name){
    document.getElementById('panel-'+name).classList.add('open');
    document.getElementById('panelOverlay').classList.add('visible');
}
function closePanel(name){
    document.getElementById('panel-'+name).classList.remove('open');
    document.getElementById('panelOverlay').classList.remove('visible');
}
function closeAllPanels(){
    document.querySelectorAll('.side-panel').forEach(p=>p.classList.remove('open'));
    document.getElementById('panelOverlay').classList.remove('visible');
}

// ============================================================
// MUSIC PLAYER
// ============================================================
function renderPlaylist(){
    const container = document.getElementById('playlistContainer'); if(!container) return;
    container.innerHTML = '';
    const order = isShuffled ? shuffledOrder : playlist.map((_,i)=>i);
    order.forEach(trackIdx=>{
        const track = playlist[trackIdx];
        const isActive = trackIdx===currentTrack;
        const el = document.createElement('div');
        el.className = 'playlist-item'+(isActive?' active':'');
        el.innerHTML = `
            <img src="${track.cover}" alt="${track.title}" class="pl-cover"
                 onerror="this.src='https://placehold.co/42x42/6bab6b/ffffff?text=M'">
            <div class="pl-info">
                <div class="pl-title">${track.title}</div>
                <div class="pl-artist">${track.artist}</div>
            </div>
            <span class="pl-dur">${track.duration}</span>
            <span class="pl-icon">${isActive?'&#x1F50A;':'&#x25B6;'}</span>`;
        el.addEventListener('click', ()=>{
            currentTrack = trackIdx;
            loadTrack(currentTrack);
            if(audio.paused) togglePlay();
        });
        container.appendChild(el);
    });
    updatePlaylistStats();
}

function updatePlaylistStats(){
    const total = playlist.reduce((acc,t)=>{ const [m,s]=t.duration.split(':').map(Number); return acc+m*60+s; },0);
    const mins=Math.floor(total/60), secs=total%60;
    setT('playlistStats', `${playlist.length} lagu · ${mins}:${secs.toString().padStart(2,'0')}`);
}

function loadTrack(index){
    const track = playlist[index];
    audio.src = track.src; audio.load();
    setT('nowPlayingTitle', track.title);
    setT('nowPlayingArtist', track.artist);
    setT('nowPlayingAlbum', `${track.album} (${track.year})`);
    const cover = document.getElementById('nowPlayingCover');
    cover.src = track.cover;
    cover.onerror = ()=>{ cover.src='https://placehold.co/82x82/6bab6b/ffffff?text=M'; };
    const mpCover = document.getElementById('mpCover');
    if(mpCover){ mpCover.src=track.cover; mpCover.onerror=()=>mpCover.src='https://placehold.co/34x34/6bab6b/ffffff?text=M'; }
    setT('mpTitle', track.title);
    setT('mpArtist', track.artist);
    setT('homeMusicSub', `${track.title}`);
    renderPlaylist();
}

function togglePlay(){
    if(audio.paused){ audio.play().catch(()=>{}); setPlayingUI(true); }
    else { audio.pause(); setPlayingUI(false); }
}
function setPlayingUI(playing){
    const icon = playing ? '&#x23F8;' : '&#x25B6;';
    if(playPauseBtn) playPauseBtn.innerHTML = icon;
    const mpPlay = document.getElementById('mpPlay');
    if(mpPlay) mpPlay.innerHTML = icon;
    const mpWave = document.getElementById('mpWave');
    if(playing){
        vinylEl.classList.add('playing');
        document.getElementById('eqWrapper').classList.add('eq-playing');
        if(mpWave) mpWave.classList.add('playing');
    } else {
        vinylEl.classList.remove('playing');
        document.getElementById('eqWrapper').classList.remove('eq-playing');
        if(mpWave) mpWave.classList.remove('playing');
    }
}

audio.addEventListener('timeupdate', ()=>{
    if(!audio.duration) return;
    const pct = (audio.currentTime/audio.duration)*100;
    setW('progressFill', pct+'%');
    const m=Math.floor(audio.currentTime/60), s=Math.floor(audio.currentTime%60);
    setT('currentTime', m+':'+(s<10?'0':'')+s);
});
audio.addEventListener('loadedmetadata', ()=>{
    const m=Math.floor(audio.duration/60), s=Math.floor(audio.duration%60);
    setT('totalTime', m+':'+(s<10?'0':'')+s);
});
function seek(e){
    const rect=document.getElementById('progressBar').getBoundingClientRect();
    audio.currentTime = Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*audio.duration;
}

document.getElementById('volumeSlider').addEventListener('input', function(){
    const v=parseFloat(this.value); audio.volume=v; previousVolume=v; updateVolumeUI(v);
});
function updateVolumeUI(v){
    setW('volumeLevel', (v*100)+'%');
    setT('volumePercent', Math.round(v*100)+'%');
    setT('volumeIcon', v===0?'\u{1F507}':v<0.5?'\u{1F509}':'\u{1F50A}');
}
function toggleMute(){
    if(audio.volume>0){ previousVolume=audio.volume; audio.volume=0; document.getElementById('volumeSlider').value=0; updateVolumeUI(0); }
    else { audio.volume=previousVolume; document.getElementById('volumeSlider').value=previousVolume; updateVolumeUI(previousVolume); }
}

function getOrder(){ return isShuffled ? shuffledOrder : playlist.map((_,i)=>i); }
function prevTrack(){
    const order=getOrder(), pos=order.indexOf(currentTrack);
    currentTrack=order[pos>0?pos-1:order.length-1];
    loadTrack(currentTrack); if(!audio.paused) audio.play().catch(()=>{});
}
function nextTrack(){
    const order=getOrder(), pos=order.indexOf(currentTrack);
    if(pos<order.length-1) currentTrack=order[pos+1];
    else if(isRepeating) currentTrack=order[0];
    else { setPlayingUI(false); return; }
    loadTrack(currentTrack); if(!audio.paused) audio.play().catch(()=>{});
}
audio.addEventListener('ended', ()=>{ if(isRepeating){ audio.currentTime=0; audio.play().catch(()=>{}); } else nextTrack(); });

function toggleShuffle(){
    isShuffled=!isShuffled;
    if(isShuffled){
        const others=playlist.map((_,i)=>i).filter(i=>i!==currentTrack);
        for(let i=others.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [others[i],others[j]]=[others[j],others[i]]; }
        shuffledOrder=[currentTrack,...others];
    }
    document.getElementById('shuffleBtn').classList.toggle('on',isShuffled);
    renderPlaylist();
}
function toggleRepeat(){
    isRepeating=!isRepeating;
    document.getElementById('repeatBtn').classList.toggle('on',isRepeating);
}

// ============================================================
// HSK PANEL — Flip Card Mode
// ============================================================
function renderHskList(){
    const container = document.getElementById('hskList'); if(!container) return;
    container.innerHTML = '';
    hskWords.forEach((item,index)=>{
        const div = document.createElement('div');
        div.className = 'lesson-item'+(currentHskIndex===index?' active':'');
        div.dataset.search = (item.char+item.pinyin+item.meaning).toLowerCase();
        div.innerHTML = `<span class="lesson-title">${item.char} · ${item.meaning}</span>`;
        div.onclick = ()=>{
            document.querySelectorAll('#hskList .lesson-item').forEach(el=>el.classList.remove('active'));
            div.classList.add('active');
            currentHskIndex = index;
            hskFlipped = false;
            showHskContent(index);
        };
        container.appendChild(div);
    });
}

function showHskContent(index){
    const item = hskWords[index]; if(!item) return;
    const area = document.getElementById('hskContentArea'); if(!area) return;

    area.innerHTML = `
        <div class="hsk-flip-card" id="hskFlipCard" onclick="flipHskCard()">
            <div class="hsk-flip-inner" id="hskFlipInner">
                <div class="hsk-flip-front">
                    <div class="hsk-flip-char">${item.char}</div>
                    <div class="hsk-flip-hint">ketuk untuk lihat arti</div>
                </div>
                <div class="hsk-flip-back">
                    <div class="hsk-flip-back-char">${item.char}</div>
                    <div class="hsk-flip-back-pinyin">${item.pinyin}</div>
                    <div class="hsk-flip-back-meaning">${item.meaning}</div>
                    <div class="hsk-flip-example">
                        <div class="hsk-ex-cn">${item.example || ''}</div>
                        <div class="hsk-ex-id">${item.exampleIndo || ''}</div>
                    </div>
                    <button class="hsk-tts-btn" onclick="event.stopPropagation();ttsSpeak('${item.char}')">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                        dengarkan
                    </button>
                </div>
            </div>
        </div>
        <div class="hsk-nav-row">
            <button class="hsk-nav-btn" onclick="navigateHsk(-1)">&#x2190; sebelumnya</button>
            <span class="hsk-nav-count">${index+1} / ${hskWords.length}</span>
            <button class="hsk-nav-btn" onclick="navigateHsk(1)">berikutnya &#x2192;</button>
        </div>`;
}

function flipHskCard(){
    hskFlipped = !hskFlipped;
    const inner = document.getElementById('hskFlipInner');
    if(inner) inner.style.transform = hskFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    if(hskFlipped && currentHskIndex!==null) ttsSpeak(hskWords[currentHskIndex].char);
}

function navigateHsk(dir){
    if(currentHskIndex===null) currentHskIndex=0;
    currentHskIndex = (currentHskIndex+dir+hskWords.length) % hskWords.length;
    hskFlipped = false;
    document.querySelectorAll('#hskList .lesson-item').forEach((el,i)=>{
        el.classList.toggle('active', i===currentHskIndex);
    });
    showHskContent(currentHskIndex);
    const active = document.querySelector('#hskList .lesson-item.active');
    if(active) active.scrollIntoView({block:'nearest', behavior:'smooth'});
}

function filterHsk(){
    const kw = document.getElementById('hskSearch').value.toLowerCase();
    document.querySelectorAll('#hskList .lesson-item').forEach(el=>{
        el.style.display = (!kw || el.dataset.search.includes(kw)) ? 'flex' : 'none';
    });
}

// ============================================================
// KEWEN PANEL — Interactive Reader
// ============================================================
function renderKwnList(){
    const list = document.getElementById('kwnList'); if(!list) return;
    list.innerHTML = '';
    KEWEN.forEach(k=>{
        const el = document.createElement('div');
        el.className = 'lesson-item'+(currentKwnId===k.id?' active':'');
        el.innerHTML = `<span class="lesson-title">${k.title}</span>`;
        el.onclick = ()=>{
            document.querySelectorAll('#kwnList .lesson-item').forEach(x=>x.classList.remove('active'));
            el.classList.add('active');
            currentKwnId = k.id;
            renderKwnContent(k);
        };
        list.appendChild(el);
    });
}

function renderKwnContent(k){
    const area = document.getElementById('kwnContentArea'); if(!area) return;

    let html = `
        <div class="reader-controls">
            <button class="reader-btn${readerShowPinyin?' active':''}" onclick="toggleReaderOption('pinyin')">pinyin</button>
            <button class="reader-btn${readerShowIndo?' active':''}" onclick="toggleReaderOption('indo')">terjemahan</button>
            <button class="reader-btn${readerNight?' active':''}" onclick="toggleReaderOption('night')">&#x1F319; malam</button>
        </div>
        <div class="reader-area${readerNight?' night-mode':''}">
        <div class="reader-subtitle">ketuk kata berwarna hijau untuk lihat artinya</div>`;

    k.lines.forEach(line=>{
        let hanziHtml = line.hanzi;
        if(line.words && line.words.length){
            const pattern = new RegExp(`(${line.words.map(escapeRegex).join('|')})`, 'g');
            hanziHtml = line.hanzi.replace(pattern, match=>{
                const w = hskWords.find(x=>x.char===match);
                if(!w) return match;
                const safeChar = match.replace(/'/g,"\\'");
                const safePin  = w.pinyin.replace(/'/g,"\\'");
                const safeMean = w.meaning.replace(/'/g,"\\'");
                const safeEx   = (w.example||'').replace(/'/g,"\\'");
                const safeExId = (w.exampleIndo||'').replace(/'/g,"\\'");
                return `<span class="kwn-word" onclick="showWordPopupKwn('${safeChar}','${safePin}','${safeMean}','${safeEx}','${safeExId}')">${match}</span>`;
            });
        }

        html += `<div class="reader-line">
            <div class="reader-line-content">
                ${readerShowPinyin ? `<div class="reader-pinyin">${line.pinyin}</div>` : ''}
                <div class="reader-hanzi">${hanziHtml}</div>
                ${readerShowIndo ? `<div class="reader-indo">${line.indo}</div>` : ''}
            </div>
        </div>`;
    });

    html += `</div>`;
    area.innerHTML = html;
}

function toggleReaderOption(opt){
    if(opt==='pinyin') readerShowPinyin=!readerShowPinyin;
    else if(opt==='indo') readerShowIndo=!readerShowIndo;
    else if(opt==='night') readerNight=!readerNight;
    if(currentKwnId){
        const k = KEWEN.find(x=>x.id===currentKwnId);
        if(k) renderKwnContent(k);
    }
}

function filterKwn(){
    const kw = document.getElementById('kewenSearch').value.toLowerCase();
    document.querySelectorAll('#kwnList .lesson-item').forEach(el=>{
        const txt = (el.querySelector('.lesson-title')||{}).textContent||'';
        el.style.display = (!kw || txt.toLowerCase().includes(kw)) ? 'flex' : 'none';
    });
}

// Word popup for kewen — tanpa ttsSpeak otomatis saat popup muncul
function showWordPopupKwn(char, pinyin, meaning, example, exampleIndo){
    const popup   = document.getElementById('wordPopup');
    const overlay = document.getElementById('popupOverlay');
    if(!popup) return;
    document.getElementById('wpChar').textContent    = char;
    document.getElementById('wpPinyin').textContent  = pinyin;
    document.getElementById('wpMeaning').textContent = meaning;
    const exEl = document.getElementById('wpExample');
    if(exEl) exEl.innerHTML = example
        ? `<span style="font-weight:700">${example}</span><br><span style="font-style:italic;color:var(--text-soft)">${exampleIndo}</span>`
        : '';
    popup.classList.add('visible');
    if(overlay) overlay.classList.add('visible');
}
function closeWordPopup(){
    const popup   = document.getElementById('wordPopup');
    const overlay = document.getElementById('popupOverlay');
    if(popup)   popup.classList.remove('visible');
    if(overlay) overlay.classList.remove('visible');
}

// ============================================================
// ANIME
// ============================================================
function renderAnime(){
    const grid = document.getElementById('animeGrid'); if(!grid) return;
    animeList.forEach((a,i)=>{
        const card = document.createElement('div');
        card.className='anime-card';
        card.style.animationDelay=(i*0.05)+'s';
        card.innerHTML=`
            <div class="anime-img-wrap">
                <img src="${a.image}" alt="${a.title}" class="anime-img"
                     onerror="this.parentElement.innerHTML='<div class=anime-img-fallback>&#x1F3AC;</div>'">
            </div>
            <div class="anime-title">${a.title}</div>
            <div class="anime-genre">${a.genre}</div>
            <div class="anime-rating">&#x2B50; ${a.rating}</div>`;
        grid.appendChild(card);
    });
}

// ============================================================
// QUIZ
// ============================================================
function saveQuiz(){
    localStorage.setItem('quizXP', quizXP);
    localStorage.setItem('quizStreak', quizStreak);
    localStorage.setItem('quizBestStreak', quizBestStreak);
    localStorage.setItem('quizTotalAns', quizTotalAns);
    localStorage.setItem('quizTotalRight', quizTotalRight);
}

function setSubMode(mode){
    subMode = mode;
    document.querySelectorAll('.submode-pill').forEach(p=>p.classList.remove('active'));
    document.getElementById('sm-'+mode).classList.add('active');
}

function updateQuizUI(){
    const level  = Math.floor(quizXP/XP_PER_LEVEL)+1;
    const xpInLv = quizXP%XP_PER_LEVEL;
    const pct    = (xpInLv/XP_PER_LEVEL)*100;
    const acc    = quizTotalAns>0 ? Math.round((quizTotalRight/quizTotalAns)*100) : 0;
    setW('xpBarFill', pct+'%');
    setT('xpBarLabel', xpInLv+' / '+XP_PER_LEVEL+' XP');
    setT('xpLevel',   'Lv.'+level);
    setT('qhStreak',  '\u{1F525} '+quizStreak);
    setT('qhXP',      '\u2B50 '+quizXP+' XP');
    setT('homeStreak','\u{1F525} '+quizStreak);
    setT('greetLevel','Lv.'+level);
    setT('statTotal',       quizTotalAns);
    setT('statCorrect',     quizTotalRight);
    setT('statAccuracy',    acc+'%');
    setT('statBestStreak',  quizBestStreak);
    updateAboutPage();
}

setInterval(()=>{
    previewIdx++;
    const el=document.getElementById('qheroChar');
    if(el){ el.style.animation='none'; el.offsetHeight; el.style.animation=''; el.textContent=PREVIEW_CHARS[previewIdx%PREVIEW_CHARS.length]; }
},2200);

function showQuizHome(){
    document.getElementById('quizHome').style.display   = 'block';
    document.getElementById('quizArena').style.display  = 'none';
    document.getElementById('quizResult').style.display = 'none';
    updateQuizUI();
}
function stopQuiz(){ showQuizHome(); }

function startQuiz(){
    sessionQ=sessionCorrect=sessionWrong=sessionXPGained=sessionStreak=sessionBestStreak=0;
    lives=3; answered=false; wrongWords=[];
    quizQueue=[...quizWords].sort(()=>Math.random()-0.5).slice(0,SESSION_LEN);
    document.getElementById('quizHome').style.display   = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizArena').style.display  = 'block';
    renderLives(); loadQuestion();
}

function renderLives(){
    const row=document.getElementById('livesRow'); if(!row) return;
    row.innerHTML='';
    for(let i=0;i<3;i++){
        const h=document.createElement('span');
        h.className='life-heart'+(i>=lives?' lost':'');
        h.textContent='\u2764\uFE0F';
        row.appendChild(h);
    }
}
function loseLife(){ lives=Math.max(0,lives-1); renderLives(); if(lives===0) setTimeout(showResult,900); }

function loadQuestion(){
    if(sessionQ>=SESSION_LEN){ showResult(); return; }
    answered=false;
    currentWord=quizQueue[sessionQ];
    currentQType = subMode==='both' ? (Math.random()>.5?'meaning':'pinyin') : subMode;

    setW('quizProgFill', (sessionQ/SESSION_LEN)*100+'%');
    setT('quizProgLabel', (sessionQ+1)+' / '+SESSION_LEN);
    setT('quizTypeBadge', currentQType==='meaning'?'tebak artinya':'tebak pinyin-nya');

    const qCard=document.getElementById('quizQCard');
    if(currentQType==='meaning'){
        qCard.innerHTML=`<div class="q-char">${currentWord.char}</div><div class="q-prompt">apa artinya?</div>`;
    } else {
        qCard.innerHTML=`<div class="q-char">${currentWord.char}</div><div class="q-pinyin-hint">${currentWord.meaning}</div><div class="q-prompt">bagaimana pinyin-nya?</div>`;
    }

    const fb=document.getElementById('quizFeedback');
    fb.style.display='none'; fb.className='quiz-feedback';
    document.getElementById('quizNextBtn').style.display='none';
    document.getElementById('quizSkipBtn').style.display='block';
    buildOptions();
}

function buildOptions(){
    const correctAns = currentQType==='meaning' ? currentWord.meaning : currentWord.pinyin;
    const pool=quizWords.filter(w=>w.char!==currentWord.char).sort(()=>Math.random()-0.5).slice(0,3);
    const wrongs=pool.map(w=>currentQType==='meaning'?w.meaning:w.pinyin);
    const options=[correctAns,...wrongs].sort(()=>Math.random()-0.5);
    const container=document.getElementById('mcOptions');
    container.innerHTML='';
    options.forEach(opt=>{
        const btn=document.createElement('button');
        btn.className='mc-option'; btn.textContent=opt;
        btn.onclick=()=>checkAnswer(btn,opt,correctAns);
        container.appendChild(btn);
    });
}

function checkAnswer(btn, chosen, correct){
    if(answered) return;
    answered=true;
    document.querySelectorAll('.mc-option').forEach(b=>b.disabled=true);
    const isCorrect=chosen===correct;
    if(isCorrect){ btn.classList.add('correct'); handleCorrect(); }
    else{
        btn.classList.add('wrong','shake');
        document.querySelectorAll('.mc-option').forEach(b=>{ if(b.textContent===correct) b.classList.add('correct'); });
        handleWrong();
    }
    document.getElementById('quizNextBtn').style.display='block';
    document.getElementById('quizSkipBtn').style.display='none';
    sessionQ++;
}

function handleCorrect(){
    sessionStreak++; sessionCorrect++; quizStreak++; quizTotalAns++; quizTotalRight++;
    const bonus=Math.floor(sessionStreak/3)*5;
    const gained=10+bonus;
    quizXP+=gained; sessionXPGained+=gained;
    if(quizStreak>quizBestStreak) quizBestStreak=quizStreak;
    if(sessionStreak>sessionBestStreak) sessionBestStreak=sessionStreak;
    const sEl=document.getElementById('arenaStreak');
    if(sEl){ sEl.textContent='\u{1F525} '+sessionStreak; if(sessionStreak>=3){sEl.classList.add('hot');setTimeout(()=>sEl.classList.remove('hot'),400);} }
    const msgs=['\u2705 benar!','\u2705 yesss!','\u2705 \u5BF9\u4E86!','\u2705 mantap!'];
    let msg=msgs[Math.floor(Math.random()*msgs.length)];
    if(sessionStreak>=3) msg+=` · combo \xD7${sessionStreak} +${bonus} bonus XP!`;
    else msg+=` · +${gained} XP`;
    showFeedback(msg,true); saveQuiz(); updateQuizUI();
}

function handleWrong(){
    sessionStreak=0; sessionWrong++; quizStreak=0; quizTotalAns++;
    wrongWords.push(currentWord);
    const sEl=document.getElementById('arenaStreak'); if(sEl) sEl.textContent='\u{1F525} 0';
    const msgs=['\u274C hampir!','\u274C belum nih~','\u274C coba lagi!'];
    const cl=currentQType==='meaning'?`artinya: ${currentWord.meaning}`:`pinyin: ${currentWord.pinyin}`;
    showFeedback(msgs[Math.floor(Math.random()*msgs.length)]+' · '+cl, false);
    loseLife(); saveQuiz(); updateQuizUI();
}

function showFeedback(msg,correct){
    const fb=document.getElementById('quizFeedback');
    fb.textContent=msg; fb.className='quiz-feedback '+(correct?'correct-fb':'wrong-fb');
    fb.style.display='block';
}

function nextQuestion(){ if(lives===0){showResult();return;} loadQuestion(); }

function skipQuestion(){
    sessionQ++; sessionStreak=0; quizStreak=0;
    const sEl=document.getElementById('arenaStreak'); if(sEl) sEl.textContent='\u{1F525} 0';
    updateQuizUI();
    if(sessionQ>=SESSION_LEN||lives===0) showResult(); else loadQuestion();
}

function showResult(){
    document.getElementById('quizArena').style.display  = 'none';
    document.getElementById('quizResult').style.display = 'block';
    const total=sessionCorrect+sessionWrong;
    const pct=total>0?Math.round((sessionCorrect/total)*100):0;
    let emoji='\u{1F605}', title='Terus semangat!';
    if(pct===100){emoji='\u{1F3C6}';title='Sempurna! \u5B8C\u7F8E!';}
    else if(pct>=80){emoji='\u{1F389}';title='Luar biasa!';}
    else if(pct>=60){emoji='\u{1F33F}';title='Bagus nih~';}
    else if(pct>=40){emoji='\u{1F438}';title='Lumayan!';}
    setT('resultEmoji',emoji); setT('resultTitle',title);
    setT('resultSub',`${pct}% benar · streak terbaik: ${sessionBestStreak}`);
    setT('rCorrect',sessionCorrect); setT('rWrong',sessionWrong); setT('rXP','+'+sessionXPGained);
    const rr=document.getElementById('wrongReview'), rl=document.getElementById('reviewList');
    if(wrongWords.length>0){
        rr.style.display='block';
        rl.innerHTML=wrongWords.map(w=>`
            <div class="review-item">
                <span class="review-char">${w.char}</span>
                <div class="review-info">
                    <div class="review-meaning">${w.meaning}</div>
                    <div class="review-pinyin">${w.pinyin}</div>
                </div>
            </div>`).join('');
    } else rr.style.display='none';
}

// ============================================================
// FLASHCARD
// ============================================================
let flashDeck = [], flashIdx = 0, flashHafalCount = 0, flashUlangCount = 0;
let flashIsFlipped = false, flashUlangList = [];

function startFlash(){
    flashDeck = [...hskWords].sort(()=>Math.random()-0.5);
    flashIdx = 0; flashHafalCount = 0; flashUlangCount = 0;
    flashUlangList = []; flashIsFlipped = false;
    document.getElementById('flashDoneCard').style.display = 'none';
    document.getElementById('flashCard').style.display    = '';
    document.getElementById('flashSwipeHint').style.display = '';
    const btnRow = document.querySelector('.flash-btn-row');
    if(btnRow) btnRow.style.display = '';
    loadFlashCard();
}

function startFlashReview(){
    if(flashUlangList.length === 0){ startFlash(); return; }
    flashDeck = [...flashUlangList];
    flashIdx = 0; flashHafalCount = 0; flashUlangCount = 0;
    flashUlangList = []; flashIsFlipped = false;
    document.getElementById('flashDoneCard').style.display = 'none';
    document.getElementById('flashCard').style.display    = '';
    document.getElementById('flashSwipeHint').style.display = '';
    const btnRow = document.querySelector('.flash-btn-row');
    if(btnRow) btnRow.style.display = '';
    loadFlashCard();
}

function stopFlash(){ /* no-op saat panel ditutup */ }

function loadFlashCard(){
    if(flashIdx >= flashDeck.length){ showFlashDone(); return; }
    const w = flashDeck[flashIdx];
    flashIsFlipped = false;
    const card = document.getElementById('flashCard');
    if(card) card.classList.remove('flipped');
    setT('flashChar', w.char);
    setT('flashBackChar', w.char);
    setT('flashBackPinyin', w.pinyin);
    setT('flashBackMeaning', w.meaning);
    setT('flashBackExample', w.example || '');
    setT('flashCounter', (flashIdx+1)+' / '+flashDeck.length);
    setW('flashProgFill', ((flashIdx / flashDeck.length)*100)+'%');
    setT('flashHafal', '\u2713 '+flashHafalCount);
    setT('flashUlang', '\u21BA '+flashUlangCount);
}

function flipCard(){
    flashIsFlipped = !flashIsFlipped;
    const card = document.getElementById('flashCard');
    if(card) card.classList.toggle('flipped', flashIsFlipped);
    if(flashIsFlipped && flashDeck[flashIdx]) ttsSpeak(flashDeck[flashIdx].char);
}

function flashDecide(hafal){
    if(!flashIsFlipped) return; // harus flip dulu sebelum decide
    if(hafal){
        flashHafalCount++;
    } else {
        flashUlangCount++;
        flashUlangList.push(flashDeck[flashIdx]);
    }
    flashIdx++;
    flashIsFlipped = false;
    loadFlashCard();
}

function showFlashDone(){
    document.getElementById('flashDoneCard').style.display = 'block';
    document.getElementById('flashCard').style.display     = 'none';
    document.getElementById('flashSwipeHint').style.display = 'none';
    const btnRow = document.querySelector('.flash-btn-row');
    if(btnRow) btnRow.style.display = 'none';
    setT('flashDoneSub', `Hafal: ${flashHafalCount} · Perlu diulang: ${flashUlangCount}`);
    setW('flashProgFill', '100%');
    setT('flashCounter', flashDeck.length+' / '+flashDeck.length);
}

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener('keydown', e=>{
    if(e.target.matches('input,textarea')) return;
    if(e.code==='Space'){ e.preventDefault(); togglePlay(); }
    if(e.code==='ArrowRight'&&e.ctrlKey){ e.preventDefault(); nextTrack(); }
    if(e.code==='ArrowLeft'&&e.ctrlKey){ e.preventDefault(); prevTrack(); }
    if(e.code==='Escape') closeAllPanels();
});

// ============================================================
// INIT
// ============================================================
audio.volume=0.7;
updateVolumeUI(0.7);
renderPlaylist();
loadTrack(0);
renderHskList();
renderKwnList();
renderAnime();
updateQuizUI();
updateAboutPage();
applyPhoto();
startFlash();
