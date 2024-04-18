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
		"question" : "Suomessa 1900-luvun alun art nouveau -rakennusten julkisivuissa käytettiin useimmiten",
		"choices" : [
					"lasia ja metallia",
					"luonnonkiveä ja rappausta",
					"tiili- ja betonielementtejä"
					],
		"correct" : "luonnonkiveä ja rappausta",
		"teksti" : "Art nouveau –rakennuksissa pyrittiin aitojen materiaalien käyttöön ja luonnonkivi oli erityisen suosittua, taloudellisista syistä sitä yhdistettiin usein rappaukseen",
	},
	{
		"question" : "Millainen katto oli 1900-luvun alun art nouveau -rakennukselle tyypillinen?",
		"choices" : [
					"korkea monimuotoinen katto, jonka räystäslinjaa tornit ja päädyt rikkovat",
					"tasakatto, jonka päälle voitiin sijoittaa kattopuutarha",
					"loiva harjakatto, jonka räystäslinja on yhtenäinen ja ehjä"
					],
		"correct" : "korkea monimuotoinen katto, jonka räystäslinjaa tornit ja päädyt rikkovat",
		"teksti" : "Katolla haluttiin luoda rakennukselle näyttävä rajaviiva ja luoda vaihtelevaa kaupunkikuvaa",
	},
	{
		"question" : "Minkälaisia ikkunoita art nouveau –rakennuksissa suosittiin?",
		"choices" : [
					"suorakaiteen muotoisia, kuusiruutuisia ikkunoita",
					"nauhaikkunoita",
					"monimuotoisia ikkunoita, joiden yläosa oli pieniruudutettu"
					],
		"correct" : "monimuotoisia ikkunoita, joiden yläosa oli pieniruudutettu",
		"teksti" : "Art nouveau -rakennusten ikkunat ovat monimuotoisia, usein holvattuja ja tavallisesti vain ikkunan yläosa on ruudutettu.",
	},
	{
		"question" : "Minkälainen ornamentiikka oli tyypillistä art nouveau –rakennuksissa?",
		"choices" : [
					"ornamenttejä ei käytetty ollenkaan",
					"kasvi- ja eläinaiheinen ornamentiikka",
					"säännönmukainen klassistinen, esimerkiksi akanthusaiheinen, ornamentiikka"
					],
		"correct" : "kasvi- ja eläinaiheinen ornamentiikka",
		"teksti" : "Art nouveau -rakennuksissa suosittiin varsinkin eläin- ja kasviornamentiikkaa",
	},
	{
		"question" : "Kansallismuseo sijaitsee Helsingissä",
		"choices" : [
					"Töölössä Mannerheimintien varrella",
					"Tähtitorninvuorella",
					"Rautatientorin varrella"
					],
		"correct" : "Töölössä Mannerheimintien varrella",
		"teksti" : "Museo sai 1898 tontin Töölöstä, minne suunniteltiin uutta kaupunginosaa.",
	},
	{
		"question" : "Kansallismuseon suunnitteluhistoria kesti",
		"choices" : [
					"n. 15 vuotta",
					"n. 30 vuotta",
					"n. 45 vuotta"
					],
		"correct" : "n. 30 vuotta",
		"teksti" : "Esivaiheessa 1887–1899 museota suunniteltiin Yleisten rakennusten ylihallituksessa, kilpailu julistettiin 1901, Gesellius, Lindgren, Saarisen pääpiirustukset valmistuivat 1904, talo rakennettiin 1906–10 ja avattiin yleisölle 1916.",
	},
	{
		"question" : "Millaisen periaatteen mukaan Kansallismuseon rakennus rakennettiin?",
		"choices" : [
					"rakennuksessa käytettiin eurooppalaisessa museoarkkitehtuurissa perinteistä \"palatsityyliä\"",
					"Kansallismuseo koostuu useasta puistossa vapaasti seisovasta paviljongista.",
					"Museorakennuksen sovellettiin ns. yhteenliittämis- eli agglomeraatioperiaatetta"
					],
		"correct" : "Museorakennuksen sovellettiin ns. yhteenliittämis- eli agglomeraatioperiaatetta",
		"teksti" : "Ns. agglomeraatioperiaate merkitsee että esineet haluttiin esille mahdollisimman aitoon miljööseen. Esimerkiksi kirkolliset esineitä varten suunniteltiin kirkkosali, aseet sijoitettiin asehuoneeseen. Ulkoarkkitehtuurissa eri osat saivat toisistaan poikkeavan muodon.",
	},
	{
		"question" : "1900-luvun alun nuoret arkkitehdit kannattivat museoarkkitehtuurissa ns. agglomeraatiojärjestelmää koska se teki mahdolliseksi",
		"choices" : [
					"luoda kaupunkikuvaan vapaasti seisovien viehättävien paviljonkirakennusten tiivis ryhmä",
					"luoda kaupunkikuvaan vaikuttavaa monumentaaliarkkitehtuuria symmetrisine julkisivuineen",
					"luoda kaupunkikuvaan maalauksellisia volyymiryhmittelyjä ja siluetteja"
					],
		"correct" : "luoda kaupunkikuvaan maalauksellisia volyymiryhmittelyjä ja siluetteja",
		"teksti" : "Agglomeraatiojärjestelmän mukaan eri aikakausia edustavat osastot erotettiin toisistaan niin että kukin sai arkkitehtonisesti tunnistettavan, toisista poikkeavan muodon, joka kertoo sen sisällöstä",
	},
	{
		"question" : "1900-luvun alun museoväki suosi agglomeraatiojärjestelmää koska se teki mahdolliseksi",
		"choices" : [
					"saada kokoelmat pikaisesti esille",
					"luoda pedagogisesti tehokkaita ja tunnelmallisia näyttelytiloja",
					"sijoittaa esineet kronologiseen järjestykseen pitkiksi jonoiksi järjestettyihin saleihin neutraalia taustaa vasten, jolloin ne puhuivat itse puolestaan"
					],
		"correct" : "luoda pedagogisesti tehokkaita ja tunnelmallisia näyttelytiloja",
		"teksti" : "Sillä agglomeraatiojärjestelmässä sijoitettiin erityyppisiä tiloja peräkkäin ja rakennuksessa voitiin käyttää kokoelman luonnetta vastaavia monia eri tyylejä. Kokonaistunnelma  oli yksittäisiä esineitä tärkeämpi.",
	},
	{
		"question" : "Museon peruskivi muurattiin 18. kesäkuuta 1906. Tilaisuudessa puhui senaattori Leo Mechelin. Perustukseen muurattiin",
		"choices" : [
					"tuolloin Suomessa käytössä olleet metallirahat",
					"kolmekymmentä hopearahaa",
					"vanha ruotsinvallanaikainen kupariplootu"
					],
		"correct" : "tuolloin Suomessa käytössä olleet metallirahat",
		"teksti" : "Perustukseen muurattuun koteloon laitettiin peruskirjan lisäksi yksi kolikko kutakin tuolloin käytössä ollutta kulta-, hopea- ja kuparirahaa.",
	},
	{
		"question" : "Kansallismuseo on kuuluisan arkkitehtikolmikon Gesellius, Lindgren ja Saarinen suunnittelema. Kolmikon työjako oli seuraavanlainen:",
		"choices" : [
					"Kolmikon yhteistyö museon suunnittelussa oli saumatonta",
					"Arkkitehdeista kuuluisin, Eliel Saarinen, oli museon itseoikeutettu pääsuunnittelija",
					"Kansallismuseon keskeisin suunnittelija oli Armas Lindgren"
					],
		"correct" : "Kansallismuseon keskeisin suunnittelija oli Armas Lindgren",
		"teksti" : "Museon pääpiirustukset valmistuivat 1904, mutta kolmikon yhteistyö loppui jo 1905. Museohankkeen parissa ja 1890-luvulta lähtien työskennellyt Armas Lindgren vastasi tämän jälkeen rakennusvaiheen aikaisesta suunnittelusta. Museosta tuli Lindgrenin nuoruuden päätyö.",
	},
	{
		"question" : "Rakennuksen pohjakaavalle on ominaista että",
		"choices" : [
					"rakennukseen liitty moneen suuntaan haaroittuvia siipirakennuksia, joita yhdistää keskushalli",
					"monimuotoinen rakennus jäsentyy keskushallin ja kahden sisäpihan ympärille",
					"suorakaiteen muotoisen symmetrisen rakennuksen keskelle jää suuri sisäpiha"
					],
		"correct" : "monimuotoinen rakennus jäsentyy keskushallin ja kahden sisäpihan ympärille",
		"teksti" : "Museon kehittymistä sisäpihojen ympärille voidaan seurata Armas Lindgrenin luonnoskirjoista",
	},
	{
		"question" : "Rakennuksen luonnonkiviverhouksessa käytetty limitystapa on nimeltään",
		"choices" : [
					"Squared rubble –muuraus",
					"Keskiaikainen verkkomuuraus",
					"Kvaaderimuuraus"
					],
		"correct" : "Squared rubble –muuraus",
		"teksti" : "Squared rubble –muuraus omaksuttiin Skotlannista, jonne tehtiin opintomatkoja. Limitystapa oli taloudellinen, sillä siinä voitiin käyttää hyväksi erikokoiset kivet. Tuloksena oli tavoiteltu vaihteleva ja maalauksellinen seinäpinta",
	},
	{
		"question" : "Kansallismuseon linnanpihan seinät verhottiin",
		"choices" : [
					"Rappauksella",
					"Tiilellä",
					"Luonnonkivellä"
					],
		"correct" : "Rappauksella",
		"teksti" : "Alkuaan tiilipintaiset seinät jouduttiin rappaamaan koska sää uhkasi turmella tiilipinnan",
	},
	{
		"question" : "Museon pääsisäänkäyntiä korostava tornissa on käytetty useita eri materiaalia. Sen",
		"choices" : [
					"alaosa on verhottu graniitilla, yläosa vuolukivellä ja kattopinnat tiilellä",
					"alaosa on verhottu graniitilla, yläosa tiilellä ja kattopinnat kuparipellillä",
					"alaosa on verhottu vuolukivellä, yläosa tiilellä ja kattopinnat liuskekivellä"
					],
		"correct" : "alaosa on verhottu graniitilla, yläosa tiilellä ja kattopinnat kuparipellillä",
		"teksti" : "Tornin alalosa on Uudenkaupungin harmaata graniittia, yläosa tiiltä ja kattopinnat kuparipeltiä",
	},
	{
		"question" : "Museon sisäänkäyntiä koristaa kuvanveistäjä Emil Wikströmin käsialaa oleva eläinveistos, joka esittää",
		"choices" : [
					"Hirveä",
					"Karhua",
					"Sutta"
					],
		"correct" : "Karhua",
		"teksti" : "Karhuaihetta toimisto Gesellius, Lindgren, Saarinen oli käyttänyt jo Pariisin paviljongissa 1900",
	},
	{
		"question" : "Museon suuren ristiholvatun keskushallin holvikaaret ovat",
		"choices" : [
					"suippokaariset",
					"pyörökaariset",
					"hevosenkenkäkaariset"
					],
		"correct" : "pyörökaariset",
		"teksti" : "Vuoden 1904 pääpiirustusten suippokaariset holvit muutettiin 1905–06 pyörökaarisiksi",
	},
	{
		"question" : "Keskushallin freskot maalasi Akseli Gallen-Kallela, joka otti aiheet",
		"choices" : [
					"Kalevalasta",
					"Seitsemästä veljeksestä",
					"Raamatusta"
					],
		"correct" : "Kalevalasta",
		"teksti" : "Freskojen oli tarkoitus esittää Suomen neljää pääelinkeinoa: maanviljelystä, metsästystä ja kalastusta, kauppaa sekä teollisuutta. Aiheet ovat \"Sammon taonta\", \"Sammon ryöstö\", \"Suuren hauen pyynti\" ja \"Ilmarinen kyntää kyisen pellon\"",
	},
	{
		"question" : "Gallen-Kallela maalasi museon keskushallin holvivaippoihin freskot. Hän oli aiemmin toteuttanut samanaiheiset freskot erääseen toiseen rakennukseen. Kyseessä oli",
		"choices" : [
					"Tampereen tuomiokirkko",
					"Vakuutusyhtiö Pohjolan toimitalo",
					"Pariisin paviljonki"
					],
		"correct" : "Pariisin paviljonki",
		"teksti" : "Vuoden 1900 Pariisin maailmannäyttelyssä ollut toimiston Gesellius, Lindgren, Saarinen Suomen suunnittelema paviljonki Gallen-Kallelan maalaamine freskoineen oli koko keskushallin tilallinen lähtökohta. Museon keskushallin freskot valmistuivat varojen puutteessa vasta 1928",
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

