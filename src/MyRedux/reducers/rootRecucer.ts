import { reducerUser } from "./slicesRootReducer/reducerUser";
import { reducerCount } from "./slicesRootReducer/reducerCount";

/**
 * combineReducer - аналог функции из библиотеки Redux, которая делает один большой редьюсер
 * @param reducersMap - объект, где в качестве ключа указано условное название какого-нибудь редьюсера,
 * а в качетве значения указана сама функция редьюсер
 * @returns nextState - это новый стейт 
 */
 const combineReducer = (reducersMap: any) => {
  let nextState: any = {};

  return (state: any, action: any) => {
    (<any>Object)
      .entries(reducersMap)
      .forEach(([key, reducer]: [string, Function]) => {
        nextState[key] = reducer(state[key], action);
      });

    return nextState;
  };
};

export const rootReducer = combineReducer({
    userState: reducerUser,
    countState: reducerCount,
  })
