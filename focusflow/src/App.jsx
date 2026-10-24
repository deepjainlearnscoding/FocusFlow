
import './App.css'

function App() {
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
          <h1>Make today count, Deep.</h1>
          <p>Small steps every day lead to big results.</p>
        </section>

        <section className="stats">
          <article className="stat-card">
            <p>Total tasks</p>
            <h2>8</h2>
            <span>Across all subjects</span>
          </article>

          <article className="stat-card">
            <p>Completed</p>
            <h2>3</h2>
            <span>You're making progress</span>
          </article>

          <article className="stat-card">
            <p>Remaining</p>
            <h2>5</h2>
            <span>One task at a time</span>
          </article>
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
              <div className="task-row">
                <span className="task-check done">✓</span>
                <div className="task-info">
                  <strong>Revise linked lists</strong>
                  <span>Data Structures</span>
                </div>
                <span className="priority high">High</span>
              </div>

              <div className="task-row">
                <span className="task-check"></span>
                <div className="task-info">
                  <strong>Practice React components</strong>
                  <span>Web Development</span>
                </div>
                <span className="priority medium">Medium</span>
              </div>

              <div className="task-row">
                <span className="task-check"></span>
                <div className="task-info">
                  <strong>Review lecture notes</strong>
                  <span>Computer Architecture</span>
                </div>
                <span className="priority low">Low</span>
              </div>

              <div className="task-row">
                <span className="task-check"></span>
                <div className="task-info">
                  <strong>Study for 30 minutes</strong>
                  <span>Personal growth</span>
                </div>
                <span className="priority medium">Medium</span>
              </div>
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
