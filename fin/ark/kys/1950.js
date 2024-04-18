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

var kys6 = [
	{
		"question" : "Rovaniemen yhteislyseon nykyinen nimi on",
		"choices" : [
					"Lyseonpuiston lukio",
					"Rovaniemen ala-aste",
					"Rovaniemen kauppaoppilaitos"
					],
		"correct" : "Lyseonpuiston lukio",
		"teksti" : "Rovaniemen yhteislyseon nykyinen nimi on Lyseonpuiston lukio.",
	},
	{
		"question" : "Rovaniemen lyseon suunnittelija arkkitehti Jorma Järvi tunnetaan parhaiten",
		"choices" : [
					"Helsingin pääpostin suunnittelijana",
					"Olympiastadionin suunnittelijana",
					"Eduskuntatalon suunnittelijana"
					],
		"correct" : "Helsingin pääpostin suunnittelijana",
		"teksti" : "Jorma Järvi suunnitteli pääpostin yhdessä arkkitehti Erik Lindroosin kanssa voitettuaan rakennuksesta pidetyn kilpailun 1934. Postitalo valmistui Mannerheimintien varteen 1938.",
	},
	{
		"question" : "Kouluja tyypitellään usein sen mukaan, miten niiden tilat on järjestetty. Rovaniemen yhteislyseo edustaa",
		"choices" : [
					"Keskushallityyppiä",
					"Sivukäytävätyyppiä",
					"Keskuskäytävätyyppiä"
					],
		"correct" : "Keskushallityyppiä",
		"teksti" : "Rovaniemen yhteislyseo on ns. hallikoulu. Koulussa on kolmikerroksinen avoin keskushalli, jonka ympärille luokkahuoneet sijoittuvat.",
	},
	{
		"question" : "Rovaniemen yhteislyseo on",
		"choices" : [
					"kapea ja korkea yhtenäinen rakennus",
					"sijoitettu kahteen erilliseen rakennukseen",
					"sijoitettu kolmeen erikorkuiseen rakennussiipeen, jotka ovat yhteydessä toisiinsa"
					],
		"correct" : "sijoitettu kolmeen erikorkuiseen rakennussiipeen, jotka ovat yhteydessä toisiinsa",
		"teksti" : "Kolmikerroksisessa päärakennuksessa on opetustilat, siitä erillään on yksikerroksinen voimistelusalisiipi. Osia yhdistää matala siipi, jossa on ruokala.",
	},
	{
		"question" : "1950-luvulla kaupunkiasunnoissa oli",
		"choices" : [
					"erilliset kylpyhuone ja wc",
					"yhdistetty kylpyhuone ja wc",
					"huoneistokohtaiset saunat"
					],
		"correct" : "yhdistetty kylpyhuone ja wc",
		"teksti" : "Tilan säästämiseksi wc ja kylpyhuone oli yhdistetty.",
	},
	{
		"question" : "Arkkitehti Jorma Järvi oli matemaattisesti lahjakas ja sovelsi rakennuksissaan erilaisia geometrisia muotoja. Yksi hänen suosimistaan aiheista oli",
		"choices" : [
					"Tasakylkinen kolmio, koska hän ihaili Egyptin pyramideja",
					"Tähtikuvio, koska hän oli kiinnostunut tähtitieteestä",
					"Kuusikulmio"
					],
		"correct" : "Kuusikulmio",
		"teksti" : "Jorma Järvi käytti kuusikulmiota monipuolisesti arkkitehtuurissaan. Esimerkiksi 1957 valmistuneessa Tapiolan yhteiskoulussa on pihan puolelle sijoitetut, kuusikulmion muotoiset erikoisluokat.",
	},
	{
		"question" : "1950-luvulla asuinrakennusten julkisivuissa",
		"choices" : [
					"oli sileä rappaus",
					"betoni- ja tiilipinnat jätettiin sellaisenaan näkyviin",
					"rappaukseen yhdistettiin erilaisia materiaaleja kuten poimupeltiä, klinkkeriä ja mineriittiä"
					],
		"correct" : "rappaukseen yhdistettiin erilaisia materiaaleja kuten poimupeltiä, klinkkeriä ja mineriittiä",
		"teksti" : "1950-luvulla kokeiltiin innokkaasti uusia rakennusmateriaaleja. Edellä mainittujen materaalien lisäksi seinät saatettiin päällystää jopa lasilevyillä.",
	},
	{
		"question" : "1950-luvun asuinrakennusten ikkunat olivat",
		"choices" : [
					"matalia ja leveitä",
					"kapeita ja korkeita",
					"pieniruutuisia ja suippokaarisia"
					],
		"correct" : "matalia ja leveitä",
		"teksti" : "1950-luvulla huonekorkeus madaltui 2,5 metriin. Tämä johti siihen, että myös ikkunat madaltuivat. Niistä tehtiin kuitenkin aikaisempaa leveämpiä, jotta huoneisiin saatiin riittävästi valoa.",
	},
	{
		"question" : "Rovaniemen yhteislyseossa on kolmikerroksinen halli. Mihin muuhun sitä aikoinaan käytettiin kuin oleskeluun?",
		"choices" : [
					"Siellä pidettiin aamuhartauksia ja juhlatilaisuuksia",
					"Siellä pidettiin telinevoimisteluharjoituksia",
					"Siellä järjestettiin karaokekilpailuja"
					],
		"correct" : "Siellä pidettiin aamuhartauksia ja juhlatilaisuuksia",
		"teksti" : "Hallissa saatettiin pitää aamuhartauksia, koska koulussa oli peräti 800 oppilasta. He mahtuivat hyvin kolmikerroksiseen avoimeen halliin.",
	},
	{
		"question" : "Rovaniemen yhteislyseo on rakennettu",
		"choices" : [
					"punatiilestä ja rapattu",
					"puusta ja maalattu punamullalla",
					"punatiilestä ja seinät ovat rappaamattomat"
					],
		"correct" : "punatiilestä ja seinät ovat rappaamattomat",
		"teksti" : "Seinien alaosa on lisäksi päällystetty 1950-luvun tapaan liuskekivellä.",
	},
	{
		"question" : "Kuinka monelle oppilaalle Rovaniemen lyseo on rakennettu?",
		"choices" : [
					"500 oppilaalle",
					"300 oppilaalle",
					"800 oppilaalle"
					],
		"correct" : "800 oppilaalle",
		"teksti" : "Suomessa syntyi vuosina 1945–50 yli 600 000 lasta, tiheimmin asutuille alueille eli kaupunkeihin jouduttiin rakentamaan tästä syystä suurempia kouluja.",
	},
	{
		"question" : "Toisen maailmansodan jälkeen Suomessa rakennettiin paljon kouluja. Mikä tähän oli syynä?",
		"choices" : [
					"Pommituksissa tuhoutui monta koulua. Niiden tilalle piti rakentaa uudet.",
					"Sodan jälkeen syntyi paljon lapsia, minkä vuoksi tarvittiin uusia isoja kouluja",
					"1940-luvun lopulla tuli voimaan laki, joka määräsi kaikille lapsille pakollisen oppivelvollisuuden."
					],
		"correct" : "Sodan jälkeen syntyi paljon lapsia, minkä vuoksi tarvittiin uusia isoja kouluja",
		"teksti" : "Vuosina 1945–50 syntyivät nk. \"suuret ikäluokat\", yli 600 000 lasta, joille tarvittiin uudet opetustilat.",
	},
	{
		"question" : "1950-luvulla uusia asuinalueita kutsuttiin",
		"choices" : [
					"puutarhakaupungeiksi",
					"metsälähiöiksi",
					"betoniviidakoiksi"
					],
		"correct" : "metsälähiöiksi",
		"teksti" : "1950-luvulla asuinalueita ryhdyttiin rakentamaan keskustojen ulkopuolelle koskemattomiin metsiin. Ihanteena oli, että talojen väliin ja ympärille jätettäisiin mahdollisimman paljon viheralueita.",
	},
	{
		"question" : "1950-luvulla lähiöihin rakennettiin",
		"choices" : [
					"ostoskeskuksia",
					"tavarataloja",
					"osuuskauppoja"
					],
		"correct" : "ostoskeskuksia",
		"teksti" : "Ostoskeskus oli uusi rakennustyyppi 1950-luvulla. Se oli lähtöisin Yhdysvalloista. Keskusten kaupankäynti perustui yksityisautoiluun.",
	},
	{
		"question" : "1950-luvun kodit sisustettiin",
		"choices" : [
					"yhdistämällä uutta ja vanhaa",
					"arkkitehtien suunnittelemilla huonekaluilla",
					"itsekoottavilla tehdasvalmisteisilla huonekaluilla"
					],
		"correct" : "yhdistämällä uutta ja vanhaa",
		"teksti" : "1950-luvulla ryhdyttiin esimerkiksi olohuoneiden kalustusta kutsumaan \"seurusteluryhmäksi\". Ryhmässä saattoi olla eri väriä ja paria olevia tuoleja, vuodesohva ja sohvapöytä.",
	},
	{
		"question" : "1950-luvulla arkkitehdit arvostivat",
		"choices" : [
					"yksinkertaisuutta ja kauneutta",
					"käsityötä ja kotimaisuutta",
					"runsautta ja värikkyyttä"
					],
		"correct" : "yksinkertaisuutta ja kauneutta",
		"teksti" : "1940-luvun koristeellisuuden jälkeen arkkitehtuurin muotokieli yksinkertaistui. Mittasuhteiltaan se oli kuitenkin tarkoin harkittua ja yksityiskohtiin kiinnitettiin paljon huomiota.",
	},
	{
		"question" : "Arkkitehti Jorma Järvi oli koulusuunnittelijana edellä aikaansa, miksi?",
		"choices" : [
					"Hän suunnitteli pienimpiinkin kouluihin tietokoneluokat",
					"Hän otti lähtökohdaksi lasten oman mittakaavan",
					"Hän suunnitteli kaikkiin voimistelu- ja urheilutiloihin uima-altaan"
					],
		"correct" : "Hän otti lähtökohdaksi lasten oman mittakaavan",
		"teksti" : "Järvi kutsui usein jonkun omista lapsistaan \"mittakaavaihmiseksi\" tarkistaakseen suunnitelmiensa yksityiskohtia.",
	}
];

kys6.shuffle();
kys6[0].choices.shuffle();
kys6[1].choices.shuffle();
kys6[2].choices.shuffle();
kys6[3].choices.shuffle();
kys6[4].choices.shuffle();
kys6[5].choices.shuffle();
kys6[6].choices.shuffle();
kys6[7].choices.shuffle();
kys6[8].choices.shuffle();
kys6[9].choices.shuffle();
kys6[10].choices.shuffle();