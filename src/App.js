import { RaguComponent } from "ragu-client-react";

const onFetchFail = () => alert('Error! Is hello microfrontend running?');

function App() {
  return (<div>
    <h1>My Drawer App</h1>
    
    <p>Simple Hello, World</p>
    <RaguComponent src="http://localhost:3100/components/hello-world" onFetchFail={onFetchFail}></RaguComponent>
    <hr/>

    <p>Hello with props</p>
    <RaguComponent src="http://localhost:3100/components/hello-world-props?name=Universe With Props"></RaguComponent>
    <hr/>

    <p>Hello Pokémon with State</p>
    <RaguComponent src="http://localhost:3100/components/hello-pokemon-state?id=1"></RaguComponent>
  </div>);
}

export default App;
