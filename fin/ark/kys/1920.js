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

var kys3 = [
	{
		"question" : "Minkälaisia koristeaiheita talojen julkisivuissa käytettiin eniten 1920-luvulla?",
		"choices" : [
					"Eläin- ja/tai kasviaiheita, joihin oli otettu mallia Suomen luonnosta",
					"Klassista kuvastoa, johon kuuluivat mm. medaljongit, maljakot ja simpukkamuodot",
					"Runsasmuotoisia kasviaiheisia kipsikoristeita"
					],
		"correct" : "Klassista kuvastoa, johon kuuluivat mm. medaljongit, maljakot ja simpukkamuodot",
		"teksti" : "Kyllä, muttei enää empiren tavoin orjallisesti antiikkia jäljitellen, vaan vapaasti muunnellen.",
	},
	{
		"question" : "Asemakaavoilla säädellään kaupunkien kehitystä. 1920-luvun kaupunkisuunnitteluun vaikutti merkittävästi lisääntyvä autoistuminen. Miten?",
		"choices" : [
					"Kaupunkisuunnittelussa alettiin suosia ruutukaavaa ja suoria katulinjoja",
					"Haluttiin rakentaa monimuotoisia ja yllätyksellisiä kaupunkitiloja",
					"Pyrittiin kaupunginosien hajasijoittamiseen, eli varhaiseen \"lähiörakentamiseen\""
					],
		"correct" : "Kaupunkisuunnittelussa alettiin suosia ruutukaavaa ja suoria katulinjoja",
		"teksti" : "Kaupunkisuunnittelun ihanteena pidettiin Pohjois-Amerikan suurkaupunkeja pilvenpiirtäjineen. Kaupungeista ulos vieviä väyliä levennettiin, mutkia oikaistiin ja uusia, suoria katuja avattiin vanhoihin keskustoihin.",
	},
	{
		"question" : "Vuosien 1926-28 aikaa on yleisesti kutsuttu \"rakentamisen hulluiksi vuosiksi\" – minkähän takia?",
		"choices" : [
					"Koska silloin rakennettiin poikkeuksellisen paljon rakennuksia",
					"Koska arkkitehdit halusivat itsenäisyyden hurmassa kokeilla erilaisia uusia muotoja ns. \"hulluuteen asti\"",
					"Koska arkkitehtikunnassa oli sisällissodan kokemuksista johtuen poikkeuksellisen paljon \"hulluja\""
					],
		"correct" : "Koska silloin rakennettiin poikkeuksellisen paljon rakennuksia",
		"teksti" : "Venäjästä irtaantumista ja vuoden 1918 sisällissotaa seuranneen taantuman jälkeen rakentaminen elpyi ripeästi.",
	},
	{
		"question" : "Rakennusten julkisivut maalattiin 1920-luvulla useimmiten",
		"choices" : [
					"pastellisävyillä, kuten vaaleanpunaisella, -vihreällä tai –keltaisella",
					"puhtautta ja Suomen valkoisia hankia symboloivalla valkoisella",
					"murretuilla tummilla ja lämpimillä maanläheisillä sävyillä"
					],
		"correct" : "pastellisävyillä, kuten vaaleanpunaisella, -vihreällä tai –keltaisella",
		"teksti" : "Tähän oli vaikuttamassa 1920-luvun klassismin suosima hienostunut väripaletti.",
	},
	{
		"question" : "Mitä tarkoitetaan 1920-luvulla suosioon tulleella terastirappauksella?",
		"choices" : [
					"Rappausta, joka oli niin ohut, että sen alla olleet tiilet kuulsivat läpi",
					"Rappaustapaa, jossa jäljiteltiin renessanssin kivimuurausta",
					"Rappausta, jossa laastiin oli sekoitettu mm. lasinsiruja tai kivihiiltä"
					],
		"correct" : "Rappausta, jossa laastiin oli sekoitettu mm. lasinsiruja tai kivihiiltä",
		"teksti" : "Lasinsirujen avulla rappaukseen saatiin kimalteleva, graniittia muistuttava pinta.",
	},
	{
		"question" : "Brahenkatu 9:n ikkunoissa voi havaita 1920-luvulle tyypillisiä piirteitä. Millaisia?",
		"choices" : [
					"Ikkunat ovat kuusi- tai kahdeksanruutuisia, ja ne on asetettu aivan seinän ulkopintaan",
					"Ikkunat ovat yksiruutuiset ja kaikki ikkunat ovat samankokoisia",
					"Alimman kerroksen ikkunat ovat korkeammat kuin muissa kerroksissa"
					],
		"correct" : "Ikkunat ovat kuusi- tai kahdeksanruutuisia, ja ne on asetettu aivan seinän ulkopintaan",
		"teksti" : "Se teki seinäpinnasta mahdollisimman tasaisen ja harmonisesti yhtenevän.",
	},
	{
		"question" : "Erik Bryggman oli Suomen 1900-luvun merkittävimpiä arkkitehteja. Missä ja milloin hän vaikutti?",
		"choices" : [
					"Hän aloitti art nouveau-kaudella Turun seudulla ja teki päätyönsä Turussa 1920-luvulla",
					"Hänen päätyönsä ovat 1920–30-lukujen Helsingissä, kuten niin monen muun merkittävän arkkitehdin",
					"Hän vaikutti Turussa erityisesti 1920- ja 30-luvuilla"
					],
		"correct" : "Hän vaikutti Turussa erityisesti 1920- ja 30-luvuilla",
		"teksti" : "Erik Bryggmanin päätöitä Turussa ovat mm. As. Oy Atrium, Ylösnousemuskappeli ja Åbo Akademin kirjatorni.",
	},
	{
		"question" : "Perhearvojen muutos näkyy selkeästi asuntosuunnittelussa. Mikä uudenlainen huonetila luotiin 1920-luvulla?",
		"choices" : [
					"Tupakeittiö, jossa oleskelutila ja keittiö yhdistettiin kokonaisuudeksi",
					"Keittokomero eli minimoitu keittiö, jossa ei ollut tilaa edes ruokapöydälle",
					"Kodinhoitohuone, jonka ansiosta ruuan valmistus ja muu kodinhoito saatiin erilleen"
					],
		"correct" : "Keittokomero eli minimoitu keittiö, jossa ei ollut tilaa edes ruokapöydälle",
		"teksti" : "Yhä harvemmassa taloudessa oli enää palvelija, ja sähköistyminen vähensi tilantarvetta.",
	},
	{
		"question" : "Samoin kuin ovien ja ikkunoiden, myös kattojen mallit ovat muuttuneet eri vuosikymmeninä. Millainen kattomuoto oli tyypillinen 1920-luvulla?",
		"choices" : [
					"Entistä jyrkempi harjakatto",
					"Matala harjakatto, jossa oli pitkä räystäät",
					"Kansainvälisten virtausten myötä siirryttiin yhä enemmän tasakattoihin"
					],
		"correct" : "Matala harjakatto, jossa oli pitkä räystäät",
		"teksti" : "Katto menetti art nouveaun aikaisen visuaalisen merkityksensä.",
	},
	{
		"question" : "1920-luvun rakennusten julkisivuissa korostettiin tiettyjä seikkoja. Mitä Brahenkadun rakennuksen julkisivussa korostettiin?",
		"choices" : [
					"Pääsisäänkäyntiä",
					"Kerrosten välistä eroa kerroslistojen ja erilaisten pintakäsittelyjen avulla",
					"Julkisivun monimuotoisuutta. Rakennus suunniteltiin sisältäpäin ulos, eli julkisivu muotoutui sisätilojen mukaan"
					],
		"correct" : "Pääsisäänkäyntiä",
		"teksti" : "1920-luvulla suurin osa koristelusta sijoitettiin sisäänkäynnin yhteyteen. Brahenkadun sisäänkäynti on erityisen monumentaalinen kahden kerroksen korkuisine pylväineen ja niiden päälle sijoitettuine uurnineen.",
	},
	{
		"question" : "Arkkitehdit suunnittelivat 1920-luvulla huonekaluja yksityiskoteihin ja yleisiin tiloihin. Minkälaisia huonekaluja he suunnittelivat?",
		"choices" : [
					"Huonekaluja, joiden innoittajina olivat antiikin klassisaiheiset seinämaalaukset ja maljakot",
					"Metallirakenteisia, yksinkertaisia huonekaluja, kuten ns. \"putkituoleja\"",
					"Talonpoikaistyylisiä malleja, joihin oli saatu innoitusta Karjalasta"
					],
		"correct" : "Huonekaluja, joiden innoittajina olivat antiikin klassisaiheiset seinämaalaukset ja maljakot",
		"teksti" : "Arkkitehdit piirsivät pöytiin ja tuoleihin usein sirot jalat, jotka kaartuivat loivasti ulospäin, kuten antiikin aikana. Huonekalut saattoivat olla myös voimakkaan värisiä, kuten mustia tai punaisia.",
	},
	{
		"question" : "1920-luvun puolessavälissä asuntotuotanto Suomessa kasvoi voimakkaasti. Suuret kiviset osakeyhtiötalot nousivat suurimmissa kaupungeissa puutalojen tilalle. Asuinrakennusten lisäksi rakennettiin 1920-luvulla erityisesti",
		"choices" : [
					"kulttuurirakennuksia",
					"kouluja ja suojeluskuntataloja",
					"urheilurakennuksia"
					],
		"correct" : "kouluja ja suojeluskuntataloja",
		"teksti" : "Vuoden 1921 oppivelvollisuuslaki lisäsi koulujen tarvetta merkittävästi ja vapaaehtoiset puolustusjoukot eli suojeluskunnat tarvitsivat omat tilansa.",
	},
	{
		"question" : "Arkkitehtuurissa yhdistyvät taide ja tekniikka. Mikä oli yksi 1920-luvun uusista rakennusteknisistä keksinnöistä?",
		"choices" : [
					"Teräsbetoni, jossa betonia vahvistetaan esijännitetyillä terästangoilla",
					"Lastulevy, joka muodostuu puristamalla liimatusta puulastupurusta",
					"Korkin käyttö äänieristystarkoituksessa"
					],
		"correct" : "Korkin käyttö äänieristystarkoituksessa",
		"teksti" : "1920-luvulla kokeiltiin erilaisia uusia rakennusmateriaaleja. Korkki osoittautui parhaaksi lämmön- ja ääneneristäjäksi.",
	},
	{
		"question" : "Minkälainen arkkitehtuuri oli 1920-luvun tyylin esikuvana?",
		"choices" : [
					"Venäjän 1800-luvun empire",
					"antiikin Kreikan arkkitehtuuri",
					"pohjoisitalialaisten pikkukaupunkien klassinen arkkitehtuuri"
					],
		"correct" : "pohjoisitalialaisten pikkukaupunkien klassinen arkkitehtuuri",
		"teksti" : "Ensimmäisen maailmansodan päätyttyä arkkitehdit pääsivät taas matkustamaan ja yksi pohjoismaisten arkkitehtien tärkeimmistä matkakohteista oli Pohjois-Italia. Tyyli saikin Pohjoismaissa nimekseen \"pohjoismainen klassismi\".",
	},
	{
		"question" : "Erik Bryggmanin suurista turkulaistaloista ensimmäisenä valmistui Brahenkatu 9 jouluksi 1924. Jo rakennusvaiheessa paikalliset lehdet kiinnittivät huomiota tähän \"muhkeaan uudisrakennukseen\".  Uudessa asuintalossa oli yhteensä",
		"choices" : [
					"88 huonetta",
					"120 huonetta",
					"54 huonetta"
					],
		"correct" : "88 huonetta",
		"teksti" : "Talossa oli 88 huonetta. Asunnot olivat tilavia, keskimäärin neljä huonetta ja keittiö. Ne oli lisäksi varustettu \"nykyajan mukavuuksilla\".",
	},
	{
		"question" : "Ensimmäisen maailmansodan jälkeisen ankaran asuntopulan syynä oli",
		"choices" : [
					"vuokrien huima nousu",
					"valtiovallan haluttomuus tukea asuntotuotantoa",
					"yksityisten rahoittajien kiinnostuksen hiipuminen asuntojen vuokrasäännöstelyn takia"
					],
		"correct" : "yksityisten rahoittajien kiinnostuksen hiipuminen asuntojen vuokrasäännöstelyn takia",
		"teksti" : "Syynä. oli yksityisten rahoittajien kiinnostuksen hiipuminen asuntojen vuokrasäännöstelyn takia. Muita syitä olivat rahan arvon aleneminen ja sodasta johtunut materiaalipula.",
	},
	{
		"question" : "Brahenkatu 9:n asuinrakennuksen porrashuonetta luonnehdittiin rakennuksen valmistuttua \"tyylikkääksi\". Porraskäytävä oli",
		"choices" : [
					"yksinkertainen ja minimimitoitettu",
					"runsaasti koristeltu seinämaalauksin ja kromisin porraskaitein",
					"tunnelmaltaan arvokas ja tilan jäsentelyltään poikkeuksellinen"
					],
		"correct" : "tunnelmaltaan arvokas ja tilan jäsentelyltään poikkeuksellinen",
		"teksti" : "Asuntojen ulko-ovien reliefit ja värit antavat porrashuoneelle arvokkaan leiman. Porrashuone on melkein neliö ja osa tilasta on rajattu avarilla kaariaukoilla.",
	}
];
	
kys3.shuffle();
kys3[0].choices.shuffle();
kys3[1].choices.shuffle();
kys3[2].choices.shuffle();
kys3[3].choices.shuffle();
kys3[4].choices.shuffle();
kys3[5].choices.shuffle();
kys3[6].choices.shuffle();
kys3[7].choices.shuffle();
kys3[8].choices.shuffle();
kys3[9].choices.shuffle();
kys3[10].choices.shuffle();