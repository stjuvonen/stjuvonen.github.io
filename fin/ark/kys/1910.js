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


var kys2 = [
	{
		"question" : "Jarl Ekelund suunnitteli urallaan rakennuksia myös yhdessä muiden arkkitehtien kanssa. Hän osallistui mm. Helsingin Taidehallin suunnitteluun, jonka pääarkkitehtina toimi hänen kollegansa",
		"choices" : [
					"Hilding Ekelund",
					"Gustaf Nyström",
					"Eliel Saarinen"
					],
		"correct" : "Hilding Ekelund",
		"teksti" : "Hilding Ekelund toimi Etu-Töölöön vuonna 1928 valmistuneen Taidehallin pääsuunnittelijana. Jarl Ekelund suunnitteli rakennuksen pohjaratkaisut.",
	},
	{
		"question" : "Ekelundin monipuoliseen tuotantoon kuului lähinnä teollisuusrakennuksia, kartanoita sekä yksityistaloja. Hän suunnitteli esimerkiksi",
		"choices" : [
					"leipätehtaan SOK:lle",
					"Joenniemen kartanon Mänttään",
					"meijerirakennuksen Valiolle"
					],
		"correct" : "Joenniemen kartanon Mänttään",
		"teksti" : "Jarl Ekelund suunnitteli kartanon vuorineuvos G.A. Serlachiukselle Mänttään. Paperitehtailijan yksityiskoti toimii nykyään taidemuseona.",
	},
	{
		"question" : "Rakennustekniset ratkaisut, kuten kattomuodot, voivat heijastella paitsi ajan ihanteita, myös aikakauden rakentamisen tarpeita. Nikolajeffin Autopalatsissa on",
		"choices" : [
					"loiva harjakatto",
					"aumattu mansardikatto",
					"jyrkkä harjakatto"
					],
		"correct" : "aumattu mansardikatto",
		"teksti" : "Nopean kaupungistumisen aiheuttaman suuren tilantarpeen takia 1910-luvulla suosittiin mansardikattoa, jonka avulla myös ullakkokerros voitiin ottaa hyötykäyttöön.",
	},
	{
		"question" : "Nikolajeffin Autopalatsi oli aikansa erikoisuus niin rakennustekniikkansa kuin käyttötarkoituksensakin puolesta. Se sai valmistuessaan huomiota, koska",
		"choices" : [
					"rakennustyyppi oli Suomessa ennennäkemätön",
					"taidemaalari Akseli Gallen-Kallela suunnitteli sille mainosjulisteen",
					"itse tsaari Nikolai II oli rakennuksen avajaisissa"
					],
		"correct" : "rakennustyyppi oli Suomessa ennennäkemätön",
		"teksti" : "Amerikassa autotaloja oli jo 1900-luvun alkupuolella. Suomessa esim. parkkitalot yleistyivät vasta 1960-luvulla.",
	},
	{
		"question" : "1910-luvun uutuus julkisivuissa oli terastirappaus eli jalorappaus. Sillä haluttiin mukailla",
		"choices" : [
					"tiilipintaa",
					"luonnonkiveä",
					"raakabetonia"
					],
		"correct" : "luonnonkiveä",
		"teksti" : "Luonnonkiveä mukailevan terastirappauksen pinta oli rakeinen ja joskus kimaltava. Materiaali oli kova ja kestävä ja valamalla siitä tehtiin myös koristeita.",
	},
	{
		"question" : "1910-luvun sisustuksille oli tyypillistä, että",
		"choices" : [
					"huonetiloja elävöitettiin väliseinillä",
					"ruokailuhuoneet tapetoitiin kangastapetein",
					"suosittiin uutta sisustusmateriaalia vaneria"
					],
		"correct" : "suosittiin uutta sisustusmateriaalia vaneria",
		"teksti" : "Suomen ensimmäinen vaneritehdas perustettiin Jyväskylään vuonna 1912. Uusi sisustusmateriaali soveltui esimerkiksi oviin, huonekaluihin, sisäkattoihin ja panelointiin.",
	},
	{
		"question" : "1910-luvulla rakennusten julkisivuissa suosittiin etenkin",
		"choices" : [
					"korkeita suippokaari-ikkunoita",
					"korkeita pyörökaari-ikkunoita",
					"matalia ja yksiruutuisia ikkunoita"
					],
		"correct" : "korkeita pyörökaari-ikkunoita",
		"teksti" : "Uudelleen herännyt kiinnostus klassistisen arkkitehtuurin muotoihin teki pyörökaariset ikkunat varsin yleisiksi. Jopa asuinkerrostaloissa oli usein jossain kerroksessa pyörökaari-ikkunat.",
	},
	{
		"question" : "Nikolajeffin Autopalatsi oli uudenaikainen myös siksi, että saman katon alle oli sijoitettu hyvin erilaisia toimintoja. Rakennuksessa oli mm.",
		"choices" : [
					"ilmaista parkkitilaa",
					"teollisuustilaa",
					"automuseo"
					],
		"correct" : "teollisuustilaa",
		"teksti" : "Autopalatsin ylimmissä kerroksissa oli korjaustilaa, ja siellä toimi Alfa-moottorien tehdas.",
	},
	{
		"question" : "1910-luvulla tapeteissa käytettiin yhä pääasiassa kasviaiheisia kuvioita, jotka tosin olivat pienempiä kuin koristeellisissa jugendtapeteissa. Miten muuten vuosikymmen näkyi seinäpapereissa?",
		"choices" : [
					"Tapeteissa alettiin suosia geometrisiä kuvioita",
					"Tapetteja ryhdyttiin painamaan läpivärjätylle paperille",
					"Alettiin painaa yksivärisiä tapetteja"
					],
		"correct" : "Tapetteja ryhdyttiin painamaan läpivärjätylle paperille",
		"teksti" : "Materiaalipulan vuoksi paperin laatu oli usein huonoa, minkä johdosta tapetit kellastuivat helposti. Tummenemista pyrittiin peittämään läpivärjätyllä paperilla.",
	},
	{
		"question" : "Puhtautta tavoitellessa kehitettiin uusia sisustusmateriaaleja. Lattioissa alettiin käyttää linoleumia eli korkkimattoa",
		"choices" : [
					"Maton pinta kuvioitiin korkista muotoilluilla paloilla",
					"Matto sai nimensä latinan sanasta 'linium' eli 'pellava'",
					"Matto oli aina yksivärinen"
					],
		"correct" : "Matto sai nimensä latinan sanasta 'linium' eli 'pellava'",
		"teksti" : "Linoleumin raaka-aineina käytettiin pellavaöljyä ja korkkirouhetta. Massa levitettiin kankaan päälle – syntyi lattiapinnoitteeksi soveltuva kovapintainen linoleummatto.",
	},
	{
		"question" : "Kaupunkien tehtaisiin maalta virtaava työväestö tarvitsi jatkuvasti lisää asuntoja. 1910-luvun onnistuneimpia yrityksiä ratkaista vaikea asuntopula olivat",
		"choices" : [
					"rivitalot",
					"suurpihakorttelit",
					"uudet pientaloalueet"
					],
		"correct" : "suurpihakorttelit",
		"teksti" : "Yksi parhaita esimerkkejä on puolikunnallisen Kone ja Silta Osakeyhtiön suurkortteli Vallilassa, jossa kapearunkoinen rakennus kiertää korttelin reunoja siten, että keskelle jää suojaisa, yhtenäinen piha.",
	},
	{
		"question" : "1910-luvulla rakennusajat lyhenivät. Tämä johtui siitä, että",
		"choices" : [
					"työmaat koneistuivat",
					"rakennustyöläisiä oli tarjolla enemmän kuin tarvittiin", "uudenaikainen pikasementti kuivui nopeammin"
					],
		"correct" : "työmaat koneistuivat",
		"teksti" : "Koneistuminen nopeutti työtä ja johti ennen pitkää rakennustyöläisten vähenemiseen.",
	},
	{
		"question" : "Kasvavat kaupungit tarvitsivat ajanmukaiset hallintorakennukset. Tämän takia",
		"choices" : [
					"rakennettiin monia näyttäviä kaupungintaloja",
					"laadittiin kaupungintalon tyyppipiirustukset",
					"pyrittiin omaleimaiseen suomalaiseen tyyliin"
					],
		"correct" : "rakennettiin monia näyttäviä kaupungintaloja",
		"teksti" : "Kaupungintalojen suunnittelijoiksi haluttiin parhaimmat arkkitehdit. Talot sijoitettiin asemakaavassa keskeiselle paikalle ja niissä suosittiin korkeaa, kauas näkyvää tornia.",
	},
	{
		"question" : "Autopalatsi rakennettiin vuonna 1908 puretun puisen Arkadia-teatterin paikalle. Sijainti valittiin osin sillä perusteella, että",
		"choices" : [
					"tontti sijaitsi vilkkaassa liikekeskustassa",
					"vastavalmistunut tavara-asema oli riittävän lähellä",
					"viereinen eduskuntatalo lisäsi rakennuksen monumentaalisuutta"
					],
		"correct" : "vastavalmistunut tavara-asema oli riittävän lähellä",
		"teksti" : "Läheiseltä asemalta oli helppo kuljettaa tavaroita rakennuksessa toimiviin tehdastiloihin.",
	},
	{
		"question" : "Autopalatsin katto oli päällystetty alunperin vihreillä tiilillä. Katolla oli myös",
		"choices" : [
					"Nikolajeffien suvun tuuliviiri",
					"vehreä kattoterassi",
					"suuret kattoikkunat"
					],
		"correct" : "suuret kattoikkunat",
		"teksti" : "Autopalatsin ylimmässä kerroksessa oli mansardikaton suojassa kaksi tennishallia, jotka saivat valonsa pitkistä pyramidinmuotoisista kattoikkunoista.",
	},
	{
		"question" : "1910-luvun rakennuksissa on usein puhtaaksimuuratut tiilijulkisivut, joita koristavat nimekkäiden kuvanveistäjien tekemät veistokset. Julkisivujen koristelussa",
		"choices" : [
					"käytettiin eri materiaaleja",
					"käytettiin kasvi- ja eläinaiheita",
					"suosittiin matalia kipsikoristeita"
					],
		"correct" : "käytettiin eri materiaaleja",
		"teksti" : "Julkisivujen ornamentit ja veistokset tehtiin eri materiaaleista, kuten kipsistä, kivestä tai terastista.",
	},
	{
		"question" : "1910-luvulla alkoi kaavoittamisen uusi aika. Pääkaupungin ulkopuolelle alettiin rakentaa kansainvälisten ihanteiden mukaan porvarillisia huvilakaupunkeja, joissa",
		"choices" : [
					"nähtiin myös ensimmäiset rivitalot",
					"huvila oli ainoa sallittu rakennustyyppi",
					"porvaristo sekä asui että työskenteli"
					],
		"correct" : "nähtiin myös ensimmäiset rivitalot",
		"teksti" : "Kulosaaren huvilakaupunkiin valmistui 1916–17 arkkitehti Armas Lindgrenin suunnittelema Ribbingshofin rivitalokokonaisuus. Se oli Suomessa ensimmäinen laatuaan.",
	}
];

kys2.shuffle();
kys2[0].choices.shuffle();
kys2[1].choices.shuffle();
kys2[2].choices.shuffle();
kys2[3].choices.shuffle();
kys2[4].choices.shuffle();
kys2[5].choices.shuffle();
kys2[6].choices.shuffle();
kys2[7].choices.shuffle();
kys2[8].choices.shuffle();
kys2[9].choices.shuffle();
kys2[10].choices.shuffle();