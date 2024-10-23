import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'https://todo-caio.azurewebsites.net/api/';
const requestBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Todo {
  id: number;
  title: string | null;
  description: string | null;
  isComplete: boolean;
  targetId: number; 
  quantity: number; 
}

export interface Target {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
  todo: Todo[];
}

export const useTodoApi = () => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [currentCart, setCurrentCart] = useState<Target | null>(null);

  const parseQuantity = (description: string | null): number => {
    const quantity = parseInt(description || '1', 10);
    return isNaN(quantity) ? 1 : quantity;
  };

  const getAllTargets = async () => {
    try {
      const response = await requestBase.get('Targets');
      setTargets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCartTarget = async () => {
    try {
      const response = await requestBase.get('Targets');
      if (response.data.length > 0) {
        const existingCart = response.data.find((target: Target) => !target.isComplete);
        if (existingCart) {
          const cartResponse = await requestBase.get(`Targets/${existingCart.id}`);
          const cartData = cartResponse.data;

          if (cartData.todo) {
            const todosWithQuantities = cartData.todo.map((todo: Todo) => ({
              ...todo,
              quantity: parseQuantity(todo.description),
            }));
            cartData.todo = todosWithQuantities;
            setTodos(todosWithQuantities);
          }

          setCurrentCart(cartData);
          return cartData;
        }
      }

      const newCartData = {
        title: 'Carrinho de compras',
        isComplete: false,
        description: 'Carrinho de compras do cliente',
      };
      const createdCartResponse = await requestBase.post('Targets', newCartData);
      const createdCart = createdCartResponse.data;

      setCurrentCart(createdCart);
      return createdCart;
    } catch (error) {
      console.error(error);
    }
  };

  const getTodosByTarget = async (targetId: number) => {
    try {
      const response = await requestBase.get(`Targets/${targetId}`);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodoById = async (todoId: number) => {
    try {
      const response = await requestBase.get(`Todo/${todoId}`);
      setSelectedTodo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTarget = async () => {
    try {
        const response = await requestBase.post('Targets', {
            title: 'Carrinho de compras',
            description: 'Carrinho de compras do cliente',
            isComplete: false,
        });
          setCurrentCart(response.data);
          return response.data;
      } catch (error) {
          console.error(error);
      }
  };

  const createTodo = async (
    newTodo: Omit<Todo, 'id' | 'description' | 'quantity'>,
    quantity: number
  ) => {
    try {
      const todoData = {
        ...newTodo,
        description: quantity.toString(),
        isComplete: false,
      };
  
      const response = await requestBase.post('Todo', todoData);
      const createdTodo = {
        ...response.data,
        quantity: quantity,
      };
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
  
      if (currentCart) {
        const updatedCartResponse = await requestBase.get(`Targets/${currentCart.id}`);
        setCurrentCart(updatedCartResponse.data);
      }
    } catch (error) {
      console.error('Erro ao criar todo:', error);
    }
  };
  
  const updateTodo = async (todoId: number, quantity: number) => {
    try {
      const existingTodo = todos.find((todo) => todo.id === todoId);
      if (!existingTodo) {
        console.error(`Todo with ID ${todoId} not found.`);
        return;
      }
  
      const updatedTodo = {
        id: existingTodo.id,
        title: existingTodo.title,
        isComplete: existingTodo.isComplete,
        description: quantity.toString(),
        targetId: existingTodo.targetId,
      };
  
      await requestBase.put(`Todo/${todoId}`, updatedTodo);
  
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoId ? { ...todo, quantity, description: updatedTodo.description } : todo
        )
      );
  
      if (currentCart) {
        const updatedCartResponse = await requestBase.get(`Targets/${currentCart.id}`);
        setCurrentCart(updatedCartResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const deleteTarget = async (targetId: number) => {
    try {
      await requestBase.delete(`Targets/${targetId}`);
      console.log(`Carrinho de ID ${targetId} deletado.`);
      setCurrentCart(null);
      setTodos([]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (todoId: number) => {
    try {
      await requestBase.delete(`Todo/${todoId}`);
  
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todoId));
  
      const cart = await getCartTarget();
      if (cart) {
        setCurrentCart(cart);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCart = async () => {
    try {
      const cart = await getCartTarget();
      if (cart) {
        const updatedCart = await getTodosByTarget(cart.id);
        setCurrentCart({ ...cart, todo: updatedCart });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    targets,
    todos,
    selectedTodo,
    currentCart,
    getAllTargets,
    getCartTarget,
    getTodosByTarget,
    getTodoById,
    createTarget,
    createTodo,
    updateTodo,
    deleteTarget,
    deleteTodo,
    setCurrentCart,
    fetchCart,
  };
};
