import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

type Props = {
  label: string;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
  className?: string;
};

const TableHeader = ({
  label,
  sortable = false,
  sortDirection = null,
  onSort = () => {},
  className = '',
}: Props) => {
  const getSortSymbol = () => {
    if (sortDirection === 'asc') return '▲';
    if (sortDirection === 'desc') return '▼';
    return '⇅';
  };

  return (
    <th className={className}>
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
};

export default TableHeader;
