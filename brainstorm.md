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

## Frontend

## Backend

**GET** "/questions"

```javascript
{
  data: [
    {
      id: string,
      title: string,
      titleSlug: string
      difficulty: string,
      topicTags: [
        id: string,
        name: string,
        slug: string
      ]
    }
  ]
}
```

**POST** "/questions"

```javascript
{
  id: string;
}
```

**DELETE** "/questions"

```javascript
{
  id: string;
}
```
