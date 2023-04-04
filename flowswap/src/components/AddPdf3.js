import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ContractContext } from './ContractContext';

function AddPdf() {
  const {
    assetId,
    dbKey,
    assetOwnerName,
    assetAddress,
    assetValue,
    assetNumberShares,
    hasTenant,
    hasGarden,
    hasParking,
    assetImageUrl,
    assetUrl,
    assetIncome,
    assetYield,
    assetNumberBathrooms,
    assetNumberBedrooms,
    assetHouseType,
    hasDoubleGlazing,
    assetRiskRating,
    assetPreferredNotary,
    currency,
    usdGbpRate,
    assetNumberSharesSold,
    sellerAddress,
  } = useContext(ContractContext);

  const generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set the font size and style for the document
    doc.setFontSize(12);
    doc.setFont('normal');
console.log("assetid === ", assetId);
    // Add the asset data to the document
 doc.text(`Asset ID: ${assetId}`, 20, 20);
    doc.text(`Owner Name: ${assetOwnerName}`, 20, 30);
    doc.text(`Address: ${assetAddress}`, 20, 40);
    doc.text(`Preferred Notary: ${assetPreferredNotary}`, 20, 50);
    doc.text(`Seller Address: ${sellerAddress}`, 20, 60);
    doc.text(`Has Double Glazing: ${hasDoubleGlazing}`, 20, 70);
    doc.text(`Has Tenant: ${hasTenant}`, 20, 80);
    doc.text(`Has Garden: ${hasGarden}`, 20, 90);
    doc.text(`Has Parking: ${hasParking}`, 20, 100);
    doc.text(`Number of Bathrooms: ${assetNumberBathrooms}`, 20, 110);
    doc.text(`Number of Bedrooms: ${assetNumberBedrooms}`, 20, 120);
    doc.text(`House Type: ${assetHouseType}`, 20, 130);
    doc.text(`Image URL: ${assetImageUrl}`, 20, 140);
    doc.text(`Asset URL: ${assetUrl}`, 20, 150);
    doc.text(`Value (${currency}): ${assetValue}`, 20, 160);
    doc.text(`Number of Shares: ${assetNumberShares}`, 20, 170);
    doc.text(`Income (${currency}): ${assetIncome}`, 20, 180);
    doc.text(`Yield: ${assetYield}`, 20, 190);
    doc.text(`Risk Rating: ${assetRiskRating}`, 20, 200);
    doc.text(`USD/GBP Rate: ${usdGbpRate}`, 20, 210);
    doc.text(`Number of Shares Sold: ${assetNumberSharesSold}`, 20, 220); 
    // Add other asset details as needed...
console.log("assetImageurl - ", assetImageUrl);
    // Add the image to the document
   console.log("image1");
	 const img1=new Image();
	  img1.src=assetImageUrl;
	  img1.onLoad = function
	  doc.addImage(img1);
/*	  const img = document.querySelector(`img[src='${assetImageUrl}']`);
   console.log("image12", img);
   img.onLoad = () => {
        html2canvas(img).then(canvas => {
           console.log("assetImageurl 2- ", canvas);
           const imgData = canvas.toDataURL('image/jpeg');

           console.log("assetImageurl 3- ");
	   doc.addImage(imgData, 'JPEG', 20, 230, 150, 100);
           console.log("assetImageurl 4- ", assetImageUrl);
        // Save the document as a PDF file
 //       doc.save('asset_data.pdf');
      }
    );
    }
    */
        doc.save('asset_data.pdf');
  };

  return (
    <>
      <Button variant="primary" onClick={generatePDF}>
        Generate PDF
      </Button>
    </>
  );
}

export default AddPdf;
