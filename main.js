window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 50) nav.className = ''; else nav.className = 'scroll';
  };