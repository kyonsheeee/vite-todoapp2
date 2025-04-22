import { useState } from "react";
import "./App.css";
import { Layout, Typography, List, Card, Flex } from "antd";
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
      <Flex
        justify="center"
        align="start"
        style={{ minHeight: "100vh", background: "#f5f5f5" }}
      >
        <Layout
          style={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            margin: "20px",
            paddingBottom: "20px",
          }}
        >
          <Header
            style={{
              background: "#1677ff",
              padding: 20,
            }}
          >
            <Title style={{ color: "#fff", margin: 0 }} level={2}>
              My TODO List
            </Title>
          </Header>

          <Content
            style={{
              padding: 24,
            }}
          >
            <TodoForm onAdd={addTodo} />
            <List
              style={{ marginTop: "20px", width: "100%" }}
              bordered
              dataSource={todos}
              locale={{ emptyText: "TODO はありません" }}
              renderItem={(todo) => (
                <List.Item style={{ padding: "12px 0" }}>
                  <Card style={{ width: "100%", borderRadius: "12px" }}>
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
      </Flex>
    </>
  );
}

export default App;
