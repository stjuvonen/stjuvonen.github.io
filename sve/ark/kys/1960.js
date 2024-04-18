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

var kys7 = [
	{
		"question" : "Vid sidan av Aarno Ruusuvuoris planeringsarbete verkade han inom många andra områden. Han var bland annat",
		"choices" : [
					"direktör vid Finlands arkitekturmuseum",
					"layoutare för tidningen Arkkitehti",
					"rektor för Tekniska högskolan"
					],
		"correct" : "direktör vid Finlands arkitekturmuseum",
		"teksti" : "Aarno Ruusuvuori var direktör för Finlands arkitekturmuseum mellan 1975-1978 och 1983-1988.",
	},
	{
		"question" : "Förutom Weilin & Göös tryckeri planerade Aarno Ruusuvuori också många andra byggnader, till exempel",
		"choices" : [
					"Helga Korsets kapell i Åbo",
					"Kasbergets folkskola i Helsingfors",
					"Träskända kyrka"
					],
		"correct" : "Kasbergets folkskola i Helsingfors",
		"teksti" : "Kasbergets folkskola (1967) är en kvadratisk betongbyggnad i två våningar som Ruusuvuori planerat.",
	},
	{
		"question" : "Weilin & Göös tryckeri i Hagalund stod klart 1964 och byggdes ut 1967 och 1974. Tillbyggnaderna gjordes eftersom",
		"choices" : [
					"man inte lyckats förutse hur mycket utrymme man egentligen behövde",
					"den första byggnaden var planerad som del av en större helhet",
					"byggnadsinspektionen var bristfällig på 1960-talet"
					],
		"correct" : "den första byggnaden var planerad som del av en större helhet",
		"teksti" : "Den första byggnaden hyste tryckeriets sätteri-, tryckeri- och layoutavdelningar. Tanken var att småningom förlägga hela tryckeriets verksamhet till Hagalund.",
	},
	{
		"question" : "Den första etappen av Weilin & Göös tryckeri hade inga fönster på tre av sina fyra sidor. Den nordvästra väggen däremot bestod av jättestora fönsterytor som",
		"choices" : [
					"band samman de inre utrymmena med naturen utanför",
					"gjorde att byggnaden smälte in bland kvarterets betongbyggnader i övrigt",
					"släppte in tillräckligt mycket solljus"
					],
		"correct" : "band samman de inre utrymmena med naturen utanför",
		"teksti" : "Den stora glasväggen mot nordväst låg i skugga och fungerade som en länk mellan de inre utrymmena och den omkringliggande naturen. Byggnadens övriga väggar hade emellertid praktiskt taget inga fönster alls eftersom pappret var så känsligt för solljus.",
	},
	{
		"question" : "Tryckeribyggnadens planlösning måste vara enkel, enhetlig och flexibel för att det skulle vara möjligt att omorganisera arbetsprocesserna. Man gjorde utrymmet mer mångsidigt genom att",
		"choices" : [
					"använda mellanväggar som gick att flytta",
					"sätta in få vertikala stödkonstruktioner",
					"maximera takhöjden"
					],
		"correct" : "sätta in få vertikala stödkonstruktioner",
		"teksti" : "Utrymmet gjorde man så flexibelt som möjligt genom att använda så få vertikala stödkonstruktioner som möjligt. I tryckhallen fanns det bara en vertikal bärande struktur per 729 m2 tack vare en ny sorts hängande konstruktion.",
	},
	{
		"question" : "Weilin & Göös tryckeribyggnad i Esbo har genomgått många förändringar. Sedan 2006 har byggnaden fungerat som ett kulturhus under epitetet WeeGee. I samband med det omfattande ombyggnadsarbetet",
		"choices" : [
					"skapade man i princip en helt ny byggnad runt den gamla stommen",
					"bevarade man den ursprungliga rumsindelningen",
					"restaurerade man tryckerimaskinerna"
					],
		"correct" : "skapade man i princip en helt ny byggnad runt den gamla stommen",
		"teksti" : "Man började ombyggnaden med genomgripande rivnings- och demoleringsarbete. Även om man strävade efter att bevara drag från den ursprungliga arkitekturen resulterade arbetet i att utrymmena förändrades totalt.",
	},
	{
		"question" : "Innan betongelementtekniken slog igenom var det under början av1960-talet vanligare att man i fasaderna använde sig av",
		"choices" : [
					"natursten",
					"puts",
					"ornament"
					],
		"correct" : "puts",
		"teksti" : "Ännu i början av 1960-talet var det vanligare att man täckte fasaderna med puts, tegel eller fasadskivor.",
	},
	{
		"question" : "På grund av den ökade urbaniseringen måste man komma på nya bostadslösningar. Man såg bland annat till Sverige för exempel. Som en följd av detta",
		"choices" : [
					"kom allt fler förorter till",
					"byggde man små lägenheter i centrum",
					"bodde allt fler i hyresbostäder"
					],
		"correct" : "kom allt fler förorter till",
		"teksti" : "Tätbebyggda och effektiva bostadsförorter sprang upp mitt i naturen. Det var speciellt barnfamiljer som flyttade dit.",
	},
	{
		"question" : "Under 1960-talet gick arkitekturen igenom genomgripande förändringar. När man byggde kyrkor till exempel ville man understryka byggnadens roll i samhället genom att",
		"choices" : [
					"placera kyrkan mitt i stadens centrum",
					"bygga arbetscentraler för församlingen",
					"inkludera kyrkobyggnaden som del av ett slutet kvarter"
					],
		"correct" : "bygga arbetscentraler för församlingen",
		"teksti" : "I de kyrkor som byggdes i förorterna på 1960-talet fanns det, förutom själva kyrksalen, ofta också till exempel klubb- och gymutrymmen.",
	},
	{
		"question" : "1960-talet har gått till historien som en tid präglad av de mest underliga arkitektoniska experiment. Som exempel kan nämnas Matti Suuronens internationellt kända Futurohus gjort av fiberförstärkt plast. Huset påminde om",
		"choices" : [
					"en flygel",
					"en cylinder",
					"ett flygande tefat"
					],
		"correct" : "ett flygande tefat",
		"teksti" : "På grund av att byggnaden var formad som en ellips kopplade man omedelbart ihop den med flygande tefat.",
	},
	{
		"question" : "En nyhet för 1960-talet var betongbrutalism. De finländska arkitekterna anammade denna stil via utländska exempel. Namnet härrör från den byggnadsteknik man använde där spåren efter gjutformen",
		"choices" : [
					"lämnades synliga",
					"gömdes på ett brutalt sätt",
					"jämnades ut"
					],
		"correct" : "lämnades synliga",
		"teksti" : "Obehandlade betongytor var ett kännetecknande drag för denna stil. Brutalismen hade sina rötter i England och en av stilens mest kända företrädare var den schweiziske Le Corbusier.",
	},
	{
		"question" : " På 1960-talet kunde fönstren vara riktigt stora. Mot slutet av årtiondet började bandfönstren så småningom ersättas av de föregående årtiondenas enskilda fönster. Detta var en följd av",
		"choices" : [
					"det stigande oljepriset",
					"det stigande priset på fönsterglas",
					"att elementtekniken blev allt vanligare"
					],
		"correct" : "att elementtekniken blev allt vanligare",
		"teksti" : "Man övergick till enskilda fönster eftersom det var betydligt lättare att inkorporera dem i de prefabricerade elementen.",
	},
	{
		"question" : "I planeringen av Weilin & Göös tryckeri utgick Aarno Ruusuvuori från den sorts förnuftigt byggande som förespråkades av rationalismen. Ruusuvuori inspirerades av den schweiziske arkitekten Le Corbusiers aforism:",
		"choices" : [
					"\"Form follows function.\"",
					"\"Structure is the key to beauty.\"",
					"\"Less is more.\""
					],
		"correct" : "\"Structure is the key to beauty.\"",
		"teksti" : "Le Corbusier inspirerade Ruusuvuori med mottot Structure is the key to beauty − struktur är nyckeln till skönhet.",
	},
	{
		"question" : "Att man använde sig av elementteknik blev vanligt i bostadsbyggandet på 60-talet. I Finland använde man uteslutande elementteknik för första gången i samband med byggandet av",
		"choices" : [
					"Rönnbacka i Helsingfors",
					"Hagalund i Esbo",
					"Vatiala begravningskapell i Tammerfors"
					],
		"correct" : "Rönnbacka i Helsingfors",
		"teksti" : "De första byggnaderna som uppfördes enbart med elementteknik var några höghus som planerats för Rönnbacka av arkitekten Lauri Silvennoinen.",
	},
	{
		"question" : "Ett fenomen som hör till 1960-talets trähusbyggande är",
		"choices" : [
					"att man uppförde prefabricerade hus på egen hand",
					"förbättrad energieffektivitet",
					"måttsystem och standardisering"
					],
		"correct" : "måttsystem och standardisering",
		"teksti" : "I enlighet med internationella strömningar experimenterade man på 60-talet med måttsystem lämpade för fabriksframställning.",
	},
	{
		"question" : " I början av 1960-talet var det populärt med långa, massiva byggnader accentuerade av eleganta bandfönster. Till färgen var fasadelementen av betong ofta",
		"choices" : [
					"vita",
					"ljusgula",
					"gröna"
					],
		"correct" : "vita",
		"teksti" : "På 1960-talet målades höghusens betongfasader i allmänhet vita. Sockeln målades svart eller mörkbrun.",
	},
	{
		"question" : "Det mest populära inredningsmaterialet på 60-talet var",
		"choices" : [
					"plast",
					"furu",
					"metallnät"
					],
		"correct" : "plast",
		"teksti" : "Man kom hela tiden på nya användningsområden för plast och man experimenterade med materialets formbarhet. Bland annat formgav man lampor av plast.",
	}
];

kys7.shuffle();
kys7[0].choices.shuffle();
kys7[1].choices.shuffle();
kys7[2].choices.shuffle();
kys7[3].choices.shuffle();
kys7[4].choices.shuffle();
kys7[5].choices.shuffle();
kys7[6].choices.shuffle();
kys7[7].choices.shuffle();
kys7[8].choices.shuffle();
kys7[9].choices.shuffle();
kys7[10].choices.shuffle();