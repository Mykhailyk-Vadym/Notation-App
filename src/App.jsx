import './styles/App.css'
import { useState } from "react";

export const App = () => {
  const [allNotation, setAllNotation] = useState([]);
  const [visibleNotation, setVisibleNotation] = useState([]);

  return (
    <div className="mainContainer">
      <header>
        <button>
          +
        </button>

        <button>
          delete
        </button>

        <button>
          Create new notation
        </button>

        <input type="text" />
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
