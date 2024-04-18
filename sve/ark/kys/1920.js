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

var kys3 = [
	{
		"question" : "Vilka motiv använde man sig mest av när man smyckade ut husfasaderna på 1920-talet?",
		"choices" : [
					"Djur- och/eller växtmotiv som fått sin mall från den finländska naturen",
					"Klassicistiska motiv såsom medaljonger, vaser och musslor",
					"Formrika gipsornament med växtmotiv"
					],
		"correct" : "Klassicistiska motiv såsom medaljonger, vaser och musslor",
		"teksti" : "",
	},
	{
		"question" : "Tiden mellan 1926-28 brukar allmänt kallas \"byggnadsverksamhetens galna år\". Vad beror detta på?",
		"choices" : [
					"Arkitekterna ville i självständighetens yra prova olika sorters nya former till det såkallade \"vansinnets gräns\"",
					"Man byggde ovanligt många hus under den perioden",
					"Till följd av inbördeskrigets upplevelser fanns det ovanligt många \"galningar\" inom arkitektkåren"
					],
		"correct" : "Man byggde ovanligt många hus under den perioden",
		"teksti" : "Efter regressionen som orsakades av separationen från Ryssland och 1918 års inbördeskrig hämtade sig byggverksamheten kvickt.",
	},
	{
		"question" : "Vilken sorts arkitektur var förebilden för 1920-talets stil?",
		"choices" : [
					"Arkitekturen i det antika Grekland",
					"1800-talets ryska empire",
					"Den klassiska arkitekturen i de norditalienska småstäderna"
					],
		"correct" : "Den klassiska arkitekturen i de norditalienska småstäderna",
		"teksti" : "Efter att första världskriget tagit slut kunde arkitekterna resa igen och ett av de nordiska arkitekternas främsta resmål var Norditalien. I Norden benämndes stilen också \"nordisk klassicism\".",
	},
	{
		"question" : "Arkitektur förenar konst och teknik. Vilket av alternativen är en av 1920-talets nya byggnadstekniska uppfinningar?",
		"choices" : [
					"Armerad betong, alltså betong som förstärkts med förspända stålstänger",
					"Spånskivan som skapas genom att pressa ihop träfiber och lim",
					"Användandet av kork i ljudisoleringssyfte"
					],
		"correct" : "Användandet av kork i ljudisoleringssyfte",
		"teksti" : "Under 1920-talet experimenterade man med olika sorts byggnadsmaterial. Kork visade sig fungera bäst av alla som värme och ljudisolering.",
	},
	{
		"question" : "Under 1920-talet målade man oftast husfasaderna",
		"choices" : [
					"i vitt som symboliserade renhet och Finlands vita snödrivor",
					"i pastellfärger som till exempel rosa, ljusgrön eller ljusgult",
					"i varma, mörka och murriga jordnära färgnyanser"
					],
		"correct" : "i pastellfärger som till exempel rosa, ljusgrön eller ljusgult",
		"teksti" : "Valet påverkades av den sofistikerade färgpalett som 1920-talets klassicism föredrog.",
	},
	{
		"question" : "Att familjevärderingar förändrades syntes tydligt inom bostadsplaneringen. Vad för nytt sorts rum kom till under 1920-talet?",
		"choices" : [
					"En kokvrå – med andra ord ett minimerat kök – där inte ens ett matbord fick rum",
					"Ett kombinerat vardagsrum och kök",
					"Ett grovkök som gjorde att man kunde separera matlagningen från övriga hushållsuppgifter"
					],
		"correct" : "En kokvrå – med andra ord ett minimerat kök – där inte ens ett matbord fick rum",
		"teksti" : "Det blev allt mer sällsynt att tjänstefolk var en del av hushållet, och elektriska utensilier var mindre utrymmeskrävande.",
	},
	{
		"question" : "I mitten av 1920-talet växte bostadsproduktionen i Finland kraftigt. I större städer byggdes stora bostadsaktiebolagshus i sten istället för trähus. Vid sidan av bostadshus byggde man under 1920-talet speciellt",
		"choices" : [
					"skolor och skyddskårsbyggnader",
					"sportbyggnader",
					"kulturbyggnader"
					],
		"correct" : "skolor och skyddskårsbyggnader",
		"teksti" : "Till följd av 1921 års lag om obligatorisk skolplikt ökade behovet av skolor betydligt och de frivilliga skyddskårerna behövde också någonstans att vara.",
	},
	{
		"question" : "Vad orsakade den svåra bostadsbrist som följde på första världskriget?",
		"choices" : [
					"Hyrorna steg kraftigt",
					"Staten ville inte stödja bostadsproduktionen",
					"De privata finansiärernas intresse falnade på grund av reglering av bostadshyrorna"
					],
		"correct" : "De privata finansiärernas intresse falnade på grund av reglering av bostadshyrorna",
		"teksti" : "Andra orsaker var att penningvärdet sjönk samt materialbristen som kriget orsakade.",
	},
	{
		"question" : "Efter att bostadshuset på Brahegatan 9 stod färdigt karaktäriserades dess trapphus som \"elegant\". Trappuppgången var",
		"choices" : [
					"enkel och minimaliserad",
					"rikt utsmyckad med väggmålningar och förkromade trappräcken",
					"till strukturen exceptionell och med en dyrbar känsla"
					],
		"correct" : "till strukturen exceptionell och med en dyrbar känsla",
		"teksti" : "Färgerna och relieferna på lägenheternas ytterdörrar skänker trapphuset en dyrbar prägel. Trapphuset är nästan kvadratisk och utrymmet är delvis inramat med öppna valv.",
	},
	{
		"question" : "Med hjälp av stadsplaner reglerade man hur städerna skulle utvecklas. Det tilltagande användandet av bilar påverkade märkbart stadsplaneringen under 1920-talet. Hur?",
		"choices" : [
					"Rutplaner och rakt dragna gator blev populära element inom stadsplaneringen",
					"Man ville skapa överraskande stadsutrymmen i många former",
					"Man strävade efter att decentralisera stadsdelarna, alltså en tidig form av \"förortsbyggnation\""
					],
		"correct" : "Rutplaner och rakt dragna gator blev populära element inom stadsplaneringen",
		"teksti" : "Amerikanska storstäder med sina skyskrapor sågs som förebilder inom stadsplaneringen. Trafikleder som förde ut från städerna gjordes bredare, kurvor slätades ut och nya, raka gator skapades i gamla stadscentra.",
	},
	{
		"question" : "Erik Bryggman var en av 1900-talets mest betydelsefulla arkitekter i Finland. När och var verkade han?",
		"choices" : [
					"Han var framförallt verksam i Åbo under 1920- och 30-talet",
					"Han påbörjade sitt arbete i Åbotrakten under art nouveau-perioden och skapade sina huvudsakliga verk i Åbo under 1920-talet",
					"Som var fallet med många andra betydelsefulla arkitekter utfördes hans huvudsakliga arbete i Helsingfors under 1920- och 30-talet"
					],
		"correct" : "Han var framförallt verksam i Åbo under 1920- och 30-talet",
		"teksti" : "Bland Erik Bryggmans främsta arbeten i Åbo räknas bostadsaktiebolaget Atrium, Uppståndelsekapellet och Åbo Akademis boktorn.",
	},
	{
		"question" : "Vad menar man med den mineralputs som blev så populär på 1920-talet?",
		"choices" : [
					"Ett sätt att rappa som imiterade renässansens murningsteknik",
					"Pust som vas så tunn att man skymtade teglet därunder",
					"Putsbruk som man blandat ner till exempel glasskärvor eller stenkol i"
					],
		"correct" : "Putsbruk som man blandat ner till exempel glasskärvor eller stenkol i",
		"teksti" : "Med hjälp av glasskärvor fick putsen en skimrande yta som påminde om granit.",
	},
	{
		"question" : "I 1920-talets husfasader lade man speciell tonvikt vid vissa detaljer. Vad framhävde man i fasaden på huset vid Brahegatan 9?",
		"choices" : [
					"Huvudingången",
					"Fasadens mångformighet. Byggnaden planerades inifrån ut så att fasaden formades enligt det inre utrymmet",
					"Skillnaden mellan våningarna med hjälp av olika ytbehandlingar och våningslister"
					],
		"correct" : "Huvudingången",
		"teksti" : "Under 1920-talet placerade man de flesta utsmyckningarna i närheten av entrén. Brahegatans ingång är alldeles särskilt storslagen med sina två våningar höga pelare med urnor på toppen.",
	},
	{
		"question" : "Det första av Erik Bryggmans stora hus i Åbo att stå färdigt var det på Brahegatan 9 till julen 1924. redan i byggnadsskedet uppmärksammade lokaltidningarna detta \"ståtliga nybygge\". Det nya bostadshuset hade",
		"choices" : [
					"120 rum",
					"54 rum",
					"88 rum"
					],
		"correct" : "88 rum",
		"teksti" : "Huset hade 88 rum. De rymliga lägenheterna hade i genomsnitt fyra rum och kök. Dessutom var de utrustade med \"moderna bekvämligheter\".",
	},
	{
		"question" : "I fönstren vid huset på Brahegatan 9 kan man ana drag typiska för 1920-talet. Vilka då?",
		"choices" : [
					"Fönstren har sex eller åtta rutor, och de är placerade precis på utsidan av väggen",
					"Alla fönster är lika stora och består av en enda ruta",
					"Fönstren på bottenvåningen är högre än på de andra våningarna"
					],
		"correct" : "Fönstren har sex eller åtta rutor, och de är placerade precis på utsidan av väggen",
		"teksti" : "Detta gjorde väggytan så jämn och harmoniskt enhetlig som möjligt.",
	},
	{
		"question" : "På 1920-talet designade arkitekter möbler både till privathem och allmänna utrymmen. Hurdana möbler designade de?",
		"choices" : [
					"Enkla metallmöbler, såkallade \"rörstolar\"",
					"Möbler inspirerade av antikens väggmålningar och vaser med klassiska motiv",
					"Karelskinspirerade lantliga modeller"
					],
		"correct" : "Möbler inspirerade av antikens väggmålningar och vaser med klassiska motiv",
		"teksti" : "Arkitekterna ritade ofta bord och stolar med sirliga ben som gick i en svagt sluttande båge utåt som bruket var under antiken. Möblerna kunde också målas i starka färger som svart och rött.",
	},
	{
		"question" : "Precis som dörrar och fönster så har takmodellerna förändrats från årtionde till årtionde. Vilken sorts tak var typiskt för 1920-talet?",
		"choices" : [
					"Ett väldigt brant sadeltak",
					"Ett lågt sadeltak med långa takfötter",
					"I takt med den internationella trenden började man använda sig mer och mer av plantak"
					],
		"correct" : "Ett lågt sadeltak med långa takfötter",
		"teksti" : "Taket miste den visuella betydelsen det haft under art nouveau-perioden.",
	}
];
	
kys3.shuffle();
kys3[0].choices.shuffle();
kys3[1].choices.shuffle();
kys3[2].choices.shuffle();
kys3[3].choices.shuffle();
kys3[4].choices.shuffle();
kys3[5].choices.shuffle();
kys3[6].choices.shuffle();
kys3[7].choices.shuffle();
kys3[8].choices.shuffle();
kys3[9].choices.shuffle();
kys3[10].choices.shuffle();