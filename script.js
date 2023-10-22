const addForms = document.querySelector('.add');
const listItem = document.querySelector('.to-do');
const search = document.querySelector('.search input');
const generateTemplete = todo =>{
const html =`

    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>

`;
   listItem.innerHTML+=html;
}
const filter = term =>{
  Array.from(listItem.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(listItem.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

addForms.addEventListener('submit', e =>{
  e.preventDefault();
  const todo = addForms.add.value.toLowerCase();
  if (todo.length > 0){
    generateTemplete(todo)
    addForms.reset();
  }
})

listItem.addEventListener('click',e=>{
  if (e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})

search.addEventListener('keyup',()=>{
  const term = search.value.trim();
  filter(term)
})
