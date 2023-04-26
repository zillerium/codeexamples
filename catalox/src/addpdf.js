import React, { useRef, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import { ContractContext } from './ContractContext';

function AddPdf() {
  
  const { erc20ContractAddress, 
         contractAddress, 
         contractDetails, 
         notary, 
         contractNumber, 
         image, 
         firstName, 
         lastName, 
         manName, 
         partNumber, 
         manPartNumber, 
         partOption, partDesc, 
         partShortDesc, 
         partImgUrl, 
         partTechImgUrl,
         partSalePrice, 
         partManPrice, 
         currency, 
         merchantId, 
         merchantName, 
         deliveryCharge } = useContext(ContractContext); 


 
   const screenshotRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const onChangephoto = (e) => {
    setPhoto(e.target.files[0]);
  };

 
function generatePDF() {
  const pdf = new jsPDF('p', 'pt', 'a4');
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  pdf.setFontSize(24);
  pdf.text('FlowSwap Asset Record', width / 2, 40, { align: 'center' });

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
        printText(`${label}: ${formattedValue} ${currency}`);
      };

      const printTextNumber = (label, value) => {
        const formattedValue = value.toLocaleString();
        printText(`${label}: ${formattedValue}`);
      };

      
      
      printText(`erc20ContractAddress: ${erc20ContractAddress}`);
printText(`contractAddress: ${contractAddress}`);
printText(`contractDetails: ${contractDetails}`);
printText(`notary: ${notary}`);
printText(`contractNumber: ${contractNumber}`);
printText(`image: ${image}`);
printText(`firstName: ${firstName}`);
printText(`lastName: ${lastName}`);
printText(`manName: ${manName}`);
printText(`partNumber: ${partNumber}`);
printText(`manPartNumber: ${manPartNumber}`);
printText(`partOption: ${partOption}`);
printText(`partDesc: ${partDesc}`);
printText(`partShortDesc: ${partShortDesc}`);
printText(`partImgUrl: ${partImgUrl}`);
printText(`partTechImgUrl: ${partTechImgUrl}`);
printTextMoney(`partSalePrice: ${partSalePrice}`);
printTextMoney(`partManPrice: ${partManPrice}`);
printText(`currency: ${currency}`);
printText(`merchantId: ${merchantId}`);
printText(`merchantName: ${merchantName}`);
printTextMoney(`deliveryCharge: ${deliveryCharge}`);
      
      

      pdf.save('imagepdf.pdf');
    };
  }
}




  return (
    <div>
      <div ref={screenshotRef}>
	  <img src='http://ipfs.io/ipfs/QmSj5Yd6p377rYJWSoGnq29wehFFKkLZGS7PynxKzaLQSB' className="img-fluid" alt="menu"/>
      </div>
      <div ref={screenshotRef}>
        <img src={assetImageUrl} alt="Asset Image" className="img-fluid" />
      </div>
	            <div><h2>Create PDF Locally</h2> </div>

      <div>
	  <p>save asset image locally first and then upload - this creates the pdf from the image and form data</p>
	  <label for="image-btn">Choose the asset image: </label>
        <input
          type="file"
          name="photo"
	  id="image-btn"
          onChange={onChangephoto}
          accept="image/png, image/png, image/jpeg, image/jpg"
        />
        <Button variant="primary" onClick={generatePDF}>
          Create PDF Locally using Form and Image
        </Button>
      </div>
    </div>
  );
}

export default AddPdf;
