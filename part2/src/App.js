import './App.css';
var element2 = "wow"
console.log('%c%s', 'color: #ff0000', element2)
console.log(`%c${element2}`, 'color: #ff000050' )
function App() {
  return (
    <div>
      <p>{element}</p>
    </div>
  );
}

export default App;
