const lista = document.getElementById("lista");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((post) => {
//       let titulo = post.title;
//       let corpo = post.body;
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${titulo}</h2>
//         <p>${corpo}</p>
//       `;
//       lista.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Teste",
//     body: "Testando",
//     userId: 1,
//   }),
//   headers: {
//     "content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data));

const solicitarPost = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  data.forEach((post) => {
    let titulo = post.title;
    let corpo = post.body;
    const li = document.createElement("li");
    li.innerHTML = `
          <h2>${titulo}</h2>
          <p>${corpo}</p>
        `;
    lista.append(li);
  });
};

solicitarPost();
