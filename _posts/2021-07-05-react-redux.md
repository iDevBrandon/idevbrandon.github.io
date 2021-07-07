---
published: true
---
# Let's master Redux

## Why we use Redux?
React data can flow only one way. By using Redux store, we don't need to pass down so many things through several levels. Redux is used for immutable state management. 

## 3 important concept of Redux 
- Action 
- Store 
- Reducer 

### Action 
Action is like an event. They are the only way to send the data to Redux store. Actions are sent by using store.dispatch() method.  
Action is created by an action creator and has a type & payload as an extra data. 
```
{
    type: 'CREATE',
    payload: {
    	username: 'idevbrandon',
        password: 'hello123'
    }
}

```

### Reducer
Reducers are pure functions. It takes the current state of application and action and then return a new state. 
```
const Reducer  = (state, action) => {
	return state + 1; // return a updated state 
}
```

### store 
The store holds the application state.
```
import { createStore } from "redux";
const store = createStore(component)
```



---
## Folder structure 
<img width="228" alt="Screen Shot 2021-07-06 at 5 53 55 PM" src="https://user-images.githubusercontent.com/40842018/124572074-4f73c000-de83-11eb-87cf-6d047499cb4c.png">


---

### store action 
Let's find out store methods 
getState() : To get the current state of store. 

subscribe() : subscribe() will automaticlaly called whenever action is dispatched. 
```
store.subscribe(() => console.log("State after dispatch:", store.getState()));
```

in class component, we had to use connect() to connect with store. In functional component, we can use useSelector(). It allows you extract the data from the redux store. useSelector() is going to return the current state.

we use useDispatch() hook to dispatch an action


```
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Vehicle = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "CAR" })}>Car</button>
      <h1>{counter.vehicle}</h1>
      <button onClick={() => dispatch({ type: "BIKE" })}>Bike</button>
    </div>
  );
};

export default Vehicle;

```


// Action -> Describe your status. ex) i'm hungry, but not the action of buying a burger. 

// Initial state & Reducer 

### Store -> Global state
```JavaScript
import { createStore } from "redux";
import reducer from "../reducer/vehicle";

const store = createStore(reducer);

export default store;


```


// To create container component
Container component is a component that is connected with Redux store.

Apply to the component with connect()

```JavaScript
const makeContainer = connect(mapStateToProps, mapDispatchToProps)
makeContainer(target component)

```

How to visualize it 
```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

```

## To create a container component by using Hooks

- useSelector

```JavaScript
const result = useSelector(selected function);

const number = useSelector(state => state.counter.number);

```

- useDispatch : dispatch an action by using useDispatch

```JavaScript
const dispatch = useDispatch();
dispatch({ type: 'SAMPLE_ACTION' })

```









[React-Redux official website](https://react-redux.js.org/)




![1_rwnd-zztHEQ_Qt-ZVXH7Jw](https://user-images.githubusercontent.com/40842018/124440728-e5d9b000-ddb5-11eb-84d9-a69dd3cfc24f.png)
