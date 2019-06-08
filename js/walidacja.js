function sprawdzPole(pole_id,obiektRegex) {
    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    //---------------------------------
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
   }
   function sprawdz_radio(nazwa_radio){
    //Funkcja sprawdza czy wybrano przycisk radio
    //z grupy przycisków o nazwie nazwa_radio
    //---------------------------------------
    var obiekt=document.getElementsByName(nazwa_radio);
    for (i=0;i<obiekt.length;i++)
    { wybrany=obiekt[i].checked;
    if (wybrany) return true; }
    return false;
   }

   function sprawdz_box(box_id)
   {//Funkcja sprawdza czy przycisk typu checkbox
   //o identyfikatorze box_id jest zaznaczony
    //----------------------------------------
    var obiekt=document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
   }

   function pobierz_radio(nazwa_radio) {
       var obiekt = document.getElementsByName(nazwa_radio);

       for(i<0; i<obiekt.length; i++) {
           wybrany = obiekt[i].checked;
           if(wybrany) return obiekt[i].value;
       }
       return "";
   }

   function sprawdz()
   { //Funkcja realizujaca sprawdzanie całego fomularza
   //wykorzystując funkcje pomocnicze
   //--------------------------------
   var ok=true; //zmienna informująca o poprawnym wypełnieniu formularza
   //Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
   //poprawności danych wprowadzonych do pól tekstowych
   obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
   obiektemail =
   /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;

   var dane = "Dane z wypelnionego formularza:";
   //Sprawdzanie kolejnych pól formularza.
   //w przypadku błędu - pojawia się odpowiedni komunikat
   if (!sprawdzPole("name",obiektNazw))
   { ok=false;
    document.getElementById("name_error").innerHTML=
   "Wpisz poprawnie nazwisko!";
   }
   else {
       document.getElementById("name_error").innerHTML="";
       dane += "\nImie i nazwisko: " + document.getElementById("name").value;
   }

   if(!sprawdzPole("email", obiektemail)) {
       ok = false;
       document.getElementById("email_error").innerHTML = "Podaj poprawny email!";
   }else {
       document.getElementById("email_error").innerHTML = "";
       dane += "\nEmail: " + document.getElementById("email").value;
   }
        
    dane += "\nImie pupila: " + document.getElementById("pupil").value;
    dane += "\nRasa: " + document.getElementById("rasa").value;
    dane += "\nOpieka: ";

   if(!sprawdz_box("behav") && !sprawdz_box("kosmetolog") && !sprawdz_box("wet")) {
    ok = false;
    document.getElementById("produkt_error").innerHTML = "Zaznacz opcje!";
   }

   if(sprawdz_box("behav")) {
        document.getElementById("produkt_error").innerHTML = "";
        dane += "Behawiorysta ";
   }

   if(sprawdz_box("kosmetolog")) {
        document.getElementById("produkt_error").innerHTML = "";
        dane += "Kosmetolog ";
   }

   if(sprawdz_box("wet")) {
        document.getElementById("produkt_error").innerHTML = "";
        dane += "Weterynarz ";
   }

   if(!sprawdz_radio("zaplata")) {
       ok = false;
       document.getElementById("zaplata_error").innerHTML = "Wybierz sposob platnosci!";
   }else document.getElementById("zaplata_error").innerHTML = "";

   dane += "\nSposob platnosci: " + pobierz_radio("zaplata");

   if(ok) {
    if (window.confirm(dane)) return true;
    else return false;
   }
   return ok;
   } 