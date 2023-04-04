import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [assetImageUrl, setAssetImageUrl] = useState('https://i.pinimg.com/originals/c7/69/91/c7699158f7213d6b38a7c55b81c1af07.jpg');
  const imageRef = useRef(null);

  const handleSaveAsPDF = () => {
    const input = imageRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('download.pdf');
    });
  };

  return (
    <div>
      <img ref={imageRef} src={assetImageUrl} alt="asset" />
      <button onClick={handleSaveAsPDF}>Save to PDF</button>
    </div>
  );
}

export default App;
