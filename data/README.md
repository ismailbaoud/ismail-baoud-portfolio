# Portfolio Data Files

This folder contains JSON files that store the data for your portfolio. Edit these files to customize your content without touching the component code.

## 📁 Files

### `experiences.json`
Contains your career journey timeline with work experience and education.

**Structure:**
```json
{
  "experiences": [
    {
      "year": "2022-Present",
      "title": "Software Engineer",
      "company": "Tech Company",
      "icon": "work"
    }
  ]
}
```

**Fields:**
- `year`: Time period (e.g., "2022-Present", "Summer 2019", "2018-2022")
- `title`: Job title or degree name
- `company`: Company name or educational institution
- `icon`: Material Icon name (common: "work", "school", "code", "laptop_mac", "business")

**How to Edit:**
1. Add/remove timeline entries
2. Update dates, titles, and companies
3. Change icons to match the type of experience

---

### `techStack.json`
Contains all your technical skills organized by category.

**Structure:**
```json
{
  "techStack": [
    {
      "category": "Category Name",
      "items": [
        { "name": "Technology Name", "icon": "material_icon_name" }
      ]
    }
  ]
}
```

**How to Edit:**
1. Add/remove categories
2. Add/remove items within categories
3. Change technology names
4. Update Material Icons (find icons at: https://fonts.google.com/icons)

---

### `projects.json`
Contains all your portfolio projects with full details.

**Structure:**
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Full description",
      "shortDescription": "Brief description for cards",
      "tech": "Tech stack as string",
      "image": "URL to project image",
      "problem": "Problem statement (optional)",
      "solution": "Solution description (optional)",
      "techUsed": [
        { "name": "Tech", "icon": "material_icon" }
      ],
      "images": ["url1", "url2"],
      "githubUrl": "https://github.com/...",
      "liveUrl": "https://...",
      "showGithub": true,
      "showLiveDemo": false
    }
  ]
}
```

**How to Edit:**
1. **Add a New Project**: Copy an existing project object and update all fields
2. **Remove a Project**: Delete the entire project object
3. **Update Project Info**: Modify any field directly
4. **Add Images**: Add URLs to the `images` array
5. **Links**: Add your GitHub repo and live demo URLs
6. **Show/Hide Buttons**:
   - `showGithub`: Set to `true` to show GitHub button, `false` to hide it (default: true if not specified)
   - `showLiveDemo`: Set to `true` to show Live Demo button, `false` to hide it (default: false if not specified)

---

## 🎨 Material Icons

For the `icon` fields, use Material Symbols icon names from:
**https://fonts.google.com/icons**

Common icons:
- `code` - Code symbol
- `database` - Database
- `cloud` - Cloud services
- `javascript` - JavaScript
- `work` - Work/job
- `school` - Education
- `payment` - Payment/commerce

---

## 💡 Tips

- **IDs**: Keep project IDs unique and sequential
- **Images**: Use high-quality images (recommended: 1200x675px)
- **Tech Stack**: Organize by Backend, Frontend, Databases, Tools & DevOps
- **Descriptions**: Keep shortDescription under 100 characters for cards
- **URLs**: Always include `https://` in URLs

---

## 🔄 After Editing

Changes will automatically reflect in your portfolio after saving the JSON files. The Next.js dev server will hot-reload the changes.

---

## 📝 Example: Adding a New Project

```json
{
  "id": 4,
  "title": "My New Project",
  "description": "A detailed description of what this project does",
  "shortDescription": "Brief description for the card view",
  "tech": "Next.js, TypeScript, Tailwind",
  "image": "https://example.com/project-image.jpg",
  "githubUrl": "https://github.com/yourusername/project",
  "liveUrl": "https://project.example.com"
}
```

Just add this to the `projects` array in `projects.json`!
