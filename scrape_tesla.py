from splinter import Browser
from bs4 import BeautifulSoup
import requests
import pandas as pd

def init_browser():
    executable_path = {'executable_path': 'templates/chromedriver'}
    return Browser('chrome', **executable_path, headless=True)

def scrape_page(browser):

    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    tesla_make = soup.find_all('div', class_='year-make')
    tesla_model = soup.find_all('div', class_='model')
    tesla_price = soup.find_all('div', class_='price')
    tesla_image = soup.find_all('img')

    teslas = []

    for i in range (0, len(tesla_make)):
        tesla = {}
        tesla['make']= tesla_make[i].text
        tesla['model']= tesla_model[i].text
        tesla['price']= tesla_price[i].text
        tesla['image']= tesla_image[i]['src']
        teslas.append(tesla)

    return teslas

def scrape_all():
    carvana_url = 'https://www.carvana.com/cars/tesla'

    browser = init_browser()
    browser.visit(carvana_url)

    teslas = []
    teslas = teslas + scrape_page(browser)
    browser.find_by_text('Next').first.click()
    teslas = teslas + scrape_page(browser)
    
    browser.quit()   

    return teslas

def scrape_list():
    facts_url = 'https://en.wikipedia.org/wiki/Tesla_Supercharger'
    tables = pd.read_html(facts_url)
    supercharger_df = tables[0]

    supercharger_df.columns = ['Quarter', 'Supercharger Stations']
    supercharger_df.set_index('Quarter', inplace = True)
    fact_table = supercharger_df.to_html()
    fact_table.replace('\n', '')
    
    return fact_table
     