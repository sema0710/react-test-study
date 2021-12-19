import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('input을 변경하였을 때, onChange method가 호출되는가?', () => {
    const mockOnChange = jest.fn();
    const { container } = render((<Input onChange={mockOnChange} />));

    const todoInputElement = container.getElementsByTagName('input')[0];

    fireEvent.change(todoInputElement, { target: { value: 'a' } });

    expect(mockOnChange.mock.calls.length).toBe(1);
  });

  it('추가 버튼을 눌렀을 때, onClick method가 호출이 되는가?', () => {
    const mockOnClick = jest.fn();
    const { container } = render((<Input onClick={mockOnClick} />));

    const todoInputElement = container.getElementsByTagName('button')[0];

    fireEvent.click(todoInputElement);

    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
