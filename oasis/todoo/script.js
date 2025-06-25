// Simple task list
let tasks = [
  {
    title: "Attend Nischal’s Birthday Party",
    desc: "Pick up gifts and cake (6 PM | Fresh Elements)",
    priority: "Moderate",
    status: "Not Started"
  },
  {
    title: "Landing Page Design",
    desc: "Discuss with client by EOD (4 PM | Meeting Room)",
    priority: "Moderate",
    status: "In Progress"
  },
  {
    title: "Final Product Presentation",
    desc: "Prepare team and documents",
    priority: "Moderate",
    status: "In Progress"
  },
  {
    title: "Walk the dog",
    desc: "Park + treats",
    priority: "Low",
    status: "Completed"
  },
  {
    title: "Conduct Meeting",
    desc: "Finalize requirements with client",
    priority: "High",
    status: "Completed"
  }
];

// Render tasks
function renderTasks() {
  const lists = {
    "Not Started": document.querySelector(".task-list:nth-of-type(1)"),
    "In Progress": document.querySelector(".task-list:nth-of-type(1)"),
    "Completed": document.querySelector(".task-list:nth-of-type(2)")
  };

  // Clear old cards
  Object.values(lists).forEach(list => {
    list.querySelectorAll(".task-card").forEach(card => card.remove());
  });

  // Re-add all tasks
  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.classList.add(getStatusClass(task.status));

    card.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.desc}</p>
      <small>Priority: ${task.priority} | Status: ${task.status}</small>
    `;

    card.addEventListener("click", () => toggleStatus(task.title));
    lists[task.status].appendChild(card);
  });

  updateStatusCircles();
}

// Map status to class
function getStatusClass(status) {
  switch (status) {
    case "Not Started": return "not-started";
    case "In Progress": return "in-progress";
    case "Completed": return "completed";
    default: return "";
  }
}

// Toggle status when clicked
function toggleStatus(title) {
  tasks = tasks.map(task => {
    if (task.title === title) {
      if (task.status === "Not Started") task.status = "In Progress";
      else if (task.status === "In Progress") task.status = "Completed";
      else task.status = "Not Started";
    }
    return task;
  });
  renderTasks();
}

// Update the status circles
function updateStatusCircles() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const inProgress = tasks.filter(t => t.status === "In Progress").length;
  const notStarted = tasks.filter(t => t.status === "Not Started").length;

  document.querySelector(".green").innerHTML = `${Math.round((completed / total) * 100)}%<br/><span>Completed</span>`;
  document.querySelector(".blue").innerHTML = `${Math.round((inProgress / total) * 100)}%<br/><span>In Progress</span>`;
  document.querySelector(".red").innerHTML = `${Math.round((notStarted / total) * 100)}%<br/><span>Not Started</span>`;
}

// Initialize
renderTasks();
