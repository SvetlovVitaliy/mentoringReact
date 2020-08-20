import { TSortingOrder } from "../../services/setting/utils";

export function getCurrentOrder(sortOrder: TSortingOrder): TSortingOrder {
  if (sortOrder === TSortingOrder.ASK) {
    return TSortingOrder.DESC;
  }
  return TSortingOrder.ASK;
}

export function handleClickButtonRadio(
  param: any,
  activeTab: string,
  sortOrder: TSortingOrder,
  onPress: Function,
  changeSorting: Function,
) {
  const hasParam = param !== activeTab;
  const hasSortOrder = sortOrder !== TSortingOrder.ASK;
  const currentOrder = getCurrentOrder(sortOrder);

  if (hasParam) {
    onPress(param);
    if (hasSortOrder) {
      changeSorting(TSortingOrder.ASK);
    }
  } else {
    changeSorting(currentOrder);
  }
}
