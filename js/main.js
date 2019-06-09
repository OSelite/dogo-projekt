window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 50) nav.className = ''; else nav.className = 'scroll';
  };

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") 
    x.style.display = "none";
  else
    x.style.display = "block";
}

