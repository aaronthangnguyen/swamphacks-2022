# Litkode

## Specifications

- Fetch all questions
- Store in database
- Allow users to add questions to study list
- Allow users to rate questions' difficulty: Easy, Medium, Hard
- Recommend users weak topics
- Add timer

## Endpoints

### `api/questions`

**GET** `api/questions`

```json
{
  "data": [
    {
      "id": string,
      "rating": string,
      "lastPracticeDate": Date,
    }, ...
  ]
}
```

**POST** `api/questions`

```json
{
  "id": string
}
```

**DELETE** `api/questions/[:id]`

**PATCH** `api/questions/[:id]`

```json
{
  "rating": int (optional),
  "lastPracticeDate": Date (optional)
}
```

Note: Backend should parse JSON Date format. i.e: `2012-04-23T18:25:43.511Z`

### `api/recommendations`

**GET** `api/recommendations`

```json
  {
    "data": [
      id,...
    ]
  }
```

```
{
  id: string,
  rating: int,
  lastPracticeDate: Date
}
rating = 0 | 1 | 2 | 3
0 -> never
1 -> easy
2 -> medium
3 -> hard
```
