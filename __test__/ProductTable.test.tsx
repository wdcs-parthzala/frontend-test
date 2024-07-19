import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ProductsTable from "@/app/(authenticated)/products/ProductsTable";
import { Product } from "@/types";

const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Description 1",
    category: "Category 1",
    price: 1199,
    discountPercentage: 32,
    stock: 10,
    rating: 45,
    tags: "tag2",
    brand: "Brand 1",
    reviews: [
      {
        reviewerName: "John Doe",
        reviewerEmail: "johndoe@example.com",
        date: "2022-01-01T12:00:00.000Z",
        comment: "This is a great product!",
        rating: 5,
      },
      {
        reviewerName: "Jane Doe",
        reviewerEmail: "janedoe@example.com",
        date: "2022-01-02T12:00:00.000Z",
        comment: "This product is okay.",
        rating: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description 2",
    category: "Category 2",
    price: 2199,
    discountPercentage: 30,
    stock: 20,
    rating: 42,
    tags: "tag4",
    brand: "Brand 2",
    reviews: [
      {
        reviewerName: "Bob Smith",
        reviewerEmail: "bobsmith@example.com",
        date: "2022-01-03T12:00:00.000Z",
        comment: "This product is amazing!",
        rating: 5,
      },
    ],
  },
];

describe("ProductsTable", () => {
  it("renders a table with products", () => {
    render(<ProductsTable data={products} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Discount %")).toBeInTheDocument();
    expect(screen.getByText("Stock")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByText("Tags")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("opens and displays reviews in a modal when 'View Reviews' button is clicked", async () => {
    render(<ProductsTable data={products} />);

    const viewReviewsButtons = await screen.findAllByText("View Reviews");

    fireEvent.click(viewReviewsButtons[0]);

    await waitFor(() => {
      expect(screen.getByText(/Reviews for Product 1/)).toBeInTheDocument();
      expect(screen.getByText(/John Doe/)).toBeInTheDocument();
      expect(screen.getByText(/johndoe@example.com/)).toBeInTheDocument();
      expect(screen.getByText(/Sat Jan 01 2022/)).toBeInTheDocument();
      expect(screen.getByText(/This is a great product!/)).toBeInTheDocument();
      expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
      expect(screen.getByText(/janedoe@example.com/)).toBeInTheDocument();
      expect(screen.getByText(/Sun Jan 02 2022/)).toBeInTheDocument();
      expect(screen.getByText(/This product is okay./)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => {
      expect(
        screen.queryByText(/Reviews for Product 1/)
      ).not.toBeInTheDocument();
    });
  });

  it("renders correct product data in the table", () => {
    render(<ProductsTable data={products} />);
    screen.debug();

    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/Description 1/)).toBeInTheDocument();
    expect(screen.getByText(/Category 1/)).toBeInTheDocument();
    expect(screen.getByText(/1199/)).toBeInTheDocument();
    expect(screen.getByText(/32/)).toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
    expect(screen.getByText(/45/)).toBeInTheDocument();
    expect(screen.getByText(/tag2/)).toBeInTheDocument();
    expect(screen.getByText(/Brand 1/)).toBeInTheDocument();

    expect(screen.getByText(/Product 2/)).toBeInTheDocument();
    expect(screen.getByText(/Description 2/)).toBeInTheDocument();
    expect(screen.getByText(/Category 2/)).toBeInTheDocument();
    expect(screen.getByText(/2199/)).toBeInTheDocument();
    expect(screen.getByText(/30/)).toBeInTheDocument();
    expect(screen.getByText(/20/)).toBeInTheDocument();
    expect(screen.getByText(/42/)).toBeInTheDocument();
    expect(screen.getByText(/tag4/)).toBeInTheDocument();
    expect(screen.getByText(/Brand 2/)).toBeInTheDocument();
  });

  it("handles empty product data gracefully", () => {
    render(<ProductsTable data={[]} />);
    screen.debug();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("No products available")).toBeInTheDocument();
  });
});
