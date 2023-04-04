import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";
import { ContractContext } from "./ContractContext";

function getImgFromUrl(imgUrl, callback) {
  var img = new Image();
  img.src = imgUrl;
  img.onload = function () {
    callback(img);
  };
}

function generatePDF(img) {
  var options = { orientation: "p", unit: "mm", format: "a4" };
  var doc = new jsPDF(options);

  doc.addImage(img, "JPEG", 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);

  doc.save("asset_data.pdf");
}

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);

  const generatePDFWithImage = () => {
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
