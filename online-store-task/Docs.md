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

## SEO and Performance Optimization

### SEO Enhancements

#### Meta Tags for Enhanced Search Engine Visibility

- **Tailored Meta Tags**: Created custom meta tags (titles, descriptions, keywords) for each page, significantly improving search engine visibility and encouraging higher click-through rates.

#### Semantic HTML Structure for Improved Indexing

- **Structured HTML Markup**: Enhanced HTML structure using semantic elements and structured data, aiding search engine crawlers in comprehending and indexing the content more efficiently.

#### Title and Description Optimization Across Pages

- **Strategic Page-Specific Titles and Descriptions**: Strategically composed unique titles and descriptions for individual pages to maximize relevance and attract targeted organic traffic.

#### Sitemap and Robots File Inclusion

- **Sitemap Integration**: Added a comprehensive sitemap file to guide search engine bots effectively, ensuring proper indexing and enhancing site accessibility and visibility.
- **Robots.txt Optimization**: Optimized the robots.txt file to provide directives for search engines, ensuring appropriate indexing and exclusion guidelines.

### Performance Improvements

#### CSS Optimization

- **Minimized Unused CSS Classes**: Streamlined Tailwind configurations by reducing unused CSS classes, optimizing stylesheet size, and improving load times.

#### Image Loading Optimization

- **Lazy Loading Images**: Implemented lazy loading for images, enhancing page load times by deferring off-screen image loading.

#### Custom Not-Found (404) Page Integration

- **Tailored 404 Error Page**: Created a custom-designed 404 error page with user-friendly navigation and helpful content, enhancing user experience for visitors encountering broken links or missing content.


### Instructions for Running the Updated Project Locally with Optimizations

To evaluate the updated project locally, follow these steps:

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
    - Open a web browser and go to `http://localhost:3000` to view the optimized application running locally.
