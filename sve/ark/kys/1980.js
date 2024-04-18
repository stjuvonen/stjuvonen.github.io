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

var kys9 = [
	{
	"question" : " Den s.k. \"postmodernismen\" var ett nytt fenomen inom 1980-talets arkitektur. Stilen kännetecknas av",
		"choices" : [
					"lekfullhet och fokus på individualitet",
					"bandfönster och vitputsade fasader",
					"enkelhet och symmetri"
					],
		"correct" : "lekfullhet och fokus på individualitet",
		"teksti" : "På 80-talet lekte man med olika former och historiska stilinfluenser.",
	},
	{
		"question" : "Hur tog sig det ekologiska tänkandet uttryck i 1980-talets byggnader?",
		"choices" : [
					"Ekologi var inte på tapeten under 80-talet",
					"Man utrustade höghus med solpaneler",
					"Man glasade in höghusbalkongerna"
					],
		"correct" : "Ekologi var inte på tapeten under 80-talet",
		"teksti" : "Efter att 1970-talets energikris börjat släppa greppet började man förse offentliga byggnader med stora glasväggar och -tak och höghuslägenheter med privatbastu.",
	},
	{
		"question" : "Att använda sig av färgglada betongelement i fasaderna var en nyhet på 80-talet. Populära färger var",
		"choices" : [
					"pastellnyanser",
					"starka grundfärger",
					"jordfärger"
					],
		"correct" : "pastellnyanser",
		"teksti" : "Populära färger på 80-talet var pastellnyanser. Ljusblå och rosa var speciellt populära.",
	},
	{
		"question" : "En för årtiondet ny byggnadstyp var:",
		"choices" : [
					"köpcentrat",
					"parkeringshuset",
					"simhallen"
					],
		"correct" : "köpcentrat",
		"teksti" : "Östra centrum och Forum i Helsingfors som bägge stod färdiga vid mitten av 80-talet var tidiga exempel på den sorts köpcentra som mest påminner om en mindre stad.",
	},
	{
		"question" : "Arkitektparet Raili och Reima Pietilä är kända bland annat för att ha planerat daghemmet Taikurinhattu. Bland deras övriga verk finns",
		"choices" : [
					"Tammerfors stadsbibliotek \"Metso\"",
					"Riksdagshuset",
					"Olofsborg"
					],
		"correct" : "Tammerfors stadsbibliotek \"Metso\"",
		"teksti" : "I början påminde den planritning paret Pietilä tog fram för detta bibliotek som byggdes  1983-86 om en tjäder.",
	},
	{
		"question" : "Under 1980-talet byggde man många nya daghem eftersom",
		"choices" : [
					"man strävade efter att kunna erbjuda en daghemsplats åt alla som ville ha en",
					"det fanns så mycket pengar över",
					"det föddes så många barn"
					],
		"correct" : "man strävade efter att kunna erbjuda en daghemsplats åt alla som ville ha en",
		"teksti" : "Man byggde många nya daghem eftersom man ville kunna erbjuda en daghemsplats åt alla som sökte en. Man började också med förskoleundervisning på daghemmen.",
	},
	{
		"question" : "Daghemmet Taikurinhattu (Trollkarlshatten) fick sitt namn från",
		"choices" : [
					"en muminbok av Tove Jansson",
					"Harry Potter-böckerna",
					"en opera skriven av Wolfgang Amadeus Mozart 1791"
					],
		"correct" : "en muminbok av Tove Jansson",
		"teksti" : "Tove Janssons bok \"Trollkarlens hatt\" gavs ut 1948. I daghemmet finns också väggmålningar med muminmotiv av Tove Jansson.",
	},
	{
		"question" : "Daghemmet Taikurinhattu finns i Björneborg, en stad som grundades",
		"choices" : [
					"år 1558",
					"år 1827",
					"år 1917"
					],
		"correct" : "år 1558",
		"teksti" : "Staden grundades år 1558 på den finska västkusten, i närheten av Ulfsby.",
	},
	{
		"question" : "På 1980-talet försökte man göra daghemmen mer hemtrevliga genom att",
		"choices" : [
					"bygga öppna spisar",
					"placera en godisautomat i entréhallen",
					"montera in rulltrappor"
					],
		"correct" : "bygga öppna spisar",
		"teksti" : "Man gjorde daghem mer hemtrevliga och mysiga genom att bygga öppna spisar i de gemensamma utrymmena. Även daghemmet Taikurinhattu har en öppen spis i sitt sagorum.",
	},
	{
		"question" : "I 1980-talets inredning använde man helst:",
		"choices" : [
					"vitt",
					"plast",
					"omålade träytor"
					],
		"correct" : "vitt",
		"teksti" : "Efter 1970-talets starka inredningsfärger kom 1980-talets trendfärg att bli vitt.",
	},
	{
		"question" : "De daghem som byggdes på 80-talet var oftast:",
		"choices" : [
					"låga träbyggnader",
					"rödtegelbyggnader i två våningar",
					"rundtimmerhus med sadeltak"
					],
		"correct" : "låga träbyggnader",
		"teksti" : "Dessa träbyggnader i en våning placerades oftast i ett lugnt, naturnära område. Också Taikurinhattu inryms i en byggnad som i huvudsak är av trä och omfattar en våning.",
	},
	{
		"question" : "Förutom daghemmet Taikurinhattu finns också en annan viktig postmodernistisk byggnad i Björneborg, nämligen",
		"choices" : [
					"köpcentrat  BePop",
					"Malms posthus",
					"konserthuset FreeJAZZ"
					],
		"correct" : "köpcentrat  BePop",
		"teksti" : "Köpcentrat BePop är ett av de bästa exemplen på postmodern arkitektur i Finland. Köpcentrat planerades av arkitektbyrån Nurmela-Raimoranta-Tasa.",
	},
	{
		"question" : "1983 vann Raili och Reima Pietilä den tävling som arrangerades för Finlands presidents tjänstebostad. Deras tävlingsbidrag hette:",
		"choices" : [
					"\"Glimmermorän\"",
					"\"Lilla My\"",
					"\"Villa Koivisto\""
					],
		"correct" : "\"Glimmermorän\"",
		"teksti" : "\"Glimmermorän\" var det namn paret Pietilä använde. Ordet refererar till en jordart som uppstått till följd av inlandsisen.",
	},
	{
		"question" : "Under 1980-talet formade Reima Pietiläs elever vid Uleåborgs universitet en arkitektgrupp som gick under namnet \"Uleåborgsskolan\". Den här gruppen är känd för sin såkallade regionalism. Med regionalism menar man",
		"choices" : [
					"att man betonar lokala byggnadstraditioner, -material och \"platsens anda\"",
					"en arkitekturstil influerad av antikens Rom",
					"en helig byggnad"
					],
		"correct" : "att man betonar lokala byggnadstraditioner, -material och \"platsens anda\"",
		"teksti" : "Uleåborgsskolan är känd för sin lokalt förankrade arkitektur.",
	},
	{
		"question" : "Raili och Reima Pietilä har planerat byggnader även utomlands. Bland de planer som verkligen utfördes kan nämnas:",
		"choices" : [
					"Finlands ambassad i New Delhi",
					"ett satellit- och telefonbolags huvudkontor i Washington DC",
					"ett mångaktivitetscentrum i Monte Carlo"
					],
		"correct" : "Finlands ambassad i New Delhi",
		"teksti" : "Finlands ambassad i New Delhi planerades av paret Pietilä och stod färdig 1985. En tävling hölls om denna byggnad redan 1963 så själva utförandet dröjde över 20 år.",
	},
	{
		"question" : "Den kända konstgrafikern Tuulikki Pietilä var  Reima Pietiläs:",
		"choices" : [
					"syster",
					"faster",
					"kusin"
					],
		"correct" : "syster",
		"teksti" : "Tuulikki Pietilä var Reima Pietiläs syster.",
	},
	{
		"question" : "Raili och Reima Pietilä planerade också flera kyrkor. Den mest kända av dessa är:",
		"choices" : [
					"Kalevakyrkan i Tammerfors",
					"Tempelplatsens kyrka i Helsingfors",
					"kyrkan Lakeuden Risti i Seinäjoki"
					],
		"correct" : "Kalevakyrkan i Tammerfors",
		"teksti" : "Denna kyrka i stadsdelen Kaleva i Tammerfors som byggdes 1964-66 blev paret Pietiläs genombrott.",
	},
	{
		"question" : "Hur gick Reima Pietilä tillväga för att göra Taikurinhattu hemtrevligt för barnen?",
		"choices" : [
					"Han tog i största möjliga mån hänsyn till barnens storlek i planeringen av byggnaden",
					"Han utnyttjade den lekfulla, postmoderna stilen",
					"Innan han började gjorde han en enkätundersökning om barnens behov"
					],
		"correct" : "Han tog i största möjliga mån hänsyn till barnens storlek i planeringen av byggnaden",
		"teksti" : "Enligt Pietilä skulle man när man formgav ett daghem sätta sig ner på golvet och betrakta världen från barnets perspektiv.",
	}	
];

kys9.shuffle();
kys9[0].choices.shuffle();
kys9[1].choices.shuffle();
kys9[2].choices.shuffle();
kys9[3].choices.shuffle();
kys9[4].choices.shuffle();
kys9[5].choices.shuffle();
kys9[6].choices.shuffle();
kys9[7].choices.shuffle();
kys9[8].choices.shuffle();
kys9[9].choices.shuffle();
kys9[10].choices.shuffle();