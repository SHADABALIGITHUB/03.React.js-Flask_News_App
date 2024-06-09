# from flask import Flask, request, jsonify

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return "Welcome to the Flask backend!"

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     sample_data = {
#         'name': 'John Doe',
#         'age': 30,
#         'city': 'New York'
#     }
#     return jsonify(sample_data)

# @app.route('/api/data', methods=['POST'])
# def create_data():
#     new_data = request.get_json()
#     response = {
#         'status': 'success',
#         'data_received': new_data
#     }
#     return jsonify(response), 201

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return "Welcome to the Flask backend!"

@app.route('/api/data', methods=['GET'])
def get_data():
    sample_data = {
        'name': 'John Doe',
        'age': 30,
        'city': 'New York'
    }
    return jsonify(sample_data)

@app.route('/login', methods=['POST'])
def get_data():
    name = request.form.get('name')
    age = request.form.get('age')
    city = request.form.get('city')
    sample_data = {
        'name': name,
        'age': age,
        'city': city
    }
    
    return jsonify(sample_data)



if __name__ == '__main__':
    app.run(debug=True)

