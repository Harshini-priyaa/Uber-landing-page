import React from 'react';
import qrImage from '../Images/qr.png'; // Importing the QR image

const DownloadSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">It's easier in the apps</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Download Uber App */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full md:w-64">
          <img src={qrImage} alt="QR Uber App" className="w-32 h-32 mb-4" />
          <div className="text-center">
            <h3 className="text-lg font-bold">Download the Uber app</h3>
            <p className="text-gray-500">Scan to download</p>
          </div>
        </div>

        {/* Download Driver App */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full md:w-64">
          <img src={qrImage} alt="QR Driver App" className="w-32 h-32 mb-4" />
          <div className="text-center">
            <h3 className="text-lg font-bold">Download the Driver app</h3>
            <p className="text-gray-500">Scan to download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
