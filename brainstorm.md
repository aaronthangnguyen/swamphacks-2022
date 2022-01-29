# Brainstorm

1. Deals: curated subreddits
2. Sign-language motion capture
3. Leetcode Practice <-

# LeetCode Practice

- Fetch all questions
- Store in database
- Allow users to add questions to study list
- Allow users to rate questions' difficulty: Easy, Medium, Hard
- Recommend users weak topics
- Add timer

### `api/questions`

**GET** `api/questions`

```json
{
  "data": [
    {
      "id": string,
      "title": string,
      "titleSlug": string,
      "difficulty": string,
      "lastPracticeDate": Date,
      "topicTags": [
        "id": string,
        "name": string,
        "slug": string
      ]
    }, ...
  ]
}
```

**GET** `api/questions/[:id]`

```json
{
  "id": string,
  "title": string,
  "titleSlug": string,
  "difficulty": string,
  "lastPracticeDate": Date,
  "topicTags": [
    "id": string,
    "name": string,
    "slug": string
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
