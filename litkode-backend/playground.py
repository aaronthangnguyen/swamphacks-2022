from datetime import datetime
import json
import pandas as pd
import requests
import numpy as np
import sqlite3
from sqlite3 import Error
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel
from fastapi.responses import JSONResponse

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
