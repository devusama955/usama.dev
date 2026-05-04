class Tabs extends HTMLElement {
  constructor() {
    super();
    this.buttons = this.querySelectorAll('[role="tab"]');
    this.panels = this.querySelectorAll('[role="tabpanel"]');
    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.switchTab(index));
    });
  }

  switchTab(index) {
    this.buttons.forEach((button, i) => {
      const isActive = i === index;
      button.classList.toggle('tabs__nav-button--active', isActive);
      button.setAttribute('aria-selected', isActive);
    });

    this.panels.forEach((panel, i) => {
      const isActive = i === index;
      panel.classList.toggle('tabs__content--hidden', !isActive);
      if (isActive) {
        panel.setAttribute('tabindex', '0');
        panel.focus();
      } else {
        panel.setAttribute('tabindex', '-1');
      }
    });
  }
}

if (!customElements.get('tabs-component')) {
  customElements.define('tabs-component', Tabs);
}

document.querySelectorAll('[data-tabs-id]').forEach(container => {
  new Tabs(container);
});

