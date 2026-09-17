document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mensaje al agendar cita
  const btnCita = document.getElementById('btn-cita');
  if(btnCita) {
    btnCita.addEventListener('click', () => {
      alert('¡Qué emoción! Pronto nos comunicaremos contigo para atender a tu peludito con mucho amor. 🐾');
    });
  }

  // 2. Filtro interactivo para la galería
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-teal-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
      });
      
      button.classList.add('active', 'bg-teal-500', 'text-white');
      button.classList.remove('bg-gray-200', 'text-gray-700');

      const filterValue = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

});