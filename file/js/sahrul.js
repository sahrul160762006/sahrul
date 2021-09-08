
/*
  nama : candra dwi cahyo
  email : candradwicahyo18@gmail.com
*/

function tabs() {
  
  const button = document.querySelectorAll('.button');
  button.forEach(btn => {
    btn.addEventListener('click', function(e) {
      
      button.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      const value = e.target.getAttribute('data-target');
      const tabsContent = document.querySelectorAll('.tabs-content');
      tabsContent.forEach(tab => {
        tab.classList.remove('active');
        if (value == tab.id) tab.classList.add('active');
      });
      
    });
  });
  
}

tabs();
