const all = JSON.parse(document.getElementById('copy').textContent);
const app = document.body.dataset.app;
const selector = document.getElementById('language');
function resolve(tag) {
  const value = tag.toLowerCase();
  if (value.startsWith('zh')) return /hant|tw|hk|mo/.test(value) ? 'zh-Hant' : 'zh-Hans';
  if (value.startsWith('ja')) return 'ja';
  if (value.startsWith('ko')) return 'ko';
  return 'en';
}
function render(requested) {
  const tag = all[requested] ? requested : requested.startsWith('zh') && all['zh-Hans'] ? 'zh-Hans' : 'en';
  const copy = all[tag];
  document.documentElement.lang = tag;
  selector.value = tag;
  for (const element of document.querySelectorAll('[data-key]')) element.textContent = copy[element.dataset.key];
  const page = document.body.dataset.page;
  document.title = app + ' · ' + (page === 'home' ? copy.subtitle : copy[page + '_title']);
  const sections = document.getElementById('sections');
  sections.replaceChildren();
  if (page !== 'home') for (const [title, text] of copy[page]) {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const paragraph = document.createElement('p');
    heading.textContent = title;
    paragraph.textContent = text;
    section.append(heading, paragraph);
    sections.append(section);
  }
}
let preference;
try { preference = localStorage.getItem(app.toLowerCase() + '-language'); } catch {}
render(preference || resolve(navigator.language || 'en'));
selector.addEventListener('change', () => {
  render(selector.value);
  try { localStorage.setItem(app.toLowerCase() + '-language', selector.value); } catch {}
});
