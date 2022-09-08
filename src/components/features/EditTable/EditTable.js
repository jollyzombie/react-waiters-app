import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesReducer';

import TableForm from '../TableForm/TableForm';

function EditTable() {
  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));

  if (!tableData) return <Navigate to='/' />;
  return (
    <TableForm
      actionText='Change'
      id={tableData.id}
      people={tableData.people}
      maxPeople={tableData.maxPeople}
      status={tableData.status}
      bill={tableData.bill}
    />
  );
}

export default EditTable;
