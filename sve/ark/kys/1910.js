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


var kys2 = [
	{
		"question" : "Under hans karriär planerade Jarl Ekelund även byggnader tillsammans med andra arkitekter. Bland annat deltog han i planeringen av Helsingfors Konsthall vars huvudarkitekt var hans kollega",
		"choices" : [
					"Hilding Ekelund",
					"Gustaf Nyström",
					"Eliel Saarinen"
					],
		"correct" : "Hilding Ekelund",
		"teksti" : "Hilding Ekelund var huvudarkitekt för Konsthallen som stod färdig i Främre Tölö 1928. Jarl Ekelund hade ansvaret för byggnadens planlösning.",
	},
	{
		"question" : "De mångskiftande arbeten Jarl Eklund gjort inkluderar i första hand industribyggnader, herrgårdar och egnahemshus. Bland annat planerade han",
		"choices" : [
					"en brödfabrik för SOK",
					"Joenniemi herrgård i Mänttä",
					"en mejeribyggnad för Valio"
					],
		"correct" : "Joenniemi herrgård i Mänttä",
		"teksti" : "Denna herrgård planerade han i Mänttä för bergsrådet G. A. Serlachius. Huset som tidigare var pappersfabrikanten Serlachius privatbostad fungerar nuförtiden som konstmuseum.",
	},
	{
		"question" : "Byggnadstekniska lösningar, som till exempel formen på ett tak, kan reflektera inte bara periodens ideal utan även byggnadsbehovet. Nikolajeffs Bilpalats har ett",
		"choices" : [
					"långsluttande sadeltak",
					"valmat mansardtak",
					"brant sadeltak"
					],
		"correct" : "valmat mansardtak",
		"teksti" : "Den snabbt ökande befolkningen i städerna ledde till stor brist på utrymme. Därför föredrog man mansardtak vilka gjorde att man kunde ta i bruk också vindsvåningen.",
	},
	{
		"question" : "Nikolajeffs Bilpalats var speciellt för sin tid både vad gäller byggnadsteknik och funktion. När byggnaden stod färdig fick den mycket uppmärksamhet eftersom",
		"choices" : [
					"det var en i Finland aldrig tidigare skådad byggnadstyp",
					"konstnären Akseli Gallen-Kallela formgav en reklamaffisch för den",
					"själve tsar Nikolaj II var närvarande under invigningen av byggnaden"
					],
		"correct" : "det var en i Finland aldrig tidigare skådad byggnadstyp",
		"teksti" : "I USA fanns det bilhus redan i början av 1900-talet. Det dröjde ända till 1960-talet innan t.ex. parkeringshus blev vanliga i Finland.",
	},
	{
		"question" : "Nytt för 1910-talets fasader var terrasit- eller ädelputs. Med denna försökte man efterlikna",
		"choices" : [
					"tegel",
					"natursten",
					"raakabetonia"
					],
		"correct" : "natursten",
		"teksti" : "Terrasitputsen gav en grynig och ibland skimrande yta som man utnyttjade för att få väggen att likna natursten. Materialet var hårt och härdigt och genom att gjuta det kunde man även skapa dekorationselement.",
	},
	{
		"question" : "Typiskt för 1910-talets inredning var att",
		"choices" : [
					"utrymmena livades upp med hjälp av sneda mellanväggar",
					"matsalarna tapetserades med tygtapeter",
					"man gärna använde det nya inredningsmaterialet faner"
					],
		"correct" : "man gärna använde det nya inredningsmaterialet faner",
		"teksti" : "Den första fanerfabriken i Finland grundades i Jyväskylä 1912. Detta nya inredningsmaterial lämpade sig bland annat för dörrar, möbler, innertak och paneler.",
	},
	{
		"question" : "Speciellt populärt i 1910-talets fasader var",
		"choices" : [
					"höga spetsbågsfönster",
					"höga, rundbågiga fönster",
					"låga, breda, enrutiga fönster"
					],
		"correct" : "höga, rundbågiga fönster",
		"teksti" : "Det återuppväckta intresset för den klassicistiska arkitekturens formspråk gjorde att rundbågiga fönster blev relativt vanliga. Till och med höghus kunde ha rundbågiga fönster på någon våning.",
	},
	{
		"question" : "Nikolajeffs Bilpalats var nymodigt också därför att byggnaden hyste flera sinsemellan väldigt olika verksamheter under samma tak. I byggnaden fanns bland annat",
		"choices" : [
					"gratis parkering",
					"industriutrymmen",
					"ett bilmuseum"
					],
		"correct" : "industriutrymmen",
		"teksti" : "På Bilpalatsets översta våning fanns en verkstad där Alfa-motors fabrik verkade.",
	},
	{
		"question" : "Under 1910-talet använde man fortfarande i huvudsak blomstermotiv på tapeterna, även om mindre sådana än i jugendperiodens utsmyckade tapeter. Hur annars tog sig årtiondet uttryck på tapeterna?",
		"choices" : [
					"Det blev populärt med geometriska figurer",
					"Man började trycka tapeter på genomfärgat papper",
					"Man började trycka enfärgade tapeter"
					],
		"correct" : "Man började trycka tapeter på genomfärgat papper",
		"teksti" : "Eftersom pappret på grund av materialbristen ofta var av dålig kvalitet gulnade tapeterna lätt. Man försökte dölja detta genom att använda genomfärgat papper.",
	},
	{
		"question" : "I jakten på renhet utvecklades nya inredningsmaterial. Som golvmaterial började man använda linoleum eller korkmatta.",
		"choices" : [
					"Mattans yta dekorerades med bitar av kork",
					"Linoleum fick sitt namn från det latinska ordet \"linium\", lin",
					"Mattan var alltid enfärgad"
					],
		"correct" : "Linoleum fick sitt namn från det latinska ordet \"linium\", lin",
		"teksti" : "Linolja och korkmjöl användes som råmaterial. När denna massa breddes ut på ett tygstycke fick man en hård linoleummatta som passade utmärkt som golvyta.",
	},
	{
		"question" : "Det fanns ett ständigt behov av bostäder på grund av den arbetskraftsmigration som skedde från landsbygden till städerna. Ett av 1910-talets mer lyckade försök att lösa den svåra bostadsbristen var",
		"choices" : [
					"radhus",
					"storgårdskvarter",
					"nya småhuskvarter"
					],
		"correct" : "storgårdskvarter",
		"teksti" : "Ett av de bästa exemplen är Maskin- och Brobyggnads Ab:s halvkommunala storgårdskvarter i Vallgård där ett kvarter omges av en smal byggnad så att en skyddad, gemensam gård formas i mitten.",
	},
	{
		"question" : "Under 1910-talet blev byggtiden kortare. Detta berodde på att",
		"choices" : [
					"fler byggmaskiner användes vid bygget",
					"det fanns fler byggarbetare än man behövde",
					"den moderna snabbcementen torkade fortare"
					],
		"correct" : "fler byggmaskiner användes vid bygget",
		"teksti" : "Maskinerna gjorde att arbetet gick fortare och ledde snabbt till att det fanns färre byggarbetare.",
	},
	{
		"question" : "De växande städerna behövde moderna administrativa byggnader. På grund av detta",
		"choices" : [
					"byggdes det många ståtlig stadshus",
					"gjorde man typritningar av stadshus",
					"eftersträvade man en karaktäristiskt finsk stil"
					],
		"correct" : "byggdes det många ståtlig stadshus",
		"teksti" : "Man ville ha de bästa arkitekterna för att planera stadshusen. Byggnaderna placerades mitt i stadsplanen och skulle helst ha ett högt torn som syntes på långt håll.",
	},
	{
		"question" : "År 1908 byggdes Bilpalatset på den plats där den träbyggnad som hyst Arkadiateatern tidigare stått. Man valde just detta ställe delvis eftersom",
		"choices" : [
					"tomten fanns mitt i ett livligt affärscentrum",
					"den nyligen byggda godsstationen fanns nära intill",
					"det bredvidliggande riksdagshuset förärade byggnaden mer monumentalitet"
					],
		"correct" : "den nyligen byggda godsstationen fanns nära intill",
		"teksti" : "Med stationen nära tillhands var det lätt att transportera gods till de industrier som verkade i byggnaden.",
	},
	{
		"question" : "Bilpalatsets tak var ursprungligen lagt med grönt tegel. På taket fanns även",
		"choices" : [
					"släkten Nikolajeffs vindflöjel",
					"en grönskande takterrass",
					"stora takfönster"
					],
		"correct" : "stora takfönster",
		"teksti" : "Under det skyddande mansardtaket fanns på Bilpalatsets översta våning två tennishallar. I taket fanns det ett par höga pyramidformade takfönster som släppte in ljuset.",
	},
	{
		"question" : "1910-talets byggnader hade ofta fasader av renmurat tegel utsmyckade med skulpturer gjorda av kända bildhuggare. I fasadutsmyckningen",
		"choices" : [
					"använde man olika material",
					"använde man sig av växt- och djurmotiv",
					"var låga gipsdekorationer populära"
					],
		"correct" : "använde man olika material",
		"teksti" : "Fasadernas ornament och skulpturer tillverkades ur olika material såsom gips, sten eller terrasit.",
	},
	{
		"question" : "På 1910-talet inleddes en ny era i stadsplaneringen. Utanför huvudstaden började man i enlighet med internationella strömningar bygga villastäder för medelklassen. Här",
		"choices" : [
					"såg man också de första radhusen",
					"var villan den enda tillåtna byggnadstypen",
					"både arbetade och bodde medelklassen"
					],
		"correct" : "såg man också de första radhusen",
		"teksti" : "I villastaden i Brändö fanns till exempel Ribbingshof, ett radhuskomplex planerat av arkitekten Armas Lindgren som blev färdigt 1916-17. Det var det första av sitt slag i Finland.",
	},
	{
		"question" : "Man gav inredningen mer pondus genom att använda marmor. Marmor",
		"choices" : [
					"användes också i badrummen",
					"användes också i fasaden",
					"importerade man i huvudsak från Italien"
					],
		"correct" : "användes också i badrummen",
		"teksti" : "Man använde marmor i trapphus, eldstäder, pelare och fönsterbänkar. I förmögnare hem använde man marmor till och med i badrumsinredningen.",
	}
];

kys2.shuffle();
kys2[0].choices.shuffle();
kys2[1].choices.shuffle();
kys2[2].choices.shuffle();
kys2[3].choices.shuffle();
kys2[4].choices.shuffle();
kys2[5].choices.shuffle();
kys2[6].choices.shuffle();
kys2[7].choices.shuffle();
kys2[8].choices.shuffle();
kys2[9].choices.shuffle();
kys2[10].choices.shuffle();