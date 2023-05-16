import './styles/App.css'
import { useState } from "react";

export const App = () => {
  const [allNotation, setAllNotation] = useState([]);
  const [visibleNotation, setVisibleNotation] = useState([]);

  return (
    <div className="Container">
      <header className="Container-header">
        <div className="Container-header-leftside">
          <button
            className="Container-header-leftside-button"
            onClick={() => console.log('notation created')}
          >
            +
          </button>

          <button
            className="Container-header-leftside-button"
            onClick={() => console.log('notation deleted')}
          >
            delete
          </button>

          <button
            className="Container-header-leftside-button" 
            onClick={() => console.log('edit notation')}
          >
            edit notation
          </button>
        </div>

        <input type="text" name='serach' placeholder='Search' />
      </header>
      <main className="Container-main">
        <nav className="Container-main-navigation">
          Notations
        </nav>
        <div className="Container-main-content">
          notation content
        </div>
      </main>
    </div>
  );
};
