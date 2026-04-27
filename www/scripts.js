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
    { title:"Multo", artist:"Cup of Joe", album:"Silakbo", year:"2025", src:"musik/multo.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/9/9f/Multo_%282024%29_by_Cup_of_Joe_cover_art.jpg", duration:"4:01" },
    { title:"End of Beginning", artist:"Joe Keery", album:"Decide", year:"2022", src:"musik/end-of-beginning.mp3", cover:"https://asset.kompas.com/crops/sFzKxBizDInGQTsbjMWtm-Vvxus=/117x0:1024x605/1200x1200/data/photo/2024/04/24/6628b81a54245.jpg", duration:"2:40" },
    { title:"Back To Friends", artist:"Sombr", album:"I Barely Know Her", year:"2025", src:"musik/back-to-friends.mp3", cover:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Official_single_cover_of_%22Back_to_Friends%22_by_Sombr.jpeg/250px-Official_single_cover_of_%22Back_to_Friends%22_by_Sombr.jpeg", duration:"3:15" }
];

// ===== HSK DATA =====
const hskWords = [
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
    { char:'相敬如宾', pinyin:'xiāngjìng rúbīn', meaning:'saling menghormati seperti tamu' },
    { char:'暗暗', pinyin:'àn àn', meaning:'diam-diam, secara rahasia' },
    { char:'轮', pinyin:'lún', meaning:'roda; giliran' },
    { char:'不耐烦', pinyin:'bù nàifán', meaning:'tidak sabar, jengkel' },
    { char:'靠', pinyin:'kào', meaning:'bersandar, mengandalkan' },
    { char:'肩膀', pinyin:'jiānbǎng', meaning:'bahu' },
    { char:'喊', pinyin:'hǎn', meaning:'berteriak, memanggil' },
    { char:'伸', pinyin:'shēn', meaning:'merentangkan, menjulurkan' },
    { char:'手指', pinyin:'shǒuzhǐ', meaning:'jari tangan' },
    { char:'歪歪扭扭', pinyin:'wāiwainiǔniǔ', meaning:'miring-miring, tidak lurus' },
    { char:'递', pinyin:'dì', meaning:'menyampaikan, memberikan' },
    { char:'脑袋', pinyin:'nǎodài', meaning:'kepala, otak' },
    { char:'叙述', pinyin:'xùshù', meaning:'menceritakan, menguraikan' },
    { char:'居然', pinyin:'jūrán', meaning:'ternyata, sungguh tak disangka' },
    { char:'催', pinyin:'cuī', meaning:'mendesak, mempercepat' },
    { char:'等待', pinyin:'děngdài', meaning:'menunggu' },
    { char:'蚊子', pinyin:'wénzi', meaning:'nyamuk' },
    { char:'半夜', pinyin:'bànyè', meaning:'tengah malam' },
    { char:'叮', pinyin:'dīng', meaning:'menggigit (nyamuk); dering' },
    { char:'老婆', pinyin:'lǎopo', meaning:'istri (informal)' },
    { char:'吵', pinyin:'chǎo', meaning:'berisik, ribut; bertengkar' },
    { char:'对', pinyin:'duì', meaning:'benar; pasangan; menghadap' },
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

// ===== KEWEN DATA =====
const kwn = [
    { id:1, title:'课文 1 · 爱的细节', content:'电台要选出一堆最恩爱的夫妻。对比后，有三对夫妻入围。评委问他们："你们是如何保持恩爱的？"第一对夫妻说："我们每天都会说晚安。"第二对夫妻说："我们从不吵架。"第三对夫妻说："我们相敬如宾，互相爱护。"评委听后非常感动。' },
    { id:2, title:'课文 2 · 生活小故事', content:'小明每天都很努力学习中文。他喜欢听电台，也喜欢看中国电视剧。有一天，他在路上遇到一个中国朋友。朋友问他："你的中文怎么这么好？"小明笑着说："因为我每天都练习啊！"朋友竖起大拇指说："你真厉害！"' },
    { id:3, title:'课文 3 · 我的梦想', content:'每个人都有自己的梦想。我的梦想是去中国旅行。我想看长城，想吃北京烤鸭，还想交很多中国朋友。虽然学习中文很难，但是我会坚持。妈妈说："只要有梦想，就要努力去实现。"我点点头说："我一定会加油的！"' }
];

// ===== ANIME DATA =====
const animeList = [
    { image:'https://cdn.myanimelist.net/images/anime/1286/99889.jpg', title:'Demon Slayer', genre:'Action · Fantasy', rating:'⭐ 9.0' },
    { image:'https://cdn.myanimelist.net/images/anime/1441/122795.jpg', title:'Spy x Family', genre:'Comedy · Slice of Life', rating:'⭐ 8.8' },
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4jTxPhcDSELgIomzoBdmS4x_pHq9Otq9Y5F4mjrMx857NHpc', title:'Nanatsu No Tanzai', genre:'Action · Fantasy', rating:'⭐ 9.5' },
    { image:'https://cdn.myanimelist.net/images/anime/1522/128039.jpg', title:'Re:Zero', genre:'Drama · Fantasy', rating:'⭐ 9.9' },
    { image:'https://cdn.myanimelist.net/images/anime/1613/102576.jpg', title:'Dr. Stone', genre:'Sci-Fi · Adventure', rating:'⭐ 9.8' },
    {image: 'https://cdn.myanimelist.net/images/anime/1087/115166.jpg', title: 'The Case Study of Vanitas', genre: 'Fantasy · Supernatural', rating: '⭐ 8.1'},
    {image: 'https://cdn.myanimelist.net/images/anime/1410/144419.jpg', title: 'That Time I Got Reincarnated as a Slime Season 3', genre: 'Fantasy · Isekai', rating: '⭐ 8.4'},
    {image: 'https://cdn.myanimelist.net/images/anime/1244/138851.jpg', title: 'One Piece', genre: 'Adventure · Action', rating: '⭐ 9.4'},
    {image: 'https://cdn.myanimelist.net/images/anime/1172/121852.jpg', title: 'Jujutsu Kaisen Season 2', genre: 'Action · Supernatural', rating: '⭐ 8.9'},
    {image: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg', title : 'Chainsaw Man', genre: 'Action · Dark Fantasy', rating: '⭐ 8.5'}, 
    {image: 'https://cdn.myanimelist.net/images/anime/1841/141692.jpg', title: 'Solo Leveling', genre: 'Action · Fantasy', rating: '⭐ 8.2'},
    {image: 'https://www.viu.com/ott/id/articles/sinopsis-attack-on-titan-the-final-season/', title: 'Attack on Titan: The Final Season', genre: 'Action · Drama', rating: '⭐ 9.1'},
    {image: 'https://www.vidio.com/premier/9783/black-butler',title: 'Black Butler: Public School Arc', genre: 'Mystery · Supernatural', rating: '⭐ 7.9'},
    {image: 'https://www.imdb.com/title/tt3398540/', title: 'Haikyu!! The Dumpster Battle', genre: 'Sports · Drama', rating: '⭐ 8.5' },
    {image: 'https://www.anime.com/shows/noragami', title: 'Noragami', genre: 'Action · Supernatural', rating: '⭐ 8.3'},
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

// ===== PLAYER STATE =====
let currentTrack = 0, isShuffled = false, isRepeating = false;
let shuffledOrder = [], previousVolume = 0.7;

const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const vinylEl = document.getElementById('vinylRecord');

// ===== PERSISTENT STATE =====
let quizXP         = parseInt(localStorage.getItem('quizXP') || '0');
let quizStreak     = parseInt(localStorage.getItem('quizStreak') || '0');
let quizBestStreak = parseInt(localStorage.getItem('quizBestStreak') || '0');
let quizTotalAns   = parseInt(localStorage.getItem('quizTotalAns') || '0');
let quizTotalRight = parseInt(localStorage.getItem('quizTotalRight') || '0');
let kwnRead        = JSON.parse(localStorage.getItem('kwnRead') || '[]');
let hskViewed      = JSON.parse(localStorage.getItem('hskViewed') || '[]');
let streakDays     = JSON.parse(localStorage.getItem('streakDays') || '[]');
let userPhoto      = localStorage.getItem('userPhoto') || '';

// Quiz session state
let subMode = 'both', sessionQ = 0, sessionCorrect = 0, sessionWrong = 0;
let sessionXPGained = 0, sessionStreak = 0, sessionBestStreak = 0;
let lives = 3, answered = false, quizQueue = [], wrongWords = [];
let currentWord = null, currentQType = null;
const SESSION_LEN = 10, XP_PER_LEVEL = 100;
const PREVIEW_CHARS = ['学','习','语','好','乐','智','心','梦','坚','持'];
let previewIdx = 0;

// Lesson state
let currentKwnId = null, currentHskIndex = null;

// ===== CLOCK =====
function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2,'0');
    const m = now.getMinutes().toString().padStart(2,'0');
    const days = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
    const txt = `${days[now.getDay()]}, ${h}:${m}`;
    const el1 = document.getElementById('headerTime');
    const el2 = document.getElementById('headerTime2');
    if(el1) el1.textContent = txt;
    if(el2) el2.textContent = txt;
}
updateClock();
setInterval(updateClock, 10000);

// ===== GREETING MESSAGE =====
function updateGreeting() {
    const h = new Date().getHours();
    let msg = h < 12 ? 'selamat pagi! ☀️ ayo belajar~'
            : h < 15 ? 'selamat siang! 🌤️ istirahat sejenak?'
            : h < 18 ? 'selamat sore! 🌿 waktu belajar!'
            : 'selamat malam! 🌙 belajar malam yuk~';
    const el = document.getElementById('greetSub');
    if(el) el.textContent = msg;
}
updateGreeting();

// ===== WORD OF DAY =====
function initWordOfDay() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(),0,0)) / 86400000);
    const word = hskWords[dayOfYear % hskWords.length];
    const el_char = document.getElementById('wodChar');
    const el_pin = document.getElementById('wodPinyin');
    const el_mean = document.getElementById('wodMeaning');
    const el_date = document.getElementById('wodDate');
    if(el_char) el_char.textContent = word.char;
    if(el_pin) el_pin.textContent = word.pinyin;
    if(el_mean) el_mean.textContent = word.meaning;
    if(el_date) {
        const opts = {day:'numeric',month:'short'};
        el_date.textContent = now.toLocaleDateString('id-ID', opts);
    }
}
initWordOfDay();

