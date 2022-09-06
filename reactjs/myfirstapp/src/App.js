import './App.css';
import DateDisplay, { doSomething } from './components/DateDisplay';
import ClassComponent from './components/ClassComponent';
import ConditionalWeatherDisplay from './components/ConditionalWeatherDisplay';
import BlogBoard from './props/BlogBoard';

// we can use object destructuring to grab specific functions 
// from files
// import { doSomething } from './components/DateDisplay';

// function component
// - capitalise the name (PascalCase)
// - just a regular JavaScript function
// - JSX does require the JSX parser, which is included with React
function App() {

  doSomething();
  // returning JSX
  // - its recommended to wrap returned JSX in parenthesis
  // - JSX is just a combination of JavaScript expressions and
  //   markup like syntax.
  // - we can only return a single element as a component
  // - we can use all the normal HTML elements
  return (
    <div className={"App"}>
      <h1>Hello world</h1>

      {/* to use a custom component, just put it in tags
          - these are self-closing elements
      */}
      <DateDisplay />
      <ClassComponent />
      <ConditionalWeatherDisplay />
      <BlogBoard />
    </div>
  );
}

export default App;
