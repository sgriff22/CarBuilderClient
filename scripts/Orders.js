import { completeOrder, getOrders } from "./database.js"

document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
      completeOrder(id);
    }
  });

export const Orders = async () => {
    const orders = await getOrders()

    return `${
        orders.map(order => {
            return `<div class="order">
                <section>
                ${order.paint.color} car with
                ${order.wheels.style} wheels,
                ${order.interior.material} interior,
                and the ${order.technology.package}
                for a total cost of $${order.totalCost}.
                </section>
                <input class="complete" type="button" name="complete" id="${order.id}" value="Complete" />
            </div>`
        })
    .join("")
    }`
}

