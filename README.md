# Supercharger and EV Analysis
![Image](Images/supercharger_tesla.jfif)

## Objective
A group project for visualization of supercharger stations in California and current state of EV populations and latest Tesla models and supercharger count.

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
`Pandas`
`Matplotlib`

## Data Source
The National Renewable Energy Laboratory<br>
https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/<br>
Alternative Fuels Data Center<br>
https://afdc.energy.gov/data/search?q=electricity<br>
California Energy Commission<br>
https://www.energy.ca.gov/files/zev-and-infrastructure-stats-data<br>
Carvana: Tesla<br>
https://www.carvana.com/cars/tesla<br>
Wikipedia: Tesla Supercharger<br>
https://en.wikipedia.org/wiki/Tesla_Supercharger<br>

## Extract, Transform, Load (ETL) Phase
* Create [Leaflet Interactive Map](https://github.com/sissa81/legendary-system/tree/main/Images/map.png) of charging locations in California from [EV Charger Mapping](https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/)
* Extract EV populations from 2010 to 2020 data in the [CSV file](https://github.com/sissa81/legendary-system/blob/main/Data/ZIP.csv)
* [Bar Chart](https://github.com/sissa81/legendary-system/blob/main/Images/EV_Population.png) to show the EV population from the registration data
* Utilized Flask app to connect `MongoDB` with different Tesla models to show examples of superchargeable EVs in a [database](https://github.com/sissa81/legendary-system/tree/main/Images/mongodb_tesla.png) named `tesla_app` 
* Get information (make, model, price, and images) of Tesla models by web-scraping off of [Carvana site](https://www.carvana.com/cars/tesla)
* Generated [Tesla Scraper](https://github.com/sissa81/legendary-system/tree/main/Images/tesla_scraper.png) to display above data in a single html site
* Scraped another visual by extracting a data table from [Wikipedia site](https://en.wikipedia.org/wiki/Tesla_Supercharger) and created a `bar chart` by converting [matplotlib.pyplot](https://github.com/sissa81/legendary-system/tree/main/Images/tesla_count.png) to [plotly.graph_object](https://github.com/sissa81/legendary-system/tree/main/Images/newplot.png)
