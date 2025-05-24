const express = require('express');
const router = express.Router();
const db = require('../db');
const generatePDF = require('../utils/pdfGenerator');
const fs = require('fs');

router.post('/', (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const sql = `
    SELECT * FROM properties
    WHERE parcel_id = ? OR plot_number = ? OR owner_name = ?
    LIMIT 1
  `;

  db.query(sql, [query, query, query], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No matching record found' });
    }

    const record = results[0];
    const pdfPath = await generatePDF(record);
    if (!pdfPath) {
      return res.status(500).json({ error: 'Failed to generate PDF' });
    }

    res.download(pdfPath, `land_record_${Date.now()}.pdf`, (err) => {
      if (err) console.error('Error sending PDF:', err);
      fs.unlink(pdfPath, () => {});
    });
  });
});

module.exports = router;
