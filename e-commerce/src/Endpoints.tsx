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
  title: string;
  description: string;
  isComplete: boolean;
  targetId: number;
}

interface Target {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
}

export const useTodoApi = () => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [currentCart, setCurrentCart] = useState<Target | null>(null);


  const getAllTargets = async () => {
    try {
      const response = await requestBase.get('Targets');
      setTargets(response.data);
    } catch (error) {
      console.error('Erro ao buscar targets:', error);
    }
  };

  const getCartTarget = async () => {
    try {
      if (currentCart) return currentCart;

      const response = await requestBase.post('Targets', {
        title: 'Carrinho de compras',
        description: 'Carrinho de compras do cliente',
        isComplete: false,
        todo: [],
      });

      setCurrentCart(response.data);
      return response.data;
    } catch (error) {
      console.error('Error ao criar ou recuperar carrinho:', error);
    }
  };

  const getTodosByTarget = async (targetId: number) => {
    try {
      const response = await requestBase.get(`Targets/${targetId}`);
      setTodos(response.data.todo);
    } catch (error) {
      console.error('Erro ao buscar todos por target:', error);
    }
  };

  const getTodoById = async (todoId: number) => {
    try {
      const response = await requestBase.get(`Todo/${todoId}`);
      setSelectedTodo(response.data);
    } catch (error) {
      console.error('Error fetching todo by ID:', error);
    }
  };

  const createTarget = async (newTarget: Omit<Target, 'id'>) => {
    try {
      const response = await requestBase.post('Targets', newTarget);
      setTargets((prevTargets) => [...prevTargets, response.data]);
    } catch (error) {
      console.error('Error creating target:', error);
    }
  };

  const createTodo = async (newTodo: Omit<Todo, 'id'>) => {
    try {
      const response = await requestBase.post('Todo', newTodo);
      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const updateTarget = async (targetId: number, updatedTarget: Partial<Target>) => {
    try {
      await requestBase.put(`Targets/${targetId}`, updatedTarget);
      console.log('Carrinho atualizado:', updatedTarget);
      getTodosByTarget(targetId);
    } catch (error) {
      console.error('Erro ao atualizar o target (carrinho):', error);
    }
  };

  const updateTodo = async (todoId: number, updatedTodo: Partial<Todo>) => {
    try {
      await requestBase.put(`Todo/${todoId}`, updatedTodo);
      getTodosByTarget(updatedTodo.targetId || 0);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTarget = async (targetId: number) => {
    try {
      await requestBase.delete(`Targets/${targetId}`);
      console.log(`Carrinho de ID ${targetId} deletado.`);
      setCurrentCart(null);
      setTodos([]);
    } catch (error) {
      console.error('Erro ao deletar o carrinho:', error);
    }
  };

  const deleteTodo = async (todoId: number) => {
    try {
      await requestBase.delete(`Todo/${todoId}`);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todoId));
    } catch (error) {
      console.error('Error deleting todo:', error);
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
    updateTarget,
    updateTodo,
    deleteTarget,
    deleteTodo,
  };
};
