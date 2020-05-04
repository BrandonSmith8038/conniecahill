import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';
import axios from 'axios';

const Admin = () => {
	const [orders, setOrders] = useState([]);

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
	console.log('Orders: ', orders);
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
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useSortBy,
	);
	return (
		<Container>
			<Link to='/'>
				<button>Home</button>
			</Link>
			<PageTitle>Sales</PageTitle>
			<TableContainer>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
						{rows.map((row, i) => {
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
		</Container>
	);
};
export default Admin;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const TableContainer = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	text-align: center;
	width: 80%;
	table {
		color: #333;
		font-size: 18px;
		width: 80%;
		border-spacing: 0;
		border: 1px solid rgba(0, 0, 0, 0.3);
		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
			:nth-child(even) {
				background-color: #b9fdf8;
			}
		}
		th {
			font-family: 'Courgette', cursive;
			font-size: 25px;
			letter-spacing: 3px;
		}
		th,
		td {
			margin: 0;
			padding: 0.7rem;
			border-bottom: 1px solid rgba(0, 0, 0, 0.3);
			border-right: 1px solid rgba(0, 0, 0, 0.3);
			:last-child {
				border-right: 0;
			}
		}
	}
`;

const PageTitle = styled.h1`
	font-size: 3.5rem;
	font-family: 'Courgette', cursive;
	text-transform: uppercase;
	margin-bottom: 10px;
	letter-spacing: 5px;
`;
