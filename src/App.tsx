import { useState } from "react";
import "./App.css";
import { Layout, Typography, List, Card } from "antd";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

const { Header, Content } = Layout;
const { Title } = Typography;

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: "#1890ff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Title style={{ color: "#fff", margin: 0 }}>My TODO List</Title>
        </Header>

        <Content
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TodoForm onAdd={addTodo} />
          <List
            style={{ marginTop: "20px", maxWidth: "600px", width: "100%" }}
            bordered
            dataSource={todos}
            locale={{ emptyText: "TODO はありません" }}
            renderItem={(todo) => (
              <List.Item>
                <Card style={{ width: "100%" }}>
                  <TodoItem
                    {...todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </>
  );
}

export default App;
