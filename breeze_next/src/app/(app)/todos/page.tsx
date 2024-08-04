'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const http = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
    withXSRFToken: true,
});

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const router = useRouter();

    const getTodos = async () => {
        const response = await fetch('http://localhost/api/todos');
        const json = await response.json();
        setTodos(json.data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    const deleteTodo = async (id: number) => {
        http.delete(`/api/todos/${id}`).then(() => {
            getTodos();
        });
    };

    const completeTodo = async (id: number) => {
        http.patch(`/api/todos/${id}`).then(() => {
            getTodos();
        });
    };

    return (
        <div className="relative overflow-x-auto p-5">
            <table className="min-w-full divide-y dark:divide-neutral-700">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-4">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                            タイトル
                        </th>
                        <th scope="col" className="px-6 py-4">
                            完了
                        </th>
                        <th scope="col" className="px-3 py-4"></th>
                        <th scope="col" className="px-3 py-4">
                            <button
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm
                                font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                onClick={() => {
                                    router.push('/todos/create');
                                }}>
                                タスク作成
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo: any) => {
                        return (
                            <tr key={todo.id} className="bg-white border-b">
                                <th scope="row" className="px-6 py-2">
                                    {todo.id}
                                </th>
                                <td className="px-6 py-2">{todo.title}</td>
                                <td className="px-6 py-2">
                                    {todo.completed === 0 ? '' : '完了'}
                                </td>
                                <td className="px-1 py-2 text-right">
                                    {todo.completed === 0 && (
                                        <button
                                            className="py-1 px-4 inline-flex items-center gap-x-2 text-sm
                                                        font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                                            onClick={() => {
                                                completeTodo(todo.id);
                                            }}>
                                            完了ボタン
                                        </button>
                                    )}
                                </td>
                                <td className="px-5 py-2">
                                    <button
                                        className="py-1 px-4 inline-flex items-center gap-x-2 text-sm
                                                        font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                                        onClick={() => {
                                            deleteTodo(todo.id);
                                        }}>
                                        削除
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Todos;
