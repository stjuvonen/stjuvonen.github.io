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

var kys10 = [
	{
		"question" : "Typiskt för 1990-talets arkitektur var strävan efter",
		"choices" : [
					"transparens",
					"lekfullhet",
					"att understryka byggnadens struktur"
					],
		"correct" : "transparens",
		"teksti" : "Typiskt för 1990-talets arkitektur var transparens. Stora glasytor påstods återspegla tidens allt mer öppna samhälle.",
	},
	{
		"question" : "Bland de drag som utmärkte 1990-talets byggnader fanns strävan efter en förnimmelserik arkitektur. Lustos arkitektur tillförs en extra dimension genom doften från",
		"choices" : [
					"tjäran som finns i träytornas ytbehandling",
					"de rosenrabatter som kännetecknar den omkringliggande",
					"de förruttnade växterna i den igenväxta vik som ligger strax intill"
					],
		"correct" : "tjäran som finns i träytornas ytbehandling",
		"teksti" : "I den ytbehandling man använder för träytorna i Lusto ingår ämnen som tjära, linolja och terpentin vilket ger byggnaden en karakteristisk tjärdoft.",
	},
	{
		"question" : "Det tidiga 90-talets ekonomiska recession ledde till nya lösningar i byggandet. Ett exempel på detta är",
		"choices" : [
					"att man började ta vara på och visa större uppskattning för gamla byggnader",
					"produktionen av billiga prefabricerade elementhus",
					"att tältliknande strukturer som egentligen var ämnade som nödlösningar blev populära"
					],
		"correct" : "att man började ta vara på och visa större uppskattning för gamla byggnader",
		"teksti" : "Under 1990-talet började man anpassa gamla byggnader, såsom övergivna fabriker, för nya användningsområden. Glaspalatset i Helsingfors gjorde man till exempel om till ett mediacentrum.",
	},
	{
		"question" : "På 1990-talet planerade man många kulturbyggnader. En av de mest kända är Kiasma, muséet för nutidskonst, som stod färdigt 1998. Byggnaden är planerad av",
		"choices" : [
					"amerikanen Steven Holl",
					"Alvar Aalto",
					"japanen Kazuo Shinohara"
					],
		"correct" : "amerikanen Steven Holl",
	"teksti" : "Holls skulpturala bidrag \"Chiasma\" vann den internationella tävling som arrangerades om muséet. Allt i allt inkom 516 bidrag.",
	},
	{
		"question" : "Efter 1990-talets depressionsår ville företagen återigen ha ståtliga kontorsbyggnader. De populäraste materialen man då använde var",
		"choices" : [
					"glas och stål",
					"tegel och koppar",
					"trä och betong"
					],
		"correct" : "glas och stål",
		"teksti" : "De populäraste materialen man då använde var glas och stål. Utmärkta exempel på den arkitektur som präglade 90-talets kontorsbyggnader är Nokias huvudkontor i Kägeludden i Esbo och Sanomahuset, Sanoma Oy:s huvudkontor i Helsingfors centrum.",
	},
	{
		"question" : "Skogscentret har fått sitt namn \"Lusto\" efter",
		"choices" : [
					"det ord som på finska beskriver trädets årsringar",
					"en skalbagge som trivs i barrträd",
					"en forntida labyrintliknande stensättning"
					],
		"correct" : "det ord som på finska beskriver trädets årsringar",
		"teksti" : "På finska betyder \"Lusto\" det lager av trä som hinner växa under barken på ett år. Lusto var också namnet på det bidrag som vann den tävling om arrangerades om skogscentret.",
	},
	{
		"question" : "Förutom Lusto planerade Ilmari Lahdelma och Rainer Mahlamäkis byrå även en annan betydande kulturbyggnad för en landsbygdskommun under 90-talet. Det är här fråga om",
		"choices" : [
					"Kaustby folkkonstcentrum i Mellersta Österbotten",
					"Kierikkicentret, ett museum om Finlands förhistoria, i Yli-Ii i Norra Österbotten",
					"Juminkeko, informationscentret för Kalevala och karelsk kultur, i Kuhmo i Kajanaland"
					],
		"correct" : "Kaustby folkkonstcentrum i Mellersta Österbotten",
		"teksti" : "Lahdelma och Mahlamäkis byrå planerade Kaustby folkkonstcentrum. För att inte sticka ut i den lilla kyrkbyn har byggnaden till största delen brutits in i berget.",
	},
	{
		"question" : "Betong och trä är de ömsesidigt kompletterande material man byggt skogsmuséet Lusto i. Det trämaterial man använt är",
		"choices" : [
					"furu, lärkträd och klibbal",
					"tryckimpregnerat trä",
					"teak, mahogny och merbau"
					],
		"correct" : "furu, lärkträd och klibbal",
		"teksti" : "I Lustos mer representativa utrymmen har man använt lärkträd medan till exempel väggarna i utställningsutrymmena består av furu. Räckena är gjorda av klibbal.",
	},
	{
		"question" : "Skogsmuséet Lusto byggdes i det natursköna nationallandskapet i Punkaharju. Den omgivande gården var tidigare",
		"choices" : [
					"en stockdepå",
					"en igenväxt vik som senare fylldes igen",
					"en strandbelägen alskog som användes som betesmark för kor"
					],
		"correct" : "en stockdepå",
		"teksti" : "Gården som omger Lusto fungerade tidigare som en stockdepå och den damm som finns bredvid den nuvarande byggnaden var en igenväxt vik.",
	},
	{
		"question" : "En viss modefluga var typisk för de höghusbostäder som byggdes, eller renoverades, under 90-talet. Vad kan denna ha varit?",
		"choices" : [
					"Inglasade balkonger",
					"Sadeltak",
					"Pastellfärger"
					],
		"correct" : "Inglasade balkonger",
		"teksti" : "Inglasade balkonger blev snabbt mycket populära under 1990-talet.Eftersom glaset skyddade balkongerna från regn och snö fick man nu mycket större nytta av dem än tidigare.",
	},
	{
		"question" : "Finland deltog i världsutställningen i Sevilla 1992 med en paviljong, vid namn Helvetinkolu (Helvetesgapet), som bestod av två separata byggnadsdelar. Hur tar sig namnet uttryck i byggnadens arkitektur??",
		"choices" : [
					"Mellan de två byggnadsdelarna bildades ett sammanbindande, avgrundsliknande utrymme som fick namnet Helvetinkolu",
					"Man målade smådjävlar på paviljongens väggar",
					"Man strävade efter att skapa ett hotfullt intryck genom att lackera de stålpaneler som klädde den ena byggnadsdelens fasad svarta"
					],
		"correct" : "Mellan de två byggnadsdelarna bildades ett sammanbindande, avgrundsliknande utrymme som fick namnet Helvetinkolu",
		"teksti" : "Namnet är taget från en ravinformation som finns i Ruovesi.",
	},
	{
		"question" : "År 1997 arrangerades bostadsmässan i Reso. Vad har namnen Killi och Nalli med mässan att göra?",
		"choices" : [
					"Killi och Nalli är ett par bostadshus, planerade av Teemu Kurkela, som finns på mässområdet",
					"Killi och Nalli är bostadsmässans maskotkatt och -hund",
					"Killi och Nalli är en skulptur av Harry Kivijärvi som finns på mässområdet. Motivet är jättarna Killi och Nalli som, enligt en folkdikt, byggde Reso kyrka"
					],
		"correct" : "Killi och Nalli är ett par bostadshus, planerade av Teemu Kurkela, som finns på mässområdet",
		"teksti" : "Killi och Nalli är ett par bostadshus som finns på mässområdet. Byggnadernas namn kommer från en folkdikt som berättar om hur jättarna Killi och Nalli byggde Reso kyrka.",
	},
	{
		"question" : "Man experimenterade med höghusbyggandet under 90-talets slut. Tidens mest betydande nyhet var",
		"choices" : [
					"höghus av trä",
					"tornhuset",
					"höghus av plastelement"
					],
		"correct" : "höghus av trä",
		"teksti" : "Under senare hälften av 90-talet byggdes det några tiotal trähöghus om 3-4 våningar i åtta olika kommuner.",
	},
	{
		"question" : "På 1990-talet fäste man allt större vikt vid att göra gatumiljön trevligare, bland annat genom kvaliteten på gatumöblemanget. Vilken gatumöbel blev speciellt populär i de finländska städerna?",
		"choices" : [
					"City-sopkorgen",
					"Typkiosken, en kioskmodell som kunde anpassas till flera olika användningsändamål",
					"Hållplatser med vindskydd"
					],
		"correct" : "City-sopkorgen",
		"teksti" : "Designern Hannu Kähönen formgav City-sopkorgen år 1990, främst med Helsingfors i åtanke. Från Helsingfors spred den sig emellertid snabbt till resten av Finland.",
	},
	{
		"question" : "På grund av den ekonomiska recessionen i början av 1990-talet blev många arkitekter arbetslösa. Hur försökte arkitekterna klara sig?",
		"choices" : [
					"De sökte jobb utomlands",
					"De började med oavlönat arbete för att försöka locka uppdragsgivare",
					"De sadlade om till t.ex. bildkonstnärer, skådespelare eller musiker"
					],
		"correct" : "De sökte jobb utomlands",
		"teksti" : "Finländska arkitekter deltog med framgång i internationella tävlingar under det tidiga 1990-talet.",
	},
	{
		"question" : "En modefluga när det gäller kontorsbyggnadsarkitekturen under 1990-talet var den såkallade dubbelfasaden. Vad är det för någonting?",
		"choices" : [
					"Två ytterväggar som gör att ett tomt utrymme bildas mellan de metallinfattade glasytorna",
					"Att två byggnader som ligger bredvid varandra har samma sorts fasad",
					"En fasad vars nedre del består av t.ex. sten och den övre av glas"
					],
		"correct" : "Två ytterväggar som gör att ett tomt utrymme bildas mellan de metallinfattade glasytorna",
		"teksti" : "Dubbelfasaden är två ytterväggar som gör att ett tomt utrymme bildas mellan de metallinfattade glasytorna. Första gången man byggde en dubbelfasad i Finland var 1997, i Nokias huvudkontor.",
	},
	{
		"question" : "Ilmari Lahdelma och Rainer Mahlamäkis byrå har varit framgångsrik internationellt. Byrån vann en viktig internationell tävling 2005. Vilken byggnad är det fråga om?",
		"choices" : [
					"De polska judarnas museum i Warszawa",
					"Restaureringen av Eiffeltornet i Paris",
					"Stadshuset i Toronto, Kanada"
					],
		"correct" : "De polska judarnas museum i Warszawa",
		"teksti" : "Lahdelma och Mahlamäki vann den tävling som arrangerades om muséet över de polska judarnas historia i Warszawa. År 2012 stod muséet färdigt där det judiska ghettot fanns under andra världskriget.",
	}	
];

kys10.shuffle();
kys10[0].choices.shuffle();
kys10[1].choices.shuffle();
kys10[2].choices.shuffle();
kys10[3].choices.shuffle();
kys10[4].choices.shuffle();
kys10[5].choices.shuffle();
kys10[6].choices.shuffle();
kys10[7].choices.shuffle();
kys10[8].choices.shuffle();
kys10[9].choices.shuffle();
kys10[10].choices.shuffle();