'use client'

import {Modal, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import type {Product, Review} from "@/types";
import {createColumnHelper, getCoreRowModel} from "@tanstack/table-core";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import {flexRender, useReactTable} from "@tanstack/react-table";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";




// Styled components
const StyledTableContainer = styled(Box)`
  margin-top: 20px;
`;

const columnHelper = createColumnHelper<Product>()

const columns = [
    columnHelper.accessor('id', {
        header: 'ID'
    }),
    columnHelper.accessor('title', {
        header: 'Title'
    }),
    columnHelper.accessor('description', {
        header: 'Description'
    }),
    columnHelper.accessor('category', {
        header: 'Category'
    }),
    columnHelper.accessor('price', {
        header: 'Price'
    }),
    columnHelper.accessor('discountPercentage', {
        header: 'Discount %'
    }),
    columnHelper.accessor('stock', {
        header: 'Stock'
    }),
    columnHelper.accessor('rating', {
        header: 'Rating'
    }),
    columnHelper.accessor('tags', {
        header: 'Tags'
    }),
    columnHelper.accessor('brand', {
        header: 'Brand'
    }),
    // columnHelper.accessor({
    //     id: 'actions',
    //     header: 'Actions',
    //     cell: ({row}) => (
    //         <Button variant="contained" color="primary" onClick={() => handleOpen(row.original)}>
    //             View Reviews
    //         </Button>
    //     )
    // })

]

const ProductsTable = ({data}: {data: Product[]}) => {
    const [open, setOpen] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    const handleOpen = async (product: Product) => {
        setSelectedProduct(product);
        setReviews(product.reviews)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <StyledTableContainer component={Paper}>
                <Table>
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroup: any) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header:any) => (
                                    <TableCell sx={{whiteSpace: 'nowrap'}} key={header.id}> {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableCell>
                                ))}
                                <TableCell key={'action'}>Action</TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row: any, index) => {

                            return (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell: any) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                    <TableCell key={`action-${row.id}`}>
                                        <Button variant="contained" onClick={() => handleOpen(row.original)}>View Reviews</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </StyledTableContainer>

                <Modal open={open} onClose={handleClose}>
                    <Box sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Reviews for {selectedProduct?.title}
                        </Typography>
                        <>
                        {reviews.map((review, index) => (
                            <Box key={`review-index-${index}`} mb={2}>
                                <Typography sx={{ fontWeight: '500'}} variant="body2">{`${review.reviewerName}<${review.reviewerEmail}> on ${new Date(review.date).toDateString()} ${new Date(review.date).toLocaleTimeString()}`}</Typography>
                                <Typography variant="body2">{review.comment}</Typography>
                                <Rating disabled value={review.rating}></Rating>
                            </Box>
                        ))}
                        </>

                        <Button variant="contained" onClick={handleClose}>Close</Button>
                    </Box>
            </Modal>
        </div>
    );
};

export default ProductsTable;