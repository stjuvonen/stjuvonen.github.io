$(document).ready(function () {

var currentQuestion = 0,
	score1 = 0,
	score2 = 0,
	score3 = 0,
	score4 = 0,
	score5 = 0,
	score6 = 0,
	score7 = 0,
	score8 = 0,
	score9 = 0,
	score10 = 0,
	submit = true,
	picked;
	
function htmlEncode(value) {
	return $(document.createElement('div')).text(value).html();
}
	$('#tulokset').hide();
	$('#frame2').hide();
	$('#alaframe').hide();
	$(document.createElement('div')).attr('id', 'alkuvalikko').appendTo('#frame');
	firstButtons();

	function firstButtons() { // ekat namiska
		$('#takaisinbutton').hide();
		$(document.createElement('h1')).attr('id', 'h1').text('Den finska arkitekturens decennier').appendTo('#alkuvalikko');
		$(document.createElement('p')).addClass('choice-box').attr('id', 'pelibutton').text('SPELA').appendTo('#alkuvalikko').click(function() {
			createLevels();
		});
		$(document.createElement('p')).addClass('choice-box').attr('id', 'tulosbutton').text('VISA RESULTAT').appendTo('#alkuvalikko').click(function() {
			showHighScores();
		});
		$(document.createElement('p')).addClass('choice-box').attr('id', 'infobutton').text('INFO').click(function(){
			window.open('http://www.mfa.fi/arkkitehtuuripeli_esittely');
		}).appendTo('#alkuvalikko');
	}


function createLevels() { //luodaan frame
	var totalScore = score1+score2+score3+score4+score5+score6+score7+score8+score9+score10;
	currentQuestion = 0;
	submit = true;
	$('#frame').empty();
	$('#alkuvalikko').hide();
	$('#alaframe').hide();
	$(document.createElement('h1')).attr('id', 'h1').text('Den finska arkitekturens decennier').appendTo('#frame');
	$(document.createElement('p')).html('<p class="vasen">Välkommen att bekanta dig med Finlands 1900-talsarkitektur. Välj den tidsperiod som du vill bekanta dig med.</p><p class="vasen">När du är färdig, skicka ditt namn till resultatlistan.</p>').appendTo('#frame');
	$(document.createElement('div')).attr('id', 'pelitasot').appendTo('#frame');
	$(document.createElement('img')).attr({'alt': 'Taso 1', 'src': 'ark/img/00.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
		startLevelOne();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 2', 'src': 'ark/img/10.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
		startLevelTwo();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 3', 'src': 'ark/img/20.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelThree();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 4', 'src': 'ark/img/30.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelFour();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 5', 'src': 'ark/img/40.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelFive();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 6', 'src': 'ark/img/50.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelSix();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 7', 'src': 'ark/img/60.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelSeven();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 8', 'src': 'ark/img/70.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelEight();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 9', 'src': 'ark/img/80.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelNine();
	});
	$(document.createElement('img')).attr({'alt': 'Taso 10', 'src': 'ark/img/90.png', 'width': '100px'}).css('padding', '5px').appendTo('#pelitasot').click(function(){
	startLevelTen();
	});
	$(document.createElement('p')).addClass('choice-box').attr('id', 'takaisinbutton').text('Visa resultat').appendTo('#pelitasot').click(function() {
		showHighScores2();
	});
}

function showHighScores(){
	$('#frame').hide();
	$('#tulokset').show();
	$(document.createElement('p')).addClass('choice-box').attr('id', 'takaisinbutton').text('Tillbaka').appendTo('#tulokset').click(function() {
			showFirstButtons();
		});
}

	function showHighScores2() {
		$('#frame').hide();
		$('#tulokset').show();
		$(document.createElement('p')).addClass('choice-box').attr('id', 'back').text('Tillbaka').appendTo('#tulokset').click(function() {
			backToLevels();
		});
	}

function showFirstButtons(){
	$('#tulokset').hide();
	$('#takaisinbutton').remove();
	$('#frame').show();
}

	function backToLevels() {
		$('#back').remove();
		$('#tulokset').hide();
		$('#frame').show();
	}

// TASOT

function startLevelOne(){ // 1. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score1 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1900-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1900.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/jugendal.png', 'alt': 'jugend', 'max-width': '150px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Art nouveau').click(function(){nouveau();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Gesellius, Lindgren, Saarinen').click(function(){gls();}).appendTo('#alaframe');
}

function startLevelTwo(){ // 2. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score2 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1910-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1910.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600,
		'margin-top': '30px'}).appendTo('#frame').click(function(){
	init2();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/kymmenen.png', 'alt': '1910-talet', 'max-width': '150px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').html('<a href="http://www.mfa.fi/arkkitehtiesittely?apid=3135" target="_blank">Jarl Eklund på finska</a>').appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('1910-talet').click(function(){kymppiluku();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Nikolajeffs Bilpalats').click(function(){nikol();}).appendTo('#alaframe');	
}

function startLevelThree(){ // 3. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score3 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1920-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1920.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
			init3();
		});
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
			createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/kakskyt.png', 'alt': '20-talet', 'max-width': '150px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Nordisk klassicism').click(function(){klassismi();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').html('<a href="http://www.mfa.fi/arkkitehtiesittely?apid=3124" target="_blank">Erik Bryggman på finska</a>').appendTo('#alaframe');
}

