
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from databases import Database
import pandas as pd
import requests
import numpy as np
import json
import sqlite3
from sqlite3 import Error
database = Database("sqlite:///sampleSQLite.db")
DB_FILE_PATH = 'sampleSQLite.db'
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

conn = connect_to_db(DB_FILE_PATH)
app = FastAPI()
@app.on_event("startup")
async def database_connect():
    await database.connect()


@app.on_event("shutdown")
async def database_disconnect():
    await database.disconnect()

@app.get("/questions")
async def read_data():
    query = "SELECT * FROM random"
    results = await database.fetch_all(query=query)
    return results

@app.get("/questions/{id}")
async def fetch_data(id: int):
    query = "SELECT * FROM random WHERE ID={}".format(str(id))
    results = await database.fetch_all(query=query)

    return results
@app.get("/{id}")
async def get_data(id: int):
    r = requests.get('https://lcid.cc/info/{}'.format(str(id)))
    data = r.json()
    df = pd.DataFrame.from_dict(data, orient='columns')
    df = df.drop('acRate', 1)
    df = df.drop('freqBar', 1)
    df = df.drop('isFavor', 1)
    df = df.drop('paidOnly', 1)
    df = df.drop('status', 1)
    df = df.drop('hasSolution', 1)
    df = df.drop('hasVideoSolution', 1)
    df.rename(columns={'frontendQuestionId': 'id'}, inplace=True)
    xz = df.join(pd.json_normalize(df["topicTags"].tolist()).add_prefix("topicTags")).drop(["topicTags"], axis=1)
    if conn is not None:
        c = conn.cursor()
        c.execute('CREATE TABLE IF NOT EXISTS ' + 'random' +
                    '(difficulty        VARCHAR,'
                    'id        VARCHAR,'
                    'title        VARCHAR,'
                    'titleSlug  VARCHAR,'
                    'topicTagsname    VARCHAR,'
                    'topicTagsid       VARCHAR,'
                    'topicTagsslug VARCHAR)')
        xz.to_sql(name="random", con=conn, if_exists='append', index=False)
        conn.commit()
        print('SQL insert process finished')
    else:
        print('Connection to database failed')