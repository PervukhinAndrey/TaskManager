import {connect} from "react-redux";
import React from "react";
import TaskManager from './TaskManager'
import {setTasks,delTask,addTask,updateTask} from "../../../redux/tasksReducer";


class ApiTasksComponent extends React.PureComponent {

    componentDidMount() {
        this.props.setTasks();
    }
    render() {

        return <TaskManager tasks={this.props.tasks}
                            delTask={this.props.delTask}
                            addTask={this.props.addTask}
                            updateTask={this.props.updateTask}

        />
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer.tasks
    }
}


const UsersContainer = connect(
    mapStateToProps,
    {setTasks,delTask,addTask,updateTask}
)(ApiTasksComponent);
export default UsersContainer;