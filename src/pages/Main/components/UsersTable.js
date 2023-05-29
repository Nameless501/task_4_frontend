import { Table } from 'react-bootstrap';
import MemoizedTableRow from './TableRow';
import { usersTableConfig } from '../../../utils/configs';

function UsersTable({ users=[], handleSelect, selected=[] }) {
    return (
        <Table striped bordered responsive hover className="text-center">
            <thead>
                <tr>
                    {usersTableConfig.cols.map((col) => {
                        return <th key={col}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <MemoizedTableRow
                            key={user.id}
                            {...user}
                            handleSelect={handleSelect}
                            checked={selected.includes(user.id)}
                        />
                    );
                })}
            </tbody>
        </Table>
    );
}

export default UsersTable;
