# Landeed API Simulation

This project is a simple REST API built with Express.js and MySQL database that simulates the core functionality of Landeed.com. It allows users to search for land records using parcel ID, plot number, or owner name and returns a downloadable PDF summary of the record.

## Features

- Search land records by:
  - Parcel ID
  - Plot Number
  - Owner Name
- Generate a downloadable PDF with land record details.
- MySQL backend to store and query land data.
- Clean and modular Express.js codebase.

## Tech Stack

- Node.js + Express.js
- MySQL
- PDFKit (for PDF generation)

## Setup Instructions

1. Clone this repository:
```
git clone [https://github.com/Harshninave04/Landeed-api-simulation](https://github.com/yourusername/landeed-api-simulation.git)
```

2. Install dependencies:
```
npm install
````

3. Set up your MySQL database and import the sample data:
- Create a database named `land_records`
- Run the `schema.sql` file provided in the repo to create the required table

4. Configure your database connection in `db.js`:
```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'land_records'
});
````

5. Start the server:

```
node index.js
```
Server will run at: `http://localhost:3000`

## API Usage

Endpoint: `POST /search`

Request Body:

```json
{
  "query": "John Doe"
}
```
Response:
1. If a match is found, a PDF file will be returned as a download.
2. If no match is found, a 404 JSON response is returned.

### You can test using Postman (use "Send response to file") or via curl:

```bash
curl -X POST http://localhost:3000/search \
  -H "Content-Type: application/json" \
  -d '{"query": "John Doe"}' --output land_record.pdf
```

## Reference
The project is inspired by the functionality of Landeed.com and http://doris.delhigovt.nic.in/ for understanding the structure of land records. No data scraping or external integration is performed.
