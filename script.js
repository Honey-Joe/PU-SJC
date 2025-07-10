// document.querySelector('button[aria-label="Toggle menu"]').addEventListener('click', function() {
//     const mobileMenu = document.getElementById("menu");
//     mobileMenu.classList.toggle('hidden');
//   });


  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    this.innerHTML = menu.classList.contains('hidden') ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
  });

  document.querySelectorAll('.syllabus-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.syllabus-tab').forEach(t => {
        t.classList.remove('active', 'text-primary', 'border-b-2', 'border-accent');
        t.classList.add('text-gray-500');
      });
      
      // Add active class to clicked tab
      tab.classList.add('active', 'text-primary', 'border-b-2', 'border-accent');
      tab.classList.remove('text-gray-500');
      
      // Here you would typically fetch and display the corresponding semester content
      // This is just a UI demo - implement your actual content loading logic
    });
  });