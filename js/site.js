// Calder & Wynne: mobile menu, track record filters, mailto enquiry form, footer year.
document.getElementById('y').textContent = new Date().getFullYear();
var top_ = document.querySelector('.top'), burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  var open = top_.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.filters button').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.filters button').forEach(function (x) { x.classList.toggle('on', x === b); });
    var f = b.dataset.f;
    document.querySelectorAll('.deals .deal').forEach(function (d) { d.hidden = f !== 'all' && d.dataset.side !== f; });
  });
});
var form = document.getElementById('enquiry');
if (form) form.addEventListener('submit', function (e) {
  e.preventDefault();
  var f = new FormData(form), lines = [];
  form.querySelectorAll('label').forEach(function (l) {
    var el = l.querySelector('input,select,textarea');
    if (el && el.name !== 'message') lines.push(l.firstChild.textContent.trim() + ': ' + f.get(el.name));
  });
  location.href = 'mailto:' + form.dataset.email + '?subject=' + encodeURIComponent('Calder & Wynne: ' + f.get('type')) +
    '&body=' + encodeURIComponent(lines.join('\n') + '\n\n' + f.get('message'));
});