function goToQuizFromWod() {
    openPanel('quiz');
    setTimeout(() => startQuiz(), 300);
}

// ===== STREAK CALENDAR =====
function initCalendar() {
    const grid = document.getElementById('calGrid');
    if(!grid) return;
    const days = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
    const now = new Date();
    // Today mark
    const todayStr = now.toDateString();
    if(!streakDays.includes(todayStr)) {
        streakDays.push(todayStr);
        localStorage.setItem('streakDays', JSON.stringify(streakDays));
    }
    // calc streak count (consecutive days)
    let streak = 0;
    for(let i = 0; i < 30; i++) {
        const d = new Date(now); d.setDate(now.getDate() - i);
        if(streakDays.includes(d.toDateString())) streak++;
        else break;
    }
    const sc = document.getElementById('streakCount');
    if(sc) sc.textContent = `${streak} hari berturut-turut`;
    // day labels
    days.forEach(d => {
        const el = document.createElement('div');
        el.className = 'cal-day-label'; el.textContent = d;
        grid.appendChild(el);
    });
    // show last 21 days (3 weeks)
    for(let i = 20; i >= 0; i--) {
        const d = new Date(now); d.setDate(now.getDate() - i);
        const el = document.createElement('div');
        el.className = 'cal-day';
        const dayNum = d.getDate();
        el.textContent = dayNum;
        if(d.toDateString() === todayStr) {
            el.classList.add('today');
        } else if(streakDays.includes(d.toDateString())) {
            el.classList.add('active');
        }
        grid.appendChild(el);
    }
}
initCalendar();

