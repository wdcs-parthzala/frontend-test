# Front-End Test
## Overview
Create a Next.js project  to  display a products  table with server-side rendering.  Implement  a
login form  with authentication,  and provide  functionality to  view product  reviews in a modal.
Use TypeScript  for  type safety, Material-UI  (MUI) components  for UI elements, and
@emotion/styled  for  custom styling.

# Requirements

## Project Setup:
- Use the latest version  of Next.js and TypeScript.
### Products Table Page:
- Create a page to  preview the  products  table.
- Use server-side rendering  to fetch the product  data.
- Fetch data on  the server side from  the  following API:  https://dummyjson.com/products .
- Customize the  table styles using @emotion/styled.
- Include an action button  labeled "View  Reviews" for each product.
- The "View Reviews" button  should  open a modal displaying product  reviews for the
specific product.
- Fetch product  details from  the  following API:  https://dummyjson.com/products/[id].
- Use @tanstack/react-table for  the data table.
- Use the following UI design for  the data table: UI Design.

- Display the following values from  the API in the table:
  1. id: The unique  identifier for each product.
  2. title: The name or  title of the  product.
  3. description:  A brief description or  summary  of the  product.
  4. category: The category or  type  of product.
  5. price: The price of the product.
  6. discount percentage:  The percentage discount applied to  the product,  if any.
  7. rating: The rating or score of the product  based on reviews.
  8. stock: The quantity  of the product  available in stock.
  9. tags: Keywords  or  labels associated with the product.
  10. brand:  The brand  or  manufacturer  of the product.
  
## Login Page:
- Create a login form  without  styles.
- Use the authentication  API: https://dummyjson.com/auth/l ogin  with the  following
credentials:
  - username:  emilys
  - password: emilyspass 
- Use react-hook-form  with  zod validation for  the login form.
- Upon  successful login, redirect the user to the  products  table page.

## How to Run the project:
- Clone the repository
- Install Dependencies `yarn`
- Run the project using `yarn run dev`
- Visit `http://localhost:3000` in browser.
- Login with following credentials
  - username:  emilys
  - password: emilyspass
