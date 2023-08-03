Biblioteca de manejo de estados de manera global, la mas famosa para react es esta
forma global/general de un estado

1-store: Donde guardare tods mis estados, esta dividido en porciones/slices (users,cart...)
2-actions: Que hara el estado, payload tiene info saved to transform or what I want to get(functionality) and dispatch that actives the action
3-reducers: gets the initial state and takes de action to update the state to be able to render

***Provider*** contains the components where I will apply the redux

***Really important when 2 components or more share state** 
### save loging state to don´t get back to landing
### 

npm install @redux/toolkit react-redux

install redux in dev tools del navegador

1-create the store: import createStore {
    each slice contain each reducer for each component
}

2- import createSlice 