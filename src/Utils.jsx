const Utils = {
  Button: ({ disabled, children, onClick }) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
  
  Divider: () => {
    return (<div className="divider"/>);
  },
  
  Code: ({ children, style }) => {
    return (
      <code style={{
        ...style,
        backgroundColor: '#282c34',
        textAlign: 'left',
        padding: '20px',
        top: '50%',
        display: 'inline-block',
      }}>
        {children}
      </code>
    );
  }
}

export default Utils;