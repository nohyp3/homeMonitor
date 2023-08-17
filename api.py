from flask import Flask, jsonify
from tinydb import TinyDB, Query
from flask_cors import CORS
#import the script from within the same directory 
import read_now 
app = Flask(__name__)
#need to add CORS compatibility for browser
CORS(app)
db = TinyDB('db.json')
SensorData = Query()

@app.route('/get_sensor_data', methods=['GET'])
def get_sensor_data():
	sensor_data = db.all()
	return jsonify(sensor_data)

@app.route('/get_current_data', methods=['GET'])
def get_current_data():
	sensor_data = read_now.get_now() #call the get_now function 
	return jsonify(sensor_data)
	
if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000)
