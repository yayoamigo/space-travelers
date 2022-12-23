import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsProfile from '../components/RocketsProfile';

describe('RocketsProfile component test', () => {
  test('should render', () => {
    const rocketsProfile = render(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsProfile />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(rocketsProfile).toMatchSnapshot();
    const title = screen.getByText(/My Rockets/);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('profile-rockets-title');
    expect(title).toHaveTextContent('My Rockets');
  });
});
