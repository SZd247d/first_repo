import React, { createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';

//Initial State
const initialState = {
  transactions: [
    { id: 2, text: 'Salary', amount: 1000000 },
    { id: 1, text: 'phone', amount: -1000 },
    { id: 3, text: 'Book', amount: -50 },
    { id: 4, text: 'Laptop', amount: -1500 },
  ],
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //Actions
  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
