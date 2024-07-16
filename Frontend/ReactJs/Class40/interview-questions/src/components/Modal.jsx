import React, { useState } from 'react';

function Modal({ isVisible, hide }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal Title</h2>
        <p>This is a modal.</p>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
}

function useVisibility(initialVisibility) {
    const [isVisible, setIsVisible] = useState(initialVisibility);

    const show = () => {
        setIsVisible(true);
    }

    const hide = () => {
        setIsVisible(false);
    }

    const toggle = () => {
        setIsVisible(state => !state);
    }

    return {
        isVisible,
        show,
        hide,
        toggle
    }
}

function MyModal() {
    const { isVisible, show, hide, toggle } = useVisibility(false);

    return (
      <div className="App">
        <h1>Custom Hook Example</h1>
        <button onClick={show}>Show Modal</button>
        <button onClick={toggle}>Toggle Modal</button>
        <Modal isVisible={isVisible} hide={hide} />
      </div>
    );
  }

export default MyModal;