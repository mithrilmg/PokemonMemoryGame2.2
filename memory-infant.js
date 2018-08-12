
const random = [10];
var cards = [];
var cardsback = [];
var cardsback2 = [];
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 10;
var cardsview;
var active = false;
var showedCard;

function randomize()
{
		let j = Math.floor(Math.random() * 251) + 1 ;
		parseInt(j);
		if($.inArray(j, random) == -1) 
		{
			random[i]=j;
		}
		else
		{
			randomize(i);
		}
}




function shuffle()
{		
		let j;
		let temp = Math.floor(Math.random() * 10);
		parseInt(temp);
		j = random[temp];
		if($.inArray(j, cardsback) == -1) 
		{
			cards[i]=j;
			cardsback[i]=j;
		}
		else if($.inArray(j, cardsback2) == -1)
		{
			cards[i]=j;
			cardsback2[i]=j;
		}
		else
		shuffle(i);
		//alert(j);
}

/*function shuffle2()
{
		temp = Math.floor(Math.random() * 20);
		parseInt(temp);
		j = random[temp];
		if($.inArray(j, cardsback) == -1) 
		{
			cards[i]=j;
			cardsback[i-20]=j;
		}
		else
			shuffle2(i);
		//alert(j);
		
}
*/
// random number generator


for (i = 0; i <10; i++) {
	

	randomize(i);


}



for (i = 0; i <20; i++) {
	

	shuffle(i);
	
}

$("#muteButton").click( function (){
    if( $("audio").prop('muted') ) {
          $("audio").prop('muted', false);
    } else {
      $("audio").prop('muted', true);
    }
  });
  
function revealCard(nr)
{
		var opacityValue = $('#c'+nr).css('opacity');

	
		if (opacityValue != 0 && lock == false && showedCard != nr)
		{
			lock = true;
			parseInt(cards[nr]);
			cardsview = cards[nr]+".gif";
			var obraz = "url(img/"+cardsview+")";
			showedCard = nr;
			
		$('#c'+nr).css('background-image' , obraz);
		$('#c'+nr).addClass('cardA');
		
		if(oneVisible == false)
		{
				//first card
				
				oneVisible = true;
				visible_nr = nr;
				parseInt(visible_nr);
				lock = false;
				active = true;

		}
		else
		{
				//second card
				
				//if(cards[visible_nr] == cards[nr])
				if(cards[visible_nr] == cards[nr] && visible_nr != nr)
				{
					
					setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);
					
				}
				else
				{
					//alert("nie");
					
					setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
					
				}
				if(cards[visible_nr] != cards[nr])
				{
				
				}
				
				oneVisible = false;
				
		}
			
		}
		
		//alert(nr);
		
		
}

function hide2Cards(nr1, nr2)
{
	//$('#c'+nr1).css('border', '4px solid #990000');
	//$('#c'+nr2).css('border', '4px solid #990000');
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	pairsLeft--;
	turnCounter++;
	$('.score').html('Turn counter: '+turnCounter);
	
	if(pairsLeft == 0)
	{
		/*
		$('.board').html('<br><br><h1>You win!<br>Done in '+turnCounter+' turns<br><br><a href="index.html">RETURN</a></h1>');
		*/
			
		$('.board').html('<br><h4>You win!<br>Done in '+turnCounter+' turns<br></h4><form id="subForm" onsubmit="return false;">name:<input type="text" name="nName" value="Mickey" id="txtname"><br></form><p><button onclick="submitScore()">Submit</button><br><h4><a href="index.html">RETURN</a></h4>');
		
	
		
		
	}
	lock = false;
}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/card.jpg)');
	$('#c'+nr1).removeClass('cardA');
	
	$('#c'+nr2).css('background-image', 'url(img/card.jpg)');
	$('#c'+nr2).removeClass('cardA');
	
	turnCounter++;
	$('.score').html('Turn counter: '+turnCounter);
	
	lock = false;
}

function submitScore()
{
		const input = document.getElementById("txtname");
		const input2 = input.value;
		const name = input2;
		const score = turnCounter;
		 $.ajax({
            url: 'submit.php', //This is the current doc
            method: "POST",
            data: {name : name, score : score},
            success: function(data){
               $('.board').html('<br><h4>You win!<br>Done in '+turnCounter+' turns<br>HIGHSCORE<br></h4><iframe frameborder="0" src="highscore.php" width="300" height="200" scrolling="yes"></iframe><br><form></form><h4><a href="index.html">RETURN</a></h4>');
            }
        });  
}


