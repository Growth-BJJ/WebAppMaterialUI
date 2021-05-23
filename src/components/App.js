import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from '../components/ui/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/ui/footer';
import Home from './Home';
import Schedule from './Schedule';
import About from './About';
import Contact from './Contact';
import Memberships from './Memberships';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/memberships" component={Memberships} />
          <Route exact={true} path="/schedule" component={Schedule} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/contact" component={Contact} />
          {/* <Route exact={true} path="/login" component={() => <div>Login</div>} /> */}
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
