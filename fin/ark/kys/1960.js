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
		"question" : "Aarno Ruusuvuori toimi suunnittelijan uransa ohella myös monessa muussa tehtävässä. Hän oli esimerkiksi",
		"choices" : [
					"Suomen rakennustaiteen museon johtaja",
					"Arkkitehti-lehden taittaja",
					"Teknillisen korkeakoulun johtaja"
					],
		"correct" : "Suomen rakennustaiteen museon johtaja",
		"teksti" : "Aarno Ruusuvuori johti Suomen rakennustaiteen museota vuosina 1975-1978 ja 1983-1988.",
	},
	{
		"question" : "Weilin & Göösin kirjapainotalon lisäksi Ruusuvuori suunnitteli lukuisia muita rakennuksia kuten esimerkiksi",
		"choices" : [
					"Turun Pyhän Ristin kappelin",
					"Roihuvuoren kansakoulun Helsinkiin",
					"Järvenpään kirkko"
					],
		"correct" : "Roihuvuoren kansakoulun Helsinkiin",
		"teksti" : "Roihuvuoren kansakoulu (1967) on Ruusuvuoren suunnittelema kaksitasoinen neliömäinen betonirakennus.",
	},
	{
		"question" : "Weilin & Göösin kirjapainotalo Tapiolassa valmistui 1964 ja sitä laajennettiin vuosina 1967 ja 1974. Laajennukset tehtiin, koska",
		"choices" : [
					"tilantarvetta ei osattu ennakoida oikein",
					"ensimmäinen rakennus oli osa suunniteltua laajempaa kokonaisuutta",
					"rakennusvalvonta oli 1960-luvulla puutteellista"
					],
		"correct" : "ensimmäinen rakennus oli osa suunniteltua laajempaa kokonaisuutta",
		"teksti" : "Ensimmäiseen osaan sijoitettiin kirjapainon latomo-, paino- ja taitto-osastot, mutta Tapiolaan oli suunnitteilla keskittää myöhemmin yrityksen koko tuotanto.",
	},
	{
		"question" : "Weilin & Göösin kirjapainotalon ensimmäinen osa oli kolmelta seinältään täysin ikkunaton. Sen sijaan luoteisseinän mahtava lasiseinä",
		"choices" : [
					"toimi linkkinä luonnon ja sisätilan välillä",
					"sulautti rakennuksen ympäröiviin betonikortteleihin",
					"päästi sisätiloihin riittävästi auringonvaloa"
					],
		"correct" : "toimi linkkinä luonnon ja sisätilan välillä",
		"teksti" : "Varjoisan luoteissivun suuri lasiseinä yhdisti sisätilan luontoon. Muut sivut olivat kuitenkin auringonvalolle herkän paperin takia miltei ikkunattomia.",
	},
	{
		"question" : "Kirjapainotalon oli oltava pohjamuodoltaan yksinkertainen, yhtenäinen ja joustava, jotta työprosessit oli mahdollista järjestää uudelleen. Tilan muunneltavuutta lisättiin",
		"choices" : [
					"siirrettävin väliseinin",
					"vähillä pystytuilla",
					"huonekorkeuksien maksimoimisella"
					],
		"correct" : "vähillä pystytuilla",
		"teksti" : "Tilan joustavuutta lisättiin mahdollisimman vähillä pystytuilla. Kirjapainosalissa oli uudenlaisen riippuvan rakenteen ansiosta vain yksi pystysuuntainen kannattaja 729 neliömetriä kohden.",
	},
	{
		"question" : "Weilin & Göösin kirjapainotalo Espoossa on kokenut useita muutoksia. Vuodesta 2006 se on toiminut kulttuurin monitoimitalo WeeGee:nä. Mittavan remontin yhteydessä",
		"choices" : [
					"vanhaan runkoon tehtiin ikään kuin uusi rakennus",
					"säilytettiin alkuperäinen huonejako",
					"kirjapainokoneet restauroitiin"
					],
		"correct" : "vanhaan runkoon tehtiin ikään kuin uusi rakennus",
		"teksti" : "Remontti aloitettiin laajoilla purku- ja louhintatöillä. Vaikka alkuperäisarkkitehtuurin piirteitä pyrittiin säilyttämään, muutostyön seurauksena rakennuksen tilat muuttuivat täysin.",
	},
	{
		"question" : "Ennen betonielementtitekniikan läpimurtoa 1960-luvun alun julkisivuissa oli tavallisemmin",
		"choices" : [
					"luonnonkiviverhous",
					"rappaus",
					"ornamentiikkaa"
					],
		"correct" : "rappaus",
		"teksti" : "1960-luvun alussa julkisivut tavallisemmin vielä rapattiin, verhottiin tiilellä tai julkisivulevyillä.",
	},
	{
		"question" : "Kaupungistumisen seurauksena oli asumiseen kehitettävä uudenlaisia ratkaisuja. Mallia otettiin muun muassa Ruotsista. Sen seurauksena",
		"choices" : [
					"lähiöiden rakentaminen käynnistyi",
					"rakennettiin pieniä keskusta-asuntoja",
					"vuokra-asuminen lisääntyi"
					],
		"correct" : "lähiöiden rakentaminen käynnistyi",
		"teksti" : "Luonnon keskelle rakennetut asumalähiöt olivat tiiviitä ja tehokkaita. Niihin muutti erityisesti lapsiperheitä.",
	},
	{
		"question" : "1960-luvulla arkkitehtuuri koki muutoksia kaikilla alueillaan. Kirkkoja rakennettaessa haluttiin korostaa kirkon yhteiskunnallista tehtävää",
		"choices" : [
					"sijoittamalla kirkko kaupungin keskustaan",
					"rakentamalla seurakunnan työkeskuksia",
					"rakentamalla kirkot osaksi umpikorttelia"
					],
		"correct" : "rakentamalla seurakunnan työkeskuksia",
		"teksti" : "1960-luvun kirkot olivat usein esikaupunkeihin rakennettuja keskuksia, joissa oli kirkkosalin lisäksi muitakin seurakuntatiloja.",
	},
	{
		"question" : "1960-luku muistetaan mitä erikoisemmista arkkitehtonisista kokeiluistaan. Esimerkiksi Matti Suuronen tuli kansainvälisesti tunnetuksi lujitemuovirakenteisella Futuro-talollaan, joka muistutti",
		"choices" : [
					"flyygeliä",
					"sylinteriä",
					"lentävää lautasta"
					],
		"correct" : "lentävää lautasta",
		"teksti" : "Ellipsoidin muotoinen rakennelma yhdistettiin oitis lentäviin lautasiin.",
	},
	{
		"question" : "1960-luvun uutuus oli betonibrutalismi, jonka suomalaiset arkkitehdit omaksuivat ulkomaisten esikuvien mukaan. Nimi liittyy rakennustekniikkaan, jossa valumuottien jäljet",
		"choices" : [
					"jätettiin näkyviin",
					"peitettiin brutaalisti",
					"silotettiin tasaiseksi"
					],
		"correct" : "jätettiin näkyviin",
		"teksti" : "Tyyliin kuului silottamaton betonipinta. Brutalismi-käsite sai alkunsa Englannissa, ja tyylin tunnetuimpia edustajia oli sveitsiläinen Le Corbusier.",
	},
	{
		"question" : "1960-luvulla ikkunat saattoivat olla usein suuriakin. Vuosikymmenen edetessä alettiin nauhaikkunariveistä vähitellen siirtyä takaisin erillisiin ikkuna-aukkoihin, sillä",
		"choices" : [
					"öljyn hinta kallistui",
					"ikkunalasi kallistui",
					"elementtitekniikka lisääntyi"
					],
		"correct" : "elementtitekniikka lisääntyi",
		"teksti" : "Erillisiin ikkuna-aukkoihin siirryttiin, koska niiden käyttö tehdasvalmisteisissa elementeissä oli huomattavasti helpompaa.",
	},
	{
		"question" : "Aarno Ruusuvuori suosi Weilin & Göösin kirjapainotalon suunnittelussaan järkiperäistä rakentamista, rationalismia. Ruusuvuoren innoituksen lähteenä oli sveitsiläisarkkitehti Le Corbusierin aforismi:",
		"choices" : [
					"\"Form follows function.\"",
					"\"Structure is the key to beauty.\"",
					"\"Less is more.\""
					],
		"correct" : "\"Structure is the key to beauty.\"",
		"teksti" : "Le Corbusier innoitti Ruusuvuorta motollaan Structure is the key to beauty – Järjestys on kauneuden avain.",
	},
	{
		"question" : "Elementtitekniikka saavutti 1960-luvulla suuren suosion asuntorakentamisessa. Täyselementtitekniikkaa käytettiin Suomessa ensimmäisen kerran",
		"choices" : [
					"Helsingin Pihlajamäessä",
					"Espoon Tapiolassa",
					"Vatialan siunauskappelissa Tampereella"
					],
		"correct" : "Helsingin Pihlajamäessä",
		"teksti" : "Ensimmäisiä ainoastaan elementtitekniikalla toteutettuja rakennuksia oli osa arkkitehti Lauri Silvennoisen suunnittelemista Pihlajamäen kerrostaloista.",
	},
	{
		"question" : "Puutalorakentamisessa 1960-lukuun liittyy",
		"choices" : [
					"valmistalojen pystyttäminen omin voimin",
					"energiatehokkuuden paraneminen",
					"mittajärjestelmät ja standardisointi"
					],
		"correct" : "mittajärjestelmät ja standardisointi",
		"teksti" : "Kansainvälisen mallin mukaan 1960-luvulla kokeiltiin tehdasvalmistukseen soveltuvia mittajärjestelmiä.",
	},
	{
		"question" : "1960-luvun alkupuolen asuinrakennuksissa suosittiin pitkiä rakennusmassoja, joita ryhdittivät linjakkaat nauhaikkunat. Betonisten julkisivuelementtien väri oli useimmin",
		"choices" : [
					"valkoinen",
					"vaaleankeltainen",
					"vihreä"
					],
		"correct" : "valkoinen",
		"teksti" : "1960-luvun kerrostalojen betonijulkisivut maalattiin yleensä valkoisella. Sokkeliosa maalattiin joko mustaksi tai tummanruskeaksi.",
	},
	{
		"question" : "1960-luvun suosituin sisutusmateriaali oli",
		"choices" : [
					"muovi",
					"mänty",
					"metalliritilät"
					],
		"correct" : "muovi",
		"teksti" : "Muoville keksittiin jatkuvasti uusia käyttökohteita ja materiaalin muovailtavuuden rajoja kokeiltiin. Muovista tehtiin muun muassa valaisimia.",
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