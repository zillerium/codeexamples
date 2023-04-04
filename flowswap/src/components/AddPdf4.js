 
import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ContractContext } from './ContractContext';

// Load the image
function getImgFromUrl(logo_url, callback) {
  var img = new Image();
  img.src = logo_url;
  img.onload = function () {
    callback(img);
  };
}

// In the onload event on first step, make a callback to use the jspdf doc
function generatePDF(img) {
  var options = { orientation: 'p', unit: 'mm', format: 'a4' };
  var doc = new jsPDF(options);
  doc.addImage(img, 'JPEG', 0, 0, 100, 50);
	
	 doc.setFontSize(12);
    doc.setFont('normal');
 	  const x = 20;
    let y = 90;
	  const m =10;
    // Add the asset data to the document
 doc.text(`Asset ID: ${assetId}`, x, y+=m);
    doc.text(`Owner Name: ${assetOwnerName}`, x, y+=m);
    doc.text(`Address: ${assetAddress}`, x, y+=m);
    doc.text(`Preferred Notary: ${assetPreferredNotary}`, x, y+=m);
    doc.text(`Seller Address: ${sellerAddress}`, x, y+=m);
    doc.text(`Has Double Glazing: ${hasDoubleGlazing}`, 20, y+=m);
    doc.text(`Has Tenant: ${hasTenant}`, x, y+=m);
    doc.text(`Has Garden: ${hasGarden}`, x, y+=m);
    doc.text(`Has Parking: ${hasParking}`, x, y+=m);
    doc.text(`Number of Bathrooms: ${assetNumberBathrooms}`, x, y+=m);
    doc.text(`Number of Bedrooms: ${assetNumberBedrooms}`, x, y+=m);
    doc.text(`House Type: ${assetHouseType}`, x, y+=m);
    doc.text(`Image URL: ${assetImageUrl}`, x, y+=m);
    doc.text(`Asset URL: ${assetUrl}`, x, y+=m);
    doc.text(`Value (${currency}): ${assetValue}`, x, y+=m);
    doc.text(`Number of Shares: ${assetNumberShares}`, x, y+=m);
    doc.text(`Income (${currency}): ${assetIncome}`, x, y+=m);
    doc.text(`Yield: ${assetYield}`, x, y+=10);
    doc.text(`Risk Rating: ${assetRiskRating}`, x, y+=m);
    doc.text(`USD/GBP Rate: ${usdGbpRate}`, x, y+=m);
    doc.text(`Number of Shares Sold: ${assetNumberSharesSold}`,x, y+=m); 
	
  doc.save('asset_data.pdf');
}

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

  const generatePDFWithImage = (img) => {
    // Create a new jsPDF instance
    getImgFromUrl(assetImageUrl, (img) => {
      generatePDF(img);
    });
  };

  return (
    <>
      <Button variant="primary" onClick={generatePDFWithImage}>
        Generate PDF
      </Button>
    </>
  );
}

export default AddPdf;

