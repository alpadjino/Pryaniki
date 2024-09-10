import React, { useState } from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { dateFormating } from '@utils/dateFormating';
import { TranslatedHeaders } from '@models/dictionaries';
import { EditButton } from '@business/atoms/EditButton';
import { DeleteButton } from '@business/atoms/DeleteButton';
import { AddButton } from '@business/atoms/AddButton';

interface TableTemplateProps<T> {
	headers: TranslatedHeaders[];
	tableData: T[];
	children?: React.ReactNode;
	onPageCount?: number;
	handleEditButton?: (row: T) => void;
	handleDeleteButton?: (row: T) => void;
	handleAddButton?: () => void;
}

export function TableTemplate<T extends Record<string, any>>({
	headers,
	children,
	tableData,
	onPageCount,
	handleAddButton,
	handleEditButton,
	handleDeleteButton,
}: TableTemplateProps<T>) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(onPageCount ?? 10);
	const rowsPerPageOptions = onPageCount ? [onPageCount, onPageCount * 2, onPageCount * 5] : [10, 20, 50];

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<Paper>
			<Box>{handleAddButton && <AddButton onClick={() => handleAddButton()} />}</Box>
			<TableContainer>
				<Table sx={{ minWidth: 650 }} size="small">
					<TableHead>
						<TableRow>
							{headers.map((header, index) => (
								<TableCell key={index} align="right">
									{header.translated}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
							<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								{headers.map((header) => (
									<TableCell key={header.headerName} align="right">
										{dateFormating(row[header.headerName])}
									</TableCell>
								))}
								{handleEditButton && (
									<TableCell>
										<EditButton onClick={() => handleEditButton(row)} />
									</TableCell>
								)}
								{handleDeleteButton && (
									<TableCell>
										<DeleteButton onClick={() => handleDeleteButton(row)} />
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={rowsPerPageOptions}
				component="div"
				count={tableData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			{children}
		</Paper>
	);
};
