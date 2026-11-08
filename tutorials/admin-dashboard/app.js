// 6. Read & Delete
const $ = s => document.querySelector(s);
const tbody = $('tbody');
const users = [
  { name: 'Ava Stone', email: 'ava@snacky.dev', role: 'Admin' },
  { name: 'Leo Park', email: 'leo@snacky.dev', role: 'Editor' },
  { name: 'Mia Rossi', email: 'mia@snacky.dev', role: 'Viewer' },
  { name: 'Sam Lee', email: 'sam@snacky.dev', role: 'Editor' },
  { name: 'Noah Kim', email: 'noah@snacky.dev', role: 'Viewer' },
];

// READ: draw the table from the data
function render() {
  tbody.innerHTML = users.map((u, i) => `<tr>
    <td><b class="avatar">${u.name[0]}</b>${u.name}</td>
    <td>${u.email}</td>
    <td><span class="role ${u.role}">${u.role}</span></td>
    <td><button class="edit" data-i="${i}">✎</button>
        <button class="delete" data-i="${i}">✕</button></td>
  </tr>`).join('');
  $('.count').textContent = users.length;
}
render();

// DELETE: remove from the data, then draw again
tbody.addEventListener('click', e => {
  if (e.target.matches('.delete')) {
    users.splice(e.target.dataset.i, 1);
    render();
  }
});

// 7. Create & Update
const modal = $('.modal'), form = $('form');
let editing = null;

function openForm(i = null) {
  editing = i;
  const u = users[i] || { name: '', email: '', role: 'Viewer' };
  form.fullName.value = u.name;
  form.email.value = u.email;
  form.role.value = u.role;
  $('h2').textContent = i === null ? 'Add user' : 'Edit user';
  modal.classList.add('open');
}
$('.add').onclick = () => openForm();
$('.cancel').onclick = () => modal.classList.remove('open');

// CREATE or UPDATE when the form is saved
form.addEventListener('submit', e => {
  e.preventDefault();
  const u = {
    name: form.fullName.value,
    email: form.email.value,
    role: form.role.value,
  };
  if (editing === null) users.push(u);
  else users[editing] = u;
  modal.classList.remove('open');
  render();
});

tbody.addEventListener('click', e => {
  if (e.target.matches('.edit')) openForm(+e.target.dataset.i);
});
