---
published: true
---
## Redux series (2)

Why to bring up new things continously?

## Redux Toolkit

We might end up with a bigger state objects that leads to complex setup like an unmaintable big Redux file. Another potential problem we could face is the state immutability which we have to respect. 

Solution for these is Redux Toolkit. 


> yarn add @reduxjs/toolkit


1. Create slide 

```JavaScript
import { createSlice } from "@reduxjs/toolkit";

```

2. Adding a slice 

      keep all the state which we're not editing & overwrite in an immutable way.
      
      event if we have immutable code here, Redux toolkit internally uses package "immer".
      
      automatically clone the state to avoid mutating the original state.
      
      but still good practice not to mutate the state.
      
      In toolkit, we can change the only state which is in our interest.


```JavaScript
createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

```

3. Connecting Redux Toolkit state

import configureStore from toolkit package, instead of store from redux

```JavaScript
// it makes merging multiple reducers
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
```


Offical page(https://redux-toolkit.js.org/)
