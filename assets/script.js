
function filterLetters(year) {
  const cards = document.querySelectorAll('.letter-card-wrap');
  const btns = document.querySelectorAll('.year-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (year === 'all') {
    cards.forEach(c => c.style.display = '');
    document.querySelector('[data-year="all"]').classList.add('active');
  } else {
    cards.forEach(c => { c.style.display = c.dataset.year === year ? '' : 'none'; });
    const btn = document.querySelector('[data-year="' + year + '"]');
    if (btn) btn.classList.add('active');
  }
}
function searchLetters(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.letter-card-wrap').forEach(c => {
    if (!q) { c.style.display = ''; return; }
    const text = (c.dataset.subject + ' ' + c.dataset.summary).toLowerCase();
    c.style.display = text.includes(q) ? '' : 'none';
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const s = document.getElementById('letter-search');
  if (s) s.addEventListener('input', e => searchLetters(e.target.value));
});
