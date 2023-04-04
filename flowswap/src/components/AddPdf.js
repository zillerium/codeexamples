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

  
  function generatePDF() {
  const pdf = new jsPDF('p', 'pt', 'a4');
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  // Add image
  if (photo) {
    const img = new Image();
    img.src = URL.createObjectURL(photo);
    img.onload = function () {
      const imgWidth = this.width;
      const imgHeight = this.height;
      const scaleFactor = Math.min(width / imgWidth, height / imgHeight);
      pdf.addImage(
        img,
        'JPEG',
        0,
        0,
        imgWidth * scaleFactor,
        imgHeight * scaleFactor
      );

      // Add text fields
      const x = 20;
      let y = imgHeight * scaleFactor + 50;
      const m = 20;
      pdf.setFontSize(12);
      pdf.setFont('normal');
      pdf.text(`Asset ID: ${assetId}`, x, y);
      pdf.text(`Owner Name: ${assetOwnerName}`, x, y + m);
      pdf.text(`Address: ${assetAddress}`, x, y + 2 * m);
      pdf.text(`Preferred Notary: ${assetPreferredNotary}`, x, y + 3 * m);
      pdf.text(`Seller Address: ${sellerAddress}`, x, y + 4 * m);
      pdf.text(`Has Double Glazing: ${hasDoubleGlazing}`, x, y + 5 * m);
      pdf.text(`Has Tenant: ${hasTenant}`, x, y + 6 * m);
      pdf.text(`Has Garden: ${hasGarden}`, x, y + 7 * m);
      pdf.text(`Has Parking: ${hasParking}`, x, y + 8 * m);
      pdf.text(`Number of Bathrooms: ${assetNumberBathrooms}`, x, y + 9 * m);
      pdf.text(`Number of Bedrooms: ${assetNumberBedrooms}`, x, y + 10 * m);
      pdf.text(`House Type: ${assetHouseType}`, x, y + 11 * m);
      pdf.text(`Image URL: ${assetImageUrl}`, x, y + 12 * m);
      pdf.text(`Asset URL: ${assetUrl}`, x, y + 13 * m);
      pdf.text(`Value (${currency}): ${assetValue}`, x, y + 14 * m);
      pdf.text(`Number of Shares: ${assetNumberShares}`, x, y + 15 * m);
      pdf.text(`Income (${currency}): ${assetIncome}`, x, y + 16 * m);
      pdf.text(`Yield: ${assetYield}`, x, y + 17 * m);
      pdf.text(`Risk Rating: ${assetRiskRating}`, x, y + 18 * m);
      pdf.text(`USD/GBP Rate: ${usdGbpRate}`, x, y + 19 * m);
      pdf.text(`Number of Shares Sold: ${assetNumberSharesSold}`, x, y + 20 * m);

      pdf.save('imagepdf.pdf');
    };
  }
}

  const generatePDF2 = () => {
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
