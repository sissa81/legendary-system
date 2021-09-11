-- DROP TABLE IF IT EXISTS
DROP TABLE IF EXISTS vehicle_reg;

-- CREATE TABLE FOR CSV AND IMPORT
CREATE TABLE vehicle_reg (
	reg_year INTEGER,
	fuel_type VARCHAR,
	zip_code INTEGER,
	no_vehicles INTEGER
	
);

-- PREVIEW DATA
SELECT * FROM vehicle_reg;

-- GROUP DATA BY YEAR AND ONLY LOOK AT NUMBER OF ELECTRIC FUEL VEHICLES
CREATE TABLE grouped_year AS
	SELECT reg_year,
	SUM (no_vehicles) AS total_ev
	FROM vehicle_reg
	WHERE fuel_type = 'Electric'
	GROUP BY reg_year
	ORDER BY reg_year;
	
SELECT * FROM grouped_year