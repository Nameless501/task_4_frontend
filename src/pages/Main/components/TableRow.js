import { memo } from 'react';
import { Form } from 'react-bootstrap';

const MemoizedTableRow = memo(function TableRow({
    id,
    name,
    email,
    createdAt,
    lastLoginAt,
    block,
    handleSelect,
    checked = false,
}) {
    function parseDate(date) {
        return new Date(Date.parse(date)).toLocaleDateString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    return (
        <tr>
            <td>
                <Form.Check
                    type="checkbox"
                    aria-label="id 1"
                    value={id}
                    checked={checked}
                    onChange={handleSelect}
                />
            </td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{parseDate(lastLoginAt)}</td>
            <td>{parseDate(createdAt)}</td>
            <td className={block ? 'bg-danger' : 'bg-success'}>
                {block ? 'Blocked' : 'Active'}
            </td>
        </tr>
    );
});

export default MemoizedTableRow;
