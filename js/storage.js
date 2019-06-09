function sprawdz_box(box_id) {
    var obiekt=document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
  }
  
  function pobierz_radio(nazwa_radio) {
      var obiekt = document.getElementsByName(nazwa_radio);
      var i = 0;
  
      for(i<0; i<obiekt.length; i++) {
          wybrany = obiekt[i].checked;
          if(wybrany) return obiekt[i].value;
      }
      return "";
  }
  
  function sprawdzPole(pole_id,obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
  }
  
  function pobierzDate(inputNazwa) {
    var obiekt = document.getElementById(inputNazwa).value;
    var data = new Date(obiekt);
    return data;
  }
  
  function saveData() {
    var ok = true;
  
    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
     obiektemail =
     /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
  
    if(sprawdzPole("name", obiektNazw)) {
        var name = document.getElementById("name");
        document.getElementById("name_error").innerHTML="";
    }else {
      document.getElementById("name_error").innerHTML=
      "Wpisz poprawnie nazwisko!";
      ok = false;
    }
  
    if(sprawdzPole("email", obiektemail)) {
      var email = document.getElementById("email");
      document.getElementById("email_error").innerHTML="";
    }else {
      document.getElementById("email_error").innerHTML=
      "Wpisz poprawnie email!";
      ok = false;
    }
  
    var pupil = document.getElementById("pupil");
  
    var rasa = document.getElementById("rasa");
  
    var opieka = "";
  
    if(!sprawdz_box("behav") && !sprawdz_box("kosmetolog") && !sprawdz_box("wet")) {
      document.getElementById("produkt_error").innerHTML = "Zaznacz opcje!";
      ok = false;
    }else document.getElementById("produkt_error").innerHTML = "";
  
    if(sprawdz_box("behav")) {
        opieka += "Behawiorysta ";
    }
  
    if(sprawdz_box("kosmetolog")) {
        opieka += "Kosmetolog ";
    }
  
    if(sprawdz_box("wet")) {
        opieka += "Weterynarz ";
    }
  
    var platnosc = pobierz_radio("zaplata");
  
    var start = pobierzDate("start");
    var end = pobierzDate("end");
    var dataStart = "";
    var dataEnd = "";
  
     if(start.getTime() < end.getTime() && start > Date.now()) {
      document.getElementById("date_error").innerHTML = "";
      dataStart = start.toString();
      dataEnd = end.toString();
     }
     else {
      ok = false;
      document.getElementById("date_error").innerHTML = "Niepoprawnie ustawiles date!";
     }
  
    if(ok) {
      sessionStorage.setItem("Imie i nazwisko", name.value);
      sessionStorage.setItem("Email", email.value);
      sessionStorage.setItem("Imie pupila", pupil.value);
      sessionStorage.setItem("Rasa", rasa.value);
      sessionStorage.setItem("Opieka", opieka);
      sessionStorage.setItem("Platnosc", platnosc);
  
      localStorage.setItem("Imie i nazwisko", name.value);
      localStorage.setItem("Email", email.value);
      localStorage.setItem("Imie pupila", pupil.value);
      localStorage.setItem("Rasa", rasa.value);
      localStorage.setItem("Opieka", opieka);
      localStorage.setItem("Platnosc", platnosc);
    }
  
    return ok;
  }
  
  function clearData() {
    sessionStorage.clear();
  }