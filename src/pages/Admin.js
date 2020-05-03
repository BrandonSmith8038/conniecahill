import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	useTable,
	useGroupBy,
	useFilters,
	useSortBy,
	useExpanded,
	usePagination,
} from 'react-table';

const Admin = () => {
	const data = React.useMemo(
		() => [
			{
				Name: 'Brandon',
				Song: 'I Believe',
				Email: 'brandon@gmail.com',
			},
			{
				Name: 'Amber',
				Song: 'To Be Found Faitful',
				Email: 'amber@gmail.com',
			},
			{
				Name: 'Mike',
				Song: 'Both',
				Email: 'mike@gmail.com',
			},
			{
				Name: 'Connie',
				Song: 'To Be Found Faithful',
				Email: 'connie@yahoo.com',
			},
			{
				Name: 'Brad',
				Song: 'To Be Found Faithful',
				Email: 'Brad@yahoo.com',
			},
		],
		[],
	);

	const columns = React.useMemo(
		() => [
			{ Header: 'Name', accessor: 'Name' },
			{ Header: 'Song', accessor: 'Song' },
			{ Header: 'Email', accessor: 'Email' },
		],
		[],
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	});
	return (
		<Container>
			<Link to='/'>
				<button>Home</button>
			</Link>
			<h1>Sales</h1>
			<TableContainer>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
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
	height: 100vh;
	width: 100%;
`;

const TableContainer = styled.div`
	padding: 1rem;
	table {
		border-spacing: 0;
		border: 1px solid black;
		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}
		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;
			:last-child {
				border-right: 0;
			}
		}
	}
`;