// ===== PAGE NAVIGATION =====
function switchPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + name);
    if(target) target.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navEl = document.getElementById('nav-' + name);
    if(navEl) navEl.classList.add('active');
    updateAboutPage();
}

// "belajar" nav shortcut opens HSK panel
document.getElementById('nav-belajar').addEventListener('click', () => {
    openPanel('hsk');
});

// ===== ABOUT PAGE =====
function updateAboutPage() {
    const acc = quizTotalAns > 0 ? Math.round((quizTotalRight/quizTotalAns)*100) : 0;
    const xpEl = document.getElementById('aboutXP');
    const strEl = document.getElementById('aboutStreak');
    const accEl = document.getElementById('aboutAccuracy');
    const lvEl = document.getElementById('greetLevel');
    if(xpEl) xpEl.textContent = quizXP;
    if(strEl) strEl.textContent = quizBestStreak;
    if(accEl) accEl.textContent = acc + '%';
    if(lvEl) lvEl.textContent = 'Lv.' + (Math.floor(quizXP/XP_PER_LEVEL)+1);
    // apply saved photo
    applyPhoto();
}

function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        userPhoto = ev.target.result;
        localStorage.setItem('userPhoto', userPhoto);
        applyPhoto();
    };
    reader.readAsDataURL(file);
}

function applyPhoto() {
    const targets = [document.getElementById('aboutPhotoInner'), document.getElementById('avatarWrapHome')];
    targets.forEach(el => {
        if(!el) return;
        if(userPhoto) {
            el.innerHTML = `<img src="${userPhoto}" alt="foto">`;
        } else {
            el.textContent = '🐥';
        }
    });
}

// ===== PANEL NAVIGATION =====
function openPanel(name) {
    document.getElementById('panel-' + name).classList.add('open');
    document.getElementById('panelOverlay').classList.add('visible');
}
function closePanel(name) {
    document.getElementById('panel-' + name).classList.remove('open');
    document.getElementById('panelOverlay').classList.remove('visible');
}
function closeAllPanels() {
    document.querySelectorAll('.side-panel').forEach(p => p.classList.remove('open'));
    document.getElementById('panelOverlay').classList.remove('visible');
}

