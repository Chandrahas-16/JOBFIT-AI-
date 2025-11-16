// Hero kinetic text shadow
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.kinetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = x / rect.width;
      el.style.textShadow = `${(percent-0.5)*18}px 5px 22px #19e6a055`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.textShadow = '';
    });
  });
  // Animate CTA button click for demo
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Coming soon!';
      btn.style.background = '#13e6a8';
      setTimeout(()=>{
        btn.textContent = btn.classList.contains('accent') ? 'Try for Free' : 'Upload Resume';
        btn.style.background = btn.classList.contains('accent') ? '#14b4e6' : 'var(--jobbfit-accent)';
      }, 1200);
    });
  });
});
