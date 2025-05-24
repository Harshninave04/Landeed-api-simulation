# Landeed API Simulation

This project is a simple REST API built with Express.js and MySQL that simulates the core functionality of Landeed.com. It accepts search input related to land/property records and returns the result in a downloadable PDF format.

## Features

- Accepts search input (e.g., land parcel ID, plot number, or owner name)
- Queries a MySQL database
- Generates a PDF file containing land record summary
- Returns the PDF file as an API response

## Tech Stack

- Node.js + Express.js
- MySQL (can substitute Apache Doris)
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

## API Endpoint

### Search Property

```
GET /search?query=some-value
```

* `query`: Accepts a land parcel ID, plot number, or owner name
* Returns a `PDF` containing the matched property details

## Reference
The project is inspired by the functionality of Landeed.com and http://doris.delhigovt.nic.in/ for understanding the structure of land records. No data scraping or external integration is performed.