// ===== PROGRESS TRACKERS =====
function updateHskProgress() {
    const pct = Math.round((hskViewed.length / hskWords.length) * 100);
    const fill = document.getElementById('hskProgress');
    const label = document.getElementById('hskProgressLabel');
    if(fill) fill.style.width = pct + '%';
    if(label) label.textContent = pct === 0 ? 'mulai belajar~' : `${hskViewed.length} / ${hskWords.length} dipelajari`;
}

function updateKwnProgress() {
    const pct = Math.round((kwnRead.length / kwn.length) * 100);
    const fill = document.getElementById('kwnProgress');
    const label = document.getElementById('kwnProgressLabel');
    if(fill) fill.style.width = pct + '%';
    if(label) label.textContent = pct === 0 ? 'belum dibaca~' : `${kwnRead.length} / ${kwn.length} dibaca`;
}

// ===== RENDER PLAYLIST =====
function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if(!container) return;
    container.innerHTML = '';
    const order = isShuffled ? shuffledOrder : playlist.map((_,i)=>i);
    order.forEach(trackIdx => {
        const track = playlist[trackIdx];
        const isActive = trackIdx === currentTrack;
        const el = document.createElement('div');
        el.className = 'playlist-item' + (isActive ? ' active' : '');
        el.innerHTML = `
            <img src="${track.cover}" alt="${track.title}" class="pl-cover"
                 onerror="this.src='https://placehold.co/42x42/6bab6b/ffffff?text=♪'">
            <div class="pl-info">
                <div class="pl-title">${track.title}</div>
                <div class="pl-artist">${track.artist}</div>
            </div>
            <span class="pl-dur">${track.duration}</span>
            <span class="pl-icon">${isActive ? '🔊' : '▶'}</span>
        `;
        el.addEventListener('click', () => {
            currentTrack = trackIdx;
            loadTrack(currentTrack);
            if(audio.paused) togglePlay();
        });
        container.appendChild(el);
    });
    updatePlaylistStats();
}

function updatePlaylistStats() {
    const total = playlist.reduce((acc,t) => {
        const [m,s] = t.duration.split(':').map(Number);
        return acc + m*60 + s;
    }, 0);
    const mins = Math.floor(total/60), secs = total % 60;
    const el = document.getElementById('playlistStats');
    if(el) el.textContent = `${playlist.length} lagu · ${mins}:${secs.toString().padStart(2,'0')}`;
}

// ===== LOAD TRACK =====
function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src; audio.load();
    document.getElementById('nowPlayingTitle').textContent = track.title;
    document.getElementById('nowPlayingArtist').textContent = track.artist;
    document.getElementById('nowPlayingAlbum').textContent = `${track.album} (${track.year})`;
    const cover = document.getElementById('nowPlayingCover');
    cover.src = track.cover;
    cover.onerror = () => { cover.src = 'https://placehold.co/82x82/6bab6b/ffffff?text=♪'; };
    // mini player
    const mpCover = document.getElementById('mpCover');
    const mpTitle = document.getElementById('mpTitle');
    const mpArtist = document.getElementById('mpArtist');
    if(mpCover) { mpCover.src = track.cover; mpCover.onerror = () => mpCover.src = 'https://placehold.co/34x34/6bab6b/ffffff?text=♪'; }
    if(mpTitle) mpTitle.textContent = track.title;
    if(mpArtist) mpArtist.textContent = track.artist;
    // home sub
    const homeSub = document.getElementById('homeMusicSub');
    if(homeSub) homeSub.textContent = `▶ ${track.title}`;
    renderPlaylist();
}

// ===== PLAY / PAUSE =====
function togglePlay() {
    if(audio.paused) {
        audio.play().catch(()=>{});
        setPlayingUI(true);
    } else {
        audio.pause();
        setPlayingUI(false);
    }
}
function setPlayingUI(playing) {
    const icon = playing ? '⏸' : '▶';
    if(playPauseBtn) playPauseBtn.textContent = icon;
    const mpPlay = document.getElementById('mpPlay');
    if(mpPlay) mpPlay.textContent = icon;
    const mpWave = document.getElementById('mpWave');
    const wave = document.getElementById('nowBarWave');
    if(playing) {
        vinylEl.classList.add('playing');
        document.getElementById('eqWrapper').classList.add('eq-playing');
        if(mpWave) mpWave.classList.add('playing');
        if(wave) wave.classList.add('playing');
    } else {
        vinylEl.classList.remove('playing');
        document.getElementById('eqWrapper').classList.remove('eq-playing');
        if(mpWave) mpWave.classList.remove('playing');
        if(wave) wave.classList.remove('playing');
    }
}

