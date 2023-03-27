import {useEffect} from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Kanban = () => {

  const { currentMode } = useStateContext();

  useEffect(()=>{
    if(currentMode === 'Dark'){  import ('../styles/tailwind-dark.css')}
  },[currentMode])



  return (<div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => (
        <ColumnDirective 
          key={index} {...item} />))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
)};

export default Kanban;
