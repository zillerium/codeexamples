import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);
  const [pdfData, setPdfData] = useState('');

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.addImage(pdfData, 'JPEG', 0, 0);
    pdf.save('asset_data.pdf');
  };

  const generatePDFFromImage = () => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = assetImageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      setPdfData(canvas.toDataURL('image/jpeg'));
      generatePDF();
    };
  };

  return (
    <>
      <Button variant="primary" onClick={generatePDFFromImage}>
        Generate PDF
      </Button>
      {pdfData && (
        <img src={pdfData} alt="asset" />
      )}
      <img src={assetImageUrl} alt="asset" crossorigin="anonymous" />
    </>
  );
}

export default AddPdf;
