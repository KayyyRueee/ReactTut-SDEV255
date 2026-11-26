
import { useState } from 'react';
import Button from './components/Button.tsx';
import Alert from './components/Alert.tsx';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert className="alert alert-danger alert-dismissible show">
          Trying to learn a dismissible alert!

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setAlertVisible(false)}
          ></button>
        </Alert>
      )}

      <Button
        color="danger"
        onClick={() => setAlertVisible(true)}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
