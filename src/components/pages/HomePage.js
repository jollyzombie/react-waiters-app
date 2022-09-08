
import { getAllTables } from '../../redux/tablesReducer';
import { useSelector } from 'react-redux';

import SingleTable from '../features/SingleTable/SingleTable';

function HomePage() {
  const tablesData = useSelector(getAllTables);

  return (
    <div>
      <h1 className='mb-5'>All tables</h1>
      {tablesData.map((table, index) => (
        <SingleTable
          key={index}
          id={table.id}
          number={table.id}
          status={table.status}
          people={table.people}
          maxPeople={table.maxPeople}
          bill={table.bill}
        />
      ))}
    </div>
  );
}

export default HomePage;
