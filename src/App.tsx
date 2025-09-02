import { useCounter } from './useCounter';

function App() {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>{count}</div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={decrement}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          감소
        </button>
        <button
          onClick={increment}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          증가
        </button>
        <button
          onClick={reset}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          리셋
        </button>
        <button
          onClick={() => setValue(100)}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          100으로 설정
        </button>
      </div>
    </div>
  );
}

export default App;
