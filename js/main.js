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

/**
 * Contact Form - Basic Alert and Reset
 */
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Thanks! I'll get back to you soon.");
    e.target.reset();
  });

