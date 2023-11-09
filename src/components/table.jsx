import {
    getCoreRowModel,
    useReactTable,
    flexRender
  } from "@tanstack/react-table"
  import styled from "@emotion/styled"
  import { Fragment } from "react"

  function Table(props) {
    const { data, columns, noDataMessage } = props
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel()
    })
    
    const { getHeaderGroups, getRowModel } = table
  
    const isNoData = getRowModel().rows.length === 0
  
    return (
      <TableContainer>
        {getHeaderGroups().map(headerGroup => (
          <TableHeader className="headerrow">
            {headerGroup.headers.map(header =>
              header.isPlaceholder ? null : (
                <TableCell key={header.id} width={header.column.getSize()}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              )
            )}
          </TableHeader>
        ))}
        <TableBody>
          {isNoData ? (
            <NoDataComponent>
              {noDataMessage}
            </NoDataComponent>
          ) : (
            getRowModel().rows.map(row => (
              <Fragment key={row.id}>
                <TableRow className="row">
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} width={cell.column.getSize()}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              </Fragment>
            ))
          )}
        </TableBody>
      </TableContainer>
    )
  }
  
  export default Table
  
  const TableContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-align: center;

    .row {
      width: 100%;
      display: flex;
      border-bottom: 1px solid rgba(224, 224, 224, 1);
    }
    .headerrow{
      width: 100%;
      display: flex;
      margin-top: -5px;
      border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
    }
    }
  `

  const TableCell = styled.div`
    width: 122px;
    padding: 16px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    align-items: center;
    word-break: break-all;
    text-align: center;
    justify-content: center;
  `
  
  const TableRow = styled.div`
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `
  
  const TableHeader = styled.div`
    font-weight: 500;
  `
  
  const TableBody = styled.div`
    display: flex;
    flex-direction: column;
  `
  
  const NoDataComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `
  const Tags = styled.span`
  background-color: #00d82c;
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
`;