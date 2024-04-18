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
		"question" : "1980-luvulla uusi ilmiö arkkitehtuurissa oli nk. \"postmoderni\". Sen tunnistaa",
		"choices" : [
					"leikillisyydestä ja yksilöllisyyden korostamisesta",
					"nauhaikkunoista ja valkoiseksi rapatuista seinistä",
					"yksinkertaisuudesta ja symmetrisyydestä"
					],
		"correct" : "leikillisyydestä ja yksilöllisyyden korostamisesta",
		"teksti" : "1980-luvulla arkkitehtuurissa leikiteltiin historiallisilla tyylilainoilla ja monimuotoisuudella.",
	},
	{
		"question" : "Miten ekologisuus näkyi 1980-luvun rakennuksissa?",
		"choices" : [
					"ekologisuutta ei suosittu 1980-luvulla",
					"kerrostaloihin rakennettiin aurinkopaneeleja",
					"kerrostalojen parvekkeet lasitettiin"
					],
		"correct" : "ekologisuutta ei suosittu 1980-luvulla",
		"teksti" : "1970-luvun energiakriisin helpotuttua alettiin julkisiin rakennuksiin tehdä suuria lasikatteita ja -seiniä ja kerrostaloihin huoneistokohtaiset saunat.",
	},
	{
		"question" : "1980-luvulla oli uutta, että betoniset julkisivuelementit värjättiin. Väreinä käytettiin:",
		"choices" : [
					"pastellin sävyjä",
					"kirkkaita perusvärejä",
					"maavärejä"
					],
		"correct" : "pastellin sävyjä",
		"teksti" : "1980-luvulla muodissa olivat pastellisävyt. Erityisesti vaaleansininen ja vaaleanpunainen olivat suosittuja.",
	},
	{
		"question" : "Vuosikymmenen uusi rakennustyyppi oli:",
		"choices" : [
					"kauppakeskus",
					"parkkihalli",
					"uimahalli"
					],
		"correct" : "kauppakeskus",
		"teksti" : "Vuosikymmenen puolivälissä valmistuneet Itäkeskus ja Forum Helsingissä olivat pienoiskaupunkia muistuttavien kauppakeskusten edelläkävijöitä.",
	},
	{
		"question" : "Päiväkoti Taikurinhatun lisäksi tunnettu arkkitehtipariskunta Raili ja Reima Pietilä on suunnitellut:",
		"choices" : [
					"Tampereen pääkirjaston \"Metson\"",
					"Eduskuntatalon",
					"Olavinlinnan"
					],
		"correct" : "Tampereen pääkirjaston \"Metson\"",
		"teksti" : "Pietilöiden 1983–1986 suunnitteleman kirjaston pohjakaava muistutti luonnosvaiheessa metso-lintua.",
	},
	{
		"question" : "Uusia päiväkoteja rakennettiin 1980-luvulla paljon, koska",
		"choices" : [
					"tavoitteena oli tarjota kaikille halukkaille päiväkotipaikka",
					"oli niin paljon ylimääräistä rahaa",
					"koska syntyi niin paljon lapsia"
					],
		"correct" : "tavoitteena oli tarjota kaikille halukkaille päiväkotipaikka",
		"teksti" : "Uusia päiväkoteja rakennettiin, koska tavoitteena oli tarjota kaikille halukkaille päiväkotipaikka. Päiväkodeissa ryhdyttiin myös järjestämään esikouluopetusta.",
	},
	{
		"question" : "Päiväkoti Taikurinhattu on saanut nimensä:",
		"choices" : [
					"Tove Janssonin muumikirjasta",
					"Harry Potter -kirjoista",
					"Wolfgang Amadeus Mozartin 1791 säveltämästä oopperasta"
					],
		"correct" : "Tove Janssonin muumikirjasta",
		"teksti" : "Tove Jansson kirjoittama kirja \"Taikurin hattu\" ilmestyi vuonna 1948. Taikurinhatussa on myös Tove Janssonin muumi-aiheisia seinämaalauksia.",
	},
	{
		"question" : "Taikurinhattu sijaitsee Porin kaupungissa, joka on perustettu:",
		"choices" : [
					"vuonna 1558",
					"vuonna 1827",
					"vuonna 1917"
					],
		"correct" : "vuonna 1558",
		"teksti" : "Kaupunki perustettiin Suomen länsirannikolle, lähelle Ulvilan kaupunkia 1558.",
	},
	{
		"question" : "1980-luvulla päiväkotien viihtyisyyttä lisättiin usein:",
		"choices" : [
					"rakentamalla avotakka",
					"sijoittamalla karkkiautomaatti ala-aulaan",
					"asentamalla liukuportaat"
					],
		"correct" : "rakentamalla avotakka",
		"teksti" : "Päiväkotien viihtyisyyttä ja kodikkuutta lisättiin yhteistiloihin rakennetuilla avotakoilla. Myös päiväkoti Taikurinhatun satujenlukuhuoneessa on avotakka.",
	},
	{
		"question" : "Kotien sisustuksissa suosittiin 1980-luvulla:",
		"choices" : [
					"valkoista väriä",
					"muovia",
					"maalaamatonta puuta"
					],
		"correct" : "valkoista väriä",
		"teksti" : "1970-luvun voimakkaiden sisustusvärien jälkeen 1980-luvun trendikodin suosikkiväri oli valkoinen.",
	},
	{
		"question" : "1980-luvulla rakennetut päiväkodit olivat useimmiten:",
		"choices" : [
					"matalia puurakennuksia",
					"kaksikerroksisia punatiilitaloja",
					"harjakattoisia pyöröhirsitaloja"
					],
		"correct" : "matalia puurakennuksia",
		"teksti" : "Yksikerroksiset puurakennukset pystytettiin usein rauhalliselle luonnonläheiselle paikalle. Myös Taikurinhattu on pääosin yksikerroksinen puurakennus.",
	},
	{
		"question" : "Päiväkoti Taikurinhatun lisäksi Porissa sijaitsee toinen postmodernismia edustava merkkirakennus. Rakennus on:",
		"choices" : [
					"Kauppakeskus BePop",
					"Malmin postitalo",
					"Konserttitalo FreeJAZZ"
					],
		"correct" : "Kauppakeskus BePop",
		"teksti" : "Kauppakeskus BePop on parhaita esimerkkejä postmodernista arkkitehtuurista Suomessa ja sen on suunnitellut arkkitehtitoimisto Nurmela-Raimoranta-Tasa.",
	},
	{
		"question" : "Raili ja Reima Pietilä voittivat 1983 tasavallan presidentin virka-asunnosta pidetyn kilpailun. Heidän ehdotuksensa nimimerkki oli:",
		"choices" : [
					"\"Kiillemoreeni\"",
					"\"Pikku Myy\"",
					"\"Villa Koivisto\""
					],
		"correct" : "\"Kiillemoreeni\"",
		"teksti" : "Pietilöiden käyttämä nimimerkki oli \"Kiillemoreeni\". Sana tarkoittaa jäätikön synnyttämää maalajia.",
	},
	{
		"question" : "Reima Pietilän oppilaat Oulun yliopistosta muodostivat 1980-luvulla arkkitehtiryhmän, joka tunnettiin nimellä \"Oulun koulu\". Ryhmä on tunnettu niin sanotusta regionalismista, millä tarkoitetaan",
		"choices" : [
					"paikallisen rakennusperinteen, materiaalien ja \"paikan hengen\" korostamista",
					"tyylisuuntaa, joka sai vaikutteita antiikin Roomasta",
					"pyhää rakennusta"
					],
		"correct" : "paikallisen rakennusperinteen, materiaalien ja \"paikan hengen\" korostamista",
		"teksti" : "Oulun koulu on tunnettu paikallisuutta korostavasta arkkitehtuuristaan.",
	},
	{
		"question" : "Raili ja Reima Pietilä ovat suunnitellet rakennuksia myös ulkomaille. Niistä on toteutettu:",
		"choices" : [
					"Suomen suurlähetystö New Delhiin",
					"Satelliitti- ja puhelinyhtiön pääkonttori Washington D.C:ssä",
					"Monitoimikeskus Monte Carloon"
					],
		"correct" : "Suomen suurlähetystö New Delhiin",
		"teksti" : "Pietilöiden suunnittelema suurlähetystörakennus valmistui 1985. Toteutus viivästyi yli kahdellakymmenellä vuodella, sillä rakennuksesta pidettiin kilpailu jo 1963.",
	},
	{
		"question" : "Tunnettu taidegraafikko Tuulikki Pietilä oli Reima Pietilän:",
		"choices" : [
					"sisko",
					"täti",
					"serkku"
					],
		"correct" : "sisko",
		"teksti" : "Tuulikki Pietilä oli Reima Pietilän sisko.",
	},
	{
		"question" : "Raili ja Reima Pietilä suunnittelivat myös kirkkoja. Tunnetuin niistä on:",
		"choices" : [
					"Kalevan kirkko Tampereella",
					"Temppeliaukion kirkko Helsingissä",
					"Lakeuden Risti -kirkko Seinäjoella"
					],
		"correct" : "Kalevan kirkko Tampereella",
		"teksti" : "Pietilöiden läpimurtotyö Tampereen Kalevan kirkko valmistui 1966.",
	},
	{
		"question" : "Millä keinoin Reima Pietilä loi Taikurinhatusta lapsille miellyttävän ympäristön?",
		"choices" : [
					"hän huomioi suunnittelussa mahdollisimman hyvin lasten mittakaavan",
					"hän käytti rakennuksessa leikittelevää postmodernia tyyliä",
					"hän järjesti ensin kyselytutkimuksen lasten tarpeista"
					],
		"correct" : "hän huomioi suunnittelussa mahdollisimman hyvin lasten mittakaavan",
		"teksti" : "Pietilän mukaan päiväkotien suunnittelijoiden tulisi istua lattialle ja tarkastella maailmaa lasten perspektiivistä.",
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