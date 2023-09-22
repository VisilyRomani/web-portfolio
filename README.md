


# Web Portfolio

Welcome to the README for my web portfolio built using SvelteKit and Vite and hosted on Vercel. This guide will help you understand how to set up, develop, and deploy my web portfolio. 

![Screenshot from 2023-09-21 19-31-42](https://github.com/VisilyRomani/web-portfolio/assets/36494994/f5c522e2-2796-470a-9ef3-9d359cffaf88)

## Introduction

This project is designed to show off my projects and history. It uses SvelteKit for building the front end, Vite for the development environment, and Vercel for deployment.

Key features of the project include:

    A responsive design.
    A clean and organized codebase.
    Integration with Vercel for easy deployment and hosting.

## Prerequisites

Before you get started, make sure you have the following prerequisites installed on your system:

    Node.js (LTS version recommended)
    
    npm

## Getting Started

  1. Clone the Repository

    git clone https://github.com/VisilyRomani/web-portfolio.git


  2. Navigate to the Project Directory

    cd resume-website

  3. Install Dependencies

    # Using npm
    npm install
    
    # Using yarn
    yarn

  4. Run the Development Server

    npm run dev

  Web portfolio will be available at http://localhost:5173. You can edit the source files in the src directory and see live updates as you save changes.

## Project Structure

The project is structured as follows:

    src folder: Contains the source code for your website.
        routes folder: Define the different routes for your website pages.
        components folder: Contains reusable components like headers, footers, and sections.
        assets folder: Store your images, styles, and other assets here.
        
    static folder: Static files like PDFs or any other assets you want to serve directly.
    
    svelte.config.js: Configuration for SvelteKit.
    
    vite.config.js: Configuration for Vite.
    
    vercel.json: Configuration for Vercel deployment.

Feel free to customize and add your content to the respective files and folders.
Customization



## Deployment

This project is set up for easy deployment to Vercel. To deploy your resume website, follow these steps:

1. Sign up for a Vercel account if you don't already have one.

2. Install the Vercel CLI globally:

        npm install -g vercel

3. Log in to your Vercel account using the CLI:

       vercel login

4. Deploy your website to Vercel:

Follow the prompts to configure your deployment. Once the deployment is successful, your website will be live at a URL provided by Vercel.


## License

This project is licensed under the MIT License. See the LICENSE file for details.
