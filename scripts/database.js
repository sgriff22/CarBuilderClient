const database = {
  orderBuilder: {},
};

export const setPaint = (id) => {
  database.orderBuilder.paintId = id;
};

export const getCurrentOrder = () => {
  return database.orderBuilder;
};

export const setWheel = (id) => {
  database.orderBuilder.wheelId = id;
};

export const setInterior = (id) => {
  database.orderBuilder.interiorId = id;
};

export const setTechnology = (id) => {
  database.orderBuilder.technologyId = id;
};

export const addCustomOrder = async () => {
  const newOrder = { ...database.orderBuilder };
  await fetch("https://localhost:7008/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder),
  })
  database.orderBuilder = {};
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getOrders = async () => {
    const res = await fetch("https://localhost:7008/orders");
    const data = await res.json();
    return data;
};

export const getWheels = async () => {
    const res = await fetch("https://localhost:7008/wheels");
    const data = await res.json();
    return data;
};

export const getInteriors = async () => {
    const res = await fetch("https://localhost:7008/interiors");
    const data = await res.json();
    return data;
};

export const getTechnologies = async () => {
    const res = await fetch("https://localhost:7008/technologies");
    const data = await res.json();
    return data;
};

export const getPaints = async() => {
    const res = await fetch("https://localhost:7008/paintcolors");
    const data = await res.json();
    return data;
};
