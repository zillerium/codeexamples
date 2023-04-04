function generatePDF() {
  const pdf = new jsPDF('p', 'pt', 'a4');
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  pdf.setFontSize(24);
  pdf.text('Flowswap', width / 2, 40, { align: 'center' });

  // Add image
  if (photo) {
    const img = new Image();
    img.src = URL.createObjectURL(photo);

    img.onload = function () {
      const imgWidth = this.width;
      const imgHeight = this.height;
      const scaleFactor = Math.min(width / imgWidth, height / imgHeight);
      const x = 20;
      let y = imgHeight * scaleFactor + 70;
      const m = 20;

      pdf.setFontSize(12);
      pdf.setFont('normal');
      pdf.addImage(
        img,
        'JPEG',
        0,
        60,
        imgWidth * scaleFactor,
        imgHeight * scaleFactor
      );

      const fieldsPerPage = Math.floor((height - y) / m) - 1;
      let fieldCount = 0;

      const printText = (text) => {
        if (fieldCount >= fieldsPerPage) {
          pdf.addPage();
          y = 60;
          fieldCount = 0;
        }
        pdf.text(text, x, y);
        y += m;
        fieldCount++;
      };

      // Add text fields
      printText(`Asset ID: ${assetId}`);
      printText(`Owner Name: ${assetOwnerName}`);
      printText(`Address: ${assetAddress}`);
      printText(`Preferred Notary: ${assetPreferredNotary}`);
      printText(`Seller Address: ${sellerAddress}`);
      printText(`Has Double Glazing: ${hasDoubleGlazing}`);
      printText(`Has Tenant: ${hasTenant}`);
      printText(`Has Garden: ${hasGarden}`);
      printText(`Has Parking: ${hasParking}`);
      printText(`Number of Bathrooms: ${assetNumberBathrooms}`);
      printText(`Number of Bedrooms: ${assetNumberBedrooms}`);
      printText(`House Type: ${assetHouseType}`);
      printText(`Image URL: ${assetImageUrl}`);
      printText(`Asset URL: ${assetUrl}`);
      printText(`Value (${currency}): ${assetValue}`);
      printText(`Number of Shares: ${assetNumberShares}`);
      printText(`Income (${currency}): ${assetIncome}`);
      printText(`Yield: ${assetYield}`);
      printText(`Risk Rating: ${assetRiskRating}`);
      printText(`USD/GBP Rate: ${usdGbpRate}`);
      printText(`Number of Shares Sold: ${assetNumberSharesSold}`);

      pdf.save('imagepdf.pdf');
    };
  }
}
