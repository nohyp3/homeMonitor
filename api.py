from flask import Flask, jsonify
from tinydb import TinyDB, Query
from flask_cors import CORS
app = Flask(__name__)
#need to add CORS compatibility for browser
CORS(app)
db = TinyDB('db.json')
SensorData = Query()

@app.route('/get_sensor_data', methods=['GET'])
def get_sensor_data():
	sensor_data = db.all()
	return jsonify(sensor_data)
	
if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000)
