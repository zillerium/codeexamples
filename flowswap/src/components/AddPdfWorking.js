import React, { useRef, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ContractContext } from './ContractContext';

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);
  const screenshotRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const onChangephoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const generatePDF = () => {
    html2canvas(screenshotRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      if (photo) {
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = () => {
          const imgData = reader.result;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('my-image.pdf');
        };
      } else {
        pdf.save('my-image.pdf');
      }
    });
  };

  return (
    <div>
      <div ref={screenshotRef}>
        <img src={assetImageUrl} alt="My Image" />
      </div>
      <div>
        <input
          type="file"
          name="photo"
          onChange={onChangephoto}
          accept="image/png, image/png, image/jpeg, image/jpg"
        />
        <Button variant="primary" onClick={generatePDF}>
          Save as PDF
        </Button>
      </div>
    </div>
  );
}

export default AddPdf;
