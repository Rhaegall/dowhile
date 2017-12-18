(function main(){
	
	
	$('#idbtn').on('click', function(e) {
    	testWhile();
    });
    function testWhile() {
		var chaine;
		do {
			chaine=prompt("Entrez une chaîne de caractères contenant le caractère \"");
		}
		while (chaine.indexOf("\"")==-1)

		alert("La chaîne entrée est \""+chaine+"\"");
	}

})();
