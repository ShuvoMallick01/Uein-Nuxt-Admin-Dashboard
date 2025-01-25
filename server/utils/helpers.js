export const getMethod = (event) => event.req.method;
export const getQuery = (event) => useQuery(event);
export const readBody = async (event) => await useBody(event);
