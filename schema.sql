CREATE DATABASE land_records;

USE land_records;

CREATE TABLE properties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  parcel_id VARCHAR(255),
  plot_number VARCHAR(255),
  owner_name VARCHAR(255),
  area VARCHAR(100),
  location TEXT
);

INSERT INTO properties (parcel_id, plot_number, owner_name, area, location)
VALUES
('P001', 'A-10', 'John Doe', '2000 sq.ft', 'Hyderabad'),
('P002', 'B-22', 'Jane Smith', '1500 sq.ft', 'Bangalore'),
('P003', 'C-34', 'Alice Johnson', '3000 sq.ft', 'Chennai'),
('P004', 'C-71', 'Harsh Ninave', '650 sq.ft', 'Nagpur');
