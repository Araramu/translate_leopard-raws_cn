//js

function getArrName(c_name) {
	return document.getElementsByClassName(c_name);
};

var ArrName = getArrName('torrent_name');
var ArrText = [];
for (var i = ArrName.length - 1; i >= 0; i--) {
	ArrText[i] = ArrName[i].firstChild.innerHTML;
};

var exp = new RegExp("(.+\\]\\s)(.+?)(\\s\\-\\s\\d{2}.+\\.mp4)");
var exp2 = new RegExp("(.+\\]\\s)(.+?)(\\s\\(.+\\))");
var c_name = {
	"Pikaia!": "PIKAIA!", 
	"Ranpo Kitan - Game of Laplace": "乱步奇谭 - Game of Laplace", 
	"Joukamachi no Dandelion": "城下町的蒲公英", 
	"Gakkou Gurashi!": "学园孤岛!", 
	"Danchigai": "群居姐妹", 
	"Chaos Dragon - Sekiryuu Seneki": "赤龙战役", 
	"Aoharu x Kikanjuu": "青春×机关枪", 
	"Aquarion Logos": "创圣的大天使LOGOS", 
	"Naruto Shippuuden": "火影忍者疾风传", 
	"Junjou Romantica 3": "纯情罗曼史 第三季", 
	"Kuusen Madoushi Kouhosei no Kyoukan": "空战魔导士候补生的教官", 
	"Himouto! Umaru-chan": "干物妹!小埋", 
	"Gangsta.": "黑街", 
	"Ore Monogatari!!": "俺物语!!", 
	"Okusama ga Seito Kaichou!": "我老婆是学生会长!", 
	"Gintama (2015)": "銀魂(2015)", 
	"Suzakinishi The Animation": "洲崎西", 
	"Overlord": "Overlord", 
	"Sore ga Seiyuu!": "那就是声优!", 
	"Bikini Warriors": "比基尼勇士", 
	"Monster Musume no Iru Nichijou": "魔物娘的同居日常", 
	"Non Non Biyori - Repeat": "悠哉日常大王 第二季", 
	"Jitsu wa Watashi wa": "其實我是", 
	"Makura no Danshi": "枕男子", 
	"Akagami no Shirayukihime": "赤发白雪姬", 
	"Million Doll": "百万偶像/Million Doll", 
	"Teekyuu 5": "女高网球部5", 
	"To Love-Ru - Trouble - Darkness 2nd": "出包王女 To Love-Ru Trouble (無修正) 2nd", 
	"Dia no Ace - Second Season": "鑽石王牌 - Second Season", 
	"Sailor Moon": "美少女战士", 
	"Wakako-zake": "和歌子酒", 
	"God Eater": "噬神者", 
	"Baby Steps (2015)": "网球优等生 Baby Steps(2015)", 
	"Baby Steps": "网球优等生",
	"Arslan Senki": "阿尔斯兰战记 Arslan Senki",
	"One Piece": "海贼王", 
	"Go! Princess Precure": "Go!PRINCESS光之美少女",
	"Youkai Watch": "妖怪手表",
	"Ushio to Tora": "潮与虎",
	"Idolmaster - Cinderella Girls 2nd": "偶像大师-灰姑娘的女孩第二季",
	"Gate - Jieitai Kanochi nite, Kaku Tatakaeri": "GATE奇幻自卫队",
	"Classroom Crisis": "火星日常!《Classroom☆Crisis》",
	"Prison School": "监狱学园",
	"Miss Monochrome The Animation 2": "黑白小姐 Season 2",
	"Senki Zesshou Symphogear GX": "战姬绝唱SYMPHOGEAR GX",
	"Shokugeki no Souma": "食戟之灵",
	"The Disappearance of Nagato Yuki-chan": "小长门有希的消失",
	"Wakaba Girl": "若叶女孩",
	"PuriPara (2015)": "美妙天堂/Puripara",
	"Fairy Tail (2014)": "妖精的尾巴 (2014)",
	"Kyoukai no Rinne": "境界之轮回",
	"Denpa Kyoushi TV": "电波教师 TV",
	"Durarara!!x2 Ten": "无头骑士异闻录 第三季",
	"Charlotte": "Charlotte",
	"Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai": "没有黄段子的无聊世界",
	"Gatchaman Crowds Insight": "科学小飞侠CROWDS insight",
	"Rokka no Yuusha": "六花的勇者 Rokka no Yuusha",
	"Working!!!": "迷糊餐厅!!",
	"World Trigger": "境界触发者",
	"Venus Project - Climax": "维纳斯计划/偶像企划",
	"Plastic Memories": "可塑性记忆",
	"Tesagure! Bukatsumono Spin-off Purupurun Sharumu to Asobou": "摸索吧!部活剧 社團活動/探索部",
	"Yamada-kun to 7-nin no Majo": "山田君与7位魔女",
	"Yamada-kun to 7-nin no Majo (2015)": "山田君与7位魔女(2015)",
	"Hibike! Euphonium": "吹响！上低音号",
	"Kuroko no Basuke 3": "黑子的篮球 第三季",
	"Uta no Prince-sama - Maji Love Revolutions": "歌之王子殿下 - 真爱革命",
	"Mikagura Gakuen Kumikyoku": "御神乐学园组曲",
	"JoJo no Kimyou na Bouken - Stardust Crusaders - Egypt Hen": "JOJO的奇妙冒险·星尘十字军 埃及篇",
	"Houkago no Pleiades TV": "放课后的昴星团",
	"Danna ga Nani o Itteiru ka Wakaranai Ken 2 Sureme": "關於完全聽不懂老公在說什麼的事二期",
	"Etotama - Eto Tamashii": "干支魂",
	"Urawa no Usagi-chan": "浦和小调",
	"Punch Line": "Punch Line",
	"Yahari Ore no Seishun Love Come wa Machigatteiru. Zoku": "我的青春恋爱物语果然有问题",
	"Re-Kan!": "灵感少女！",
	"Nisekoi - Second Season": "伪恋 第二季",
	"Dungeon ni Deai o Motomeru no wa Machigatte Iru Darouka": "在地下城寻求邂逅是否搞错了什么",
	"Sidonia no Kishi - Daikyuu Wakusei Seneki": "希德尼娅的骑士 第二季",
	"Mahou Shoujo Lyrical Nanoha Vivid": "魔法少女奈叶ViVid",
	"Gunslinger Stratos The Animation": "枪神斯托拉塔斯",
	"Fate - Stay Night - Unlimited Blade Works (2015)": "Fate/Stay Night -无限剑制- (2015)",
	"Fate - Stay Night - Unlimited Blade Works": "Fate/Stay Night -无限剑制-",
	"Ansatsu Kyoushitsu": "暗杀教室",
	"Koukaku Kidoutai Arise - Alternative Architecture": "攻壳机动队AAA Koukaku Kidoutai Arise",
	"High School DxD Born": "High School DxD第三季",
	"Owari no Seraph": "终结的炽天使",
	"Kekkai Sensen": "血界战线",
	"Show by Rock!!": "摇滚都市!!",
	"Grisaia no Rakuen": "灰色的乐园",
	"Hello!! Kin`iro Mosaic": "黄金拼图 Kin-iro Mosaic",
	"Teekyuu 4": "网球并不可笑嘛",
	"Takamiya Nasuno Desu!": "我是高宫茄乃!",
	"Fate - Kaleid  Liner Prisma Illya Zwei Herz!": "魔法少女☆伊莉雅",
	"Dragon Ball Super": "七龙珠-超",
	"Inu x Boku SS": "妖狐x仆SS",
	"Yuru Yuri Nachuyachumi!+": "摇曳百合-夏日时光!+",
};

for (var i = ArrText.length - 1; i >= 0; i--) {
	Error = false;
	expReg = exp.exec(ArrText[i]);
	if (expReg === null){
		expReg = exp2.exec(ArrText[i]);
		if (expReg === null){
			console.log('Error: ' + ArrText[i]);
			Error = true;
		};
	};

	if (~Error) {
		Head = expReg[1];
		if (expReg[2] in c_name){
			Body = c_name[expReg[2]];
		}else{
			console.log(expReg[2]);
			Body = expReg[2];
		}
		Tail = expReg[3];
		ArrText[i] = Head + Body + Tail;
	}; //Error setp
};

for (var i = ArrName.length - 1; i >= 0; i--) {
	ArrName[i].firstChild.innerHTML = ArrText[i];
};
