import React from 'react';
import MyDocument from './MyDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  const imageUrl = 'https://i.imgur.com/nf8nLCh.jpeg';

  return (
    <div>
      <PDFDownloadLink document={<MyDocument imageUrl={imageUrl} />} fileName="my-document.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
