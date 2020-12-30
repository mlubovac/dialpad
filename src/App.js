import Dialpad from './Dialpad';

function App() {

  const onCallHandler= () => { console.log('onCall callback')}
  const onHangUpHandler = () => { console.log('onHangUp callback')}

  return (
    <div>
      <Dialpad
        onCallClick={onCallHandler}
        onHangUpClick={onHangUpHandler}
      />
    </div>
  );
}

export default App;
