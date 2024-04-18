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

var kys4 = [
	{
		"question" : "Minkälaiseen maastoon rakentaisit keuhkotautiparantolan?",
		"choices" : [
					"Meren rannalle, jotta potilaat voivat hengittää kosteaa raikasta meri-ilmaa",
					"Kaupunkiin, jotta potilailla olisi lyhyt matka viikonloppuisin koteihinsa",
					"Maaseudulle kuivalle mäntykankaalle"
					],
		"correct" : "Maaseudulle kuivalle mäntykankaalle",
		"teksti" : "Ajateltiin, että havupuut tuottavat happipitoista ilmaa. Puhtaan ilman ja auringonvalon oletettiin parantavan keuhkotautia. Tärkeää oli myös, että parantola eristettiin asutuista alueista tartuntavaaran vuoksi.",
	},
	{
		"question" : "Mitä funktionalistit ihailivat?",
		"choices" : [
					"Maaseudun rauhaa",
					"Vauhdikasta suurkaupunkielämää",
					"Keskiaikaisia pikkukaupunkeja"
					],
		"correct" : "Vauhdikasta suurkaupunkielämää",
		"teksti" : "Funktionalistit puhuivat \"uudesta ihmisestä\", joka vietti liikkuvaa elämää, kuunteli jazzia, kävi ravintoloissa ja katseli elokuvia. Kaikki tämä oli mahdollista vain kaupungeissa.",
	},
	{
		"question" : "Paimion parantolassa oli funktionalismille tyypillinen kattomuoto. Millainen?",
		"choices" : [
					"Harjakatto, koska siitä on käytännöllistä pudottaa talvella lumet",
					"Mansardi- eli taitekatto, jonka alla on korkea käytännöllinen ullakkotila. Ullakolle voitiin sijoittaa esimerkiksi tennishalli",
					"Tasakatto"
					],
		"correct" : "Tasakatto",
		"teksti" : "Raittiissa ilmassa oleskelua suosittiin sen terveellisyyden vuoksi. Tasakatolla voitiin oleskella ja sinne voitiin sijoittaa myös viihtyisä puutarha.",
	},
	{
		"question" : "Miltä funktionalistisen rakennuksen julkisivut näyttivät?",
		"choices" : [
					"Julkisivuissa oli matalia, valkoiseksi maalattuja koristeita ovien ja ikkunoiden ympärillä",
					"Julkisivuissa oli runsaasti koristeita, joiden aiheena olivat kotimaiset eläimet ja kasvit",
					"Julkisivuissa ei ollut koristeita lainkaan vaan ainostaan muutamia värikkäitä katseenvangitsijoita kuten punaisia tai keltaisia parvekkeiden putkikaiteita"
					],
		"correct" : "Julkisivuissa ei ollut koristeita lainkaan vaan ainostaan muutamia värikkäitä katseenvangitsijoita kuten punaisia tai keltaisia parvekkeiden putkikaiteita",
		"teksti" : "Funktionalistien mielestä kaikki koristeet olivat turhia julkisivuissa. He saivat vaikutteita modernista maalaustaiteesta, jossa käytettiin kirkkaita puhtaita värikenttiä.",
	},
	{
		"question" : "Minkälaiset ikkunat funktionalistisissa rakennuksissa oli?",
		"choices" : [
					"Pieniruutuiset puupuitteiset ikkunat",
					"T-puitteiset suorakaiteen muotoiset ikkunat",
					"Nauhaikkunat eli koko julkisivun mittaiset ikkunarivit"
					],
		"correct" : "Nauhaikkunat eli koko julkisivun mittaiset ikkunarivit",
		"teksti" : "Rakennusten runkoja ryhdyttiin tekemään yhä useammin betonista. Betonirakenne mahdollisti sen, ettei julkisivujen enää tarvinnut kantaa välipohjien painoa vaan niihin voitiin tehdä nauhaikkunat.",
	},
	{
		"question" : "Minkälainen värimaailma oli funktionalismille tyypillinen?",
		"choices" : [
					"Tummat ja maanläheiset värit",
					"Vaaleat pastellisävyt",
					"Kirkkaat perusvärit"
					],
		"correct" : "Kirkkaat perusvärit",
		"teksti" : "Kirkkaat perusvärit sopivat funktionalistien suosimaan valkoiseen väriin. Arkkitehtien värivalintoihin vaikutti myös aikakauden maalaustaide.",
	},
	{
		"question" : "Miten parantolan suunnittelussa suhtauduttiin auringonvaloon?",
		"choices" : [
					"Auringonvalo voi olla vaarallista ja hyvät kaihtimet ovat tärkeät, jotta potilaiden iho ei kärsisi eivätkä potilaat saisi päänsärkyä",
					"Auringonvalon saanti oli tärkeää",
					"Terassit oli suunnattava pohjoiseen, jotta potilaina olevat taiteilijat voivat maalata maisemia"
					],
		"correct" : "Auringonvalon saanti oli tärkeää",
		"teksti" : "Auringonvaloa pidettiin bakteereja tappavana ja elinvoimaa lisäävänä.",
	},
	{
		"question" : "Millainen merkitys hygienialla oli parantolan suunnittelussa?",
		"choices" : [
					"Liiallista hygienian korostamista pidettiin haitallisena, sen katsottiin aiheuttavan potilaille vaikeita neurooseja",
					"Potilaiden henkilökohtainen hygienia oli etusijalla huoneita suunniteltaessa",
					"Hygieniaa tärkeämpää oli siedätyshoito, jotta potilaat tottuisivat erilaisiin bakteerikantoihin"
					],
		"correct" : "Potilaiden henkilökohtainen hygienia oli etusijalla huoneita suunniteltaessa",
		"teksti" : "Paimion parantolassa kullakin potilaalla oli oma käsienpesuallas ja kannettava sylkykuppi. Lisäksi kahden hengen huoneessa oli yhteinen sylkyallas.",
	},
	{
		"question" : "Mikä merkitys kasveilla oli keuhkotautipotilaille?",
		"choices" : [
					"Sairaalan aulassa oli kukkakauppa, koska vierailijoiden toivottiin tuovan tuoreita kukkia potilaiden ilahduttamiseksi",
					"Leikkokukkien sijasta potilashuoneisiin ja käytävätiloihin oli sijoitettu runsaasti suuria ilmaa raikastavia huonekasveja",
					"Sisätiloissa huonekasveja oli ainoastaan seurusteluhuoneen kulmaikkunoiden lasisissa ikkunaväliköissä, eräänlaisissa pienoiskasvihuoneissa"
					],
		"correct" : "Sisätiloissa huonekasveja oli ainoastaan seurusteluhuoneen kulmaikkunoiden lasisissa ikkunaväliköissä, eräänlaisissa pienoiskasvihuoneissa",
		"teksti" : "Viherkasveja haluttiin pitää esillä viihtyisyyden vuoksi, mutta samalla pyrittiin estämään siitepölyn leviäminen huoneilmaan.",
	},
	{
		"question" : "Minkä tyyppinen rakennus Paimion tuberkuloosiparantola oli?",
		"choices" : [
					"Laajalle alueelle levittäytyvä matala paviljonkirakennus, jossa kaikilla potilailla oli läheinen kosketus maahan",
					"Kuutiomainen sairaala, jonka siivet kiersivät suljettua sisäpihaa. Piha suojasi potilaita tehokkaasti tuulilta ja tuiskuilta",
					"Viuhkamainen rakennus, jonka siivet kurottuivat eri suuntiin"
					],
		"correct" : "Viuhkamainen rakennus, jonka siivet kurottuivat eri suuntiin",
		"teksti" : "Parantolarakennuksille oli tyypillistä eri suuntiin avautuvat parvekkeet ja terassit. Lepotuoleissa lepäävät potilaat saivat näin eri vuorokauden- ja vuodenaikojen mukaan valoa eri suunnilta.",
	},
	{
		"question" : "Miten Paimion parantola rakennettiin?",
		"choices" : [
					"Parantola rakennettiin tiilestä muurattujen sydänmuurien varaan",
					"Parantolan kantava runko tehtiin betonista ja julkisivut tiilestä",
					"Potilassiipi rakennettiin tiilestä ja puusta erityisellä ristikkorakennetekniikalla"
					],
		"correct" : "Parantolan kantava runko tehtiin betonista ja julkisivut tiilestä",
		"teksti" : "7-kerroksinen makuuhallisiipi oli aikansa suurin yhden pilaririvin varaan tehty betonirakenne. Muissa siivissä oli rautabetonirunko, mutta julkisivut muurattiin kuitenkin perinteisesti tiilestä.",
	},
	{
		"question" : "Montaako potilasta varten parantola rakennettiin?",
		"choices" : [
					"Noin 150 potilasta varten",
					"Noin 300 potilasta varten",
					"Noin 500 potilasta varten"
					],
		"correct" : "Noin 300 potilasta varten",
		"teksti" : "Potilaspaikkoja oli valmiissa rakennuksessa 296. Paimion parantola oli aikansa suurimpia tuberkuloosiparantoloita Suomessa.",
	},
	{
		"question" : "Miten parantolan yhteistilat sijoitettiin?",
		"choices" : [
					"Yhteistilat suunniteltiin suurelle sisäpihalle avautuviksi",
					"Yhteistilat sijoitettiin pelkästään etelään avautuviksi, jotta auringonvaloa saataisiin mahdollisimman paljon",
					"Yhteistilat sijoitettiin eri suuntiin"
					],
		"correct" : "Yhteistilat sijoitettiin eri suuntiin",
		"teksti" : "Ruokala, kesäterassi ja seurusteluhuone avautuivat kaikki eri suuntiin, jolloin sekä näköalat että valaistus olivat mahdollisimman vaihtelevat.",
	},
	{
		"question" : "Minkälaiset ravintolatilat parantolassa tarvittiin?",
		"choices" : [
					"Hyvä yleisökahvila vierailijoille",
					"Tarvittiin vain henkilökunnan ruokala, koska potilaat söivät potilashuoneissa",
					"Kunnollinen ja viihtyisä potilasruokala"
					],
		"correct" : "Kunnollinen ja viihtyisä potilasruokala",
		"teksti" : "Tarvittiin kunnollinen ja viihtyisä potilasruokala, koska oikea ravitsemus ja sosiaalinen elämä olivat tärkeitä paranemisen kannalta.",
	},
	{
		"question" : "Minkälaisen valaistuksen katsottiin olevan paras potilashuoneissa?",
		"choices" : [
					"Mahdollisimman tehokkaan valon, jotta hoitajien olisi helppo suorittaa hoitoon kuuluvia rutiineja",
					"Tavallinen loisteputkivalaistus oli sopiva, koska tiloissa oltiin vain vähän aikaa",
					"Valaistus, jonka suunnittelussa makaava potilas otettiin erityisesti huomioon"
					],
		"correct" : "Valaistus, jonka suunnittelussa makaava potilas otettiin erityisesti huomioon",
		"teksti" : "Hyvin suunniteltu valaistus loi levollisen ilmapiirin huoneisiin ja vaikutti näin potilaiden mielialaan ja kykyyn taistella tautia vastaan.",
	},
	{
		"question" : "Minkälaisia huonekaluja Paimion parantolassa oli?",
		"choices" : [
					"Parantolassa oli sinne suunnitellut yksinkertaiset huonekalut",
					"Parantolaa varten teetettiin jykeviä ja värikkäitä talonpoikaishuonekaluja, joista heikot potilaat saivat hyvin tukea",
					"Parantolan eri tilat sisustettiin vaihtelevasti erityyppisin tyylihuonekaluihin, jotta potilaat saisivat mahdollisimman paljon virikkeitä"
					],
		"correct" : "Parantolassa oli sinne suunnitellut yksinkertaiset huonekalut",
		"teksti" : "Alvar Aalto suunnitteli parantolaan taivutetusta vanerista ja metalliputkista tuoleja, jotka olivat tehdasvalmisteisia ja sitä paitsi helppo puhdistaa. Hän suunnitteli myös ns. Paimio-tuolin jonka muotoilulla hän halusi helpottaa potilaiden hengittämistä.",
	}
];

kys4.shuffle();
kys4[0].choices.shuffle();
kys4[1].choices.shuffle();
kys4[2].choices.shuffle();
kys4[3].choices.shuffle();
kys4[4].choices.shuffle();
kys4[5].choices.shuffle();
kys4[6].choices.shuffle();
kys4[7].choices.shuffle();
kys4[8].choices.shuffle();
kys4[9].choices.shuffle();
kys4[10].choices.shuffle();