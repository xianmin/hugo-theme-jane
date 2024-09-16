// Toogle Theme

function initThemeToggle() {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const lightIcon = themeToggle.querySelector('.theme-icon-light');
  const darkIcon = themeToggle.querySelector('.theme-icon-dark');
  console.log(lightIcon, darkIcon);

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
  }

  function updateIcon(theme) {
    if (theme === 'dark') {
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'inline-block';
    } else {
      lightIcon.style.display = 'inline-block';
      darkIcon.style.display = 'none';
    }
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // 初始化主题
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // 添加点击事件监听器
  themeToggle.addEventListener('click', function (e) {
    e.preventDefault();
    toggleTheme();
  });
}

export default initThemeToggle
