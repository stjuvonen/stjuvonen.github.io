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

var kys5 = [
	{
		"question" : "Man försökte underlätta 1940-talets bostadsbrist genom att bygga:",
		"choices" : [
					"stora höghusområden",
					"egnahemshus",
					"bostadsområden där det fanns många olika sorters hus"
					],
		"correct" : "bostadsområden där det fanns många olika sorters hus",
		"teksti" : "Målet var att skapa varierande bostadsområden med olika sorters byggnader.",
	},
	{
		"question" : "Under 40-talet byggde man huvudsakligen egnahemshus av:",
		"choices" : [
					"bombsäkra material som t.ex. sten, stål och betong",
					"trämaterial som t.ex. balkar, brädor och väggelement av trä",
					"natursten och bilade stockar, alltså sådana som formats med yxa"
					],
		"correct" : "trämaterial som t.ex. balkar, brädor och väggelement av trä",
		"teksti" : "Egnahemshus byggdes runt en stomme av trä och fodrades med brädor. Till viss mån använde man också färdiga väggelement.",
	},
	{
		"question" : "1940-talets frontmannahus byggdes oftast av:",
		"choices" : [
					"byggföretag",
					"en soldat",
					"familjemedlemmar och bekanta som var bra på att bygga"
					],
		"correct" : "familjemedlemmar och bekanta som var bra på att bygga",
		"teksti" : "På den tiden kunde de flesta män med hjälp av typritningar och färdiga byggnadsdelar själva uppföra enklare trähus. Stommen byggdes ofta av proffs.",
	},
	{
		"question" : "Med frontmannahus menar man:",
		"choices" : [
					"ett hus som byggts av en soldat",
					"soldaternas bostadshus",
					"en form av villa som var vanlig under efterkrigstiden"
					],
		"correct" : "en form av villa som var vanlig under efterkrigstiden",
		"teksti" : "Med frontmannahus menas ett egnahemshus med sadeltak som blev vanligt efter kriget. Mången hemvänd soldat byggde ett sådant här hus i en och en halv våning åt sin familj.",
	},
	{
		"question" : "Hur många s.k. frontmannahus byggdes det allt som allt i Finland?",
		"choices" : [
					"ca 15 000",
					"ca 75 000",
					"ca 150 000"
					],
		"correct" : "ca 75 000",
		"teksti" : "Så pass många hus byggdes eftersom mer än 400 000 människor evakuerades från de områden som förlorades i kriget och alla dessa människor behövde någonstans att bo.",
	},
	{
		"question" : "Under 1940-talet blev stadsplanering viktigt:",
		"choices" : [
					"eftersom arkitekterna fick nya idéer från andra länder",
					"eftersom man ville skydda bebyggda områden från att bombas",
					"eftersom det krävdes metodik för att bygga upp landet igen"
					],
		"correct" : "eftersom det krävdes metodik för att bygga upp landet igen",
		"teksti" : "Att vara metodisk underlättade ett snabbt uppförande av allt större helheter som både utvecklades hastigt och var av god kvalitet.",
	},
	{
		"question" : "Hur påverkade kriget arkitekturstilen på 1940-talets bostäder?",
		"choices" : [
					"Stilen blev mer romantiserande och influerades av de skyddsvärn soldaterna byggde på fronten",
					"Husen byggdes för att hålla och skulle vara lätta att försvara",
					"Byggnaderna skulle vara så avskalat eleganta som möjligt"
					],
		"correct" : "Stilen blev mer romantiserande och influerades av de skyddsvärn soldaterna byggde på fronten",
		"teksti" : "De naturmaterial som använts till soldaternas skyddsvärn och tillika en design som följde landskapets former anpassades till den civila arkitekturen.",
	},
	{
		"question" : "I efterkrigstidens Finland koncentrerade man sig på att:",
		"choices" : [
					"bygga upp ett nytt sorts samhälle",
					"se till att landet hade tillräckligt många bostäder och produktiva industrianläggningar",
					"förbereda sig för kommande krig"
					],
		"correct" : "se till att landet hade tillräckligt många bostäder och produktiva industrianläggningar",
		"teksti" : "Att förse de evakuerade med bostäder kom i första hand. Likaså att kunna producera energi, livsmedel och sådana industriprodukter som behövdes för att betala krigsskadeståndet.",
	},
	{
		"question" : "Genom att skapa typritningar och standardisera byggnadsdelar strävade man efter:",
		"choices" : [
					"en tydlig arkitektonisk stil",
					"att underlätta byggandet",
					"att reglera byggandet"
					],
		"correct" : "att underlätta byggandet",
		"teksti" : "Genom att använda typritningar och standardiserade byggnadsdelar gick det snabbare att få färdigt nya bostäder och andra byggnader. Dessutom blev det billigare.",
	},
	{
		"question" : "Typiska drag för 1940-talets arkitektur var:",
		"choices" : [
					"dekorativa detaljer som t.ex. snidade metallräcken, skiffer och sadeltak med takfot",
					"bandfönster, plantak och hygieniska ytmaterial",
					"nationalromantiska detaljer som små torn och burspråk"
					],
		"correct" : "dekorativa detaljer som t.ex. snidade metallräcken, skiffer och sadeltak med takfot",
		"teksti" : "Dekorativa sniderier gjordes på balkong- och trappräcken och man använde sig rikligt av skiffer. Hemtrevliga material föredrogs i inredningen.",
	},
	{
		"question" : "1940-talets inredningsstil var:",
		"choices" : [
					"avskalad och hygienisk",
					"okonstlat hemtrevlig",
					"överdådigt dekorativ"
					],
		"correct" : "okonstlat hemtrevlig",
		"teksti" : "Under kristiden inredde man utifrån de material som fanns till hands, som t.ex. trä och papper som man t.o.m. tillverkade mattor och gardiner av. Rottingmöbler och öppen spis blev vanliga. Gröna växter blev också populära.",
	},
	{
		"question" : "Till byggnadstypen var frontmannahuset:",
		"choices" : [
					"en kubformad träbyggnad som uppförts runt en skorsten",
					"en hus som bestod av en hög mellanbyggnad och låga flyglar",
					"ett hus som påminde om en kasern"
					],
		"correct" : "en kubformad träbyggnad som uppförts runt en skorsten",
		"teksti" : "Frontmannahusets rum placerades runt en skorsten som låg i mitten. Huset, som bestod av en och en halv våning, hade sadeltak.",
	},
	{
		"question" : "Typiskt för 1940-talets höghusfasader var:",
		"choices" : [
					"gipsdekorationer, pastellfärger och smårutiga fönster",
					"bandfönster och bländande vit målarfärg",
					"puts, naturnära färger och rutfönster"
					],
		"correct" : "puts, naturnära färger och rutfönster",
		"teksti" : "Med hjälp av grov puts försökte man dölja det dåliga väggmaterialets ojämna yta. Fasaderna var enkla. Ibland användes skiffer för att dekorera porten.",
	},
	{
		"question" : "Frontmannahus formgavs oftast av:",
		"choices" : [
					"de boende",
					"en soldat som varit på fronten",
					"en arkitekt"
					],
		"correct" : "en arkitekt",
		"teksti" : "Till och med de mest kända bland landets arkitekter deltog i återuppbyggandet genom att formge modellhus, delvis som frivilligarbete.",
	},
	{
		"question" : "Det traditionella frontmannahuset består vanligtvis av:",
		"choices" : [
					"små rum och mycket trä i inredningen",
					"öppna rum, parkettgolv och målade väggar",
					"ljusa rum och hygieniska ytor"
					],
		"correct" : "små rum och mycket trä i inredningen",
		"teksti" : "Rummen var små och man använde mycket trä i inredningen. Dörrarna bestod av lackad faner och väggarna av smal fingerpanel.",
	},
	{
		"question" : "Typiskt för frontmannahus är:",
		"choices" : [
					"plantak, storrutiga fönster och källarutrymmen som man kan bo i",
					"mansardtak, smårutiga fönster och en balkong",
					"sadeltak, två- eller trerutiga fönster och en ouppvärmd farstukvist"
					],
		"correct" : "sadeltak, två- eller trerutiga fönster och en ouppvärmd farstukvist",
		"teksti" : "Den stil modellhusen representerar beskrivs som landsbygdsfunktionalism. Dit hörde sadeltak med takfot, farstukvist och fönster som delats upp i två eller tre rutor.",
	},
	{
		"question" : "Frontmannahusen kan ses som sin tids ekohus eftersom:",
		"choices" : [
					"den energi de förbrukade kom delvis från vindkraft",
					"de byggdes med hjälp av lokal arbetskraft och av naturnära material",
					"de hade stora farstukvistar som kunde användas effektivt för att samla in solenergi"
					],
		"correct" : "de byggdes med hjälp av lokal arbetskraft och av naturnära material",
		"teksti" : "Frontmannahusen byggdes av familj och bekanta. Det huvudsakliga byggnadsmaterialet var trä: trästomme, fasadpanel, inomhusytor av trä (träpanel, skivor av trämaterial, spännpapp) och som isolering sågspån.",
	}
];

kys5.shuffle();
kys5[0].choices.shuffle();
kys5[1].choices.shuffle();
kys5[2].choices.shuffle();
kys5[3].choices.shuffle();
kys5[4].choices.shuffle();
kys5[5].choices.shuffle();
kys5[6].choices.shuffle();
kys5[7].choices.shuffle();
kys5[8].choices.shuffle();
kys5[9].choices.shuffle();
kys5[10].choices.shuffle();