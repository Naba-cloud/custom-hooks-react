import "./styles.css";
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="App">
      <h1>{"Todos"}</h1>
      {data &&
        data.map((item) => {
          return (
            <>
              <p key={item.id}>{item.title}</p>
            </>
          );
        })}
    </div>
  );
}
