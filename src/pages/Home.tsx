import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task: Task = {
      done: false,
      id: new Date().getTime(),
      title: newTaskTitle
    }

    setTasks((prev) => [...prev, task])
  }

  function handleToggleTaskDone(id: number) {    
    //TODO - toggle task done if exists
    const tasksNew = tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }      

      return task
    });

    setTasks(tasksNew)
  }  

  function handleRemoveTask(id: number) {
    const elementsFiltered = tasks.filter(task => task.id !== id)

    setTasks(elementsFiltered)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})