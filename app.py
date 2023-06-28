from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, render_template, jsonify
import pymysql
import threading
import time
from subprocess import call

app = Flask(__name__)

# 数据库连接配置
db_config = {
    'host': '127.0.0.1',
    'user': 'host',
    'password': '1234',
    'database': 'userdata'
}


def run_mysql_script():
    while True:
        # 调用 mysql.py 脚本
        call(["python", "mysql.py"])


scheduler = BackgroundScheduler()
scheduler.add_job(func=run_mysql_script, trigger="interval", seconds=10)
scheduler.start()


def get_database_connection():
    return pymysql.connect(**db_config)


def fetch_data(query, field_names):
    with get_database_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute(query)
            results = cursor.fetchall()

    data = []
    for row in results:
        item = {}
        for i, field_name in enumerate(field_names):
            item[field_name] = row[i]
        data.append(item)
    return data


@app.route('/')
def serve_template():
    return render_template('index.html')


@app.route('/get_pie_data', methods=['GET'])
def get_pie_data():
    query = "SELECT value, name FROM pie_chart_data"
    field_names = ['value', 'name']
    data = fetch_data(query, field_names)
    return jsonify(data=data)


@app.route('/get_sales_data', methods=['GET'])
def get_sales_data():
    query = "SELECT month, 城市总消费比例, 城市总支出比例 FROM sales_data"
    field_names = ['month', '用户购买量', '用户浏览量']
    data = fetch_data(query, field_names)
    return jsonify(data=data)


@app.route('/get_bj_data', methods=['GET'])
def get_bj_data():
    query = "SELECT source_city, target_city, value FROM bj_data"
    field_names = ['source_city', 'target_city', 'value']
    data = fetch_data(query, field_names)
    return jsonify(data=data)


@app.route('/get_chart_data', methods=['GET'])
def get_chart_data():
    query = "SELECT month, completion_rate FROM chart_data"
    field_names = ['month', 'completion_rate']
    data = fetch_data(query, field_names)
    return jsonify(data=data)


def get_ranking_data(table_name):
    query = f"SELECT ranking, name, amount FROM {table_name}"
    field_names = ['ranking', 'name', 'amount']
    data = fetch_data(query, field_names)
    return jsonify(data=data)


@app.route('/get_sales_statistics', methods=['GET'])
def get_sales_statistics():
    # 在查询中指定列名，确保顺序与field_names列表匹配
    query = "SELECT daily_sales, daily_profit, monthly_sales, monthly_profit, yearly_sales, yearly_profit FROM sales_statistics"

    with get_database_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute(query)
            results = cursor.fetchall()

    data = []
    for row in results:
        # 直接将行转换为字典，其中键是列名，值是相应的值
        item = {description[0]: value for value, description in zip(row, cursor.description)}
        data.append(item)

    return jsonify(data=data)


@app.route('/get_expenditures_data', methods=['GET'])
def get_expenditures_data():
    query = "SELECT ranking, name, amount FROM expenditures_data"
    field_names = ['ranking', 'name', 'amount']
    data = fetch_data(query, field_names)
    return jsonify(data=data)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
