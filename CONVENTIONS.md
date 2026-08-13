# Project Context
This is a Vite + React + TailwindCSS project.

# File Structure Rules
* All source code must reside inside the `src/` directory.
* New React components must be placed inside `src/components/`.
* Global assets belong in `src/assets/`.
* The main entry points are `src/main.jsx` and `src/index.css`.
* Under absolutely no circumstances should new components be created in the project root directory.

# Styling
* Use TailwindCSS utility classes for all styling.

# Self-Verification Protocol
After completing any code modification or creating new files, you must execute the following validation steps:

1. Run `npm run build` via terminal execution.
2. If any build or compilation errors occur, examine the error output.
3. Automatically apply a fix to resolve the error.
4. Re-run `npm run build` to confirm the project compiles cleanly before finishing the task.

# Component Creation Protocol
1. Automatically check if a similar component already exists in `src/components/` based on filename and content.
2. If a duplicate component is detected, you must automatically apply a fix to rename the new component to a unique name.
3. Do not create or overwrite files that already exist in the codebase.

# Code Structure and Standards
* Use functional components with ES6 syntax.
* All components must be properly named and follow PascalCase convention.
* Ensure consistent indentation and code formatting.
* All code must be optimized for performance and readability.
* All code should follow web standards and accessibility guidelines.

# Naming Conventions
* Component files should be named in PascalCase, e.g., `Navbar.jsx`.
* All files must follow kebab-case naming convention, e.g., `navbar.component.jsx`.