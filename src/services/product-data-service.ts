import { columnsModel } from "../models/columns-model";
import columnsMapper from "../mappers/columns-mapper";
import columnsDataMapper from "../mappers/columns-data-mapper";
import { columnsUiModel } from "../ui-models/columns-ui-model";
import { columnsDataUiModel } from "../ui-models/columns-data-ui-model";
import { columnsDataModel } from "../models/columns-data-model";

export function getColumns(): Promise<void | columnsUiModel[]> {
    return fetch('https://plotter-task.herokuapp.com/columns').then((res)=>{
      if(!res.ok) {
        return res.text().then(text => { throw new Error(text) })
       }
      else {
       return res.json();
     }  
    }).then((data: columnsModel[])=>{
       return columnsMapper.mapToUIList(data);
    })
  }
  export function getColumnsData(data:{measures:string[], dimension:string} ): Promise<void | columnsDataUiModel[]> {
    return fetch('https://plotter-task.herokuapp.com/data',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res)=>{
      if(!res.ok) {
        return res.text().then(text => { throw new Error(text) })
       }
      else {
       return res.json();
     }  
    }).then((data: columnsDataModel[])=>{
       return columnsDataMapper.mapToUIList(data);
    })
  }