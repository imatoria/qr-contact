import QRCode from "qrcode.react";

const LinkQRCode = () => {
  const link = "https://imatoria.github.io/qr-contact/praveen.vcf"; // Replace with your desired link

  return (
    <div className="App center">
      <QRCode value={link} size={200} /> {/* Adjust the size as needed */}
    </div>
  );
};

export default LinkQRCode;
