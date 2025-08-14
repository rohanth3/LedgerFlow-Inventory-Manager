from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   #ensures that jsx and .py modules

@app.route('/api/greet')
def greet():
    return jsonify({'message': 'Flask is running'})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