// ===== PROGRESS =====
audio.addEventListener('timeupdate', () => {
    if(!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    const m = Math.floor(audio.currentTime/60), s = Math.floor(audio.currentTime%60);
    document.getElementById('currentTime').textContent = m + ':' + (s<10?'0':'') + s;
});
audio.addEventListener('loadedmetadata', () => {
    const m = Math.floor(audio.duration/60), s = Math.floor(audio.duration%60);
    document.getElementById('totalTime').textContent = m + ':' + (s<10?'0':'') + s;
});
function seek(e) {
    const rect = document.getElementById('progressBar').getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
}

// ===== VOLUME =====
document.getElementById('volumeSlider').addEventListener('input', function() {
    const v = parseFloat(this.value);
    audio.volume = v; previousVolume = v; updateVolumeUI(v);
});
function updateVolumeUI(v) {
    document.getElementById('volumeLevel').style.width = (v*100) + '%';
    document.getElementById('volumePercent').textContent = Math.round(v*100) + '%';
    document.getElementById('volumeIcon').textContent = v===0?'🔇':v<0.5?'🔉':'🔊';
}
function toggleMute() {
    if(audio.volume > 0) {
        previousVolume = audio.volume; audio.volume = 0;
        document.getElementById('volumeSlider').value = 0; updateVolumeUI(0);
    } else {
        audio.volume = previousVolume;
        document.getElementById('volumeSlider').value = previousVolume; updateVolumeUI(previousVolume);
    }
}

// ===== PREV / NEXT =====
function getOrder() { return isShuffled ? shuffledOrder : playlist.map((_,i)=>i); }
function prevTrack() {
    const order = getOrder(), pos = order.indexOf(currentTrack);
    currentTrack = order[pos > 0 ? pos-1 : order.length-1];
    loadTrack(currentTrack);
    if(!audio.paused) audio.play().catch(()=>{});
}
function nextTrack() {
    const order = getOrder(), pos = order.indexOf(currentTrack);
    if(pos < order.length-1) { currentTrack = order[pos+1]; }
    else if(isRepeating) { currentTrack = order[0]; }
    else { setPlayingUI(false); return; }
    loadTrack(currentTrack);
    if(!audio.paused) audio.play().catch(()=>{});
}
audio.addEventListener('ended', () => {
    if(isRepeating) { audio.currentTime=0; audio.play().catch(()=>{}); }
    else nextTrack();
});

// ===== SHUFFLE / REPEAT =====
function toggleShuffle() {
    isShuffled = !isShuffled;
    if(isShuffled) {
        const others = playlist.map((_,i)=>i).filter(i=>i!==currentTrack);
        for(let i=others.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [others[i],others[j]]=[others[j],others[i]]; }
        shuffledOrder = [currentTrack, ...others];
    }
    document.getElementById('shuffleBtn').classList.toggle('on', isShuffled);
    renderPlaylist();
}
function toggleRepeat() {
    isRepeating = !isRepeating;
    document.getElementById('repeatBtn').classList.toggle('on', isRepeating);
}

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
    if(e.target.matches('input,textarea')) return;
    if(e.code==='Space') { e.preventDefault(); togglePlay(); }
    if(e.code==='ArrowRight'&&e.ctrlKey) { e.preventDefault(); nextTrack(); }
    if(e.code==='ArrowLeft'&&e.ctrlKey) { e.preventDefault(); prevTrack(); }
    if(e.code==='Escape') closeAllPanels();
});

// ===== RENDER HSK LIST =====
function renderHskList() {
    const container = document.getElementById('hskList');
    if(!container) return;
    container.innerHTML = '';
    hskWords.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'lesson-item' + (currentHskIndex===index?' active':'');
        div.dataset.index = index;
        div.dataset.search = (item.char+item.pinyin+item.meaning).toLowerCase();
        const viewed = hskViewed.includes(index);
        div.innerHTML = `
            <span class="lesson-title">${item.char} · ${item.meaning}</span>
            <span class="lesson-badge">${viewed ? '✅ dipelajari' : '📖 pelajari'}</span>
        `;
        div.onclick = () => {
            document.querySelectorAll('#hskList .lesson-item').forEach(el=>el.classList.remove('active'));
            div.classList.add('active');
            currentHskIndex = index;
            if(!hskViewed.includes(index)) {
                hskViewed.push(index);
                localStorage.setItem('hskViewed', JSON.stringify(hskViewed));
                updateHskProgress();
                div.querySelector('.lesson-badge').textContent = '✅ dipelajari';
            }
            showHskContent(index, getCurrentHskKeyword());
        };
        container.appendChild(div);
    });
}

