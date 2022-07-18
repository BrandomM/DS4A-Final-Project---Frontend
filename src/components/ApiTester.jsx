import { useEffect } from "react";
import axios from "axios";
//import axios from "axios";




const path = "https://thingproxy.freeboard.io/fetch/http://ec2-54-243-194-107.compute-1.amazonaws.com/";

export function ApiTester() {
  // const [dateTime, setDateTime] = useState(null);

  const actualizar = () => {
    axios.get(path)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    actualizar();
  }, []);


  return (
    <div>
      {/* <h4>{dateTime.data.datetime}</h4> */}
      <button onClick={actualizar}>Llamar API</button>
    </div>
  );
}
