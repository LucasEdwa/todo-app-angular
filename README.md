# Todo App — Angular 21

A todo app built to explore **Angular 21** patterns: standalone components, the `inject()` function for dependency injection, feature-based folder structure, and server-side rendering via `@angular/ssr`.

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Angular 21 |
| Language | TypeScript |
| Rendering | SSR (`@angular/ssr`) |
| Styling | CSS |
| Testing | Jasmine + Angular TestBed |

## Architecture

Feature-based folder structure with a clear separation between core logic and presentation:

```
src/app/
├── core/
│   ├── models/          ← Todo interface
│   └── services/
│       └── todo.service.ts   ← TodoService (add, toggle, remove)
└── features/
    └── todos/
        └── components/
            ├── todo-form/   ← Input + submit
            ├── todo-item/   ← Single todo with toggle + delete
            └── todo-list/   ← Composes form + items, reads from service
```

**Key patterns:**
- **Standalone components** — no NgModule; each component declares its own imports
- **`inject()` function** — constructor-free DI (`private todoService = inject(TodoService)`)
- **SSR** — `server.ts` + `main.server.ts` for server-side rendering
- **Service layer** — `TodoService` is the single source of truth for todo state

## Getting Started

```bash
npm install
ng serve
```

Open `http://localhost:4200`.

To run with SSR:

```bash
ng build
node dist/todo-app/server/server.mjs
```

## Running Tests

```bash
ng test
```
