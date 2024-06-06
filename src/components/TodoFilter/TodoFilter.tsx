/* eslint-disable import/no-extraneous-dependencies */
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Todo } from '../../types/Todo';
import { StatusTodos } from '../../types/StatusTodo';

type Props = {
  visibleTodos: Todo[];
  status: string;
  onStatusChange: (value: StatusTodos) => void;
  onChangeTodo: (value: Todo[]) => void;
};

export const TodoFilter: React.FC<Props> = ({
  visibleTodos,
  status,
  onStatusChange,
  onChangeTodo,
}) => {
  const location = useLocation();
  const activeTodosLength = visibleTodos.filter(todo => !todo.completed).length;
  const completedTodos = visibleTodos.filter(todo => todo.completed);

  const handleClearCompleted = () => {
    onChangeTodo(visibleTodos.filter(todo => !todo.completed));
  };

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${activeTodosLength} item${activeTodosLength === 1 ? '' : 's'} left`}
      </span>

      <nav className="filter">
        <Link
          to={{ pathname: '/', search: location.search }}
          className={classNames('filter__link', {
            selected: status === StatusTodos.ALL,
          })}
          onClick={() => onStatusChange(StatusTodos.ALL)}
        >
          All
        </Link>

        <Link
          to={{ pathname: '/active', search: location.search }}
          className={classNames('filter__link', {
            selected: status === StatusTodos.ACTIVE,
          })}
          onClick={() => onStatusChange(StatusTodos.ACTIVE)}
        >
          Active
        </Link>

        <Link
          to="/completed"
          className={classNames('filter__link', {
            selected: status === StatusTodos.COMPLETED,
          })}
          onClick={() => onStatusChange(StatusTodos.COMPLETED)}
        >
          Completed
        </Link>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        onClick={handleClearCompleted}
        disabled={!completedTodos.length}
      >
        {completedTodos.length > 0 ? 'Clear completed' : ''}
      </button>
    </footer>
  );
};
