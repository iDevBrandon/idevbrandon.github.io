---
published: true
---
# Redux series (1)


## What is Redux?
A state management system for cross components or app-wide state. 


## Core redux concept 

![215578349_4118975204886921_157891935550937689_n](https://user-images.githubusercontent.com/40842018/126029159-e49b4cd8-98ca-47a8-a15e-e4ffd1df1c9c.jpg)



* Redux uses a "one-way data flow" app structure

When something happens in the app:
	
    The UI dispatches an action.

	The store runs the reducers, and the state is updated based on what occurred.

	The store notifies the UI that the state has changed.

The UI re-renders based on the new state.

 

## Commonly asked question 

1. Why Redux over React Context API?
Although they have similar purpose, React Contect has some potentional disadvantages like complex setup with bunch of nested JSX Code and performance. One of Redux team members said its still not ready for all Flux-like state propagation(change frequently). React context is not optimized for high-frequency state changes.
