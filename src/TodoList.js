const TodoList = ({ list, remove }) => {
  return (
    <ul className="todo-list">
      {list.map((entry, index) => (
        <div className="todo">
          <li key={index}> {entry} </li>

          <button
            className="delete-button"
            onClick={() => {
              remove(entry);
            }}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
