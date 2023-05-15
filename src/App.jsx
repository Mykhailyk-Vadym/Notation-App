import './styles/App.css'
import { useState } from "react";

export const App = () => {
  const [allNotation, setAllNotation] = useState([]);
  const [visibleNotation, setVisibleNotation] = useState([]);

  return (
    <div className="mainContainer">
      <header>
        <button 
          onClick={() => console.log('notation created')}
        >
          +
        </button>

        <button 
          onClick={() => console.log('notation deleted')}
        >
          delete
        </button>

        <button 
          onClick={() => console.log('edit notation')}
        >
          edit notation
        </button>

        <input type="text" placeholder='Search' />
      </header>
      <nav>
        Notations
      </nav>
      <main>
        notation content
      </main>
    </div>
  );
};