function showHskContent(index, keyword='') {
    const item = hskWords[index];
    if(!item) return;
    const contentArea = document.getElementById('hskContentArea');
    if(!contentArea) return;
    let mHtml = item.meaning, pHtml = item.pinyin;
    if(keyword.trim()) {
        const rx = new RegExp(`(${escapeRegex(keyword)})`, 'gi');
        mHtml = mHtml.replace(rx,'<mark>$1</mark>');
        pHtml = pHtml.replace(rx,'<mark>$1</mark>');
    }
    contentArea.innerHTML = `
        <div class="lesson-full-title"><span style="font-size:2.2rem;">${item.char}</span></div>
        <div class="lesson-full-content">
            <p><strong>📖 Arti:</strong> ${mHtml}</p>
            <p style="margin-top:10px;"><strong>🔤 Pinyin:</strong> ${pHtml||'-'}</p>
            <hr style="margin:16px 0;border:none;border-top:1px solid rgba(107,171,107,0.2);">
            <p style="font-size:0.88rem;color:var(--text-soft);">💡 <em>${item.char}</em> adalah kata HSK yang sering digunakan~</p>
        </div>
    `;
}

function filterHsk() {
    const kw = document.getElementById('hskSearch').value.toLowerCase();
    document.querySelectorAll('#hskList .lesson-item').forEach(el => {
        el.style.display = (!kw || el.dataset.search.includes(kw)) ? 'flex' : 'none';
    });
    if(currentHskIndex!==null) showHskContent(currentHskIndex, kw);
}

function getCurrentHskKeyword() {
    const el = document.getElementById('hskSearch');
    return el ? el.value : '';
}

// ===== RENDER KEWEN LIST =====
function renderKwnList() {
    const container = document.getElementById('kwnList');
    if(!container) return;
    container.innerHTML = '';
    kwn.forEach(item => {
        const div = document.createElement('div');
        div.className = 'lesson-item' + (currentKwnId===item.id?' active':'');
        div.dataset.id = item.id;
        div.dataset.search = (item.title+item.content).toLowerCase();
        const read = kwnRead.includes(item.id);
        div.innerHTML = `
            <span class="lesson-title">${item.title}</span>
            <span class="lesson-badge">${read ? '✅ sudah dibaca' : '📖 baca'}</span>
        `;
        div.onclick = () => {
            document.querySelectorAll('#kwnList .lesson-item').forEach(el=>el.classList.remove('active'));
            div.classList.add('active');
            currentKwnId = item.id;
            if(!kwnRead.includes(item.id)) {
                kwnRead.push(item.id);
                localStorage.setItem('kwnRead', JSON.stringify(kwnRead));
                updateKwnProgress();
                div.querySelector('.lesson-badge').textContent = '✅ sudah dibaca';
            }
            showKwnContent(item.id, getCurrentKwnKeyword());
        };
        container.appendChild(div);
    });
}

function showKwnContent(id, keyword='') {
    const item = kwn.find(i=>i.id===id);
    if(!item) return;
    const contentArea = document.getElementById('kwnContentArea');
    if(!contentArea) return;
    let html = item.content;
    if(keyword.trim()) {
        const rx = new RegExp(`(${escapeRegex(keyword)})`, 'gi');
        html = html.replace(rx,'<mark>$1</mark>');
    }
    contentArea.innerHTML = `
        <div class="lesson-full-title">${item.title}</div>
        <div class="lesson-full-content">${html}</div>
    `;
}

function filterKwn() {
    const kw = document.getElementById('kewenSearch').value.toLowerCase();
    document.querySelectorAll('#kwnList .lesson-item').forEach(el => {
        el.style.display = (!kw || el.dataset.search.includes(kw)) ? 'flex' : 'none';
    });
    if(currentKwnId!==null) showKwnContent(currentKwnId, kw);
}

function getCurrentKwnKeyword() {
    const el = document.getElementById('kewenSearch');
    return el ? el.value : '';
}

function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

// ===== RENDER ANIME =====
function renderAnime() {
    const grid = document.getElementById('animeGrid');
    if(!grid) return;
    animeList.forEach((a,i) => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.style.animationDelay = (i*0.05) + 's';
        card.innerHTML = `
            <div class="anime-img-wrap">
                <img src="${a.image}" alt="${a.title}" class="anime-img"
                     onerror="this.parentElement.innerHTML='<div class=anime-img-fallback>🎬</div>'">
            </div>
            <div class="anime-title">${a.title}</div>
            <div class="anime-genre">${a.genre}</div>
            <div class="anime-rating">${a.rating}</div>
        `;
        grid.appendChild(card);
    });
}

// ===== QUIZ =====
function saveQuiz() {
    localStorage.setItem('quizXP', quizXP);
    localStorage.setItem('quizStreak', quizStreak);
    localStorage.setItem('quizBestStreak', quizBestStreak);
    localStorage.setItem('quizTotalAns', quizTotalAns);
    localStorage.setItem('quizTotalRight', quizTotalRight);
}

function setSubMode(mode) {
    subMode = mode;
    document.querySelectorAll('.submode-pill').forEach(p=>p.classList.remove('active'));
    document.getElementById('sm-'+mode).classList.add('active');
}

