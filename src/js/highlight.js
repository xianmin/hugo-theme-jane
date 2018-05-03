/**
 * highlight
 */

export default function () {
  document.querySelectorAll('.chroma>table')
    .forEach((element) => {
      const sub = element.querySelector('code[data-lang]');
      if (sub !== null) {
        element.setAttribute('data-lang', mapLang(sub.getAttribute('data-lang')));
      }
    });
}

function mapLang(name) {
  return {
    coffeescript: 'CoffeeScript',
    cpp: 'C++',
    cs: 'C#',
    css: 'CSS',
    html: 'HTML',
    http: 'HTTP',
    js: 'JavaScript',
    json: 'JSON',
    objectivec: 'Objective-C',
    php: 'PHP',
    sql: 'SQL',
    toml: 'TOML',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    xml: 'XML',
    yaml: 'YAML',
  }[name] || name;
}
