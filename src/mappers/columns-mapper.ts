import { columnsModel } from "../models/columns-model";
import { columnsUiModel } from "../ui-models/columns-ui-model";

function mapToUI(columnsData: columnsModel): columnsUiModel {
  return {
    name: columnsData.name,
    function: columnsData.function
  };
}

function mapToModel(columnsData: columnsUiModel): columnsModel {
  return {
    name: columnsData.name,
    function: columnsData.function
  };
}

function mapToUIList(areasList: columnsModel[]): columnsUiModel[] {
  return areasList.map(mapToUI);
}

export default {
  mapToUI,
  mapToModel,
  mapToUIList
};
