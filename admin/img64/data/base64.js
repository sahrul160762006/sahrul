/* javascript */

function imagePreview() {
  const image = document.querySelector('#image');
  const button = document.querySelector('#input-file');
  button.addEventListener('change', function() {
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener('load', function() {
      image.setAttribute('src', this.result);
    });
    
    // jalankan function features();
    return features(image);
  });
}

imagePreview();

function features(image) {
  const input_range = document.querySelectorAll('.box .input-range');
  input_range.forEach(range => {
    range.addEventListener('input', function() {
      // input
      const range1 = document.querySelector('.box #blur');
      const range2 = document.querySelector('.box #contrast');
      const range3 = document.querySelector('.box #hue-rotate');
      const range4 = document.querySelector('.box #sepia');
      const range5 = document.querySelector('.box #radius');
      
      image.style.filter = `blur(${range1.value}px) contrast(${range2.value}%) hue-rotate(${range3.value}deg) sepia(${range4.value}%)`;
      image.style.borderRadius = `${range5.value}%`;
    });
  });
}
