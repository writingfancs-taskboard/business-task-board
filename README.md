# 📊 Business Task Board

A beautiful, real-time Kanban board for managing business tasks across multiple projects.

## 🌟 Features

- **Kanban Board** — Backlog → In Progress → Review → Done
- **Multi-Project Support** — Marketing & Content, Tech/Software, Consulting/Services
- **Real-time Updates** — Auto-refresh every 5 seconds
- **Smart Filtering** — View all tasks, your tasks, AI tasks, or high-priority items
- **Live Statistics** — Total, in-progress, high-priority, and recurring task counts
- **Color-Coded Priorities** — Red (High), Orange (Medium), Teal (Low)
- **Task Tracking** — Assignee, due date, priority, type, and automation suggestions
- **Mobile Responsive** — Works on all devices
- **Beautiful UI** — Modern design with smooth animations

## 🚀 Quick Start

### Prerequisites
- Python 3.6+
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/writingfancs-taskboard/business-task-board.git
cd business-task-board

# Run the server
python3 -m http.server 8000
```

Visit: `http://localhost:8000/taskboard.html`

## 📁 Project Structure

```
.
├── taskboard.html          # Main web application
├── BUSINESS_TASKS.json     # Task database
├── tasks.json              # Data feed for web app (auto-synced)
├── README.md               # This file
├── Procfile                # Railway deployment config
└── .gitignore              # Git ignore rules
```

## 📋 Task Types

- Client communication & follow-ups
- Content creation & publishing
- Reports & analysis
- Vendor & partner outreach

## 🎯 Projects

| Project | Area |
|---------|------|
| Marketing & Content | Content creation, publishing, campaigns |
| Tech / Software | Software development, integrations, technical projects |
| Consulting / Services | Client projects, service delivery, consulting work |

## 🔄 How It Works

1. **Add/Update Tasks** — Edit `BUSINESS_TASKS.json`
2. **Sync to Web** — Copy to `tasks.json`
3. **Auto-Load** — Board refreshes every 5 seconds

## 🌐 Deployment

### Railway

1. Push code to GitHub
2. Connect GitHub repo to Railway
3. Railway auto-deploys on every push
4. Get public URL instantly

```bash
git push origin main
# Railway automatically deploys!
```

## 🛠️ Development

### Add a New Task

Edit `BUSINESS_TASKS.json`:

```json
{
  "id": "TASK-2026-007",
  "title": "Your Task",
  "description": "Task details",
  "type": "Content creation & publishing",
  "project": "PROJ-MARKETING",
  "status": "backlog",
  "assignedTo": "user",
  "priority": "high",
  "dueDate": "2026-03-10T17:00:00Z",
  "recurring": {
    "isRecurring": false
  }
}
```

### Update Task Status

Change `status` field to: `backlog`, `inProgress`, `review`, or `done`

## 📧 Support

For issues or features, reach out to the maintainer.

## 📄 License

MIT License — feel free to use and modify!

---

**Built with ❤️ for productivity**
