'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const http = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
    withXSRFToken: true,
});

const CreatePage = () => {
    const [title, setTitle] = useState('');
    const [titleMessage, setTitleMessage] = useState('');
    const router = useRouter();

    const createTodo = async () => {
        const requestBoby = {
            title: title,
        };
        http.post('/api/todos', requestBoby, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                router.push('/todos');
            })
            .catch(function (error) {
                setTitleMessage(error.response.data.errors.title);
            });
    };

    return (
        <div className="relative p-3">
            <div className="flex flex-col bg-white boder shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="py-2 px4">
                    <p>タスク作成</p>
                </div>
                <input
                    type="text"
                    className="my-3 peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="タイトル"
                    onChange={e => {
                        setTitle(e.target.value);
                    }}
                />
                <div className="ml-4 text-red-500">
                    {titleMessage ? titleMessage : ''}
                </div>

                <div>
                    <button
                        className="ml-4 py-3 px-4 inline-flex items-center gap-x-2 text-sm
                                font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={() => {
                            createTodo();
                        }}>
                        作成
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
