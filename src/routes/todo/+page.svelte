<script lang="ts">
  import type {TodoSchema} from "src/schema/interface";
  import TodoListItem from "./TodoListItem.svelte";
  import '../styles.css';
  
  let text = "";
  let error = ""
  let todoList: TodoSchema[] = [];
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (text.trim() === "") {
      error = "Required!";
      return;
    }

    todoList = [
      ...todoList,
      {
        id: Math.random(),
        name: text,
      },
    ];
    text = "";
  };

  const removeError = () => {
    error = "";
  };
</script>

<main>
  <h1>To do list</h1>
  <div>
    <form on:submit={handleSubmit}>
      <input
        type="text"
        class={error ? "error" : ""}
        bind:value={text}
        on:input={removeError}
      />
    </form>
  </div>
  <ul>
    {#each todoList as todo (todo.id)}
      <TodoListItem {todo} />
    {/each}
  </ul>
</main>

<style>
  h1 {
    margin-block: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  input {
    padding: 5px 5px;
    outline: none;
  }
  input.error {
    border: 2px solid red;
  }
</style>
