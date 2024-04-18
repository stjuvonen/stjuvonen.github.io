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
		"question" : "1990-luvun arkkitehtuurille tyypillistä oli pyrkimys",
		"choices" : [
					"läpinäkyvyyteen",
					"leikkisyyteen",
					"rakenteiden korostamiseen"
					],
		"correct" : "läpinäkyvyyteen",
		"teksti" : "1990-luvulla suosittiin läpinäkyvyyttä. Suurten lasipintojen väitettiin kuvastavan yhteiskunnan muuttumista avoimemmaksi. ",
	},
	{
		"question" : "1990-luvulla suunniteltujen rakennusten erityisiä piirteitä oli pyrkimys aistivoimaiseen arkkitehtuuriin. Luston arkkitehtuurille tuo lisäulottuvuuden tuoksu, jonka aiheuttaa",
		"choices" : [
					"rakennuksen puuosien pintakäsittelyssä käytetty terva",
					"pihan maisemasuunnittelulle ominaiset ruusuistutukset",
					"läheinen rämettynyt lahdenpoukama mätänevine kasveineen"
					],
		"correct" : "rakennuksen puuosien pintakäsittelyssä käytetty terva",
		"teksti" : "Luston puuosien pintakäsittelyssä on käytetty hautatervan, pellavaöljyn ja tärpätin sekoitetta, josta rakennus saa sille ominaisen tervan tuoksun.",
	},
	{
		"question" : "1990-luvun alun lama johti rakentamisessa uudenlaisiin ratkaisuihin, kuten",
		"choices" : [
					"olemassa olevien vanhojen rakennusten arvostamiseen ja hyödyntämiseen",
					"halpojen tehdasvalmisteisten elementtitalojen tuotantoon",
					"hätäratkaisuiksi tarkoitettujen telttamaisten rakennelmien suosimiseen"
					],
		"correct" : "olemassa olevien vanhojen rakennusten arvostamiseen ja hyödyntämiseen",
		"teksti" : "1990-luvulla vanhoja rakennuksia, kuten käyttämättömäksi jääneitä tehtaita, muutettiin uusiin käyttötarkoituksiin. Esimerkiksi Lasipalatsi Helsingissä muutettiin mediakeskukseksi.",
	},
	{
		"question" : "1990-luvulla suunniteltiin paljon kulttuurirakennuksia, joista tunnetuimpia on 1998 Helsinkiin valmistunut nykytaiteen museo Kiasma. Rakennuksen on suunnitellut",
		"choices" : [
					"yhdysvaltalainen Steven Holl",
					"Alvar Aalto",
					"japanilainen Kazuo Shinohara"
					],
		"correct" : "yhdysvaltalainen Steven Holl",
		"teksti" : "Steven Hollin veistoksellinen ehdotus ”Chiasma” voitti kansainvälisen arkkitehtuurikilpailun, johon jätettiin yhteensä 516 ehdotusta.",
	},
	{
		"question" : "1990-luvun alun lamavuosien jälkeen yritykset panostivat jälleen näyttävään toimistoarkkitehtuuriin. Aikakauden toimistoarkkitehtuurin päämateriaaleja olivat",
		"choices" : [
					"lasi ja teräs",
					"tiili ja kupari",
					"puu ja betoni"
					],
		"correct" : "lasi ja teräs",
		"teksti" : "1990-luvulla toimistorakentamisessa suosittiin lasia ja terästä. Esimerkiksi Nokian pääkonttori Espoon Keilaniemessä ja Sanoma Oy:n pääkonttori Sanomatalo Helsingin keskustassa ovat erinomaisia esimerkkejä aikakauden toimistoarkkitehtuurista.",
	},
	{
		"question" : "Nimen \"Lusto\" metsäkeskus on saanut",
		"choices" : [
					"puun vuosirengasta merkitsevän sanan mukaan",
					"havupuissa viihtyvän kuoriaisen mukaan",
					"muinaisen kivistä sommitellun labyrinttikuvion mukaan"
					],
		"correct" : "puun vuosirengasta merkitsevän sanan mukaan",
		"teksti" : "Lusto tarkoittaa puukerrosta, joka vuodessa kasvaa puun kuoren alle. Lusto oli myös metsäkeskuksesta käydyn arkkitehtuurikilpailun voittaneen ehdotuksen nimimerkki.",
	},
	{
		"question" : "Ilmari Lahdelman ja Rainer Mahlamäen toimisto suunnitteli 1990-luvulla Luston lisäksi myös toisen merkittävän kulttuurirakennuksen maaseutupaikkakunnalle. Rakennus on",
		"choices" : [
					"Kaustisten kansantaidekeskus Keski-Pohjanmaalla",
					"Suomen esihistoriaa esittelevä Kierikkikeskus Yli-Iissä Pohjois-Pohjanmaalla",
					"Kalevalan ja karjalaisen kulttuurin informaatiokeskus Juminkeko Kuhmossa Kainuussa"
					],
		"correct" : "Kaustisten kansantaidekeskus Keski-Pohjanmaalla",
		"teksti" : "Lahdelman ja Mahlamäen toimisto suunnitteli Kaustisten kansantaiteenkeskuksen. Rakennus on suurelta osin louhittu kallion sisään, jotta se sopeutuisi pienimuotoiseen kirkonkylään.",
	},
	{
		"question" : "Metsämuseo Luston toisiaan täydentävät materiaalit ovat betoni ja puu. Luston puumateriaalina on käytetty",
		"choices" : [
					"mäntyä, lehtikuusta ja tervaleppää",
					"painekyllästettyä puuta",
					"tiikkiä, mahonkia ja merbauta"
					],
		"correct" : "mäntyä, lehtikuusta ja tervaleppää",
		"teksti" : "Luston arvokkaimmissa osissa on käytetty lehtikuusta, sen sijaan esimerkiksi näyttelytilojen seinät ovat mäntylautaa. Kaiteet ovat tervaleppää.",
	},
	{
		"question" : "Luonnonkauniin Punkaharjun kansallismaisemaan rakennetun Metsämuseo Luston piha oli aiemmin",
		"choices" : [
					"tukkipuun läjitysalue",
					"lehmien laitumena käytetty rantalepikkö",
					"rämettynyt lahdenpoukama, joka täytettiin"
					],
		"correct" : "tukkipuun läjitysalue",
		"teksti" : "Luston piha toimi aiemmin tukkipuun läjitysalueena, ja nykyisin rakennuksen vieressä oleva allas oli rämettynyt lahdenpoukama.",
	},
	{
		"question" : "1990-luvulla rakennettuja ja remontoituja kerrostaloasuntoalueita yhdisti tyypillinen muoti-ilmiö. Mikä se mahtaa olla?",
		"choices" : [
					"parvekelasitukset",
					"harjakatot",
					"pastellisävyt"
					],
		"correct" : "parvekelasitukset",
		"teksti" : "1990-luvulla parvekelasituksista tuli nopeasti hyvin haluttuja. Parvekkeilla oli aiempaa paljon enemmän käyttöä, koska lasit suojasivat niitä lumelta ja sateelta.",
	},
	{
		"question" : "Suomi osallistui vuoden 1992 Sevillan maailmannäyttelyyn kahdesta erillisestä rakennusosasta koostuvalla paviljongilla, jonka nimeksi annettiin Helvetinkolu. Miten nimi näkyy paviljongin arkkitehtuurissa?",
		"choices" : [
					"paviljongin kahden rakennusosan väliin jää niitä yhdistävä kuilumainen välitila, joka nimettiin Helvetinkoluksi",
					"näyttelypaviljongin seinille maalattiin pieniä pirunkuvia",
					"paviljongin arkkitehtuurilla tavoiteltiin uhkaavaa vaikutelmaa lakkaamalla toisen rakennusosan julkisivuja päällystävät teräslevyt mustiksi"
					],
		"correct" : "paviljongin kahden rakennusosan väliin jää niitä yhdistävä kuilumainen välitila, joka nimettiin Helvetinkoluksi",
		"teksti" : "Nimi tulee Ruovedellä sijaitsevasta rotkomuodostelmasta.",
	},
	{
		"question" : "Vuoden 1997 asuntomessut järjestettiin Raisiossa. Miten nimet Killi ja Nalli liittyvät messuihin?",
		"choices" : [
					"Killi ja Nalli ovat arkkitehti Teemu Kurkelan messualueelle suunnittelemat asuinrakennukset",
					"Killi ja Nalli olivat asuntomessujen maskottikissa ja -koira",
					"Killi ja Nalli on asuntomessualueella sijaitsevan Harry Kivijärven veistoksen nimi, joka kuvaa jättiläisiä Killi ja Nalli, jotka kansanrunon mukaan rakensivat Raision kirkon"
					],
		"correct" : "Killi ja Nalli ovat arkkitehti Teemu Kurkelan messualueelle suunnittelemat asuinrakennukset",
		"teksti" : "Killi ja Nalli ovat Teemu Kurkelan messualueelle suunnittelemat asuinrakennukset. Rakennusten nimet tulevat kansanrunosta, jonka mukaan jättiläiset Killi ja Nalli rakensivat Raision kirkon.",
	},
	{
		"question" : "Vuosikymmenen lopulla kerrostalorakentamisessa tehtiin uusia kokeiluja. Aikakauden merkittävin uutuus oli",
		"choices" : [
					"puukerrostalot",
					"tornitalorakentaminen",
					"muovielementtikerrostalot"
					],
		"correct" : "puukerrostalot",
		"teksti" : "Vuosikymmenen jälkipuoliskolla kahdeksalle paikkakunnalle rakennettiin parikymmentä 3–4-kerroksista puukerrostaloa.",
	},
	{
		"question" : "1990-luvulla kiinnitettiin huomiota katuympäristöjen viihtyisyyteen. Esimerkiksi kadunkalusteiden laatuun panostettiin. Mikä kaluste saavutti erityistä suosiota Suomen kaupungeissa?",
		"choices" : [
					"City-roskakori",
					"tyyppikioski eli useisiin eri käyttötarkoituksiin soveltuva kioskimalli",
					"pysäkkikatos"
					],
		"correct" : "City-roskakori",
		"teksti" : "Muotoilija Hannu Kähönen suunnitteli vuonna 1990 City-roskakorin alun perin Helsinkiin, mistä se levisi nopeasti ympäri Suomea.",
	},
	{
		"question" : "1990-luvun alun laman vuoksi arkkitehteja jäi paljon työttömäksi. Miten arkkitehdit pyrkivät selviytymään tilanteesta?",
		"choices" : [
					"arkkitehdit etsivät työtilaisuuksia ulkomailta",
					"arkkitehdit alkoivat työskennellä ilman palkkaa ja pyrkivät näin houkuttelemaan asiakkaita",
					"arkkitehdit vaihtoivat alaa ja alkoivat työskennellä esimerkiksi kuvataiteilijoina, näyttelijöinä ja muusikoina"
					],
		"correct" : "arkkitehdit etsivät työtilaisuuksia ulkomailta",
		"teksti" : "Suomalaiset arkkitehdit osallistuivat 1990-luvun alussa menestyksekkäästi kansainvälisiin kilpailuihin.",
	},
	{
		"question" : "1990-luvun toimistoarkkitehtuurin muoti-ilmiö oli niin sanottu kaksoisjulkisivu. Mitä tällä tarkoitetaan?",
		"choices" : [
					"kaksinkertaista ulkoseinää, jossa metallikehikkoisten lasipintojen väliin jää ilmarako",
					"sitä, että kahdessa vierekkäisessä rakennuksessa on samanlaiset julkisivut",
					"julkisivua, jonka alaosa on esimerkiksi kiveä ja yläosa lasia"
					],
		"correct" : "kaksinkertaista ulkoseinää, jossa metallikehikkoisten lasipintojen väliin jää ilmarako",
		"teksti" : "Kaksoisjulkisivu tarkoittaa kaksinkertaista ulkoseinää, jossa metallikehikkoisten lasipintojen väliin jää ilmarako. Kaksoisjulkisivut rakennettiin ensimmäisen kerran Suomessa Nokian pääkonttoriin 1997.",
	},
	{
		"question" : "Ilmari Lahdelman ja Rainer Mahlamäen toimisto on menestynyt myös kansainvälisesti. Merkittävän kansainvälisen kilpailun toimisto voitti 2005. Mikä rakennus oli kyseessä?",
		"choices" : [
					"Puolanjuutalaisten museo Varsovassa",
					"Pariisin Eiffel-tornin restaurointi",
					"Toronton kaupungintalo Kanadassa"
					],
		"correct" : "Puolanjuutalaisten museo Varsovassa",
		"teksti" : "Lahdelma ja Mahlamäki voittivat Varsovan Puolanjuutalaisten museon suunnittelukilpailun. Museorakennus valmistui 2012 paikalle, joka toisen maailmansodan aikana oli osa Varsovan juutalaisghettoa.",
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