const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generatePDF(record) {
  return new Promise((resolve, reject) => {
    const fileName = `land_record_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, '..', fileName);

    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(20).text('Land Record Summary', { underline: true });
    doc.moveDown();

    doc.fontSize(12);
    doc.text(`Parcel ID: ${record.parcel_id}`);
    doc.text(`Plot Number: ${record.plot_number}`);
    doc.text(`Owner Name: ${record.owner_name}`);
    doc.text(`Area: ${record.area}`);
    doc.text(`Location: ${record.location}`);

    doc.end();

    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
}

module.exports = generatePDF;
