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

var kys5 = [
	{
		"question" : "1940-luvun asuntopula pyrittiin ratkaisemaan rakentamalla",
		"choices" : [
					"suuria kerrostaloalueita",
					"omakotitaloja",
					"asuinalueita, joissa oli monentyyppisiä rakennuksia"
					],
		"correct" : "asuinalueita, joissa oli monentyyppisiä rakennuksia",
		"teksti" : "Tavoitteena oli luoda vaihtelevia asuinalueita, joissa oli erityyppisiä rakennuksia.",
	},
	{
		"question" : "Omakotitalot rakennettiin 1940-luvulla pääsääntöisesti",
		"choices" : [
					"pommituksia kestävistä materiaaleista kuten kivestä, teräksestä ja betonista",
					"sahatavarasta: palkeista, laudoista ja puisista seinäelementeistä",
					"piilutetuista, eli kirveellä veistetyistä hirsistä ja luonnonkivistä"
					],
		"correct" : "sahatavarasta: palkeista, laudoista ja puisista seinäelementeistä",
		"teksti" : "Omakotitalot rakennettiin puukehikon ympärille ja vuorattiin laudoilla. Myös valmiita seinäelementtejä käytettiin jonkin verran.",
	},
	{
		"question" : "1940-luvun rintamamiestalon rakensi useimmiten",
		"choices" : [
					"rakennusliike",
					"sotilas",
					"perheyhteisön rakentamistaitoiset jäsenet ja tuttavat"
					],
		"correct" : "perheyhteisön rakentamistaitoiset jäsenet ja tuttavat",
		"teksti" : "Useimmat miehet osasivat tuolloin rakentaa yksinkertaisen puutalon mallipiirustusten ja valmiiden rakennusosien avulla. Rungon pystyttivät usein ammattimiehet.",
	},
	{
		"question" : "Rintamamiestalolla tarkoitetaan",
		"choices" : [
					"sotilaan rakentamaa taloa",
					"sotilaiden asuinrakennusta",
					"sodanjälkeistä omakotitalotyyppiä"
					],
		"correct" : "sodanjälkeistä omakotitalotyyppiä",
		"teksti" : "Rintamamiestalolla tarkoitetaan sodan jälkeen yleistynyttä puolitoistakerroksista, harjakattoista omakotitaloa, jollaisen moni rintamalta palannut mies rakensi perheelleen.",
	},
	{
		"question" : "Ns. rintamamiestaloja rakennettiin Suomeen yhteensä",
		"choices" : [
					"n. 15 000",
					"n. 75 000",
					"n. 150 000"
					],
		"correct" : "n. 75 000",
		"teksti" : "Määrä oli suuri, koska sodassa menetetyiltä alueilta tuli yli 400 000 evakkoa, jotka tarvitsivat asunnon.",
	},
	{
		"question" : "Kaavoitus eli aluesuunnittelu nousi tärkeään asemaan 1940-luvulla",
		"choices" : [
					"koska arkkitehdit saivat uusia ideoita ulkomailta",
					"koska asutus haluttiin suojata pommikoneilta",
					"koska maan jälleenrakentaminen vaati suunnitelmallisuutta"
					],
		"correct" : "koska maan jälleenrakentaminen vaati suunnitelmallisuutta",
		"teksti" : "Suunnitelmallisuus auttoi rakentamaan nopeasti ja laadukkaasti yhä suurempia ja nopeasti kehittyviä kokonaisuuksia.",
	},
	{
		"question" : "Miten sota-aika vaikutti 1940-luvun asuinarkkitehtuurin tyyliin?",
		"choices" : [
					"Tyyli romantisoitui ja sai vaikutteita sotilaiden rintamalle rakentamista korsuista",
					"Rakennuksista tehtiin kestäviä ja helposti puolustettavia",
					"Rakennuksista tehtiin mahdollisimman virtaviivaisia"
					],
		"correct" : "Tyyli romantisoitui ja sai vaikutteita sotilaiden rintamalle rakentamista korsuista",
		"teksti" : "Sotilaiden rakentamissa korsuissa käytetyt luonnonmateriaalit ja maastoon mukautuva suunnittelu siirtyivät siviiliarkkitehtuuriin",
	},
	{
		"question" : "Sodanjälkeisessä Suomessa keskityttiin",
		"choices" : [
					"rakentamaan uudenlaista yhteiskuntaa",
					"saamaan maahan tarpeeksi asuntoja ja tehokkaita tuotantolaitoksia",
					"varustautumaan tuleviin sotiin"
					],
		"correct" : "saamaan maahan tarpeeksi asuntoja ja tehokkaita tuotantolaitoksia",
		"teksti" : "Evakkojen asuttaminen sekä energian, elintarvikkeiden ja sotakorvauksia varten tarvittujen teollisuustuotteiden valmistus olivat etusijalla.",
	},
	{
		"question" : "Tyyppipiirustusten laatimisella ja rakennusosien standardisoinnilla pyrittiin",
		"choices" : [
					"selkeään arkkitehtuurityyliin",
					"rakentamisen helpottamiseen",
					"rakentamisen säätelyyn"
					],
		"correct" : "rakentamisen helpottamiseen",
		"teksti" : "Tyyppipiirustuksia ja standardisoituja rakennusosia käyttämällä saatiin nopeammin ja edullisemmin valmiiksi uusia asuntoja ja muita rakennuksia.",
	},
	{
		"question" : "Tyypillisiä piirteitä 1940-luvun arkkitehtuurille ovat",
		"choices" : [
					"koristeelliset yksityiskohdat, mm. taivutetut metallikaiteet, liuskekivi ja räystäällinen harjakatto",
					"nauhaikkunat, tasakatto ja hygieeniset pintamateriaalit",
					"kansallisromanttiset yksityiskohdat, kuten pienet tornit ja erkkerit"
					],
		"correct" : "koristeelliset yksityiskohdat, mm. taivutetut metallikaiteet, liuskekivi ja räystäällinen harjakatto",
		"teksti" : "Parveke- ja porraskaiteisiin tehtiin koristeellisia taivutuksia ja liuskekiveä käytettiin runsaasti. Sisustuksissa suosittiin kodikkaita materiaaleja.",
	},
	{
		"question" : "Sisustustyyli 1940-luvulla oli",
		"choices" : [
					"pelkistetty ja hygieeninen",
					"yksikertaisen kodikas",
					"runsaan koristeellinen"
					],
		"correct" : "yksikertaisen kodikas",
		"teksti" : "Sisustus tehtiin pula-aikana saatavilla olevista materiaaleista, kuten puusta ja paperista, joista valmistettiin jopa mattoja ja verhoja. Rottinkihuonekalut ja avotakka yleistyivät. Viherkasvit olivat suosittuja.",
	},
	{
		"question" : "Rintamamiestalo oli rakennustyypiltään",
		"choices" : [
					"hormin ympärille rakennettu kuutiomainen puurakennus",
					"korkeasta keskiosasta ja matalista siipiosista koostuva rakennus",
					"kasarmia muistuttava rakennus"
					],
		"correct" : "hormin ympärille rakennettu kuutiomainen puurakennus",
		"teksti" : "Rintamamiestalon huoneet sijoittuivat keskellä olevan hormin ympärille. Puolitoistakerroksisessa rakennuksessa oli harjakatto.",
	},
	{
		"question" : "Tyypillisessä 1940-luvun kerrostalon julkisivussa oli",
		"choices" : [
					"ruutuikkunat, kipsikoristeet ja pastellisävyt",
					"nauhaikkunat ja hohtavan valkoinen maali",
					"ruutuikkunat, rappaus ja maanläheinen värimaailma"
					],
		"correct" : "ruutuikkunat, rappaus ja maanläheinen värimaailma",
		"teksti" : "Karkealla rappauksella peitettiin kehnon seinämateriaalin epätasaisuuksia. Julkisivut olivat yksikertaisia, liuskekiveä saatettiin käyttää sisäänkäyntien koristeluun.",
	},
	{
		"question" : "Rintamamiestalot suunnitteli yleensä",
		"choices" : [
					"asukas",
					"rintamamies",
					"arkkitehti"
					],
		"correct" : "arkkitehti",
		"teksti" : "Maan arkkitehtikunta tunnetuimpia arkkitehteja myöten osallistui jälleenrakentamiseen suunnittelemalla tyyppitaloja osin vapaaehtoistyönä.",
	},
	{
		"question" : "Perinteisessä rintamamiestalossa on tyypillisesti",
		"choices" : [
					"pienet huoneet ja sisustuksessa käytetty paljon puuta",
					"avarat huoneet, parkettilattiat ja maalatut seinät",
					"valoisat huoneet ja hygieeniset pinnat"
					],
		"correct" : "pienet huoneet ja sisustuksessa käytetty paljon puuta",
		"teksti" : "Huoneet olivat pieniä. Sisustuksessa käytettiin paljon puuta. Ovet olivat lakattua vaneria, seinät kapeaa sormipaneelia.",
	},
	{
		"question" : "Rintamamiestalolle ovat tyypillisiä",
		"choices" : [
					"tasakatto, isoruutuiset ikkunat ja asuttavat kellaritilat",
					"mansardikatto, pieniruutuiset ikkunat ja parveke",
					"harjakatto, kaksi- tai kolmiruutuiset ikkunat ja lämmittämätön kuisti"
					],
		"correct" : "harjakatto, kaksi- tai kolmiruutuiset ikkunat ja lämmittämätön kuisti",
		"teksti" : "Tyyppitalojen maaseudun funktionalismiksi luonnehdittuun tyyliin kuului räystäällinen harjakatto, kuisti ja kaksi- tai kolmiruutuiset ikkunat.",
	},
	{
		"question" : "Rintamamiestaloja voidaan pitää aikansa ekotaloina, koska",
		"choices" : [
					"niiden tarvitsema energia tuotettiin osin tuulivoiman avulla",
					"ne rakennettiin luonnonläheisistä materiaaleista ja paikallista työvoimaa käyttäen",
					"niissä oli suuret kuistit, joiden avulla voitiin tehokkaasti hyödyntää aurinkoenergiaa"
					],
		"correct" : "ne rakennettiin luonnonläheisistä materiaaleista ja paikallista työvoimaa käyttäen",
		"teksti" : "Rintamamiestalot rakennettiin perheen ja lähipiirin turvin pääasiassa puusta: puiset rakenteet, julkisivulaudoitus, sisäpinnat puuaineisia (puupaneeli, puuaineiset levyt, pinkopahvi), eristeenä sahanpurua.",
	}
];

kys5.shuffle();
kys5[0].choices.shuffle();
kys5[1].choices.shuffle();
kys5[2].choices.shuffle();
kys5[3].choices.shuffle();
kys5[4].choices.shuffle();
kys5[5].choices.shuffle();
kys5[6].choices.shuffle();
kys5[7].choices.shuffle();
kys5[8].choices.shuffle();
kys5[9].choices.shuffle();
kys5[10].choices.shuffle();