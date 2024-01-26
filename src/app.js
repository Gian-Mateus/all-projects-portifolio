// Navigation Menu handler
document.querySelectorAll('[data-toggle]').forEach(function(e) {
    e.addEventListener('click', function() {
        var targetID = this.getAttribute('data-target');
        var target = document.getElementById(targetID);
    
        if (targetID === 'menuNav') {
        var blur = document.getElementById('outCollapse');

        if (!blur) {
            blur = document.createElement('div');
            blur.id = "outCollapse";
            blur.classList.add("z-10", "fixed", "top-0", "right-0", "w-full", "h-screen", "backdrop-blur-sm", "backdrop-brightness-50");
            document.body.appendChild(blur);
        }

        function handlerNav() {
            if (target.classList.contains('hidden')) {
            target.classList.remove('hidden', 'md:flex');
            target.classList.add('flex', 'animate-scale-r-to-l');
            } else {
            target.classList.remove('animate-scale-r-to-l');
            target.classList.add('animate-scale-l-to-r', 'md:flex');
            setTimeout(() => {
                target.classList.add('hidden');
            }, 300);
            }
        }
        handlerNav();

        blur.addEventListener('click', function() {
            blur.remove();
            handlerNav();
        });

        } else {
        handlerNav();
        }
    });
});

    const handlerNav = () => {
    // handlerNav implementation
    };
