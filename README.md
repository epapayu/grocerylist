# AI-Powered Grocery List Generator

This project is a web application that helps users generate grocery lists using the power of generative AI. Users can provide a recipe name or a general description of their needs, and the application will suggest a list of items.

## Features

*   **Generate grocery lists from recipes:** Input a recipe name like "pasta" to get a list of ingredients.
*   **Generate grocery lists from descriptions:** Input a general description like "cleaning supplies" to get a list of relevant items.
*   **AI-powered suggestions:** The application uses Google's Gemini model to understand user input and provide intelligent suggestions.
*   **Interactive lists:** Users can refine the generated list by selecting the items they want.
*   **Save and view lists:** Save your grocery lists to view them later.

## Technologies Used

*   **Frontend:** JavaScript (ES2022) with Vite
*   **AI:** Google Generative AI (Gemini)

## Getting Started

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation and Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/vc-mc-challenge-01.git
    cd vc-mc-challenge-01
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified files. You can preview the production build with:

```bash
npm run preview
```