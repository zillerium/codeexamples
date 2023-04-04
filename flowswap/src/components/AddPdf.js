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
    doc.setFontStyle('normal');

    // Add the asset data to the document
    doc.text(`Asset ID: ${assetId}`, 20, 20);
    doc.text(`Owner Name: ${assetOwnerName}`, 20, 30);
    doc.text(`Address: ${assetAddress}`, 20, 40);
	  doc.text(`assetPreferredNotary: ${assetPreferredNotary}`, 20, 40);
	    doc.text(`sellerAddress: ${sellerAddress}`, 20, 150);
	    doc.text(`hasDoubleGlazing: ${hasDoubleGlazing}`, 20, 150);
	      doc.text(`Has Tenant: ${hasTenant}`, 20, 70);
    doc.text(`Has Garden: ${hasGarden}`, 20, 80);
    doc.text(`Has Parking: ${hasParking}`, 20, 90);
     doc.text(`assetNumberBathrooms: ${assetNumberBathrooms}`, 20, 130);
	      doc.text(`assetNumberBedrooms: ${assetNumberBedrooms}`, 20, 140);
	      doc.text(`assetHouseType: ${assetHouseType}`, 20, 150);	  
	  doc.text(`imageUrl: ${imageUrl}`, 20, 100);
	    doc.text(`assetUrl: ${assetUrl}`, 20, 100);
	  	     doc.text(`usdGbpRate: ${usdGbpRate}`, 20, 150);
	       doc.text(`assetNumberSharesSold: ${assetNumberSharesSold}`, 20, 150);
	  	    
	      doc.text(`assetIncome: ${assetIncome}`, 20, 110);
	      doc.text(`assetYield: ${assetYield}`, 20, 120);
	    doc.text(`assetRiskRating: ${assetRiskRating}`, 20, 150);
	 
	  
    doc.text(`Value: ${assetValue}`, 20, 50);
	   doc.text(`currency: ${currency}`, 20, 150);
    doc.text(`Number of Shares: ${assetNumberShares}`, 20, 60);

  
    
    // Add other asset details as needed...

    // Add the image to the document
    html2canvas(document.querySelector(`img[src='${assetImageUrl}']`)).then(
      canvas => {
        const imgData = canvas.toDataURL('image/jpeg');
        doc.addImage(imgData, 'JPEG', 20, 100, 100, 75);

        // Save the document as a PDF file
        doc.save('asset_data.pdf');
      }
    );
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
