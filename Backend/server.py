
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

# data={

#     'name': 'John Doe',
#     'age': 30,
#     'city': 'New York'

# }

@app.route('/login', methods=['PUT'])
def another():
    data = request.get_json()

    name = data['name']
    age = data['age']
    city = data['city']
    sample_data = {
        'name': name+ ' Doe',
        'age': age+ 10,
        'city': city+ ' Meerut'
    }
   
    return jsonify(sample_data)



if __name__ == '__main__':
    app.run(debug=True)

