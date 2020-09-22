import React from 'react';
import TaskManagerContainer from './TaskManager/TaskManagerContainer'
import {Route} from "react-router";
import Task from "./TaskManager/Task/Task";

const Main = () => {
    return (
        <main >
            <div>
                <Route exact path={'/'} render={() => <TaskManagerContainer/>}/>
                <Route
                    path={'/task/:id'} render={routerProps => <Task {...routerProps}/>}
                />
            </div>

        </main>

    )

}

export default Main;