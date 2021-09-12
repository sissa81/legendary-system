# Supercharger Location Analysis
![Image](Part%20III/Images/supercharger_tesla.jfif)

## Objective
A group project for visualization of supercharger stations in California to navigate best locations to implement supercharger stations based on current saturations and EV populations.

## Team Members
Charissa Hoxie<br>
Toshi Torihara<br>
Michael Farm<br>

## Tools Used
`Python`
`Flask`
`JavaScript`
`Leaflet`
`D3`
`Plotly`
`HTML/CSS`
`MongoDB`

## Data Source
**The National Renewable Energy Laboratory**<br>
https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/<br>
**Alternative Fuels Data Center**<br>
https://afdc.energy.gov/data/search?q=electricity<br>
**Carvana**<br>
https://www.carvana.com/cars/tesla<br>

## Extract, Transform, Load (ETL)
### Part I -  Leaflet Interactive Map
* Create [interactive map]() of charging locations in California from [EV Charger Mapping](https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/)

### Part II - Interactive JavaScript Table
* Extract EV populations from 2010 to 2020 data in the [CSV file](https://github.com/sissa81/legendary-system/blob/main/choxie/Data/ZIP.xlsx)
* [Bar chart](https://github.com/sissa81/legendary-system/blob/main/choxie/Images/EV_Population.png) to show the EV population from the registration data

### Part III - Flask App and Webscraping
* Utilized Flask app to connect `MongoDB` with different Tesla models to show examples of superchargeable EVs in a [database](https://github.com/sissa81/legendary-system/tree/main/Part%20III/Images/mongodb_tesla.png) named `tesla_app` 
* Get information (make, model, price, and images) of Tesla models by web-scraping off of [Carvanas](https://www.carvana.com/cars/tesla) site
* Generate [Tesla Scraper](https://github.com/sissa81/legendary-system/tree/main/Part%20III/Images/tesla_scraper.png) to display above data in a single html site

## Requirements
* Your visualization must include a Python Flask–powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.). 
* Your project should fall into one of the below three tracks: 
    * A combination of web scraping and Leaflet or Plotly 
    * A dashboard page with multiple charts that update from the same data 
    * A server that performs multiple manipulations on data in a database prior to visualization (must be approved) 
* Your project should include at least one JS library that we did not cover. 
* Your project must be powered by a dataset with at least 100 records. 
* Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes). 
* Your final visualization should ideally include at least three views.
