import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header-navbar/header-navbar';
import Footer from './components/footer/footer';
import Direction from './components/content/direction/directions';
import { TesterDeveloper } from './components/content/developers/Tester/TesterDeveloper';
import { BackEndDeveloper } from './components/content/developers/BackEnd/BackEndDeveloper';
import { SystemAdminDeveloper } from './components/content/developers/SystemAdmin/SystemAdmin';
import { GraphicDesignDeveloper } from './components/content/developers/GraphicDesign/GraphicDesignDeveloper';
import MainPage from './components/content/MainPage/Main';
import ProMassking from './components/content/ProMassKing/ProMassking'
import { Provider } from 'react-redux';
import store from './redux/redux-store/redux-store';
import { FrontEndDeveloper } from './components/content/developers/FrontEnd/FrontEndDeveloper';
import { DeveloperContainer } from './components/content/developers/Developer-container';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><Header /></Col>
      </Row>
      <Row>
        <Col>
          <div className="App-content">
            <Switch>
              <Route exact path='/'
                render={() => <Redirect to={"/MainPage"} />} />
              <Route path='/MainPage' component={MainPage} />
              <Route path='/direction' render={() => <Direction />} />

              <Route path='/developers' render={() => <DeveloperContainer />} />
              <Route path='/frontenddeveloper' render={() => <FrontEndDeveloper />} />
              <Route path='/testerdeveloper' render={() => <TesterDeveloper />} />
              <Route path='/backenddeveloper' render={() => <BackEndDeveloper />} />
              <Route path='/systemadmindeveloper' render={() => <SystemAdminDeveloper />} />
              <Route path='/graphicdesigndeveloper' render={() => <GraphicDesignDeveloper />} />
              <Route path='/promassking' render={() => <ProMassking />} />
            </Switch>
          </div>
        </Col>
      </Row>
      <Row>
        <Col><Footer /></Col>
      </Row>

    </Container>
  );
}

const BrsvApp: React.FC = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Row>
        <App />
      </Row>
    </Provider>
  </BrowserRouter>
}

export default BrsvApp;
