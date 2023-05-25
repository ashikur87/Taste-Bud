import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../Redux/Store';
import About from './About';

test('renders the title of counter', () => {
    render(
        <Provider store={store}>
            <About />
        </Provider>

    );
    const linkElement = screen.getByText("Why Choose Us");
    expect(linkElement).toBeInTheDocument();
});
