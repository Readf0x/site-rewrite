---
title: About me
date: "2023-11-23"
allowed: true
---

```ts
function maximumCount(nums: number[]): number {
  return Math.max(
    nums.filter(e => e > 0).length,
    nums.filter(e => e < 0).length)
  )
}
```

```ts
maximumCount([-4, -2, -6, -1, 4, 6, 2, 7, 8]);
```
