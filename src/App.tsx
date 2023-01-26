import React, { useEffect, useState } from 'react';
import './App.css';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {items} from './data/items';
import {categories} from './data/categories';
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { TableItem } from './components/TableItem';



function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth));
  },[list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;
