from flask import Flask, render_template, redirect 
from flask_pymongo import PyMongo
import scrape_tesla

app = Flask(__name__)

app.config['MONGO_URI'] = "mongodb://localhost:27017/tesla_app"

mongo = PyMongo(app)

@app.route("/")
def home():
    teslas = mongo.db.tesla.find()

    return render_template("index.html", teslas=teslas)

@app.route("/scrape")
def scrape():
    tesla = mongo.db.tesla
    tesla_data = scrape_tesla.scrape_all()
    tesla.delete_many({})
    tesla.insert_many(tesla_data)

    return redirect("/", code=302)

if __name__ == "__main__": 
    app.run(debug= True)