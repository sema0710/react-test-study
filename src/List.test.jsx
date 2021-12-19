import { render, screen } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('할 일이 없으면, 할 일이 없다고 보여준다.', () => {
    const props = {
      tasks: [],
      onClickDelete: () => {},
    };

    render(<List tasks={props.tasks} onClickDelete={props.onClickDelete} />);

    expect(screen.getByText('할 일이 없어요!')).not.toBeNull();
  });

  it('할 일이 있으면, 해당하는 할 일 목록을 보여준다.', () => {
    const props = {
      tasks: [
        {
          id: 1,
          title: '아무것도 안하기',
        },
      ],
      onClickDelete: () => {},
    };

    render(
      <List tasks={props.tasks} onClickDelete={props.onClickDelete} />,
    );

    expect(screen.getByText('아무것도 안하기')).not.toBeNull();
  });
});
