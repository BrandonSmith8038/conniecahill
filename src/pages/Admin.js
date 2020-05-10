import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTable, useSortBy, usePagination } from 'react-table';
import { useIdentityContext } from 'react-netlify-identity';
import axios from 'axios';
import { Button, Container } from '../styles';

const Admin = (props) => {
	const [orders, setOrders] = useState([]);
	const { logoutUser } = useIdentityContext();
	const { history } = props;

	const onLogout = () => {
		logoutUser().then(() => history.push('/'));
	};
	useEffect(() => {
		axios
			.get('/.netlify/functions/FetchOrder')
			.then((res) => {
				setOrders(res.data.orders);
			})
			.then((orders) => {})

			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const data = React.useMemo(() => [...orders], [orders]);

	const columns = React.useMemo(
		() => [
			{ Header: 'Name', accessor: 'name', sortType: 'basic' },
			{ Header: 'Song', accessor: 'song', sortType: 'basic' },
			{ Header: 'Email', accessor: 'email' },
			{ Header: 'PayPal Order ID', accessor: 'payPalOrderID' },
		],
		[],
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialSate: { pageIndex: 2 },
		},
		useSortBy,
		usePagination,
	);
	return (
		<>
			<Nav>
				<Link to='/'>
					<Button
						style={{
							marginTop: '30px',
							marginLeft: '30px',
							padding: '.2rem .8rem',
						}}
					>
						Home
					</Button>
				</Link>
				<Button
					onClick={() => onLogout()}
					style={{
						marginTop: '30px',
						marginLeft: '30px',
						padding: '.2rem .8rem',
						border: 'none',
					}}
				>
					Logout
				</Button>
			</Nav>
			<Container>
				<PageTitle>Sales</PageTitle>
				<TableContainer>
					<table {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th
											{...column.getHeaderProps(column.getSortByToggleProps())}
										>
											{column.render('Header')}
											{column.isSorted
												? column.isSortedDesc
													? ' ⬆'
													: ' ⬇'
												: ' '}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{page.map((row, i) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</TableContainer>
				<Pagination>
					<Button onClick={() => gotoPage(0)} disable={!canPreviousPage}>
						{'↩↩'}
					</Button>{' '}
					<Button onClick={() => previousPage()} disabled={!canPreviousPage}>
						{'↩'}
					</Button>{' '}
					<Button onClick={() => nextPage()} disabled={!canNextPage}>
						{'↪'}
					</Button>{' '}
					<Button
						onClick={() => gotoPage(pageCount - 1)}
						disable={!canNextPage}
					>
						{'↪↪'}
					</Button>{' '}
				</Pagination>
			</Container>
		</>
	);
};
export default Admin;

const Pagination = styled.div`
	display: flex;
	justify-content: center;
	button {
		margin-right: 10px;

		:last-of-type {
			margin-right: 0;
		}
	}
`;

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TableContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 80%;
	table {
		box-shadow: var(--shadow-light);
		color: #333;
		font-size: 18px;
		width: 80%;
		border-spacing: 0;
		border: 1px solid var(--primary);
		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
			:nth-child(even) {
				background-color: var(--primary-light);
			}
		}
		th {
			font-family: 'Courgette', cursive;
			font-size: 25px;
			letter-spacing: 3px;
			color: var(--primary);
		}
		th,
		td {
			margin: 0;
			padding: 0.7rem;
			border-bottom: 1px solid var(--primary);
			border-right: 1px solid var(--primary);
			:last-child {
				border-right: 0;
			}
		}
	}
`;

const PageTitle = styled.h1`
	font-size: 3.5rem;
	color: var(--primary);
	font-family: 'Courgette', cursive;
	text-transform: uppercase;
	margin-bottom: 10px;
	letter-spacing: 5px;
`;
