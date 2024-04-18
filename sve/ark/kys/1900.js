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

var kys1 = [
	{
		"question" : "I det tidiga 1900-talets byggnadsfasader i jugendstil använde man mest av:",
		"choices" : [
					"Glas och metall",
					"Natursten och puts",
					"Tegel- och betongelement"
					],
		"correct" : "Natursten och puts",
		"teksti" : "Inom jugendstilen strävade man efter att använda genuina material och natursten var speciellt populärt, av ekonomiska skäl kombinerades naturstenen ofta med puts.",
	},
	{
		"question" : "Vilken sorts tak var typisk för det tidiga 1900-tales jugendbyggnader?",
		"choices" : [
					"Ett högt tak med många former vars taklinje avbröts av torn och gavlar",
					"Ett plantak där man kunde anlägga en takträdgård",
					"Ett svagt sluttande sadeltak vars takfot utgjorde en enhetlig och obruten linje"
					],
		"correct" : "Ett högt tak med många former vars taklinje avbröts av torn och gavlar",
		"teksti" : "Med hjälp av taket försökte man ge byggnaden en iögonenfallande kontur och på så sätt skapa en omväxlande stadsbild.",
	},
	{
		"question" : "Hurdana fönster var mest populära i jugendstilbyggnader?",
		"choices" : [
					"Rektangulära, sexrutade fönster",
					"Fönsterband",
					"Fönster i olika former vars övre del var indelad i små rutor"
					],
		"correct" : "Fönster i olika former vars övre del var indelad i små rutor",
		"teksti" : "Jugendhusens fönster tog många olika former. De var ofta valvformade och vanligtvis var den övre delen av fönstret indelad i rutor.",
	},
	{
		"question" : "Vilken sorts ornamentik var typisk för byggnader i jugendstil?",
		"choices" : [
					"Man smyckade inte ut byggnaderna alls",
					"Dekorationer med växt- och djurmotiv",
					"Ornamentik i den antika arkitekturens regelbundna anda, med till exempel akantusmotiv"
					],
		"correct" : "Dekorationer med växt- och djurmotiv",
		"teksti" : "Jugendstilen föredrog framför allt inhemska växt- och djurmotiv i sina byggnader.",
	},
	{
		"question" : "Var i Helsingfors ligger Finlands nationalmuseum?",
		"choices" : [
					"Vid Mannerheimvägen i Tölö",
					"På Observatoriebacken",
					"Vid järnvägstorget"
					],
		"correct" : "Vid Mannerheimvägen i Tölö",
		"teksti" : "År 1898 fick museet en tomt i Tölö där man höll på att planera en ny stadsdel.",
	},
	{
		"question" : "Hur många år tog det att planera Nationalmuseet?",
		"choices" : [
					"ca 15 år",
					"ca. 30 år",
					"ca 45 år"
					],
		"correct" : "ca. 30 år",
		"teksti" : "Under förstadiet 1887-1889 planerade man museet vid överstyrelse för allmänna byggnader; en tävling utlystes år 1901; Gesellius, Lindgren och Saarinens huvudritningar blev klara 1904; huset byggdes mellan 1906-10 och öppnades för allmänheten år 1916.",
	},
	{
		"question" : "I enlighet med vilken princip uppfördes Nationalmuseet?",
		"choices" : [
					"Man använde den europeisk museiarkitektur traditionella \"palatsstilen\"",
					"Finlands nationalmuseum består av flera fristående paviljonger i en park",
					"Man använde sig av den så kallade samlings- eller agglomerationsprincipen"
					],
		"correct" : "Man använde sig av den så kallade samlings- eller agglomerationsprincipen",
		"teksti" : "Enligt den så kallade agglomerationsprincipen placerade man föremålen i en så historiskt genuin miljö som möjligt. Avdelningarna som presenterade olika tidsperioder var till stilen olika varandra, kyrkosalen till exempel påminner om en medeltida kyrka.",
	},
	{
		"question" : "Vilket stadsideal hade stadsplanerarna vid sekelskiftet 1900?",
		"choices" : [
					"En stad där man byggde storkvarter i centrum för att underlätta arbetarklassens bostadsbrist",
					"Den traditionella rutplanen med breda och raka gator kantade av höga byggnader",
					"En stad i vars centrum man skulle uppföra torg, parker och friluftsområden och där boendet skulle flyttas till trädgårds- och villakvarter"
					],
		"correct" : "En stad i vars centrum man skulle uppföra torg, parker och friluftsområden och där boendet skulle flyttas till trädgårds- och villakvarter",
		"teksti" : "Stadsplanerarna ville göra städerna trivsammare och hälsosammare. I samband med detta stod den engelskinspirerade tanken om trädgårdsstaden där varje invånare hade en alldeles egen trädgård vid sitt hus.",
	},
	{
		"question" : "Hur såg den idealiska höghuslägenheten ut vid sekelskiftet 1900?",
		"choices" : [
					"Lägenheterna hade rum av alla möjliga olika storlekar vars golv- och till och med takhöjd varierade. Olika rum hade också fönster av olika storlek",
					"Det var en lägenhet med många små rum som alla hade stora panoramafönster",
					"Det var en ljus lägenhet med låga, rektangulära rum som sträckte sig från den ena änden av byggnaden till den andra"
					],
		"correct" : "Lägenheterna hade rum av alla möjliga olika storlekar vars golv- och till och med takhöjd varierade. Olika rum hade också fönster av olika storlek",
		"teksti" : "Man ville skapa individuella lägenheter. I bästa fall skulle det inte finnas två likadana lägenheter i ett höghus. Lägenheternas individualitet speglades också i byggnadernas fasader som hade olika sorters vikfönster, burspråk och torn.",
	},
	{
		"question" : "Senator Leo Mechelin höll tal när Nationalmuseets grundsten murades den 18 juni 1906. Vad murades in i grunden?",
		"choices" : [
					"Metallmynt som användes i Finland vid den tiden",
					"Trettio silvermynt",
					"Ett gammalt kopparplåtmynt från den svenska tiden"
					],
		"correct" : "Metallmynt som användes i Finland vid den tiden",
		"teksti" : "I den kapsel som murades in i grunden satte man förutom urkunden också ett mynt av varje valör i guld, silver och koppar som användes på den tiden.",
	},
	{
		"question" : "Finlands nationalmuseum är planerad av den kända arkitekttrion Gesellius, Lindgren och Saarinen. Hur delade de tre upp arbetet?",
		"choices" : [
					"Trion samarbetade hela vägen med museets planering",
					"Eliel Saarinen, den mest kända av arkitekterna, var museets självutnämnde huvudarkitekt",
					"Armas Lindgren var Nationalmuseets huvudarkitekt"
					],
		"correct" : "Armas Lindgren var Nationalmuseets huvudarkitekt",
		"teksti" : "Museets huvudritningar blev klara år 1904 men trion avbröt sitt samarbete redan 1905. Efter detta tog Armas Lindgren, som arbetat med museiprojektet sedan 1890-talet, över ansvaret för planeringen medan byggnaden uppfördes.",
	},
	{
		"question" : "Hur såg heminredningen ut under jugendtiden?",
		"choices" : [
					"Arkitekter designade både lösa och väggfasta möbler som var individuella men ändå passade ihop med varandra",
					"Man importerade möbler från utlandet och blandade olika stilar med varandra",
					"Möblerna var lätta och vita"
					],
		"correct" : "Arkitekter designade både lösa och väggfasta möbler som var individuella men ändå passade ihop med varandra",
		"teksti" : " Jugendstilens ideal var ett helhetskonstverk. Arkitekterna designade sammanhängande möblemang som passade ihop med varandra både till detaljer och till färg.",
	},
	{
		"question" : "Vad kallas det murförband som man använt när man täckt Nationalmuseet med natursten?",
		"choices" : [
					"Murförbandet squared rubble",
					"Medeltida nätförband",
					"Kvadersten"
					],
		"correct" : "Murförbandet squared rubble",
		"teksti" : "Detta murförband tog influenser från studieresor till Skottland. Eftersom man kunde använda sig av stenar av olika storlek var squared rubble -tekniken ekonomisk. Resultatet blev den omväxlande och lantliga väggyta som van mille ha.",
	},
	{
		"question" : "Framför Nationalmuseets huvudentré finns en djurskulptur gjord av skulptören Emil Wikström. Vad föreställer den?",
		"choices" : [
					"En älg",
					"En björn",
					"En varg"
					],
		"correct" : "En björn",
		"teksti" : "Arkitektbyrån Gesellius, Lindgren och Saarinen hade använt björnmotivet redan i paviljongen vid världsutställningen i Paris 1900.",
	},
	{
		"question" : "Under jugendtiden använde man i Finland framförallt i offentliga byggnader bågformade utrymmen som påminde om medeltida kyrkor och slott. Ett sådant utrymme är i centralhallen i Nationalmuseet. Hurdana valvbågar finns det där?",
		"choices" : [
					"Spetsbågade",
					"Rundbågade",
					"Hästskoformade"
					],
		"correct" : "Rundbågade",
		"teksti" : "I arkitekternas tävlingsbidrag, och fortfarande i huvudritningarna från 1904, var valven spetsbågade som i den gotiska arkitekturen- och som de man använde i paviljongen vid världsutställningen i Paris 1900.",
	},
	{
		"question" : "Akseli Gallen-Kallela målade freskerna i centralhallen. Varifrån tog han sina motiv?",
		"choices" : [
					"Från Kalevala",
					"Från Sju bröder",
					"Från Bibeln"
					],
		"correct" : "Från Kalevala",
	"teksti" : "Freskerna var menade att illustrera Finlands fyra huvudnäringar lantbruk, handel, industri samt jakt och fiske. Motiven är \"Smidandet av Sampo\", \"Bortrövandet av Sampo\", \"Fångsten av den stora gäddan\" och \"Ilmarinen plöjer huggormsåkern\".",
	},
	{
		"question" : "Akseli Gallen-Kallela målade valvbågsfreskerna i museets centralhall. Han hade tidigare gjort fresker med samma motiv till en annan byggnad. Vilken?",
		"choices" : [
					"Tammerfors domkyrka planeras av Lars Sonck",
					"Försäkringsbolaget Pohjolas kontorshus planerat av Gesellius, Lindgren och Saarinen vid Alexandergatan i Helsingfors",
					"Den finländska paviljongen vid världsutställningen i Paris 1900 planerad av Gesellius, Lindgren och Saarinen"
					],
		"correct" : "Den finländska paviljongen vid världsutställningen i Paris 1900 planerad av Gesellius, Lindgren och Saarinen",
		"teksti" : "Den finländska paviljongen vid världsutställning i Paris 1900 med Akseli Gallen-Kallelas fresker var utgångspunkten för paviljongens hela inredning.",
	}
];

kys1.shuffle();
kys1[0].choices.shuffle();
kys1[1].choices.shuffle();
kys1[2].choices.shuffle();
kys1[3].choices.shuffle();
kys1[4].choices.shuffle();
kys1[5].choices.shuffle();
kys1[6].choices.shuffle();
kys1[7].choices.shuffle();
kys1[8].choices.shuffle();
kys1[9].choices.shuffle();
kys1[10].choices.shuffle();

