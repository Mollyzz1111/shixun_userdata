import random
import pymysql
import re

# 数据库连接配置
db_config = {
    'host': '127.0.0.1',
    'user': 'host',
    'password': '1234',
    'database': 'userdata'
}


def get_database_connection():
    return pymysql.connect(**db_config)


def execute_query(query, data=None):
    with get_database_connection() as connection:
        with connection.cursor() as cursor:
            if data is not None:
                cursor.execute(query, data)
            else:
                cursor.execute(query)
            return cursor.fetchall()


def execute_query_many(query, data):
    with get_database_connection() as connection:
        with connection.cursor() as cursor:
            cursor.executemany(query, data)
            connection.commit()


def generate_pie_chart_data():
    data = [
        {'value': random.randint(1, 100), 'name': '广东'},
        {'value': random.randint(1, 100), 'name': '浙江'},
        {'value': random.randint(1, 100), 'name': '北京'}
    ]
    return data


def update_pie_chart_data(connection):
    data = generate_pie_chart_data()
    try:
        query = "TRUNCATE TABLE pie_chart_data"
        execute_query(query)

        query = "INSERT INTO pie_chart_data (value, name) VALUES (%s, %s)"
        values = [(item['value'], item['name']) for item in data]
        execute_query_many(query, values)

        print("pie_chart_data 数据已更新")
    except Exception as e:
        print("更新 pie_chart_data 数据时发生错误:", e)


def generate_random_data():
    data = [(f"{i}月", random.randint(100000, 999999), random.randint(100000, 999999)) for i in range(1, 13)]
    return data



def update_random_data(connection):
    data = generate_random_data()
    try:
        query = "TRUNCATE TABLE sales_data"
        execute_query(query)

        query = "INSERT INTO sales_data (month, 城市总消费比例, 城市总支出比例) VALUES (%s, %s, %s)"
        execute_query_many(query, data)

        print("sales_data 数据已更新")
    except Exception as e:
        print("更新 sales_data 数据时发生错误:", e)


def generate_bj_data():
    cities = ['上海', '包头', '南宁', '南昌', '大连', '常州', '广州', '拉萨', '重庆', '长春']
    data = [('北京', city, random.randint(1, 100)) for city in cities]
    return data


def update_bj_data(connection):
    data = generate_bj_data()
    try:
        query = "TRUNCATE TABLE bj_data"
        execute_query(query)

        query = "INSERT INTO bj_data (source_city, target_city, value) VALUES (%s, %s, %s)"
        execute_query_many(query, data)

        print("bj_data 数据已更新")
    except Exception as e:
        print("更新 bj_data 数据时发生错误:", e)


def generate_chart_data():
    months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月']
    data = [(month, random.randint(1, 100)) for month in months]
    return data


def update_chart_data(connection):
    data = generate_chart_data()
    try:
        query = "TRUNCATE TABLE chart_data"
        execute_query(query)

        query = "INSERT INTO chart_data (month, completion_rate) VALUES (%s, %s)"
        execute_query_many(query, data)

        print("chart_data 数据已更新")
    except Exception as e:
        print("更新 chart_data 数据时发生错误:", e)


def generate_companies_data():
    companies = [
        {'name': '广东', 'amount': '114万'},
        {'name': '北京', 'amount': '923823万'},
        {'name': '浙江', 'amount': '1240253万'},
        {'name': '江苏', 'amount': '12000万'},
        {'name': '四川', 'amount': '13423万'},
        {'name': '上海', 'amount': '1333万'}
    ]

    def parse_amount(amount_str):
        match = re.match(r'([\d.]+)(万)', amount_str)
        if match:
            amount = float(match.group(1))
            amount *= 10000
            return int(amount)
        else:
            return 0

    data = [(ranking, company['name'], str(random.randint(1000, 1000000)) + '万') for ranking, company in
            enumerate(companies, start=1)]
    sorted_companies = sorted(data, key=lambda x: parse_amount(x[2]), reverse=True)
    return sorted_companies


def generate_expenditures_data():
    provinces = ['广东', '北京', '浙江', '江苏', '四川', '上海', '湖南', '湖北', '河南', '山东', '福建', '辽宁', '陕西',
                 '山西', '黑龙江', '安徽']

    data = []
    for ranking, province in enumerate(provinces, start=1):
        amount = random.randint(100, 10000) * 10000
        data.append((ranking, province, f'{amount}万'))

    sorted_data = sorted(data, key=lambda x: int(x[2].rstrip('万')), reverse=True)
    return sorted_data


def update_expenditures_data(connection):
    data = generate_expenditures_data()
    try:
        with connection.cursor() as cursor:
            cursor.execute("TRUNCATE TABLE expenditures_data")
            query = "INSERT INTO expenditures_data (ranking, name, amount) VALUES (%s, %s, %s)"
            cursor.executemany(query, data)

        connection.commit()
        print("expenditures_data 数据已更新")
    except Exception as e:
        print("更新 expenditures_data 数据时发生错误:", e)


def generate_sales_statistics():
    daily_sales = round(random.uniform(1000, 2000), 2)
    profit_ratio = random.uniform(0.05, 0.15)  # 利润额与销售额的比例

    daily_profit = round(daily_sales * profit_ratio, 2)
    monthly_sales = round(random.uniform(1500, 2500), 2)
    monthly_profit = round(monthly_sales * profit_ratio, 2)
    yearly_sales = round(random.uniform(8000, 12000), 2)
    yearly_profit = round(yearly_sales * profit_ratio, 2)

    return daily_sales, daily_profit, monthly_sales, monthly_profit, yearly_sales, yearly_profit


def update_sales_statistics(connection):
    sales_data = generate_sales_statistics()
    try:
        with connection.cursor() as cursor:
            cursor.execute("TRUNCATE TABLE sales_statistics")

            query = "INSERT INTO sales_statistics (daily_sales, daily_profit, monthly_sales, monthly_profit, yearly_sales, yearly_profit) VALUES (%s, %s, %s, %s, %s, %s)"
            cursor.execute(query, sales_data)

        connection.commit()  # 提交事务

        print("sales_statistics 数据已更新")
    except Exception as e:
        connection.rollback()  # 回滚事务
        print("更新 sales_statistics 数据时发生错误:", e)


if __name__ == '__main__':
    # 建立数据库连接
    connection = get_database_connection()

    try:
        # 更新pie_chart_data数据
        update_pie_chart_data(connection)
        # 更新sales_data数据
        update_random_data(connection)
        # 更新bj_data数据
        update_bj_data(connection)
        # 更新expenditures_data数据
        update_expenditures_data(connection)
        # 更新sales_statistics数据
        update_sales_statistics(connection)
        # 更新update_chart_data
        update_chart_data(connection)
    finally:
        # 关闭数据库连接
        connection.close()
