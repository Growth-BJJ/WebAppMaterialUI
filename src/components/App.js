import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from '../components/ui/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/ui/footer';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact={true} path="/" component={() => <div style={{height: "2000px"}}>Home </div>} />
          <Route exact={true} path="/memberships" component={() => <div>Memberships </div>} />
          <Route exact={true} path="/adults" component={() => <div>Adult Classes</div>} />
          <Route exact={true} path="/kids" component={() => <div>Kids Program</div>} />
          <Route exact={true} path="/family" component={() => <div>Family Plans</div>} />
          <Route exact={true} path="/schedule" component={() => <div>Schedule</div>} />
          <Route exact={true} path="/about" component={() => <div>About Us</div>} />
          <Route exact={true} path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact={true} path="/freeclass" component={() => <div>Free Class</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
