import React, { useRef, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import { ContractContext } from './ContractContext';

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);
  const screenshotRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const onChangephoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const generatePDF = () => {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const w = pdf.internal.pageSize.getWidth();
    const h = pdf.internal.pageSize.getHeight();
    const img = new Image();
    img.src = URL.createObjectURL(photo);
    img.onload = function () {
      const imgWidth = this.width;
      const imgHeight = this.height;
      const scaleFactor = Math.min(w / imgWidth, h / imgHeight);
      pdf.addImage(
        img,
        'JPEG',
        0,
        0,
        imgWidth * scaleFactor,
        imgHeight * scaleFactor
      );
      pdf.save('imagepdf.pdf');
    };
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
