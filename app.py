from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/save", methods=["POST"])
def save():

    password = request.form["password"]

    with open("password_history.txt", "a") as file:
        file.write(password + "\n")

    return "Password Saved Successfully"

if __name__ == "__main__":
    app.run(debug=True)
    