function updateQuizUI() {
    const level = Math.floor(quizXP/XP_PER_LEVEL)+1;
    const xpInLv = quizXP % XP_PER_LEVEL;
    const pct = (xpInLv/XP_PER_LEVEL)*100;
    const acc = quizTotalAns>0 ? Math.round((quizTotalRight/quizTotalAns)*100) : 0;
    const setT = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
    const setW = (id,v) => { const el=document.getElementById(id); if(el) el.style.width=v; };
    setW('xpBarFill', pct+'%');
    setT('xpBarLabel', xpInLv+' / '+XP_PER_LEVEL+' XP');
    setT('xpLevel', 'Lv.'+level);
    setT('qhStreak', '🔥 '+quizStreak);
    setT('qhXP', '⭐ '+quizXP+' XP');
    setT('homeStreak', '🔥 '+quizStreak);
    setT('greetLevel', 'Lv.'+level);
    setT('statTotal', quizTotalAns);
    setT('statCorrect', quizTotalRight);
    setT('statAccuracy', acc+'%');
    setT('statBestStreak', quizBestStreak);
    updateAboutPage();
}

setInterval(() => {
    previewIdx++;
    const el = document.getElementById('qheroChar');
    if(el) {
        el.style.animation = 'none'; el.offsetHeight;
        el.style.animation = '';
        el.textContent = PREVIEW_CHARS[previewIdx % PREVIEW_CHARS.length];
    }
}, 2200);

function showQuizHome() {
    document.getElementById('quizHome').style.display = 'block';
    document.getElementById('quizArena').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    updateQuizUI();
}
function stopQuiz() { showQuizHome(); }

function startQuiz() {
    sessionQ=sessionCorrect=sessionWrong=sessionXPGained=sessionStreak=sessionBestStreak=0;
    lives=3; answered=false; wrongWords=[];
    quizQueue = [...quizWords].sort(()=>Math.random()-0.5).slice(0,SESSION_LEN);
    document.getElementById('quizHome').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizArena').style.display = 'block';
    renderLives(); loadQuestion();
}

function renderLives() {
    const row = document.getElementById('livesRow');
    if(!row) return;
    row.innerHTML = '';
    for(let i=0;i<3;i++) {
        const h = document.createElement('span');
        h.className = 'life-heart'+(i>=lives?' lost':'');
        h.textContent = '❤️';
        row.appendChild(h);
    }
}
function loseLife() {
    lives = Math.max(0, lives-1); renderLives();
    if(lives===0) setTimeout(showResult, 900);
}

function loadQuestion() {
    if(sessionQ >= SESSION_LEN) { showResult(); return; }
    answered = false;
    currentWord = quizQueue[sessionQ];
    currentQType = subMode==='both' ? (Math.random()>0.5?'meaning':'pinyin') : subMode;
    const pct = (sessionQ/SESSION_LEN)*100;
    document.getElementById('quizProgFill').style.width = pct+'%';
    document.getElementById('quizProgLabel').textContent = (sessionQ+1)+' / '+SESSION_LEN;
    document.getElementById('quizTypeBadge').textContent = currentQType==='meaning'?'🇮🇩 tebak artinya':'🔤 tebak pinyin-nya';
    const qCard = document.getElementById('quizQCard');
    if(currentQType==='meaning') {
        qCard.innerHTML = `<div class="q-char">${currentWord.char}</div><div class="q-prompt">apa artinya?</div>`;
    } else {
        qCard.innerHTML = `<div class="q-char">${currentWord.char}</div><div class="q-pinyin-hint">${currentWord.meaning}</div><div class="q-prompt">bagaimana pinyin-nya?</div>`;
    }
    const fb = document.getElementById('quizFeedback');
    fb.style.display='none'; fb.className='quiz-feedback';
    document.getElementById('quizNextBtn').style.display='none';
    document.getElementById('quizSkipBtn').style.display='block';
    buildOptions();
}

function buildOptions() {
    const correctAns = currentQType==='meaning' ? currentWord.meaning : currentWord.pinyin;
    const pool = quizWords.filter(w=>w.char!==currentWord.char).sort(()=>Math.random()-0.5).slice(0,3);
    const wrongs = pool.map(w=>currentQType==='meaning'?w.meaning:w.pinyin);
    const options = [correctAns,...wrongs].sort(()=>Math.random()-0.5);
    const container = document.getElementById('mcOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className='mc-option'; btn.textContent=opt;
        btn.onclick = ()=>checkAnswer(btn,opt,correctAns);
        container.appendChild(btn);
    });
}