function startLevelFour(){ // 4. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score4 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1930-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1930.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init4();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/kolkyt.png', 'alt': '30-talet', 'max-width': '150px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Alvar Aalto').click(function(){aalto();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Funktionalismen').click(function(){funktionalismi();}).appendTo('#alaframe');		
}

function startLevelFive(){ // 5. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score5 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1940-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1940.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init5();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/sotilaat.png', 'alt': '1940', 'width': '300px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').html('<a href="http://mfa.fi/jalleenrakennuska" target="_blank">Återbyggnadstiden på finska</a>').appendTo('#alaframe');		
}

function startLevelSix(){ // 6. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score6 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1950-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1950.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init6();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/pohjolankatu.jpg', 'alt': 'pohjolagatan', 'width': '300px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Jorma Järvi').click(function(){jarvi();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('1950-talet').click(function(){viiskyt();}).appendTo('#alaframe');	
}

function startLevelSeven(){ // 7. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score7 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1960-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1960.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init7();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/kuuskyt.png', 'alt': '60-talet', 'width': '300px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('1960-talet').click(function(){kuuskyt();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Aarno Ruusuvuori').click(function(){ruusuvuori();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Oy Weilin & Göös Ab').click(function(){kirjapaino();}).appendTo('#alaframe');	
}

function startLevelEight(){ // 8. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score8 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1970-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1970.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init8();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/seiskyt.png', 'alt': '70-talet', 'width': '300px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('1970-talet').click(function(){seiskyt();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Juha Leiviskä').click(function(){leiviska();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Sankt Tomas kyrka').click(function(){tuomaa();}).appendTo('#alaframe');	
}

function startLevelNine(){ // 9. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score9 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1980-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1980.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init9();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/kasikyt.png', 'alt': '80-talet', 'width': '300px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Postmodernism').click(function(){postmodern();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Reima och Raili Pietilä').click(function(){pietilat();}).appendTo('#alaframe');
}

function startLevelTen(){ // 10. taso
$('#frame').empty();
$('#alaframe').empty();
$('#alaframe').show();
if (score10 > 0){
	bootbox.alert('Du har redan spelat denna nivå. Om du vill spela nivån igen, kommer dina poäng att återställas.');
	}
$(document.createElement('h2')).attr('id', 'h2').text('1990-talet').appendTo('#frame');
$(document.createElement('p')).addClass('pager2').attr('id', 'pager2').load('ark/txt/1990.txt').appendTo('#frame');
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Starta spelet').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	init10();
		});
$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Tillbaka').css({
		'font-weight': 600}).appendTo('#frame').click(function(){
	createLevels();
		});
