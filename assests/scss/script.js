 let Menubtn = document .getElementById('Menubtn')
     Menubtn .addEventListener('click',function(e){
        document .querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('fa-xmark');
     })
     let typed = new Typed('.auto-input',{
        strings:['Front-End Developer!','Frelancer!','Back-End Developer!','Youtuber!'],
        typedSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
     })
 