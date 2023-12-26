# Project Title: OnlineStore

This e-commerce web app, named OnlineStore, is hosted on Vercel. Access it [here](https://online-store-ten-lake.vercel.app/).

## Setup and Technology Overview

### Technologies Used

- **NextJS**
    - **Description**: Utilized for dynamic routing and server-side rendering of components.
    - **Installation**: To install NextJS with tailwind and typescript, run the following command:
        ```bash
        npx create-next-app@latest project-name --typescript --tailwind
        ```

- **Typescript**
    - **Description**: Implemented for defining and managing types within the application.

- **Tailwind CSS**
    - **Description**: Utilized for responsive and efficient styling of the application.

- **Redux Toolkit**
    - **Description**: Used for managing the application's cart and modal states.
    - **Installation**:
        ```bash
        npm install @reduxjs/toolkit
        ```
        then:
        ```bash
        npm install react-redux
        ```

- **Redux Persist**
 - **Description**: Used for pesisting the cart products.
    - **Installation**:
        ```bash
        npm install redux-persist
        ```

- **React Query**
    - **Description**: Employed for efficient fetching and caching of API data.
    - **Installation**:
        ```bash
        npm install @tanstack/react-query
        ```

- **Headless UI**
    - **Description**: Integrated to enable modals upon clicking product cards.
    - **Installation**:
        ```bash
        npm install @headlessui/react
        ```

### Running the Program Locally

Follow these steps to run the program locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your/repository.git
    cd repository-folder-name
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm run dev
    ```

4. **Access the Application**:
    - Open a web browser and go to `http://localhost:3000` to view the application running locally.
