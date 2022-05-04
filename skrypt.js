const decimalCount = num => {
	
   const numStr = String(num);
   if (numStr.includes('.')) {
      return numStr.split('.')[1].length;
   };
   
   return 0;
}





function myFunction() {
	
	var liczba = prompt("Wprowadź liczbę");
	
	var iloscMiejscPoPrzecinku = decimalCount(liczba);
	
	if (iloscMiejscPoPrzecinku != 0) {
		
		var miejscaPoPrzecinku = right(liczba.toString(), iloscMiejscPoPrzecinku);
		var miejscaPoPrzecinkuSlownie = liczbyPoPrzecinkuSlownie(parseInt(miejscaPoPrzecinku));
		var liczbaSlownie = slowa(parseInt(liczba));
		liczbaSlownie = liczbaSlownie + " i " + miejscaPoPrzecinkuSlownie;
		
		
	}
	
	else {
		liczbaSlownie = slowa(parseInt(liczba));
	}
	
	liczbaSlownie = liczbaSlownie.replace('jeden tysiąc','tysiąc');
	liczbaSlownie = liczbaSlownie.replace('jeden milion','milion');
	liczbaSlownie = liczbaSlownie.replace('jeden miliard','miliard');
	liczbaSlownie = liczbaSlownie.replace('jeden bilion','bilion');
	liczbaSlownie = liczbaSlownie.replace('jeden biliard','biliard');
	liczbaSlownie = liczbaSlownie.replace('jeden trylion','trylion');
	liczbaSlownie = liczbaSlownie.replace('  ',' ');
	
	alert(liczbaSlownie);
	
	
	
	
}










function liczbyPoPrzecinkuSlownie(czescSetna) {
	
	//var czescSetna = 1001;
	czescSetna = parseInt(czescSetna);
	var slownie = slowa(czescSetna);
	var czescSetnaSlownieForma = 0;
	var czesciDziesietneSlownie = ["", "dziesiąta", "dziesiąte", "dziesiątych"];
	var czesciSetneSlownie = ["", "setna", "setne", "setnych"];
	var czesciTysieczneSlownie = ["", "tysięczna", "tysięczne", "tysięcznych"];
	var czesciDziesiecioTysieczneSlownie = ["", "dziesięciotysięczna", "dziesięciotysięczne", "dziesięciotysięcznych"];
	var ostatniaLiczba = right(czescSetna.toString(), 1);
	var typCzesciSlownej = 0;
	var czescSetnaSlownie = "";
	
	
	
	
	
	if (czescSetna == 1) {
		
		typCzesciSlownej = 1;
	}
	
	if (ostatniaLiczba == 2 || ostatniaLiczba == 3 || ostatniaLiczba == 4) {
		
		typCzesciSlownej = 2;
	}
	
	else {
		typCzesciSlownej = 3;
	}
	
	
	
	
	
	
	
	
	
	if (czescSetna > 0 && czescSetna < 101) {
		czescSetnaSlownie = czesciSetneSlownie[typCzesciSlownej];
	}
	
	if (czescSetna > 100 && czescSetna < 1001) {
		czescSetnaSlownie = czesciTysieczneSlownie[typCzesciSlownej];
	}
	
	if (czescSetna > 1000 && czescSetna < 10001) {
		czescSetnaSlownie = czesciDziesiecioTysieczneSlownie[typCzesciSlownej];
	}
	
	if (czescSetna >= 11 && czescSetna <= 19) {
		czescSetnaSlownie = "setnych";
	}
	
	if (czescSetna > 0 && czescSetna < 11) {
		czescSetnaSlownie = czesciDziesietneSlownie[typCzesciSlownej];
	}
	
	
	
	var liczbaPoPrzecinkuSlownie = slowa(czescSetna);
	
	if (czescSetna == 2) {
		liczbaPoPrzecinkuSlownie = "dwie";
		czescSetnaSlownie = "dziesiąte";
	}
	if (czescSetna == 1) {
		liczbaPoPrzecinkuSlownie = "jedna";
		czescSetnaSlownie = "dziesiąta";
	}
	
	
	czescSetna = czescSetna.toString();
	var ostatniaLiczba = czescSetna.charAt(czescSetna.length - 1);
	ostatniaLiczba = parseInt(ostatniaLiczba);
	
	
	if (ostatniaLiczba == 2) {
		liczbaPoPrzecinkuSlownie = liczbaPoPrzecinkuSlownie.replaceAll('dwa','dwie');
	}
	
	
	var wynik = liczbaPoPrzecinkuSlownie + " " + czescSetnaSlownie;
	return wynik;
	
	
}










function right(str, chr) {
  return str.slice(str.length-chr,str.length);
}





function slowa(liczba)
{
   // przypisanie obiektu pola tekstowego do zmiennej
   //var pole_liczba = document.forms["slowa"].liczba;
   // pobranie liczby
   //var liczba = parseInt(pole_liczba.value);
   var pole_liczba = liczba;
   liczba = parseInt(liczba);

   var jednosci = ["", " jeden", " dwa", " trzy", " cztery", " pięć", " sześć", " siedem", " osiem", " dziewięć"];
   var nascie = ["", " jedenaście", " dwanaście", " trzynaście", " czternaście", " piętnaście", " szesnaście", " siedemnaście", " osiemnaście", " dziewietnaście"];
   var dziesiatki = ["", " dziesięć", " dwadzieścia", " trzydzieści", " czterdzieści", " pięćdziesiąt", " sześćdziesiąt", " siedemdziesiąt", " osiemdziesiąt", " dziewięćdziesiąt"];
   var setki = ["", " sto", " dwieście", " trzysta", " czterysta", " pięćset", " sześćset", " siedemset", " osiemset", " dziewięćset"];
   var grupy = [
      ["" ,"" ,""],
      [" tysiąc" ," tysiące" ," tysięcy"],
      [" milion" ," miliony" ," milionów"],
      [" miliard"," miliardy"," miliardów"],
      [" bilion" ," biliony" ," bilionów"],
      [" biliard"," biliardy"," biliardów"],
      [" trylion"," tryliony"," trylionów"]];
             
   // jezeli pole zawiera poprawna wartosc calkowita
   if (true){
   	
      var wynik = '';
      var znak = '';
      if (liczba == 0)
         wynik = "zero";
      if (liczba < 0) {
         znak = "minus";
         liczba = -liczba;
      }
           
      var g = 0;
      while (liczba > 0) {
         var s = Math.floor((liczba % 1000)/100);
         var n = 0;
         var d = Math.floor((liczba % 100)/10);
         var j = Math.floor(liczba % 10);
              
         if (d == 1 && j>0) {
            n = j;
            d = 0;
            j = 0;
         }

         var k = 2;
         if (j == 1 && s+d+n == 0)
            k = 0;
         if (j == 2 || j == 3 || j == 4)
            k = 1;
         if (s+d+n+j > 0)
            wynik = setki[s]+dziesiatki[d]+nascie[n]+jednosci[j]+grupy[g][k]+wynik;

         g++;
         liczba = Math.floor(liczba/1000);
      }
      return wynik;
   }
   else  {
     alert("Podano nieprawidlowa wartosc!");
     //pole_liczba.focus();
  }
  return false;
}