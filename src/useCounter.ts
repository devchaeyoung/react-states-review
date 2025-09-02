import { useReducer } from 'react';

type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_VALUE'; payload: number };

interface CounterState {
  count: number;
}

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: Math.max(0, state.count - 1) };
    case 'RESET':
      return { count: 0 };
    case 'SET_VALUE':
      return { count: action.payload };
    default:
      const _exhaustiveCheck: never = action;
      return state;
  }
}

export function useCounter(initialValue: number = 0) {
  const [state, dispatch] = useReducer(counterReducer, { count: initialValue });

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  const setValue = (value: number) => dispatch({ type: 'SET_VALUE', payload: value });

  return {
    count: state.count,
    increment,
    decrement,
    reset,
    setValue,
  };
}