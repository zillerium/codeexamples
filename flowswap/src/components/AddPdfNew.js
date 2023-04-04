import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ContractContext } from "./ContractContext";

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);
  const [imageDataUrl, setImageDataUrl] = useState("");
  const imageRef = useRef(null);

  const handleGeneratePDF = () => {
    html2canvas(imageRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      setImageDataUrl(imgData);
      generatePDF(imgData);
    });
  };

  const generatePDF = (imgData) => {
    var doc = new jsPDF();
    doc.addImage(imgData, "JPEG", 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
    doc.save("asset_data.pdf");
  };

  return (
    <>
      <img ref={imageRef} src={assetImageUrl} alt="asset" />
      <Button variant="primary" onClick={handleGeneratePDF}>
        Generate PDF
      </Button>
    </>
  );
}

export default AddPdf;
