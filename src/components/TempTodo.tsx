import { FC } from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
};

export const TempTodo: FC<Props> = ({ todo }) => {
  return (
    <div className="todo">
      <label className="todo__status-label" htmlFor="status">
        <input type="checkbox" className="todo__status" id="status" />
      </label>

      <span className="todo__title">{todo.title}</span>

      <button type="button" className="todo__remove">
        ×
      </button>

      <div className="modal overlay is-active">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
