import React from 'react'
import TodoItem from './components/TodoItem'

const ReduxTopic = () => {
    return (
        <div>
            <div className="text-4xl text-center w-full">Redux Topic: CRUD APP of TODO</div>

            <div className="py-5">
                <TodoItem label="Cine Pulse" />
            </div>
        </div>
    )
}

export default ReduxTopic