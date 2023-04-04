import React, { useRef, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page, Image, pdf } from '@react-pdf/renderer';
import { ContractContext } from './ContractContext';

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);
  const screenshotRef = useRef(null);

  const generatePDF = async () => {
    const imgBlob = await fetch(assetImageUrl).then((res) => res.blob());
    const doc = (
      <Document>
        <Page>
          <Image src={URL.createObjectURL(imgBlob)} />
        </Page>
      </Document>
    );
    const pdfBlob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-image.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div ref={screenshotRef}>
      <img src={assetImageUrl} alt="My Image" />
      <Button variant="primary" onClick={generatePDF}>
        Save as PDF
      </Button>
    </div>
  );
}

export default AddPdf;
