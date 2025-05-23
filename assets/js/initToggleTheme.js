// Toggle Theme

function initThemeToggle() {
  const html = document.documentElement;
  const themeToggles = document.querySelectorAll('.theme-toggle');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (window.REMARK42 && window.REMARK42.changeTheme) {
      try {
        window.REMARK42.changeTheme(theme);
      } catch (e) {
        console.error('Failed to update Remark42 theme:', e);
      }
    }
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // 为所有切换按钮添加事件监听器
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggleTheme();
    });
  });
}

export default initThemeToggle
