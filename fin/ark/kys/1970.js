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
		"question" : "Juha Leiviskälle on hänen pitkän uransa aikana annettu lukuisia tunnustuksia. Hän on esimerkiksi",
		"choices" : [
					"Sibelius-akatemian kunniajäsen",
					"Suomen Akatemian jäsen",
					"Akateemisen kirjakaupan kunniatohtori"
					],
		"correct" : "Suomen Akatemian jäsen",
		"teksti" : "Suomen tasavallan presidentti antoi Leiviskälle akateemikon arvonimen vuonna 1997. Hän edustaa Akatemiassa arkkitehtuuria.",
	},
	{
		"question" : "Juha Leiviskä on suunnitellut rakennuksia myös ulkomaille, kuten esimerkiksi",
		"choices" : [
					"kulttuurikeskuksen Palestiinaan",
					"Suomen suurlähetystön Intiaan",
					"taidemuseon Tanskaan"
					],
		"correct" : "kulttuurikeskuksen Palestiinaan",
		"teksti" : "Keskus sijaitsee Betlehemissä, se valmistui 2003 ja se on nimeltään \"Ad Dar\".",
	},
	{
		"question" : "Juha Leiviskä on myös kiinnostunut valaisinsuunnittelusta. Hänen valaisimilleen tunnusomaista on se, että niissä",
		"choices" : [
					"päämateriaalina on muovi ja ne muistuttavat lentäviä lautasia",
					"varjostin piilottaa polttimon sisäänsä ja heijastaa valoa eri suuntiin",
					"on messingistä käsityönä taottu runko"
					],
		"correct" : "varjostin piilottaa polttimon sisäänsä ja heijastaa valoa eri suuntiin",
		"teksti" : "Leiviskän mielestä päivänvalo ja keinovalo ovat kaksi itsenäistä asiaa, jotka täydentävät toisiaan.",
	},
	{
		"question" : "Leiviskä on suunnitellut useita kirkkorakennuksia ja saanut sen johdosta kirkon kulttuuripalkinnon vuonna 2010. Tuomaan kirkon ohella hän on suunnitellut esimerkiksi",
		"choices" : [
					"Myyrmäen kirkon",
					"Keski-Lahden kirkon",
					"Hervannan lähiön kirkon"
					],
		"correct" : "Myyrmäen kirkon",
		"teksti" : "Myyrmäen kirkko ja seurakuntakeskus valmistui Vantaalle vuonna 1984.",
	},
	{
		"question" : "1970-luvulla arvostettiin yhä enenevässä määrin tilojen joustavuutta ja muunneltavuutta. Pyhän Tuomaan kirkossa",
		"choices" : [
					"seiniä voidaan siirrellä",
					"kirkkosalin valaistusta muutetaan kirkkovuoden liturgisen värin mukaan",
					"kirkkosalissa ei ole penkkejä, joten sinne mahtuu väkeä vaikka kuinka paljon"
					],
		"correct" : "seiniä voidaan siirrellä",
		"teksti" : "Kirkossa on yksi kirkkosali ja kaksi seurakuntasalia, joiden välillä on avattavat seinät. Kun kaikki salit yhdistetään, mahtuu tilaan kerralla jopa 560 henkeä.",
	},
	{
		"question" : "Pyhän Tuomaan kirkko on sijoitettu ympäristönsä keskeisimmälle paikalle. Se sijaitsee",
		"choices" : [
					"Oulun keskustassa",
					"lähiössä",
					"pellolla, liikenneväylien välissä"
					],
		"correct" : "lähiössä",
		"teksti" : "Tuomaan kirkko sijaitsee Puolivälinkankaan lähiössä Oulussa.",
	},
	{
		"question" : "Pyhän Tuomaan kirkon tunnelmallisissa ja valoisassa sisustuksissa on käytetty runsaasti",
		"choices" : [
					"marmoria",
					"puuta",
					"paljaita betonipintoja"
					],
		"correct" : "puuta",
		"teksti" : "Sisätilat ovat vaaleat ja niissä on käytetty paljon puuta.",
	},
	{
		"question" : "Mikä kattorakenteeseen liittyvä piirre oli 1970-luvun pientaloille ominainen?",
		"choices" : [
					"raskas räystäslinja",
					"leveät sateelta suojaavat räystäät",
					"koristekuvioiset räystäät"
					],
		"correct" : "raskas räystäslinja",
		"teksti" : "Tasakattojen yleistyttyä räystäitä lyhennettiin, mutta niitä korostettiin paksulla pituussuuntaisella lautakoteloinnilla.",
	},
	{
		"question" : "1970-luvulla kehitettiin uusia tehokkaampia rakenneratkaisuja lämmöneristämiseen. Otettiin käyttöön esimerkiksi",
		"choices" : [
					"lastulevy",
					"kaukolämpö",
					"höyrysulku"
					],
		"correct" : "höyrysulku",
		"teksti" : "Seinärakenteissa alettiin käyttää muovisia \"höyrysulkuja\", joiden oli tarkoitus estää kosteuden pääsy lämmöneristeisiin. Väärin asennetuttuina ne ovat kuitenkin aiheuttaneet paljon homeongelmia.",
	},
	{
		"question" : "Miten rakennusten ikkunat muuttuivat 1970-luvun kuluessa?",
		"choices" : [
					"ensin ikkunoita suurennettiin ja sitten pienennettiin",
					"ikkunoita alettiin valmistaa PVC-muovista",
					"tuuletusikkunat katosivat"
					],
		"correct" : "ensin ikkunoita suurennettiin ja sitten pienennettiin",
		"teksti" : "Aluksi suosittiin suuria maisemaikkunoita, mutta öljykriisin myötä energiaa yritettiin säästää pienentämällä ikkunoiden kokoa.",
	},
	{
		"question" : "Mikä julkisivumateriaali oli tyypillinen 1970-luvun pientaloissa?",
		"choices" : [
					"tiili",
					"pystylaudoitus",
					"pelti"
					],
		"correct" : "tiili",
		"teksti" : "Monissa pientaloissa käytettiin julkisivuissa tiiltä. Sitä käytettiin sekä betonielementti- että puurakenteisissa taloissa.",
	},
	{
		"question" : "1970-luvulla rakennettiin kulttuurirakennuksia verrattain vähän. Silti yksi merkittävimmistä suomalaisista kulttuurirakennuksista valmistui Helsinkiin vuonna 1976. Mistä rakennuksesta on kyse?",
		"choices" : [
					"Nykytaiteen museosta \"Kiasmasta\" Helsingissä",
					"Finlandia-talosta",
					"Kulttuuritalo \"Kulttiksesta\" Helsingissä"
					],
		"correct" : "Finlandia-talosta",
		"teksti" : "Finlandia-talo valmistui vuonna 1975 ja se jäi Alvar Aallon viimeiseksi toteutetuksi työksi.",
	},
	{
		"question" : "Nykyaikainen rakennussuojelu vakiinnutti asemansa 1970-luvulla esimerkiksi",
		"choices" : [
					"Helsingin Puu-Käpylän suojelemisen myötä",
					"Helsingin Tuomiokirkon saadessa uuden vitivalkoisen maalipinnan",
					"uuden rakennussuojelulain tullessa voimaan"
					],
		"correct" : "Helsingin Puu-Käpylän suojelemisen myötä",
		"teksti" : "1920-luvun Puu-Käpylän asuinalue sai suojelukaavan vuonna 1971. Uutta oli, että alueen asukkaat osallistuivat aktiivisesti suojelutyöhön.",
	},
	{
		"question" : "Elementtitehtaiden tuotanto /tai rakennusfirmojen rooli voimistui merkittävästi vuosikymmenen aikana. Miten tämä näkyi rakentamisessa?",
		"choices" : [
					"suunnittelijat saivat hyvän apuvälineen elementtitehtaiden monipuolisista valikoimista",
					"rakentaminen nopeutui",
					"arkkitehtien arvostus kasvoi merkittävästi"
					],
		"correct" : "rakentaminen nopeutui",
		"teksti" : "Teollisesti valmistettavien rakennusosien koko kasvoi ja elementtejä siirteleviä työmaakoneita kehitettiin entistä tehokkaammiksi. Rakentaminen nopeutui.",
	},
	{
		"question" : "Valo on Juha Leiviskälle tärkeä asia. Vuorokaudenajan mukaan vaihtelevan luonnonvalon ohella hänen arkkitehtuurinsa tunnetaan",
		"choices" : [
					"tilaa jäsentävistä lattiavalaisimista",
					"valoa eri suuntiin heijastavista riippuvalaisimista",
					"kattoon ja seiniin upotetuista dramaattisista kohdevaloista"
					],
		"correct" : "valoa eri suuntiin heijastavista riippuvalaisimista",
		"teksti" : "Leiviskän suunnittelemissa rakennuksissa on eri korkeuksille ripustetut kattolamput, jotka ikään kuin leijuvat ilmassa.",
	},
	{
		"question" : "Energiakriisi poiki 70-luvulla erilaisia kokeiluja kuten niin kutsutut \"ekotalot\", joissa oli usein",
		"choices" : [
					"kasvihuone",
					"tärkeimpänä energianlähteenä aurinkopaneelit",
					"maalämpöpumput"
					],
		"correct" : "kasvihuone",
		"teksti" : "Kasvihuoneet sijoitettiin omakotitalojen katolle kuten Harto Helpisen suunnittelemassa Vantaan messutalossa 1977.",
	},
	{
		"question" : "1970-luvun aikana toimistorakennuksiin suunniteltiin yhä useammin \"maisemakonttoreita\", mikä tarkoitti",
		"choices" : [
					"että avoin, yhtenäinen toimistotila rajattiin työpisteiksi kevyillä seinäkkeillä",
					"että työntekijöiden työskentelyolosuhteita parannettiin ikkunanäkymien avulla",
					"että työntekijöiden huoneisiin hankittiin maisemamaalauksia viihtyisyyden lisäämiseksi"
					],
		"correct" : "että avoin, yhtenäinen toimistotila rajattiin työpisteiksi kevyillä seinäkkeillä",
		"teksti" : "Maisemakonttorilla tarkoitetaan avointa toimistotilaa, joka on jaettu matalilla seinäkkeillä työpisteiksi. Hyvänä esimerkkinä tästä on Matti K. Mäkisen ja Kaarina Löfströmin Valion pääkonttori Helsingin Pitäjänmäellä (1978).",
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