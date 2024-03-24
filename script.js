document.getElementById('lihat-film').addEventListener('click', function() {
  document.querySelector('.film').scrollIntoView({ 
      behavior: 'smooth' 
  });
});

document.getElementById('pesan-tiket').addEventListener('click', function() {
  document.querySelector('.tiket').scrollIntoView({ 
      behavior: 'smooth' 
  });
});



const purchase = document.getElementById("purchase");
purchase.addEventListener("click", () => {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const movie = document.getElementById("movie").value;
  const quantity = document.getElementById("quantity").value;
  if (!name || !email || !movie || !quantity) {
    // Display error message
    createPopUp("Form Error", "Please fill out all the fields.");
  } else {

    // Display purchase successful message
    createPopUp("Ticket order successful", "Your ticket has been purchased successfully!");

    // Remove the "hidden" class from the "Print Ticket" button
    const printButton = document.getElementById("purchase-button");
    printButton.classList.remove("hidden");
  }
});

function createPopUp(title, message) {
  const popUp = document.createElement("div");
  popUp.className = "pop-up";
  popUp.style.display = "block";
  popUp.style.position = "fixed";
  popUp.style.zIndex = "1000";
  popUp.style.top = "0";
  popUp.style.left = "0";
  popUp.style.width = "100%";
  popUp.style.height = "100%";
  popUp.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  const popUpContent = document.createElement("div");
  popUpContent.className = "pop-up-content";
  popUpContent.style.backgroundColor = "#fff";
  popUpContent.style.borderRadius = "5px";
  popUpContent.style.padding = "20px";
  popUpContent.style.position = "absolute";
  popUpContent.style.top = "50%";
  popUpContent.style.left = "50%";
  popUpContent.style.transform = "translate(-50%, -50%)";

  const popUpTitle = document.createElement("h1");
  popUpTitle.textContent = title;
  popUpTitle.style.fontSize = "24px";
  popUpTitle.style.marginBottom = "10px";

  const popUpMessage = document.createElement("p");
  popUpMessage.textContent = message;
  popUpMessage.style.fontSize = "18px";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.backgroundColor = "#007bff";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.marginTop = "10px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", () => {
      popUp.style.display = "none";
  });

  popUpContent.appendChild(popUpTitle);
  popUpContent.appendChild(popUpMessage);
  popUpContent.appendChild(closeButton);
  popUp.appendChild(popUpContent);

  document.body.appendChild(popUp);
}

const purchaseButton = document.getElementById("purchase-button");
    purchaseButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const movie = document.getElementById("movie").value;
    const quantity = document.getElementById("quantity").value;

    const ticket = `<html><head><title>Ticket</title><style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      padding: 20px;
    }

    .ticket {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }

    .ticket h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .ticket p {
      margin-bottom: 10px;
    }

    .ticket p:last-child {
      margin-bottom: 0;
    }

    .ticket .info {
      border-top: 1px solid #ddd;
      padding-top: 20px;
    }

    .ticket .info p {
      font-weight: bold;
    }

    .ticket .thank-you {
      margin-top: 20px;
      text-align: center;
    }
    </style></head><body><div class="ticket">
    <h1>Ticket Purchase Confirmation</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Movie: ${movie}</p>
    <p>Quantity: ${quantity}</p>
    <div class="info">
      <p>Thank you for purchasing tickets!</p>
    </div>
    </div></body></html>`;

    if (!name || !email || !movie || !quantity) {
      // Display error message
      createPopUp("Form Error", "Please fill out all the fields.");
    } else {
    const myWindow = window.open('', 'Print Ticket', 'width=500,height=500');
    myWindow.document.write(ticket);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    }
});