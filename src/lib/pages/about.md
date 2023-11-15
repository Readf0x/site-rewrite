---
title: About me
---

###### /src/lib/utils.ts
```ts
export function maximumCount(nums: number[]): number {
  return Math.max(
    nums.filter(e => e > 0).length,
    nums.filter(e => e < 0).length)
  )
}
```

```ts
import { maximumCount } from "$lib/utils";

maximumCount([-4, -2, -6, -1, 4, 6, 2, 7, 8]);
```
