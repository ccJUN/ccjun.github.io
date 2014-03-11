var Oprev=document.getElementById('prev');
var Onext=document.getElementById('next');
var Omain=document.getElementById('main');
var Oli=Omain.getElementsByTagName('li');
var i=0;
function change(){
		
		if (i==2) {
			i=0
		}
		else{
			i++;
		}

		for (var j = 0; j < Oli.length; j++) {
			Oli[j].style.display='none';
		    Oli[i].style.display='block';		
		}			
		
	 }
	 change();
	 setInterval(change,15000);


    function move(){
    	if (i==2) {
			i=0
		}
		else{
			i++;
		}
		for (var j = 0; j < Oli.length; j++) {
			Oli[j].style.display='none';
			Oli[i].style.display='block';
		}

    	
    }
    function move2(){
    	if (i==0) {
			i=2
		}
		else{
			i--;
		}
		for (var j = 0; j < Oli.length; j++) {
			Oli[j].style.display='none';
			Oli[i].style.display='block';
		}

    	

    }
     
      Onext.onclick=move;
      Oprev.onclick=move2;





