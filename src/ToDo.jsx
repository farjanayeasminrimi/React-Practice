function ToDo({ task, isDone, duration = 0 }) {
  if (isDone) {
    return (
      <p>
        Completed Task: {task} Duration: {duration}
      </p>
    );
  }
  return (
    <p>
      Pending: {task} Duration: {duration}
    </p>
  );
}
export default ToDo;
