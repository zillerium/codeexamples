import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function GenPDF(data, imageUrl) {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Set the font size and style for the document
  doc.setFontSize(12);
  doc.setFontStyle('normal');

  // Add the user-entered data to the document
  doc.text(`Name: ${data.name}`, 20, 20);
  doc.text(`Address: ${data.address}`, 20, 30);
  doc.text(`Email: ${data.email}`, 20, 40);

  // Add the essential data to the document
  doc.text(`Price: ${data.price}`, 20, 60);
  doc.text(`Yield: ${data.yield}`, 20, 70);
  doc.text(`Seller Address: ${data.sellerAddress}`, 20, 80);
  doc.text(`Owner Address: ${data.ownerAddress}`, 20, 90);
  // Add other details as needed...

  // Add the image to the document
  html2canvas(document.querySelector(`img[src='${imageUrl}']`)).then(canvas => {
    const imgData = canvas.toDataURL('image/jpeg');
    doc.addImage(imgData, 'JPEG', 20, 100, 100, 75);
    
    // Save the document as a PDF file
    doc.save('user_data.pdf');
  });
}