$(document.createElement('img')).attr({'src': './ark/img/ysikyt.png', 'alt': '90-talet', 'width': '300px'}).appendTo('#alaframe');
$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Mera information om tidsperioden:').css({
		'padding-top': '20px',
		'font-weight': 600}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('1990-talet').click(function(){ysikyt();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Ilmari Lahdelma och Rainer Mahlamäki').click(function(){ilmarainer();}).appendTo('#alaframe');
$(document.createElement('div')).addClass('choice-box').attr('id', 'tietobutton').text('Skogsvetenskapscentrum Lusto').click(function(){lusto();}).appendTo('#alaframe');	
}

// KYSYMYKSET

function init(){ // 1. tason kysymykset
	score1 = 0;
	if (typeof kys1 !== "undefined" && $.type(kys1) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys1[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys1[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons1();
		}
}

function init2(){ // 2. tason kysymykset
	score2 = 0;
	if (typeof kys2 !== "undefined" && $.type(kys2) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys2[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys2[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons2();
		}
}

function init3(){ // 3. tason kysymykset
	score3 = 0;
	if (typeof kys3 !== "undefined" && $.type(kys3) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys3[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys3[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons3();
		}
}

function init4(){ // 4. tason kysymykset
	score4 = 0;
	if (typeof kys4 !== "undefined" && $.type(kys4) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys4[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys4[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons4();
		}
}

function init5(){ // 5. tason kysymykset
	score5 = 0;
	if (typeof kys5 !== "undefined" && $.type(kys5) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys5[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys5[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons5();
		}
}

function init6(){ // 6. tason kysymykset
	score6 = 0;
	if (typeof kys6 !== "undefined" && $.type(kys6) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys6[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys6[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons6();
		}
}

function init7(){ // 7. tason kysymykset
	score7 = 0;
	if (typeof kys7 !== "undefined" && $.type(kys7) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys7[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys7[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons7();
		}
}

function init8(){ // 8. tason kysymykset
	score8 = 0;
	if (typeof kys8 !== "undefined" && $.type(kys8) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys8[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys8[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons8();
		}
}

function init9(){ // 9. tason kysymykset
	score9 = 0;
	if (typeof kys9 !== "undefined" && $.type(kys9) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys9[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys9[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons9();
		}
}

function init10(){ // 10. tason kysymykset
	score10 = 0;
	if (typeof kys10 !== "undefined" && $.type(kys10) === "array") {
		$('#frame').empty();
		$('#alaframe').empty();
		$(document.createElement('h3')).addClass('pager').attr('id', 'pager').text('Fråga 1 / ' + ' 10').appendTo('#frame');
		$(document.createElement('p')).addClass('question').attr('id', 'question').text(kys10[0]['question']).appendTo('#frame');
		$(document.createElement('ul')).attr('id', 'choice-block').css({
			'margin': '0 auto'
		}).appendTo('#frame');
		
		addChoices(kys10[0]['choices']);
			
		$(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Svara').css({
			'font-weight': 600,
			'color': '#222'
		}).appendTo('#frame');
			
		$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe'); 
			
		setupButtons10();
		}
}
// ADD CHOICES

function addChoices(choices) { // hakee vastausvaihtoehdot
	if (typeof choices !== "undefined" && $.type(choices) == "array") {
		$('#choice-block').empty();
		for (var i = 0; i < choices.length; i++) {
			$(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
		}
	}
}

// SET UP BTNS

function setupButtons1() { //1. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion1(picked);
			});
		}
	});
}

function setupButtons2() { //2. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion2(picked);
			});
		}
	});
}

function setupButtons3() { //3. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion3(picked);
			});
		}
	});
}

function setupButtons4() { //4. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion4(picked);
			});
		}
	});
}

function setupButtons5() { //5. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion5(picked);
			});
		}
	});
}

function setupButtons6() { //6. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion6(picked);
			});
		}
	});
}

function setupButtons7() { //7. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion7(picked);
			});
		}
	});
}

function setupButtons8() { //8. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion8(picked);
			});
		}
	});
}

function setupButtons9() { //9. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion9(picked);
			});
		}
	});
}