//console.log(cards); advance way to alert an array value

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');

const c10 = document.getElementById('c10');
const c11= document.getElementById('c11');
const c12= document.getElementById('c12');
const c13= document.getElementById('c13');
const c14= document.getElementById('c14');
const c15= document.getElementById('c15');
const c16= document.getElementById('c16');
const c17= document.getElementById('c17');
const c18= document.getElementById('c18');
const c19= document.getElementById('c19');
/*
var c20= document.getElementById('c20');
var c21= document.getElementById('c21');
var c22= document.getElementById('c22');
var c23= document.getElementById('c23');
var c24= document.getElementById('c24');
var c25= document.getElementById('c25');
var c26= document.getElementById('c26');
var c27= document.getElementById('c27');
var c28= document.getElementById('c28');
var c29= document.getElementById('c29');

var c30= document.getElementById('c30');
var c31= document.getElementById('c31');
var c32= document.getElementById('c32');
var c33= document.getElementById('c33');
var c34= document.getElementById('c34');
var c35= document.getElementById('c35');
var c36= document.getElementById('c36');
var c37= document.getElementById('c37');
var c38= document.getElementById('c38');
var c39= document.getElementById('c39');

var c40= document.getElementById('c40');
var c41= document.getElementById('c41');
var c42= document.getElementById('c42');
var c43= document.getElementById('c43');
var c44= document.getElementById('c44');
var c45= document.getElementById('c45');
var c46= document.getElementById('c46');
var c47= document.getElementById('c47');


*/
c0.addEventListener("click", function() { revealCard(0);});
c1.addEventListener("click", function() { revealCard(1);});
c2.addEventListener("click", function() { revealCard(2);});
c3.addEventListener("click", function() { revealCard(3);});
c4.addEventListener("click", function() { revealCard(4);});
c5.addEventListener("click", function() { revealCard(5);});
c6.addEventListener("click", function() { revealCard(6);});
c7.addEventListener("click", function() { revealCard(7);});
c8.addEventListener("click", function() { revealCard(8);});
c9.addEventListener("click", function() { revealCard(9);});

c10.addEventListener("click", function() { revealCard(10);});
c11.addEventListener("click", function() { revealCard(11);});
c12.addEventListener("click", function() { revealCard(12);});
c13.addEventListener("click", function() { revealCard(13);});
c14.addEventListener("click", function() { revealCard(14);});
c15.addEventListener("click", function() { revealCard(15);});
c16.addEventListener("click", function() { revealCard(16);});
c17.addEventListener("click", function() { revealCard(17);});
c18.addEventListener("click", function() { revealCard(18);});
c19.addEventListener("click", function() { revealCard(19);});
/*
c20.addEventListener("click", function() { revealCard(20);});
c21.addEventListener("click", function() { revealCard(21);});
c22.addEventListener("click", function() { revealCard(22);});
c23.addEventListener("click", function() { revealCard(23);});
c24.addEventListener("click", function() { revealCard(24);});
c25.addEventListener("click", function() { revealCard(25);});
c26.addEventListener("click", function() { revealCard(26);});
c27.addEventListener("click", function() { revealCard(27);});
c28.addEventListener("click", function() { revealCard(28);});
c29.addEventListener("click", function() { revealCard(29);});

c30.addEventListener("click", function() { revealCard(30);});
c31.addEventListener("click", function() { revealCard(31);});
c32.addEventListener("click", function() { revealCard(32);});
c33.addEventListener("click", function() { revealCard(33);});
c34.addEventListener("click", function() { revealCard(34);});
c35.addEventListener("click", function() { revealCard(35);});
c36.addEventListener("click", function() { revealCard(36);});
c37.addEventListener("click", function() { revealCard(37);});
c38.addEventListener("click", function() { revealCard(38);});
c39.addEventListener("click", function() { revealCard(39);});

c40.addEventListener("click", function() { revealCard(40);});
c41.addEventListener("click", function() { revealCard(41);});
c42.addEventListener("click", function() { revealCard(42);});
c43.addEventListener("click", function() { revealCard(43);});
c44.addEventListener("click", function() { revealCard(44);});
c45.addEventListener("click", function() { revealCard(45);});
c46.addEventListener("click", function() { revealCard(46);});
c47.addEventListener("click", function() { revealCard(47);});

*/




