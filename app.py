from flask import Flask, render_template, request, url_for, redirect, session

app = Flask(__name__, static_url_path='/static')
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')           # 기본서버 127.0.0.1:5000 뒤에 붙는 주소를 적어준다.
def index():              # 위의 주소를 호출 시 보여 줄 것을 함수로 작성해 준다. 중복되지 않도록만 적어주면된다.
    return render_template('feedback.html')  # 문자열이 출력된다.
    

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        # TODO: 사용자 인증 로직 구현
        return redirect(url_for('lecture'))
    return render_template('login.html')

@app.route('/lecture')
def lecture():
    return render_template('lecture.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

if __name__ == '__main__':# 다른데서 부르면 실행하지 마라는 뜻이다.
    app.run(debug=True, port=8888)