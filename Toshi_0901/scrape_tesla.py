from splinter import Browser
from bs4 import BeautifulSoup
import requests
import pandas as pd

def init_browser():
    executable_path = {'executable_path': 'templates/chromedriver'}
    return Browser('chrome', **executable_path, headless=True)

def scrape_tesla1():

    browser = init_browser()

    carvana_url = 'https://www.carvana.com/cars/tesla'
    browser.visit(carvana_url)

    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    tesla_make = soup.find('div', class_='year-make').text
    tesla_model = soup.find('div', class_='model').text
    tesla_price = soup.find('div', class_='price').text
    tesla_image = soup.find('img')['src']
    
    browser.quit()   
    
    return tesla

def scrape_tesla2():

    browser = init_browser()

    carvana_url = 'https://www.carvana.com/cars/tesla'
    browser.visit(carvana_url)

    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    items = soup.find_all('div')

    tesla_urls = []

    for item in items:
        tesla_make = soup.find('div', class_='year-make').text
        tesla_model = soup.find('div', class_='model').text
        tesla_price = soup.find('div', class_='price').text
        tesla_image = soup.find('img')['src']
    
        browser.visit(carvana_url)
   
        html = browser.html
        soup = BeautifulSoup(html, 'html.parser')

        tesla_url = carvana_url + soup.find('img')['src']
        tesla_urls.append({'Make': tesla_make, 'Model': tesla_model, 'Price': tesla_price, 'Image': tesla_image})

    browser.quit()   
    
    return tesla_urls