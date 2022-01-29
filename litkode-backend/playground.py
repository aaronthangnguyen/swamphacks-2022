import json
import pandas as pd
import requests
import numpy as np
import sqlite3
from sqlite3 import Error
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
def connect_to_db(db_file):
    """
    Connect to an SQlite database, if db file does not exist it will be created
    :param db_file: absolute or relative path of db file
    :return: sqlite3 connection
    """
    sqlite3_conn = None

    try:
        sqlite3_conn = sqlite3.connect(db_file)
        return sqlite3_conn

    except Error as err:
        print(err)

        if sqlite3_conn is not None:
            sqlite3_conn.close()

conn = connect_to_db('/Users/yagya/Desktop/database.db')

@app.on_event("startup")
def checkConnection():
    if conn is None:
        print("connection failed")

@app.on_event("shutdown")
def closeConnection():
    conn.close()

@app.get("/api/questions")
async def read_data():
    cur = conn.cursor()
    cur.execute('SELECT * FROM User')
    r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps(r)
    # result = c.fetchall()
    # return result

# @app.get("/api/questions/{id}")
# async def read_data():
#     c = conn.cursor()
#     c.execute('SELECT * FROM User')
#     result = c.fetchall()
#     return result


@app.post("/api/questions/{id}")
async def write_data(id: str):
    c = conn.cursor()
    sql = '''INSERT INTO User (id, rating, lastPracticeDate) VALUES (?, ?, ?)'''
    val = (id,0,None)
    c.execute(sql,val)
    conn.commit()
    print('SQL insert process finished')

# @app.patch("/api/questions/{id}")
# async def patch_data(id: str):
