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

var kys6 = [
	{
		"question" : "Vad heter Rovaniemi samlyceum idag?",
		"choices" : [
					"Lyseonpuisto gymnasium",
					"Rovaniemi lågstadium",
					"Rovaniemi handelsskola"
					],
		"correct" : "Lyseonpuisto gymnasium",
		"teksti" : "Skolan heter idag Lyseonpuisto gymnasium.",
	},
	{
		"question" : "Vad är Jorma Järvi, arkitekten som designade Rovaniemis gymnasium, mest känd för?",
		"choices" : [
					"Att ha planerat Helsingfors centralpost",
					"Att ha planerat Olympiastadion",
					"Att ha planerat Riksdagshuset"
					],
		"correct" : "Att ha planerat Helsingfors centralpost",
		"teksti" : "Jorma Järvi planerade Helsingfors centralpost tillsammans med arkitekten Erik Lindroos efter att ha vunnit en tävling om byggnaden år 1934. Posthuset stod färdigt vid Mannerheimvägen 1938.",
	},
	{
		"question" : "Skolor delas ofta in efter hur man har organiserat utrymmena i dem. Rovaniemi samlyceum representerar",
		"choices" : [
					"centralhallstypen",
					"sidogångstypen",
					"mittgångstypen"
					],
		"correct" : "centralhallstypen",
		"teksti" : "Rovaniemi samlyceum är en såkallad hallskola. Skolan har en centralaula i tre våningar och klassrummen är placerade runt den.",
	},
	{
		"question" : "Rovaniemi samlyceum är",
		"choices" : [
					"en smal och hög odelad byggnad",
					"placerade i två separata byggnader",
					"placerad i tre sammanhängande byggnadsvingar av olika höjd"
					],
		"correct" : "placerad i tre sammanhängande byggnadsvingar av olika höjd",
		"teksti" : "Klassrummen ligger i huvudbyggnaden i tre våningar. Denna förenas med en avskild gymnastikhall i en våning genom en låg byggnadsvinge som inhyser matsalen.",
	},
	{
		"question" : "På 1950-talet hade stadslägenheter",
		"choices" : [
					"badrum och toalett separat från varandra",
					"ett kombinerat badrum och wc",
					"en privat bastu"
					],
		"correct" : "ett kombinerat badrum och wc",
		"teksti" : "För att spara på utrymme kombinerade man wc och badrum.",
	},
	{
		"question" : "Arkitekten Jorma Järvi var matematiskt begåvad och tillämpade olika sorters geometriska former i sina byggnader. Ett av hans favoritmotiv var",
		"choices" : [
					"liksidiga trianglar eftersom han beundrade pyramiderna i Egypten",
					"stjärnor eftersom han var intresserad av astronomi",
					"sexhörningar"
					],
		"correct" : "sexhörningar",
		"teksti" : "Jorma Järvi använde sexhörningar på många olika sätt i sin arkitektur. I Hagalund samskola som stod färdig 1957 placerade han sexkantiga specialklasser på gårdssidan.",
	},
	{
		"question" : "Hur såg fasaderna ut i 1950-talets bostadshus?",
		"choices" : [
					"De var slätputsade",
					"Man lämnade de nakna betong- och tegelytorna synliga",
					"Man kombinerade olika sorters material som till exempel valsad plåt, klinker och minerit med putsen"
					],
		"correct" : "Man kombinerade olika sorters material som till exempel valsad plåt, klinker och minerit med putsen",
		"teksti" : "Under 1950-talet experimenterade man ivrigt med nya byggnadsmaterial. Förutom de tidigare nämnda materialen kunde man till och med täcka väggarna med glasskivor.",
	},
	{
		"question" : "Hurdana fönster har 1950-talets bostadshus?",
		"choices" : [
					"Låga och breda",
					"Smala och höga",
					"Spetsbågade med små rutor"
					],
		"correct" : "Låga och breda",
		"teksti" : "Eftersom rummens takhöjd under 1950-talet sjönk till 2,5 meter blev också fönstren lägre. Man gjorde dem emellertid också bredare än förr så att rummen skulle nås av tillräckligt mycket solljus.",
	},
	{
		"question" : "Rovaniemi samlyceum har en hall i tre våningar. Förutom att vistas i, vad använde man den en gång i tiden till?",
		"choices" : [
					"Man höll morgonandakt och fester där",
					"Man övade redskapsgymnastik där",
					"Man anordnade karaoketävlingar där"
					],
		"correct" : "Man höll morgonandakt och fester där",
		"teksti" : "Eftersom skolan inrymde så många som 800 elever kunde morgonandakt hållas i aulan. Eleverna rymdes lätt i den öppna hallen i tre våningar.",
	},
	{
		"question" : "Vad är Rovaniemi samlyceum byggt av?",
		"choices" : [
					"Rödtegel som putsats",
					"Trä som målats med rödmylla",
					"Oputsat rödtegel"
					],
		"correct" : "Oputsat rödtegel",
		"teksti" : "Byggnaden är gjord av rödtegel men väggarna är inte putsade. Dessutom är väggarnas nedre del täckt med skiffer som var vanligt under 1950-talet.",
	},
	{
		"question" : "Hur många elever skulle få plats i Rovaniemis gymnasium?",
		"choices" : [
					"500 elever",
					"300 elever",
					"800 elever"
					],
		"correct" : "800 elever",
		"teksti" : "Eftersom mer än 600 000 barn föddes i Finland mellan 1945 och 1950 måste man bygga större skolor i tätbebyggda områden eller städer.",
	},
	{
		"question" : "Efter andra världskriget byggdes många skolor i Finland. Varför?",
		"choices" : [
					"Många skolor förstördes i bombningarna. Nya måste byggas för att ersätta dem",
					"Eftersom många barn föddes efter kriget måste man bygga nya och stora skolor",
					"I slutet av 1940-talet trädde en lag i kraft som bestämde att alla barn hade obligatorisk skolplikt"
					],
		"correct" : "Eftersom många barn föddes efter kriget måste man bygga nya och stora skolor",
		"teksti" : "Mellan 1945 och 1950 föddes de såkallade \"stora årskullarna\" – mer än 600 000 barn – som behövde nya utrymmen för utbildning.",
	},
	{
		"question" : "Vad kallade man nya bostadsområden under 1950-talet?",
		"choices" : [
					"Trädgårdsstäder",
					"Skogsförorter",
					"Betongdjungel"
					],
		"correct" : "Skogsförorter",
		"teksti" : "Under 1950-talet började man bygga bostadsområden utanför stadscentra i orörda skogsområden. Idealet var att man skulle lämna så mycket grönområde som möjligt mellan och runt husen.",
	},
	{
		"question" : "Vad byggde man i förorterna under 1950-talet?",
		"choices" : [
					"Köpcentrum",
					"Varuhus",
					"Andelshandlar"
					],
		"correct" : "Köpcentrum",
		"teksti" : "På 1950-talet var köpcentret en ny typ av byggnad som kom från USA. Privatbilar utgjorde grunden för handeln i köpcentren.",
	},
	{
		"question" : "Hur inredde man sitt hem på 1950-talet?",
		"choices" : [
					"Man kombinerade gammalt och nytt",
					"Med möbler designade av arkitekter",
					"Med fabrikstillverkade möbler som man fick sätta ihop själv"
					],
		"correct" : "Man kombinerade gammalt och nytt",
		"teksti" : "På 1950-talet började man till exempel kalla vardagsrumsmöblemanget en \"sällskapsgrupp\". Gruppen kunde bestå av omaka stolar i olika färger, en bäddsoffa och soffbord.",
	},
	{
		"question" : "Vad uppskattade arkitekterna på 1950-talet?",
		"choices" : [
					"Enkelhet och skönhet",
					"Handarbete och hemtrevlighet",
					"Överflöd och färg"
					],
		"correct" : "Enkelhet och skönhet",
		"teksti" : "Efter 1940-talets utsmyckning förenklades arkitekturens formspråk. Däremot var arkitekturen måttmässigt mycket genomtänkt och man lade stor vikt vid detaljer.",
	},
	{
		"question" : "Arkitekten Jorma Järvi var som skolarkitekt före sin tid. Varför?",
		"choices" : [
					"Han planerade dataklasser också för de minsta av skolor",
					"Han tog barnens egen skala som utgångspunkt",
					"Han ritade en pool till alla sina gymnastik- och sportutrymmen"
					],
		"correct" : "Han tog barnens egen skala som utgångspunkt",
		"teksti" : "Järvi kallade ofta på något av sina egna barn för att agera \"skalmänniska\" när han granskade detaljer i sina planer.",
	}
];

kys6.shuffle();
kys6[0].choices.shuffle();
kys6[1].choices.shuffle();
kys6[2].choices.shuffle();
kys6[3].choices.shuffle();
kys6[4].choices.shuffle();
kys6[5].choices.shuffle();
kys6[6].choices.shuffle();
kys6[7].choices.shuffle();
kys6[8].choices.shuffle();
kys6[9].choices.shuffle();
kys6[10].choices.shuffle();