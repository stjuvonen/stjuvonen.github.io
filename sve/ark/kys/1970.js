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

var kys8 = [
	{
		"question" : "Under Juha Leiviskäs långa karriär har han fått en massa olika utmärkelser. Han är till exempel",
		"choices" : [
					"hedersmedlem i Sibeliusakademin",
					"medlem av Finlands Akademi",
					"hedersdoktor vid Akademiska bokhandeln"
					],
		"correct" : "medlem av Finlands Akademi",
		"teksti" : "Finlands president tilldelade honom hederstiteln akademiker 1997. Vid akademin fungerar han som företrädare för ämnet arkitektur.",
	},
	{
		"question" : "Juha Leiviskä har planerat byggnader också internationellt, som till exempel",
		"choices" : [
					"ett kulturcentrum i Palestina",
					"en finsk ambassad i Indien",
					"ett konstmuseum i Danmark"
					],
		"correct" : "ett kulturcentrum i Palestina",
		"teksti" : "\"Ad Dar\", som kulturcentrumet heter, finns i Betlehem och stod färdigt 2003.",
	},
	{
		"question" : "Juha Leiviskä är också intresserad av att formge lampor. Typiskt för hans lampor är att",
		"choices" : [
					"de främst består av plast och påminner om flygande tefat",
					"glödlampan skyms av lampskärmen som reflekterar ljus i olika riktningar",
					"de har en handsmidd stomme av mässing"
					],
		"correct" : "glödlampan skyms av lampskärmen som reflekterar ljus i olika riktningar",
		"teksti" : "Leiviskä tycker att dagsljus och artificiellt ljus är två separata saker som ändå kompletterar varandra.",
	},
	{
		"question" : "Juha Leiviskä har planerat många kyrkor och tack vare det fick han Kyrkans kulturpris 2010. Förutom Sankt Tomas kyrka har han även planerat bland annat",
		"choices" : [
					"Myrbacka kyrka",
					"Keski-Lahti kyrka",
					"Hervanta kyrka"
					],
		"correct" : "Myrbacka kyrka",
		"teksti" : "Myrbacka kyrka och församlingshem stod färdigt i Vanda 1984.",
	},
	{
		"question" : "Under 1970-talet började man i allt högre grad lägga fokus på att utrymmen skulle vara flexibla och mångsidiga. I Sankt Tomas kyrka",
		"choices" : [
					"kan man flytta på väggarna",
					"förändrar man belysningen i kyrksalen enligt kyrkoårets liturgiska färger",
					"har man inga bänkar i kyrksalen, så där ryms det hur mycket folk som helst"
					],
		"correct" : "kan man flytta på väggarna",
		"teksti" : "Kyrkan består av en kyrksal och två församlingssalar med väggar som går att öppna. Kombinerar man alla salar rymmer utrymmet upp till 560 personer.",
	},
	{
		"question" : "Sankt Tomas kyrka utgör fokus i sin omgivning. Kyrkan finns",
		"choices" : [
					"i Uleåborgs centrum",
					"i en förort",
					"på en åker mellan några trafikleder"
					],
		"correct" : "i en förort",
		"teksti" : "Sankt Tomas kyrka finns i förorten Puolivälinkangas i Uleåborg.",
	},
	{
		"question" : "I Sankt Tomas ljusa, stämningsfulla inredning har man använt sig av mycket",
		"choices" : [
					"marmor",
					"trä",
					"nakna betongytor"
					],
		"correct" : "trä",
		"teksti" : "Mycket trä har använts i den ljusa interiören.",
	},
	{
		"question" : "Vilket takkonstruktionsdrag var speciellt för 1970-talets egnahemshus?",
		"choices" : [
					"En bastant takfot",
					"Breda takfötter som skulle ge skydd för regnet",
					"Dekorerade takfötter"
					],
		"correct" : "En bastant takfot",
		"teksti" : "I och med att plantak blev allt vanligare gjorde man takfötterna kortare men man framhävde dem också genom att lägga till tjocka, längsgående höljen av brädor.",
	},
	{
		"question" : "Under 1970-talet utvecklades nya och mer effektiva konstruktionslösningar för isolering. Bland annat började man använda",
		"choices" : [
					"spånskivor",
					"fjärrvärme",
					"ångspärrar"
					],
		"correct" : "ångspärrar",
		"teksti" : "Man började använda \"ångspärrar\" av plast i väggarna. Ångspärrarna skulle förhindra att fukt nådde in i isoleringen. På grund av att de varit felaktigt monterade har de emellertid orsakat stora mögelproblem.",
	},
	{
		"question" : "Hur förändrades fönstren under 1970-talet?",
		"choices" : [
					"Först blev de större och sedan mindre",
					"Man började tillverka fönster av PVC-plast",
					"Vädringsfönstren försvann"
					],
		"correct" : "Först blev de större och sedan mindre",
		"teksti" : "I början av 70-talet skulle fönstren vara stora panoramafönster men som följd av oljekrisen började man försöka spara energi genom att göra fönstren mindre",
	},
	{
		"question" : "Vilket fasadmaterial var typiskt för 1970-talets småhus?",
		"choices" : [
					"Tegel",
					"Stående brädfodring",
					"Plåt"
					],
		"correct" : "Tegel",
		"teksti" : "Många småhus hade tegelfasad. Tegel användes i både betong- och trähus",
	},
	{
		"question" : "Under 1970-talet byggdes förhållandevis få kulturbyggnader. Detta till trots stod en av de viktigaste finländska kulturbyggnaderna klar i Helsingfors  år 1976. Vilken byggnad är det fråga om?",
		"choices" : [
					"\"Kiasma\", museet för nutidskonst i Helsingfors",
					"Finlandiahuset",
					"Kulturhuset \"Kulttis\" i Helsingfors"
					],
		"correct" : "Finlandiahuset",
		"teksti" : "Finlandiahuset, som blev det sista av Alvar Aaltos arbeten att förverkligas, stod färdigt 1975.",
	},
	{
		"question" : "Dagens byggnadsskydd befäste sin ställning under 1970-talet bland annat genom",
		"choices" : [
					"skyddandet av området Träkottby i Helsingfors",
					"att Helsingfors domkyrka fick ett nytt lager snövit färg",
					"införandet av den nya byggnadskyddslagen"
					],
		"correct" : "skyddandet av området Träkottby i Helsingfors",
		"teksti" : "Bostadsområdet Träkottby från 1920-talet fick en skyddsplan år 1971. Nytt här var att människorna som bodde i området själva aktivt bidrog i skyddsarbetet.",
	},
	{
		"question" : "Under detta årtionde blev elementfabrikernas produktion och byggnadsfirmornas roll allt mer framträdande. Hur tog sig detta uttryck i byggandet?",
		"choices" : [
					"Elementfabrikernas mångsidiga varusortiment blev ett bra hjälpmedel för arkitekterna",
					"Byggandet gick fortare",
					"Arkitekternas anseende sköt i höjden"
					],
		"correct" : "Byggandet gick fortare",
		"teksti" : "Andelen industriellt tillverkade byggnadsdelar ökade och de byggmaskiner man använde för att flytta byggnadselementen blev allt mer effektiva.",
	},
	{
		"question" : "Ljus är viktigt för Juha Leiviskä. Förutom det naturliga ljuset, som ju skiftar beroende på dygnstid, är hans arkitektur också kännetecknad av",
		"choices" : [
					"golvlampor som delar upp utrymmet",
					"taklampor som reflekterar ljus i olika riktningar",
					"dramatiska spotlights i tak och väggar"
					],
		"correct" : "taklampor som reflekterar ljus i olika riktningar",
		"teksti" : "I de byggnader han planerat finns taklampor som hänger på olika höjd och ser ut som om de skulle sväva i luften.",
	},
	{
		"question" : "1970-talets energikris resulterade i att man experimenterade med så kallade \"ekohus\" där det ofta",
		"choices" : [
					"fanns ett växthus",
					"var solpaneler som utgjorde den viktigaste energikällan",
					"fanns markvärmepumpar"
					],
		"correct" : "fanns ett växthus",
		"teksti" : "Växthusen placerades på villornas tak som till exempel i mässhuset i Vanda planerat av Harto Helpinen 1977.",
	},
	{
		"question" : "På 1970-talet planerade man allt oftare in \"kontorslandskap\" i kontorsbyggnader. Vad innebar det för någonting?",
		"choices" : [
					"Ett gemensamt, öppet kontorsutrymme som avgränsas i små arbetsstationer genom lätta mellanväggar",
					"Att man förbättrade arbetsförhållandena genom att sätta in fönster så att de anställda skulle kunna titta ut på landskapet",
					"Att man gjorde de anställdas kontor hemtrevligare genom att skaffa dit landskapsmålningar"
					],
		"correct" : "Ett gemensamt, öppet kontorsutrymme som avgränsas i små arbetsstationer genom lätta mellanväggar",
		"teksti" : "Kontorslandskap innebär ett stort, öppet utrymme som man kan dela upp genom att använda låga mellanväggar. Ett bra exempel på detta är Valios huvudkontor i Sockenbacka (1978) i Helsingfors, planerat av Matti K. Mäkinen och Kaarina Löfström.",
	}
];

kys8.shuffle();
kys8[0].choices.shuffle();
kys8[1].choices.shuffle();
kys8[2].choices.shuffle();
kys8[3].choices.shuffle();
kys8[4].choices.shuffle();
kys8[5].choices.shuffle();
kys8[6].choices.shuffle();
kys8[7].choices.shuffle();
kys8[8].choices.shuffle();
kys8[9].choices.shuffle();
kys8[10].choices.shuffle();