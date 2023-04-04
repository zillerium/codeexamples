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
	  console.log("test odf ");
	  doc.text(20,20,"test");
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
