import TableHeader from '../../molecules/TableHeader/TableHeader';
import TableRow from '../../molecules/TableRow/TableRow';
import type { TableHeaderProps } from '../../molecules/TableHeader/TableHeader';
import type { TableRowProps } from '../../molecules/TableRow/TableRow';

type Props = {
  headers: TableHeaderProps['headers'];
  rows: Array<TableRowProps>;
  className?: string;
}

const Table = ({
  className,
  headers,
  rows,
}: Props) => {
  return (
    <>
      <table className={className || "min-w-full divide-y divide-gray-200"}>
        <thead>
          <tr>
            <TableHeader headers={headers} />
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => (
            <TableRow key={index} cells={row.cells} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table;