function setupButtons10() { //10. tason namiskat
	$('.choice').on('mouseover', function () {
		$(this).css({
			'background-color': '#e1e1e1'
		});
	});
	$('.choice').on('mouseout', function () {
		$(this).css({
			'background-color': '#fff'
		});
	});
	$('.choice').on('click', function () {
		picked = $(this).attr('data-index');
		$('.choice').removeAttr('style').off('mouseout mouseover');
		$(this).css({
			'border-color': '#222',
			'font-weight': 600,
			'background-color': '#c1c1c1'
		});
		if(submit) {
			submit = false;
			$('#submitbutton').css({
				'color': '#000'
			}).on('click', function () {
				$('.choice').off('click');
				$(this).off('click');
				processQuestion10(picked);
			});
		}
	});
}

// PROCESS QUESTION

function processQuestion1(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys1[currentQuestion]['choices'][choice] == kys1[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys1[currentQuestion]['teksti']));
		score1++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys1[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys1.length)-7) {
			endQuiz1();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion1();
		}
	});
}

function processQuestion2(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys2[currentQuestion]['choices'][choice] == kys2[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys2[currentQuestion]['teksti']));
		score2++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys2[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys2.length)-8) {
			endQuiz2();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion2();
		}
	});
}

function processQuestion3(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys3[currentQuestion]['choices'][choice] == kys3[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys3[currentQuestion]['teksti']));
		score3++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys3[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys3.length)-7) {
			endQuiz3();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion3();
		}
	});
}

function processQuestion4(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys4[currentQuestion]['choices'][choice] == kys4[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys4[currentQuestion]['teksti']));
		score4++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys4[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys4.length)-6) {
			endQuiz4();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion4();
		}
	});
}

function processQuestion5(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys5[currentQuestion]['choices'][choice] == kys5[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys5[currentQuestion]['teksti']));
		score5++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys5[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys5.length)-7) {
			endQuiz5();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion5();
		}
	});
}

function processQuestion6(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys6[currentQuestion]['choices'][choice] == kys6[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys6[currentQuestion]['teksti']));
		score6++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys6[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys6.length)-7) {
			endQuiz6();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion6();
		}
	});
}

function processQuestion7(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys7[currentQuestion]['choices'][choice] == kys7[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys7[currentQuestion]['teksti']));
		score7++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys7[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys7.length)-7) {
			endQuiz7();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion7();
		}
	});
}

function processQuestion8(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys8[currentQuestion]['choices'][choice] == kys8[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys8[currentQuestion]['teksti']));
		score8++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys8[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys8.length)-7) {
			endQuiz8();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion8();
		}
	});
}

function processQuestion9(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys9[currentQuestion]['choices'][choice] == kys9[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys9[currentQuestion]['teksti']));
		score9++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys9[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys9.length)-8) {
			endQuiz9();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion9();
		}
	});
}

function processQuestion10(choice) {
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('teksti').attr('id', 'teksti').appendTo('#alaframe');
	if (kys10[currentQuestion]['choices'][choice] == kys10[currentQuestion]['correct']) {
		$('.choice').eq(choice).css({
		'background-color': '#50D943'});
		$('#teksti').html('<strong>Javisst!</strong> ' +htmlEncode(kys10[currentQuestion]['teksti']));
		score10++;
	} else {
		$('.choice').eq(choice).css({
		'background-color': '#D92623'});
		$('#teksti').html('<strong>Nej!</strong> ' +htmlEncode(kys10[currentQuestion]['teksti']));
	}
	currentQuestion++;
	$('#submitbutton').html('FORTSÄTT &raquo;').on('click', function() {
		if (currentQuestion == (kys10.length)-7) {
			endQuiz10();
		} else {
			$(this).text('Svara').css({
			'color': '#222'}).off('click');
			nextQuestion10();
		}
	});
}
// NEXT QUESTION

function nextQuestion1() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys1[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys1[currentQuestion]['choices']);
	setupButtons1();
}

function nextQuestion2() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys2[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys2[currentQuestion]['choices']);
	setupButtons2();
}

function nextQuestion3() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys3[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys3[currentQuestion]['choices']);
	setupButtons3();
}

