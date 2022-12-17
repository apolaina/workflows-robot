# WORKFLOWS-ROBOT

## How to install

### Prerequisites

You must have `nodejs` (https://nodejs.org/fr/download/) installed on your machine. You will also need one of the following package manager: `pnpm`.

### Installation

Installing dependencies

```sh
pnpm install
```

### Run

The project was created using **Vite**.

1. Start the project:

```sh
pnpm dev
```

2. Build the project:

```sh
pnpm build
```

3. Preview the project:

```sh
pnpm preview
```

#### Software Evolution and Maintenance

-   For the design, i'm using [daisyUI](https://daisyui.com/), a Tailwind CSS component library and try to design more reusable components (modal, button, input field, etc.).
-   I will create a `Context` to manage the workflows accross the application.
-   I will create some mandatory components, like a form to update or create a `Step`, a `Step` component, a `Steps` component to merge all the steps together, etc. -- using the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) methodology.
-   I will complete the actions : add, update, remove of the `workflowReducer` function.

Thank you! ☀️
