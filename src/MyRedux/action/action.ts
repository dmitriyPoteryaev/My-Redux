

 const increment = (payload: any) => {
    return { type: "INCREMENT", payload: payload };
  };
   const decrement = (payload: any) => {
    return { type: "DECREMENT", payload: payload };
  };

  /**
 * Actions для countRefucer
 */
  export const actionsCount = {
    increment,
    decrement,
  }
