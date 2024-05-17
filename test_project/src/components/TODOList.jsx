function Item({ item, setTodos }) {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    const completeTodo = () => {
        // mark todo as complete
    };
    const handleEdit = () => {
        setEditing(true);
    };
    React.useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            // position the cursor at the end of the text
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);
    const handleInpuSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
    };
    const handleInputBlur = () => {
        setEditing(false);
    };
    return (
        <li id={item?.id} className="todo_item">
            {editing ? (
                <form className="edit-form" onSubmit={handleInpuSubmit}>
                    <label htmlFor="edit-todo">
                        <input
                            ref={inputRef}
                            type="text"
                            name="edit-todo"
                            id="edit-todo"
                            defaultValue={item?.title}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
            ) : (
                <>
                    <button className="todo_items_left" onClick={completeTodo}>
                        ...
                    </button>
                    <div className="todo_items_right">
                        <button onClick={handleEdit}>...</button>
                        <button>...</button>
                    </div>
                </>
            )}
        </li>
    );
}