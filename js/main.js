/**
 * Theme-Toggle Switch (Light Mode/ Dark Mode)
 */

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () =>{
    document.documentElement.dataset.theme = toggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', document.documentElement.dataset.theme);
});
const saved = localStorage.getItem('theme');
if(saved){
    document.documentElement.dataset.theme  = saved;
    toggle.checked = saved === 'dark';
}


/**
 * Project Filter(Show Project By Category)
 */

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display =filter === 'all' || card.dataset.category === filter? 'block' : 'none';
        });
    });
});

/**Rotating Roles before About Me */
document.addEventListener("DOMContentLoaded", () => {
    const roles = [
      "Data Analyst",
      "Software Engineer",
      "Full-Stack Engineer",
      "IoT Developer",
      "Mobile App Developer"
    ];
    let idx = 0, char = 0, deleting = false;
    const el = document.getElementById("animated-text");
    const speed = 100;         
    const pauseEnd = 2000;     
    const pauseStart = 500;   
  
    function tick() {
      const word = roles[idx];
      el.textContent = deleting
        ? word.substring(0, char--)
        : word.substring(0, ++char);
  
      let delay = deleting ? speed/2 : speed;
      if (!deleting && char === word.length) {
        delay = pauseEnd; deleting = true;
      } else if (deleting && char === 0) {
        deleting = false;
        idx = (idx + 1) % roles.length;
        delay = pauseStart;
      }
      setTimeout(tick, delay);
    }
    tick();
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const links    = document.querySelectorAll('.navbar [data-target]');
    const sections = document.querySelectorAll('main section');
  
    function showSection(id) {
      sections.forEach(sec => {
        sec.classList.toggle('active', sec.id === id);
      });
    }
  
    // click handlers
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.target;
        showSection(target);
        // optional: update URL hash
        history.pushState(null, '', `#${target}`);
      });
    });
  
    // on load: if there’s a hash, show that; else default to hero
    const start = location.hash.replace('#','') || 'hero';
    showSection(start);
  });
  
  