function nextQuestion4() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys4[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys4[currentQuestion]['choices']);
	setupButtons4();
}

function nextQuestion5() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys5[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys5[currentQuestion]['choices']);
	setupButtons5();
}

function nextQuestion6() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys6[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys6[currentQuestion]['choices']);
	setupButtons6();
}

function nextQuestion7() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys7[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys7[currentQuestion]['choices']);
	setupButtons7();
}

function nextQuestion8() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys8[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys8[currentQuestion]['choices']);
	setupButtons8();
}

function nextQuestion9() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys9[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys9[currentQuestion]['choices']);
	setupButtons9();
}

function nextQuestion10() {
	submit = true;
	$('#alaframe').empty();
	$('#question').text(kys10[currentQuestion]['question']);
	$('#pager').text('Fråga ' + Number(currentQuestion + 1) + ' / 10');
	addChoices(kys10[currentQuestion]['choices']);
	setupButtons10();
}

function endQuiz1() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score1 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/kansallismuseo.jpg', 'alt': 'nationalmuseum'}).appendTo('#alaframe');
}

function endQuiz2() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score2 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/nikolajeff.jpg', 'alt': 'bilpalats'}).appendTo('#alaframe');
}

function endQuiz3() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score3 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/brahenkatu.jpg', 'alt': 'Brahegatan'}).appendTo('#alaframe');
}

function endQuiz4() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score4 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/paimio.jpg', 'alt': 'pemars sanatorium'}).appendTo('#alaframe');
}

function endQuiz5() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score5 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/rintamamies.jpg', 'alt': '1940-talet'}).appendTo('#alaframe');
}

function endQuiz6() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score6 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/koulu.jpg', 'alt': 'skolan'}).appendTo('#alaframe');
}

function endQuiz7() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score7 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/weegee.jpg', 'alt': 'WeeGee'}).appendTo('#alaframe');

}

function endQuiz8() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score8 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/1970pvk.jpg', 'alt': 'Puolivälikangas'}).appendTo('#alaframe');

}

function endQuiz9() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score9 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/taikurinhattu.jpg', 'alt': 'Taikurinhattu'}).appendTo('#alaframe');

}

function endQuiz10() {
	$('#frame').empty();
	$('#alaframe').empty();
	$(document.createElement('p')).addClass('pager').text('Du fick ' + score10 + ' poäng och har totalt ' + (score1+score2+score3+score4+score5+score6+score7+score8+score9+score10) + ' poäng. Nu kan du skicka ditt namn till resultatlistan eller fortsätta spela.').appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Fortsätta spela').click(function(){
		createLevels();
	}).appendTo('#frame');
	$(document.createElement('p')).addClass('choice-box').text('Skicka till resultatlistan').click(function(){
		saveScore();
	}).appendTo('#frame');
	$(document.createElement('img')).attr({'src': './ark/img/lusto.jpg', 'alt': 'Lusto'}).appendTo('#alaframe');

}

function saveScore(){
	$('#frame').empty();
	$('#frame').hide();
	$('#alaframe').hide();
	$('#frame2').show();
	$(document.createElement('p')).html('Namn: <input id="userName">').appendTo('#frame2');
	$(document.createElement('p')).addClass('choice-box').text('Skicka').click(function(){
		if($('#userName').val().length !=0){
		passingVariables();
		}else{
		bootbox.alert('Vänligen skriv ditt namn i textfältet!');
		}
	}).appendTo('#frame2');
}

function passingVariables(){
var nimi = document.getElementById('userName').value;
var finalScore = score1+score2+score3+score4+score5+score6+score7+score8+score9+score10;
$.ajax({
	type: "POST",
	url: './sendScore.php',
	data: ({tulos: finalScore, name: nimi}),
	success: function(data){
		$('#frame2').empty();
		$(document.createElement('p')).text('Dina poäng har sparats!').appendTo('#frame2');
		$(document.createElement('p')).addClass('choice-box').text('Tillbaka till början').click(function(){
			location.reload();
	}).appendTo('#frame2');
	}
});
}
});