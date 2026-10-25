import { useState } from 'react'
import StatCard from './StatCard.jsx'
import './App.css'

const initialTasks = [
  {
    id: 1,
    title: 'Complete DSA assignment',
    subject: 'Data Structures',
    priority: 'High',
    completed: false,
  },
  {
    id: 2,
    title: 'Revise React components',
    subject: 'Web Development',
    priority: 'Medium',
    completed: true,
  },
  {
    id: 3,
    title: 'Practice Java problems',
    subject: 'Programming',
    priority: 'High',
    completed: false,
  },
  {
    id: 4,
    title: 'Review lecture notes',
    subject: 'Computer Science',
    priority: 'Low',
    completed: false,
  },
  {
    id: 5,
    title : 'Practice React Components',
    subject : 'Web Development',
    priority: 'High',
    completed : false,
  },
  {
    id: 6,
    title : 'Review Lecture Notes',
    subject : 'COA',
    priority: 'Medium',
    completed : false,
  },
  {
    id: 7,
    title : 'Study For 30 mins',
    subject : 'Any',
    priority: 'High',
    completed : false,
  },
]
function App() {  
const [tasks, setTasks] = useState(initialTasks)
const [newTitle, setNewTitle] = useState('')
const [newSubject, setNewSubject] = useState('')
const [newPriority, setNewPriority] = useState('Medium')
const [filter, setFilter] = useState('All')

function toggleTask(id) {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

const completedCount = tasks.filter(
  (task) => task.completed
).length

const remainingCount = tasks.length - completedCount

const progress =
  tasks.length === 0
    ? 0
    : Math.round((completedCount / tasks.length) * 100)

const visibleTasks = tasks.filter((task) => {
  if (filter === 'Pending') return !task.completed
  if (filter === 'Completed') return task.completed
  return true
})
    
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">FocusFlow<span>.</span></h2>

        <p className="menu-label">WORKSPACE</p>

        <nav>
          <a className="nav-item active" href="#dashboard">
            <span>◫</span> Dashboard
          </a>
          <a className="nav-item" href="#tasks">
            <span>✓</span> My Tasks
          </a>
          <a className="nav-item" href="#schedule">
            <span>▦</span> Schedule
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">D</div>
          <div>
            <strong>Deep</strong>
            <p>Student workspace</p>
          </div>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <span className="breadcrumb">Workspace / Dashboard</span>
          <span className="today">Your personal study space</span>
        </header>

        <section className="welcome">
          <p className="eyebrow">YOUR PRODUCTIVITY HUB</p>
          <h1>{"Focus" + "flow"}</h1>
          <p>Small steps every day lead to big results.</p>
        </section>

        <section className="stats">
          <StatCard
          title="Total tasks"
          value={tasks.length}
          description="Across all subjects"
          />

          <StatCard
          title="Completed"
          value={completedCount}
          description="You're making progress"
          />

          <StatCard
            title="Remaining"
            value={remainingCount}
            description="One task at a time"
          />
        </section>

        <section className="content-grid">
          <div className="panel tasks-panel" id="tasks">
            <div className="panel-heading">
              <div>
                <h2>Today's tasks</h2>
                <p>Keep your priorities in sight.</p>
              </div>
              <button className="add-button" type="button">
                + Add task
              </button>
            </div>
              <div className="task-list">
                {visibleTasks.map((task) => (
                  <div className="task-row" key={task.id}>
                    <button
                      type="button"
                      className={`task-check ${task.completed ? 'done' : ''}`}
                      onClick={() => toggleTask(task.id)}
                      aria-label={
                        task.completed
                          ? `Mark ${task.title} as incomplete`
                          : `Mark ${task.title} as complete`
                      }
                    >
                      {task.completed ? '✓' : ''}
                    </button>

                    <div className="task-info">
                      <strong>{task.title}</strong>
                      <span>{task.subject}</span>
                    </div>

                    <span className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          <aside className="panel progress-panel">
            <h2>Your progress</h2>
            <p>A little progress is still progress.</p>

            <div className="progress-circle">
              <div>
                <strong>38%</strong>
                <span>Completed</span>
              </div>
            </div>

            <div className="progress-summary">
              <span>Tasks completed</span>
              <strong>3 of 8</strong>
            </div>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>

            <p className="progress-note">
              Keep going. You've got this!
            </p>
          </aside>
        </section>

        <footer className="footer">
          Built for better days, one task at a time.
        </footer>
      </main>
    </div>
  )
}

export default App
