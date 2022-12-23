// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsContainer from '../components/RocketsContainer';

describe('RocketsContainer component test', () => {
  test('should render', () => {
    const rocketsContainer = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsContainer />
        </BrowserRouter>
        ,
      </Provider>,
    );
    const tree = rocketsContainer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
