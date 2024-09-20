/**
 * mobile Navbar
 */
const initMobileNavbar = () => {
  const mobileNav = document.getElementById('mobile-navbar');
  const mobileNavIcon = document.getElementById('mobile-navbar-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseModal = document.getElementById('mobile-menu-close-modal');

  mobileNavIcon.addEventListener('click', () => {
    // open mobile menu width
    mobileMenu.style.width = '80vw';
    mobileMenuCloseModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 禁用页面滚动
  });

  mobileMenuCloseModal.addEventListener('click', () => {
    mobileMenu.style.width = '0';
    mobileMenuCloseModal.style.display = 'none';
    document.body.style.overflow = ''; // 恢复页面滚动
  });

  document.querySelectorAll('.mobile-submenu-open').forEach(submenuOpen => {
    submenuOpen.addEventListener('click', function () {
      const mobileSubmenuList = document.querySelectorAll('.mobile-submenu-list');
      const mobileMenuParent = document.querySelectorAll('.mobile-menu-parent');

      if (this.parentElement.nextElementSibling.style.display === 'none') {
        mobileSubmenuList.forEach(submenu => {
          submenu.style.display = 'none';
          submenu.style.height = '0px';
        });
        const nextUl = this.parentElement.nextElementSibling;
        nextUl.style.display = 'block';
        nextUl.style.height = nextUl.scrollHeight + 'px';
        this.parentElement.classList.add('mobile-submenu-show');
        mobileMenuParent.forEach(parent => {
          if (parent !== this.parentElement) {
            parent.classList.remove('mobile-submenu-show');
          }
        });
      } else {
        const nextUl = this.parentElement.nextElementSibling;
        nextUl.style.height = '0px';
        setTimeout(() => {
          nextUl.style.display = 'none';
        }, 300);
        this.parentElement.classList.remove('mobile-submenu-show');
      }
    });
  });
};

export default initMobileNavbar;
