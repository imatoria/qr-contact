const Contact = () => {
  const contactInfo = {
    name: "zzz Praveen Matoria",
    phone: "+91 9828960022",
    website: "https://imatoria.github.io",
    // Add more fields as needed (email, address, etc.)
  };

  const generateQRCodeData = (contactInfo) => {
    // Create a string that represents the contact information in a structured format
    const contactString = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactInfo.name}\nTEL:${contactInfo.phone}\nURL:${contactInfo.website}\nEND:VCARD`;
    return contactString;
  };

  const qrCodeData = generateQRCodeData(contactInfo);

  return qrCodeData;
};

export default Contact;
