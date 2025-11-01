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