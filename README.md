# ifify

<a href="https://www.npmjs.com/package/ifify"><img src="https://img.shields.io/npm/v/ifify.svg?style=flat-square&colorB=51C838" alt="NPM Version"></a>

## Motivation

개발을 하다보면 많은 경우 조건문을 통해서 로직을 분기하는 경우가 있습니다. 이러한 분기가 많아지고 중첩될수록 코드는 알아보기 힘들고 변수는 원하는 기대값을 유지하기 위해 부차적인 코드가 발생합니다.

**ifify**는 이러한 분기를 최소화하고 변수 타입의 일관성과 좀 더 이해하기 쉽고 가독성이 향상된 코드를 지향하고자 작성되었습니다.

## Example

### Type-guard

```typescript
const user: User | null = await db.users.findById(userId);

if (!user) {
  throw new Error('Not Found User');
}

// Now user is only User.
```

```typescript
const user: User = await db.users
  .findById(userId)
  .then(throwIfIsNil(new Error('Not Found User')));
```

### Cache hit-miss

```typescript
const getCacheUser = userId => cache.users.findById(userId);
const getDBUser = userId => db.users.findById(userId);

const getUser = userId => {
  const user: User = await getCacheUser(userId);

  if (user) {
    return user;
  }

  return getDBUser(userId);
};

const user: User | null = await getUser(userId);

if (!user) {
  /* snip */
}
```

```typescript
const getCacheUser = userId => cache.users.findById(userId);
const getDBUser = userId => db.users.findById(userId);

const getUser = userId => cache.users.findById(userId)
  .then(execIfIsNil(() => getDBUser(userId)));

const user: User = await getUser(userId)
  .then(throwIfIsNil(/* snip */));
```

### Check existence

```typescript
const checkExistentUser = async name => {
  const existsUser = await db.users.exists({name});

  if (existsUser) {
    throw new Error('Already joined user');
  }

  return existsUser;
}

const createUser = userBody => {
  await checkExistentUser(userBody.name);

  return join(userBody);
}
```

```typescript
const checkExistentUser = name => db.users.exists({name})
  .then(throwIfIs(true, new Error('Already joined user')));

const createUser = userBody => {
  await checkExistentUser(userBody.name);
  
  return join(serBody);
}
```

### Integration other utility functions(like lodash)

```typescript
import * as _ from 'lodash';

const user: User | null = await db.users.findById(userId);

if (_.isNil(user)) {
  throw new Error('Not Found User');
}
```

```typescript
import * as _ from 'lodash/fp';

const user: User = await db.users.findById(userId)
  .then(throwIf(_.isNil, new Error('Not Found User')));
```
