var heure = document.getElementById('heure') ;
var minute = document.getElementById('minute') ;
var seconde = document.getElementById('seconde') ;

var btnStart = document.getElementById('start') ;
var btnPause = document.getElementById('pause') ;
var btnReset = document.getElementById('reset') ;



var compteurSeconde = 0 ;
var compteurMinute = 0 ;
var compteurHeure = 0 ;
var anim



btnStart.addEventListener("click", function() {
	clearInterval(anim) ;
	anim = setInterval(function() {

		if (compteurSeconde == 59) {
			if (compteurMinute == 59) {
				compteurMinute = 0 ;
				compteurHeure = compteurHeure + 1 ;
			}
			else {
				compteurMinute = compteurMinute + 1 ;	
			}
			compteurSeconde = 0 ;
			
		}
		else {
			
			compteurSeconde = compteurSeconde + 1 ;	
		}

		seconde.innerHTML = compteurSeconde ;
		minute.innerHTML = compteurMinute ;
		heure.innerHTML = compteurHeure ;
	},1)
})

btnPause.addEventListener("click", function() {
	clearInterval(anim) ;
})

btnReset.addEventListener("click", function() {
	clearInterval(anim) ;
	compteurSeconde = 0 ;
	compteurMinute = 0 ;
	compteurHeure = 0 ;
	seconde.innerHTML = compteurSeconde ;
	minute.innerHTML = compteurMinute ;
	heure.innerHTML = compteurHeure ;
})