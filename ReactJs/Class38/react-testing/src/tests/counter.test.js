import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from '../components/Counter';


test('check if counter renders', () => {
    render(<Counter />)
    const textValue = screen.getByText("0");
    expect(textValue).toBeInTheDocument();
});

test('check if counter increment is working as expected', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('+'));
    const newValue = screen.getByText("2");
    expect(newValue).toBeInTheDocument();
});

test('check if counter decrement is working as expected', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('-'));
    const newValue = screen.getByText("1");
    expect(newValue).toBeInTheDocument();
});