from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

@app.after_request
def cors(environ):
    environ.headers['Access-Control-Allow-Origin']='*'
    environ.headers['Access-Control-Allow-Method']='*'
    environ.headers['Access-Control-Allow-Headers']='*'
    return environ

COMMENT_FILE = "comments.json"

if not os.path.exists(COMMENT_FILE):
    with open(COMMENT_FILE, "w", encoding="utf-8") as f:
        json.dump([], f, ensure_ascii=False)

@app.route('/get_comments')
def get_comments():
    food_id = request.args.get("food_id", "1")
    with open(COMMENT_FILE, "r", encoding="utf-8") as f:
        all = json.load(f)
    res = [c for c in all if c.get("food_id") == food_id]
    return jsonify(res)

@app.route('/add_comment', methods=["POST"])
def add_comment():
    data = request.json
    food_id = data.get("food_id")
    content = data.get("content")
    score = data.get("score", 5)

    new_comment = {
        "food_id": food_id,
        "content": content,
        "score": score,
        "time": __import__("datetime").datetime.now().strftime("%Y-%m-%d %H:%M")
    }

    with open(COMMENT_FILE, "r", encoding="utf-8") as f:
        all = json.load(f)
    
    all.append(new_comment)

    with open(COMMENT_FILE, "w", encoding="utf-8") as f:
        json.dump(all, f, ensure_ascii=False, indent=2)

    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)