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

      const printTextMoney = (label, value) => {
        const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        printText(`${label}: ${currency}${formattedValue}`);
      };

      const printTextNumber = (label, value) => {
        const formattedValue = value.toLocaleString();
        printText(`${label}: ${formattedValue}`);
      };

      const printTextBoolean = (label, value) => {
        const readableValue = value ? 'Yes' : 'No';
        printText(`${label}: ${readableValue}`);
      };

      // Add text fields
      printText(`Asset ID: ${assetId}`);
      printText(`Owner Name: ${assetOwnerName}`);
      printText(`Address: ${assetAddress}`);
      printText(`Preferred Notary: ${assetPreferredNotary}`);
      printText(`Seller Address: ${sellerAddress}`);
      printTextBoolean(`Has Double Glazing`, hasDoubleGlazing);
      printTextBoolean(`Has Tenant`, hasTenant);
      printTextBoolean(`Has Garden`, hasGarden);
      printTextBoolean(`Has Parking`, hasParking);
      printTextNumber(`Number of Bathrooms`, assetNumberBathrooms);
      printTextNumber(`Number of Bedrooms`, assetNumberBedrooms);
      printText(`House Type: ${assetHouseType}`);
      printText(`Image URL: ${assetImageUrl}`);
      printText(`Asset URL: ${assetUrl}`);
      printTextMoney(`Value`, assetValue);
      printTextNumber(`Number of Shares`, assetNumberShares);
      printTextMoney(`Income`, assetIncome);
      printText(`Yield: ${assetYield}%`);
      printText(`Risk Rating: ${assetRiskRating}`);
      printText(`USD/GBP Rate: ${usdGbpRate}`);
      printTextNumber(`Number of Shares Sold`, assetNumberSharesSold);

      pdf.save('imagepdf.pdf');
    };
  }
}
