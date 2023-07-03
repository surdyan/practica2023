function toggleDetails(productId) {
    var product = document.getElementById('product' + productId);
    var caret = document.getElementById('caret' + productId);
    var buttonText = document.getElementById('buttonText' + productId);
    var detailsSection = product.querySelector('.details-section');
    var linksSection = product.querySelector('.links-section');
    var pdfSection = product.querySelector('.pdf-section');
    
    if (detailsSection.style.display === 'none') {
      detailsSection.style.display = 'block';
      linksSection.style.display = 'block';
      pdfSection.style.display = 'block';
      caret.innerHTML = '&#9660;';
      buttonText.textContent = 'Mai puține informații';
    } else {
      detailsSection.style.display = 'none';
      linksSection.style.display = 'none';
      pdfSection.style.display = 'none';
      caret.innerHTML = '&#9658;';
      buttonText.textContent = 'Mai multe informații';
    }
    
    return false; // Previne acțiunea implicită a link-ului (de a naviga către o altă pagină)
  }
  