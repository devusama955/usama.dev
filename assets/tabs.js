document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-tabs-id]').forEach(container => {
    const buttons = container.querySelectorAll('[role=\"tab\"]');
    const panels = container.querySelectorAll('[role=\"tabpanel\"]');

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Update buttons
        buttons.forEach((btn, i) => {
          const isActive = i === index;
          btn.classList.toggle('tabs__nav-button--active', isActive);
          btn.setAttribute('aria-selected', isActive);
        });

        // Update panels
        panels.forEach((panel, i) => {
          const isActive = i === index;
          panel.classList.toggle('tabs__content--hidden', !isActive);
          if (isActive) {
            panel.focus();
          }
        });
      });
    });
  });
});

