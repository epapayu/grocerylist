# Tasks: AI-Powered Grocery List Generator

**Input**: Design documents from `/home/yun/vc-mc-challenge-01/specs/001-grocery-list-generator/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, research.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create a new Vite project with the vanilla JavaScript template
- [X] T002 Install `sql.js` dependency

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T003 Create the main HTML file (`index.html`) with a basic layout
- [X] T004 Create the main JavaScript file (`src/main.js`) and CSS file (`src/style.css`)
- [X] T005 Initialize the SQLite database using `sql.js` in `src/database.js`
- [X] T006 Create the necessary tables (`grocery_lists`, `grocery_items`) in the database

---

## Phase 3: User Story 1 - Generate a grocery list from a recipe name (Priority: P1) 🎯 MVP

**Goal**: Allow users to generate a grocery list by entering a recipe name.

**Independent Test**: A user can enter a recipe name and see a generated list of ingredients.

### Implementation for User Story 1

- [X] T007 [US1] Create an input field and a button in `index.html` for the user to enter a recipe name.
- [X] T008 [US1] Implement the logic in `src/main.js` to get the user input.
- [X] T009 [US1] Implement a function in `src/gemini.js` to call the Gemini API with the user's input.
- [X] T010 [US1] Display the generated list of items in `index.html`.

---

## Phase 4: User Story 2 - Generate a grocery list from a general description (Priority: P2)

**Goal**: Allow users to generate a grocery list by entering a general description.

**Independent Test**: A user can enter a general description and see a list of suggested items.

### Implementation for User Story 2

- [X] T011 [US2] This user story will reuse the components from User Story 1. No new implementation is required, but testing should be performed to ensure it works as expected.

---

## Phase 5: User Story 3 - Refine the generated grocery list (Priority: P3)

**Goal**: Refine the grocery list by asking clarifying questions.

**Independent Test**: When a user enters an ambiguous query, the system asks for clarification.

### Implementation for User Story 3

- [X] T012 [US3] Implement the conversational flow in `src/gemini.js` to ask clarifying questions.
- [X] T013 [US3] Update the UI in `index.html` and `src/main.js` to handle the conversational flow.

---

## Phase 6: User Story 4 - Confirm and save the grocery list (Priority: P4)

**Goal**: Allow users to select and save the generated grocery list.

**Independent Test**: A user can select items from a generated list and save them as a new list.

### Implementation for User Story 4

- [X] T014 [US4] Add checkboxes to the generated list of items in `index.html`.
- [X] T015 [US4] Add a "Save" button to `index.html`.
- [X] T016 [US4] Implement the logic in `src/main.js` to get the selected items.
- [X] T017 [US4] Implement a function in `src/database.js` to save the selected items to the database.

---

## Phase 7: User Story 5 - Retrieve saved grocery lists (Priority: P5)

**Goal**: Allow users to view their saved grocery lists.

**Independent Test**: A user can view a list of their saved grocery lists.

### Implementation for User Story 5

- [X] T018 [US5] Create a new page or a section in `index.html` to display the saved lists.
- [X] T019 [US5] Implement a function in `src/database.js` to retrieve the saved lists.
- [X] T020 [US5] Display the saved lists in the UI.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T021 Add styling to the application in `src/style.css`.
- [X] T022 Review code against quality standards and style guide.
- [ ] T023 Verify test coverage meets 80% requirement.
- [X] T024 Validate UI/UX consistency with design system.