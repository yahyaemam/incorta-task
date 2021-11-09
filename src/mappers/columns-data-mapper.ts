import { columnsDataModel } from "../models/columns-data-model";
import { columnsDataUiModel } from "../ui-models/columns-data-ui-model";

function mapToUI(columnsData: columnsDataModel): columnsDataUiModel {
  return {
    name: columnsData.name,
    values: columnsData.values
  };
}

function mapToModel(columnsData: columnsDataUiModel): columnsDataModel {
  return {
    name: columnsData.name,
    values: columnsData.values
  };
}

function mapToUIList(areasList: columnsDataModel[]): columnsDataUiModel[] {
  return areasList.map(mapToUI);
}

export default {
  mapToUI,
  mapToModel,
  mapToUIList
};