function checkAnswer(btn, chosen, correct) {
    if(answered) return;
    answered=true;
    document.querySelectorAll('.mc-option').forEach(b=>b.disabled=true);
    const isCorrect = chosen===correct;
    if(isCorrect) { btn.classList.add('correct'); handleCorrect(); }
    else {
        btn.classList.add('wrong','shake');
        document.querySelectorAll('.mc-option').forEach(b=>{ if(b.textContent===correct) b.classList.add('correct'); });
        handleWrong();
    }
    document.getElementById('quizNextBtn').style.display='block';
    document.getElementById('quizSkipBtn').style.display='none';
    sessionQ++;
}

function handleCorrect() {
    sessionStreak++; sessionCorrect++; quizStreak++; quizTotalAns++; quizTotalRight++;
    const bonus = Math.floor(sessionStreak/3)*5;
    const gained = 10+bonus;
    quizXP+=gained; sessionXPGained+=gained;
    if(quizStreak>quizBestStreak) quizBestStreak=quizStreak;
    if(sessionStreak>sessionBestStreak) sessionBestStreak=sessionStreak;
    const streakEl = document.getElementById('arenaStreak');
    if(streakEl) { streakEl.textContent='🔥 '+sessionStreak; if(sessionStreak>=3){streakEl.classList.add('hot');setTimeout(()=>streakEl.classList.remove('hot'),400);} }
    const msgs=['✅ benar! 🌿','✅ yesss! 🎉','✅ 对了！✨','✅ mantap! 💪'];
    let msg=msgs[Math.floor(Math.random()*msgs.length)];
    if(sessionStreak>=3) msg+=` · combo ×${sessionStreak} 🔥 +${bonus} bonus XP!`;
    else msg+=` · +${gained} XP`;
    showFeedback(msg,true); saveQuiz(); updateQuizUI();
}

function handleWrong() {
    sessionStreak=0; sessionWrong++; quizStreak=0; quizTotalAns++;
    wrongWords.push(currentWord);
    const streakEl=document.getElementById('arenaStreak');
    if(streakEl) streakEl.textContent='🔥 0';
    const msgs=['❌ hampir!','❌ belum nih~','❌ coba lagi!'];
    const correctLabel = currentQType==='meaning'?`artinya: ${currentWord.meaning}`:`pinyin-nya: ${currentWord.pinyin}`;
    showFeedback(msgs[Math.floor(Math.random()*msgs.length)]+' · '+correctLabel,false);
    loseLife(); saveQuiz(); updateQuizUI();
}

function showFeedback(msg, correct) {
    const fb=document.getElementById('quizFeedback');
    fb.textContent=msg; fb.className='quiz-feedback '+(correct?'correct-fb':'wrong-fb');
    fb.style.display='block';
}
function nextQuestion() { if(lives===0){showResult();return;} loadQuestion(); }
function skipQuestion() {
    sessionQ++; sessionStreak=0; quizStreak=0;
    const el=document.getElementById('arenaStreak'); if(el) el.textContent='🔥 0';
    updateQuizUI();
    if(sessionQ>=SESSION_LEN||lives===0) showResult(); else loadQuestion();
}

function showResult() {
    document.getElementById('quizArena').style.display='none';
    document.getElementById('quizResult').style.display='block';
    const total=sessionCorrect+sessionWrong;
    const pct=total>0?Math.round((sessionCorrect/total)*100):0;
    let emoji='😅',title='Terus semangat ya~';
    if(pct===100){emoji='🏆';title='Sempurna! 完美！';}
    else if(pct>=80){emoji='🎉';title='Luar biasa!';}
    else if(pct>=60){emoji='🌿';title='Bagus nih~';}
    else if(pct>=40){emoji='🐸';title='Lumayan!';}
    document.getElementById('resultEmoji').textContent=emoji;
    document.getElementById('resultTitle').textContent=title;
    document.getElementById('resultSub').textContent=`${pct}% benar · streak terbaik: ${sessionBestStreak} 🔥`;
    document.getElementById('rCorrect').textContent=sessionCorrect;
    document.getElementById('rWrong').textContent=sessionWrong;
    document.getElementById('rXP').textContent='+'+sessionXPGained;
    const reviewSection=document.getElementById('wrongReview');
    const reviewList=document.getElementById('reviewList');
    if(wrongWords.length>0) {
        reviewSection.style.display='block';
        reviewList.innerHTML=wrongWords.map(w=>`
            <div class="review-item">
                <span class="review-char">${w.char}</span>
                <div class="review-info">
                    <div class="review-meaning">${w.meaning}</div>
                    <div class="review-pinyin">${w.pinyin}</div>
                </div>
            </div>
        `).join('');
    } else { reviewSection.style.display='none'; }
}

// ===== INIT =====
audio.volume = 0.7;
updateVolumeUI(0.7);
renderPlaylist();
loadTrack(0);
renderHskList();
renderKwnList();
renderAnime();
updateQuizUI();
updateHskProgress();
updateKwnProgress();
applyPhoto();
updateAboutPage();