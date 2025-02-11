/// <reference path="crud.d.ts"/>

import { rowID, rowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: rowElement = {
    ...row,
    age: 23,
  };

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(updatedRow);
