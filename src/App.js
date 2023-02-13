import './App.scss';
import { useState } from "react";
import { marked } from "marked";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.freecodecamp.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  
  - First item
  - Second item
  - Third item
  
  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks:true
  })

  return (
    <div className="App">
      <div className='text-center px-4'>
        <h2 >Your Markdown</h2>      
        <textarea id="editor" value={text} onChange={e => {setText(e.target.value)}}></textarea>      
        <h3 className='mt-3'>Output</h3>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text),}}></div>      
      
    </div>
  );
}

export default App;
