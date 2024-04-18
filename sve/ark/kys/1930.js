Array.prototype.shuffle = function () {
	var input = this;
	for (var i = input.length-1; i >=0; i--) {
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}

var kys4 = [
	{
		"question" : "I vilken sorts terräng skulle du bygga ett sanatorium?",
		"choices" : [
					"Vid havet så att patienterna kan andas fuktig och frisk havsluft",
					"I staden så att patienterna har kort väg hem över veckosluten",
					"På en torr tallmo på landsbygden"
					],
		"correct" : "På en torr tallmo på landsbygden",
		"teksti" : "Man trodde att barrträd bidrog till syrerik luft. Man antog att frisk luft och solljus kunde bota lungsot. På grund av smittorisken var det också viktigt att sanatoriet avskildes från bosatta områden.",
	},
	{
		"question" : "Vad beundrade funktionalisterna?",
		"choices" : [
					"Friden på landsbygden",
					"Det fartfyllda storstadslivet",
					"Medeltida småstäder"
					],
		"correct" : "Det fartfyllda storstadslivet",
		"teksti" : "Funktionalisterna pratade om \"den nya människan\" som förde ett rörligt liv, lyssnade på jazz, besökte restauranger och tittade på film. Allt detta var möjligt enbart i städerna.",
	},
	{
		"question" : "Pemar sanatorium hade en taktyp som var typisk för funktionalismen. Vilken?",
		"choices" : [
					"Sadeltak eftersom det är praktiskt att få ner snön från det på vintern",
					"Brutet sadel- eller mansardtak under vilket det finns ett högt och praktiskt vindsutrymme. I vindsvåningen kunde man placera till exempel en tennishall",
					"Plantak"
					],
		"correct" : "Plantak",
		"teksti" : "Det var populärt att vistas i friska luften eftersom det var hälsosamt. Man kunde uppehålla sig på plantaket och även plantera en trevlig trädgård där.",
	},
	{
		"question" : "Hur såg fasaden ut på funktionalismens byggnader?",
		"choices" : [
					"I fasaden ingick låga, vitmålade dekorationer runt dörrar och fönster",
					"Fasaderna var rikligt utsmyckade med inhemska djur- och växtmotiv",
					"Fasaderna hade inga utsmyckningar alls utan bara några få färgglada blickfång som till exempel röda eller gula balkongräcken"
					],
		"correct" : "Fasaderna hade inga utsmyckningar alls utan bara några få färgglada blickfång som till exempel röda eller gula balkongräcken",
		"teksti" : "Funktionalisterna tyckte att fasadutsmyckningar var helt onödiga. De influerades av den moderna konsten som använde sig av klara, rena färgfält.",
	},
	{
		"question" : "Hurdana fönster hade funkisbyggnaderna?",
		"choices" : [
					"Smårutiga fönster med träkarmar",
					"Rektangulära fönster med T-post",
					"Fönsterband, med andra ord täcktes hela fasaden av rader med fönster"
					],
		"correct" : "Fönsterband, med andra ord täcktes hela fasaden av rader med fönster",
		"teksti" : "Man började allt oftare göra byggnadernas stomme av betong. Tack vare betongkonstruktionen behövde fasaderna inte längre stöda tyngden av mellanbjälklagen utan kunde kläs med fönsterband.",
	},
	{
		"question" : "Vilken sorts färgskala var typisk för funktionalismen?",
		"choices" : [
					"Mörka och naturnära färger",
					"Ljusa pastelltoner",
					"Klara grundfärger"
					],
		"correct" : "Klara grundfärger",
		"teksti" : "Klara grundfärger passade bra med vitt som var funktionalisternas favoritfärg. Även den tidens målarkonst påverkade arkitekternas val av färg.",
	},
	{
		"question" : "Hur förhöll man sig till solljus i planeringen av sanatoriet?",
		"choices" : [
					"Solljus kunde vara farligt och det var viktigt att ha bra jalusier så att patienternas hud inte skulle bli lidande och att de inte skulle få huvudvärk.",
					"Det var viktigt att patienterna fick tillräckligt mycket solljus",
					"Man skulle  placera terrasserna mot norr så att konstnärer som var patienter kunde måla landskapsscener"
					],
		"correct" : "Det var viktigt att patienterna fick tillräckligt mycket solljus",
		"teksti" : "Man ansåg att solljus både gav livskraft och dödade bakterier.",
	},
	{
		"question" : "Vilken roll spelade hygienen i planeringen av sanatoriet?",
		"choices" : [
					"Att lägga för stor vikt vid hygien ansågs skadligt eftersom det kunde ge patienten svåra neuroser",
					"Patienternas personliga hygien låg i fokus när man planerade rummen",
					"Hygien ansågs mindre viktigt än desensibilisering vilken skulle hjälpa patienterna att bli motståndskraftigare mot olika bakteriestammar"
					],
		"correct" : "Patienternas personliga hygien låg i fokus när man planerade rummen",
		"teksti" : "I Pemar sanatorium hade varje patient ett eget tvättfat och en bärbar spottkopp. Dessutom fanns det en gemensam spottskål i varje dubbelrum.",
	},
	{
		"question" : "Vilken betydelse hade växter för tuberkulospatienterna?",
		"choices" : [
					"Eftersom man ville att besökarna skulle ta med sig fräscha blommor för att muntra upp patienterna fanns det en blomsteraffär i sjukhusentrén",
					"Istället för snittblommor hade man placerat stora mängder rumsväxter i korridorer och sjukrum för att göra luften friskare",
					"Inomhus fanns det växter enbart i de inglasade utrymmena mellan fönsterrutorna i sällskapsrummets hörnfönster, i en sorts miniväxthus"
					],
		"correct" : "Inomhus fanns det växter enbart i de inglasade utrymmena mellan fönsterrutorna i sällskapsrummets hörnfönster, i en sorts miniväxthus",
		"teksti" : "Man ville ha gröna växter framme för hemtrevlighetens skull men samtidigt ville man undvika att pollen skulle spridas i inomhusluften.",
	},
	{
		"question" : "Vilken typ av byggnad var Pemar sanatorium?",
		"choices" : [
					"En låg paviljongbyggnad som sträckte sig över ett stort område så att alla patienter hade nära markkontakt",
					"Ett kubformat sjukhus vars flyglar  omgärdade en avskärmad innergård. Gården erbjöd patienterna ett effektivt skydd från vind och yrväder",
					"En solfjäderformad byggnad vars flyglar sträckte sig i olika riktningar"
					],
		"correct" : "En solfjäderformad byggnad vars flyglar sträckte sig i olika riktningar",
		"teksti" : "Balkonger och terrasser som öppnade ut mot olika riktningar var typiskt för sanatorier. På detta sätt nåddes patienterna i sina vilostolar av ljus från olika riktningar beroende på dygnets och årstidernas växlingar.",
	},
	{
		"question" : "Hur byggde man Pemar sanatorium?",
		"choices" : [
					"Sanatoriet byggdes med hjärtmurar av tegel som grund",
					"Sanatoriets bärande stomme tillverkades av betong och fasaderna av tegel",
					"Patientflygeln byggdes av tegel och trä i sorts speciell korskonstruktionsteknik"
					],
		"correct" : "Sanatoriets bärande stomme tillverkades av betong och fasaderna av tegel",
		"teksti" : "På sin tid var sovsalsflygeln i sju våningar den största betongstrukturen som uppförts med en enda pelarrad som grund. De andra flyglarna hade stålbetongstommar men fasaderna murades med tegel på traditionellt sätt.",
	},
	{
		"question" : "Hur många patienter var det meningen att sanatoriet skulle hysa?",
		"choices" : [
					"ca 150",
					"ca 300",
					"ca 500"
					],
		"correct" : "ca 300",
		"teksti" : "När sanatoriet stod färdigt hade det 296 bäddplatser. På sin tid var Pemar sanatorium ett av de största tuberkulossjukhusen i Finland.",
	},
	{
		"question" : "Hur placerade man ut sanatoriets allmänna utrymmen?",
		"choices" : [
					"De allmänna utrymmena planerades så att de skulle öppna ut mot en stor innergård",
					"De allmänna utrymmena planerades så att de skulle öppna ut enbart mot söder varigenom man kunde fånga så mycket solljus som möjligt",
					"De allmänna utrymmena placerades i olika riktningar"
					],
		"correct" : "De allmänna utrymmena placerades i olika riktningar",
		"teksti" : "För att både vyerna och ljuset skulle vara så varierande som möjligt öppnade matsalen, sommarterrassen och sällskapsrummet alla ut mot olika riktningar.",
	},
	{
		"question" : "Hurdana serveringsutrymmen behövde man i sanatoriet?",
		"choices" : [
					"Ett bra café för besökarna",
					"Eftersom patienterna åt på rummet behövde man bara en personalmatsal",
					"En ordentlig och trivsam patientmatsal"
					],
		"correct" : "En ordentlig och trivsam patientmatsal",
		"teksti" : "Rätt näring och social samvaro var viktiga faktorer i tillfrisknandet.",
	},
	{
		"question" : "Vilken sorts belysning ansåg man vara bäst i patientrummen?",
		"choices" : [
					"En så effektiv belysning som möjligt så att sjuksköterskorna skulle ha lätt att utföra de rutiner som hörde till vården",
					"Eftersom man bara vistades i dessa utrymmen kort tid ansågs vanligt lysrörsljus räcka",
					"Belysningen planerades med största hänsyn till den liggande patienten"
					],
		"correct" : "Belysningen planerades med största hänsyn till den liggande patienten",
		"teksti" : "Välplanerad belysning skapade en behaglig atmosfär i rummen och påverkade på så vis patienternas sinnesstämning och förmåga att kämpa mot sjukdomen.",
	},
	{
		"question" : "Vad fanns det för sorts möbler i Pemar sanatorium?",
		"choices" : [
					"Sanatoriet lät göra grova och färgglada allmogemöbler som skulle ge de svaga patienterna ordentligt stöd",
					"Sanatoriets olika utrymmen fick en varierande inredning med möbler i olika stilar så att patienterna skulle få så mycket stimulans som möjligt",
					"Sanatoriet hade enkla möbler som planerats just för det ändamålet"
					],
		"correct" : "Sanatoriet hade enkla möbler som planerats just för det ändamålet",
		"teksti" : "Alvar Aalto formgav stolar av böjt faner och metallrör som fabrikstillverkades och dessutom var lätta att rengöra. Han designade också den såkallade Paimiostolen med vilken han ville underlätta patienternas andning.",
	}
];

kys4.shuffle();
kys4[0].choices.shuffle();
kys4[1].choices.shuffle();
kys4[2].choices.shuffle();
kys4[3].choices.shuffle();
kys4[4].choices.shuffle();
kys4[5].choices.shuffle();
kys4[6].choices.shuffle();
kys4[7].choices.shuffle();
kys4[8].choices.shuffle();
kys4[9].choices.shuffle();
kys4[10].choices.shuffle();