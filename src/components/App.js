// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImageUrl, setDogImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
            setDogImageUrl(data.message);
            setIsLoading(false);
          });
      }, []);

      return (
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img src={dogImageUrl} alt="A Random Dog" />
          )}
        </div>
      );
}

export default App;