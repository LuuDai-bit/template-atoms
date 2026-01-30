import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

type Props = {
  headers: Array<{
    label: string;
    sortable?: boolean;
    sortDirection?: string;
    onSort?: () => void;
    className?: string;
  }>;
};

const TableHeader = ({
  headers,
}: Props) => {
  const tableHeaders = headers.map((header, index) => {
    const { label, sortable, sortDirection, onSort, className }  = header;
    const getSortSymbol = () => {
      if (sortDirection === 'asc') return '▲';
      if (sortDirection === 'desc') return '▼';
      return '⇅';
    };

    return (
      <th key={`header-${index}`} className={className}>
        <div className="flex items-center justify-between">
          <Text content={label} fontWeight="bold" />
          {sortable && (
            <Button
              content={getSortSymbol()}
              type="button"
              onClick={onSort}
              className="ml-2"
            />
          )}
        </div>
      </th>
    );
  });

  return tableHeaders;
};

export default TableHeader;

export type TableHeaderProps = Props;
