import React from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import Store from "../stores/Store";
import HelloWorld from "../components/HelloWorld";

interface AppState {
  store: Store;
}

@observer
class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    const store = new Store();
    this.state = { store };
  }

  render() {
    const { store } = this.state;
    return (
      <div className="siteWrap">
        {process.env.NODE_ENV === "development" && <DevTools />}
        <HelloWorld store={store} />
      </div>
    );
  }
}

export default App;
