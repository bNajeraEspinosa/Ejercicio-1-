const baseEndpoint = 'https://api.github.com/';
/* se agrego '' */
const usersEndpoint = `${baseEndpoint}/users`;

/* se agrega # */
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');


/* se agrego async try and catch */
async function displayUser(username) {
$n.textContent = 'cargando...';
try {

  const response = await fetch(`${usersEndpoint}/${username}`);
  response.json()
  console.log(response);
 
}
catch {

  /* se agregan '' para modificar los archivos */
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);