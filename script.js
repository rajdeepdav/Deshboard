// Sample customer data (replace with API call if needed)
const customers = [
  { name: "Rajdeep Kumar", email: "rajdeep@example.com", orderCount: 5 },
  { name: "Anita Sharma", email: "anita@example.com", orderCount: 2 },
  { name: "Vikram Rao", email: "vikram@example.com", orderCount: 8 },
];

const container = document.getElementById("customerContainer");
const searchInput = document.getElementById("searchInput");

// Render customer cards
function renderCustomers(data) {
  container.innerHTML = "";
  data.forEach((customer) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${customer.name}</h5>
          <p class="card-text">
            <strong>Email:</strong> ${customer.email}<br/>
            <strong>Orders:</strong> ${customer.orderCount}
          </p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter customers by name or email
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(query) || c.email.toLowerCase().includes(query)
  );
  renderCustomers(filtered);
});

// Initial render
renderCustomers(customers);