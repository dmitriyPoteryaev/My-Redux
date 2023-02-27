import { actionType } from "./type/type";
import { actionsCount } from "./MyRedux/action/action";
import { rootReducer } from "./MyRedux/reducers/rootRecucer";

//  В данном проекте стоит задачи - понять как работает редакс и сделать свой store.
//  1. Создим фкнцию createStore.
// Если мы сейчас абстрагируемся от каких-то асинхронных задач в нашем приложении, то функцию  createStore можно расссмотреть с той позиции, что
// это функция, которая принимает в качестве агрумента другую функцию, а именно reducer.
// КАСАТЕЛЬНО ФУНКЦИИ REDUCER НУЖНО ИМЕТЬ В ВИДУ СЛЕДУЮЩЕЕ -
// это функция, которая принимает в качетве аргумента state и action. И в завиимисимости от типа action возращает изменённый стейт
/**
 * Аналог функции createStore в Redux
 * @param reducer - функция reducer, которая принимает в качестве аргумента action
 * @return useSelector - аналог хука из библиотеки Redux для того, чтобы изъять стейт из стора;
 * useDispatch - аналог хука из библиотеки Redux для того, чтобы изменить стейт;
 * useSubscribe - аналог хука из библиотеки Redux для того, чтобы узнать, когда изменился стейт;
 */
const createStore = (reducer: Function) => {
  let state = reducer({}, { type: "SOME" });
  let subscribers: Function[] = [];

  //Здесь мы как раз видим, что сама функция createStore  возращает три функции, которые либо изменяют, либо отдают стейт,
  //либо узнать когда зименился стейт

  return {
    useSelector: () => state,
    useDispatch: (action: object) => (
      (state = reducer(state, action)), subscribers.forEach((cb) => cb())
    ),
    useSubscribe: (cb: Function) => subscribers.push(cb),
  };
};

const store = createStore(rootReducer);

const { useSelector, useDispatch, useSubscribe } = store;

useSubscribe(() => console.log("change"));

const { increment, decrement } = actionsCount;

useDispatch(increment(100));

useDispatch(decrement(50));

useDispatch({ type: "ADD_USER", payload: "Dima" });

const count = useSelector();

console.log(count);
