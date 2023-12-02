<div align="center">
  <img width="335" alt="ai go-logo (1)" src="https://github.com/salvatorequagliariello/aigo-app/assets/109867120/fcf5e65d-9807-46fa-9308-7c3c00f9e201"> 
</div>
<h1 align="center">
  ai.GO 🤖
</h1>

ai.Go is a cutting-edge web app that harnesses the power of artificial intelligence to assist users in various tasks. Built with Angular and Firebase, ai.Go offers a robust and user-friendly platform for generating code, creating images, and engaging in interactive conversations with an AI assistant.


<br>

## Table of Contents  
-  [Tech Stack](https://github.com/salvatorequagliariello/aigo-app/blob/main/README.md#tech-stack)
-  [Overview](https://github.com/salvatorequagliariello/aigo-app/blob/main/README.md#overview)
-  [Features](https://github.com/salvatorequagliariello/aigo-app/blob/main/README.md#overview)
-  [Showcase](https://github.com/salvatorequagliariello/aigo-app/blob/main/README.md#showcase)

<br>

## Tech stack
<div align="center"> 
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"> 
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
</div>
<br>

## Overview
Integration with the OpenAI API lies at the core of ai.Go's capabilities. By leveraging the power of natural language processing and machine learning, ai.Go enables users to generate code snippets, design images, and engage in meaningful conversations with the AI assistant. ai.Go is built with Angular, is written in TypeScript and all the UI is styled with Bootstrap. The app is fully responsive and user-friendly on every device.

ai.Go makes artificial intelligence accessible to everyone. Just create an account and you're done. Once you get to the dashboard, you simply select your desired service from the three available (Chat, Image generation, and Code generation) and give ai.Go a prompt to see the magic happen.

The application relies on a Token based system to regulate the requests a user can do, and each request made to the OpenAI API consumes at least 1 token. Users and their Tokens are stored in a Firebase database. When a user signs up for the first time, he or she is given 10 free Tokens. Once the 10 free Tokens have been used up, the user has the option of purchasing additional Tokens provided in three different packs, the Bronze Pack, the Silver Pack and the Gold Pack. The checkout system is managed by Stripe in Client mode.

Authentication in ai.Go is based on the robust Auth0 platform. With Auth0, users can confidently log in, create accounts, and manage their authentication credentials with ease. 

<br>

## Features
- Interactive Chats
- Image generations
- Code generation
- Stripe integration
- Token consumption based system
- Secure authentication with Auth0
- Fully responsive UI

<br>

## Showcase
