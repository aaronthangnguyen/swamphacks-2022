import json
import sqlite3
from datetime import datetime
from sqlite3 import Error
from typing import Optional

import numpy as np
import pandas as pd
import requests
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    id: str
    rating: Optional[int] = 0
    lastPracticeDate: Optional[datetime] = None


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


conn = connect_to_db("database.db")


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
    cur.execute("SELECT * FROM User")
    r = [
        dict((cur.description[i][0], value) for i, value in enumerate(row))
        for row in cur.fetchall()
    ]
    return JSONResponse({"data": r})


@app.post("/api/questions", status_code=201)
async def write_data(item: Item):
    c = conn.cursor()
    sql = """INSERT INTO User (id, rating, lastPracticeDate) VALUES (?, ?, ?)"""
    val = (item.id, 0, None)
    c.execute(sql, val)
    conn.commit()
    print("SQL insert process finished")


@app.patch("/api/questions/{id}")
async def create_data(item: Item):
    item_id = item.id
    item_rating = item.rating
    item_lastPracticeDate = item.lastPracticeDate
    c = conn.cursor()
    sql = """UPDATE User SET rating = ?, lastPracticeDate = ? WHERE id = ?"""
    val = (item_rating, item_lastPracticeDate, item_id)
    c.execute(sql, val)
    conn.commit()
    print("SQL insert process finished")


@app.delete("/api/questions/{id}")
async def delete_item(id: str):
    c = conn.cursor()
    sql = """DELETE FROM User WHERE id = ?"""
    c.execute(sql, (id,))
    conn.commit()

# end point for recommendations
# returns data:
# [
#     {
#     "id": str,
#     "rating": 0,
#     "lastPracticeDate": null
#   }...
# ] 
# for given question_id as input
def normalizeDifficulty(x):
    return (x/3)*4
def normalizeAcRate(x):
    return (x/100)*4

def difficultyScore(x):
    if x == "Easy":
        return 1
    elif x == "Medium":
        return 2
    return 3
def yesno(x):
    if x>0:
        return False
    else:
        return True
@app.get("/api/recommendations/{id}")
async def get_rec(id:str):
    cur = conn.cursor()
    cur.execute("SELECT id,rating FROM User")
    r = [
        dict((cur.description[i][0], value) for i, value in enumerate(row))
        for row in cur.fetchall()
        ]
    df = pd.DataFrame(r)
    data = list()
    for qid in df['id']:
        r = requests.get('https://lcid.cc/info/{}'.format(str(qid)))
        data.append(r.json())
    acRate = []
    difficulty = []
    for items in data:
        acRate.append(items['acRate'])
        difficulty.append(items['difficulty'])
    df['acRate'] = acRate
    df['difficulty'] = difficulty
    df['difficulty'] = df['difficulty'].apply(difficultyScore)
    df['difficulty'] = df['difficulty'].apply(normalizeDifficulty)
    df['acRate'] = df['acRate'].apply(normalizeAcRate)
    df['final'] = (df['acRate']+df['rating'])-2*df['difficulty']
    df['final'] = df['final'].apply(yesno)
    array = []
    for index, row in df.iterrows():
        if row['final'] == True and row['id']!= id:
            array.append(row['id'])
    dataJson = []
    for ids in array:
        x = Item(id = ids)
        dataJson.append(x)

    return dataJson

