export interface IPost {
  id: number;
  title: {rendered: string};
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

// Определить тип
export type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

// Импортируем action creators как actions,
// берем их ReturnType (тип возвращаемого значения — экшен),
// и собираем при помощи нашего специального типа. Получается как раз то, что требовалось.
