from flask import Flask, render_template, redirect 
from flask_pymongo import PyMongo
import tesla_scraper

app = Flask(__name__)

app.config['MONGO_URI'] = "mongodb://localhost:27017/tesla_app"

mongo = PyMongo(app)

@app.route("/")
def home(): 
    tesla = mongo.db.tesla.find_one()

    return render_template("index.html", tesla=tesla)

@app.route("/scrape")
def scrape(): 
    tesla = mongo.db.tesla
    tesla_data = scrape_tesla.scrape_all()
    tesla.update({}, tesla_data, upsert=True)

    return redirect("/", code=302)

if __name__ == "__main__": 
    app.run(debug= True)
