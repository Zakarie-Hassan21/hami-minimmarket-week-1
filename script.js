(function(){
            const menuToggle = document.querySelector('.menu-toggle');
            const navUl = document.querySelector('.header-flex nav ul');
            if(!menuToggle || !navUl) return;

            menuToggle.addEventListener('click', function(e){
                e.stopPropagation();
                navUl.classList.toggle('open');
                const expanded = navUl.classList.contains('open');
                menuToggle.setAttribute('aria-expanded', expanded);
            });

            // close when clicking outside
            document.addEventListener('click', function(e){
                if(!e.target.closest('.header-flex')){
                    navUl.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // close when a link is clicked
            navUl.querySelectorAll('a').forEach(function(a){
                a.addEventListener('click', function(){
                    navUl.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                });
            });
        })();

// Back-to-top behavior
(function(){
    const backBtn = document.querySelector('.back-to-top');
    if(!backBtn) return;

    const showAfter = 300; // px scrolled before showing button

    function checkScroll(){
        if(window.scrollY > showAfter){
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    }

    // smooth scroll to top
    backBtn.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // initial check and on scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });

    // Optional: hide when user uses keyboard to reach top
    window.addEventListener('hashchange', checkScroll);
})();