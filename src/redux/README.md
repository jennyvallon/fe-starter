# FAQ

## Actions
Actions are in <code>actions.redux.js</code> files located in the root dir of each respective page in <code>/pages</code>. 

## Action Types
Action types are declared at the top of each respective <code>actions.redux.js</code> file.

## Selectors
Redux selectors are declared in the bottom of each page inside <code>mapStateToProps</code> functions.

## Reducers
Individual reducers are in <code>reducer.redux.js</code> files located in the root dir of each respective page in <code>/pages</code>. These reducers are then combined in <code>/src/redux/reducers.js</code>

## Store
The <code>store</code> in <code>/src/redux/store.js</code> allows for redux testing using the (Redux dev tools)[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en]<br>
<br>
what the final key name is, is determined by how a reducer is imported in this <code>store.js</code> file
