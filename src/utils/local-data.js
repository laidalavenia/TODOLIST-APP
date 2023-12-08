let todos = [
  {
    id: 'todos-1',
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'todos-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'todos-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'todos-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'todos-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'todos-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
];

function getAllTodos() {
  return todos;
}

function getTodo(id) {
  const foundedTodo = todos.find((todo) => todo.id === id);
  return foundedTodo;
}

function getActiveTodos() {
  const activeTodos = todos.filter((todo) => !todo.archived);
  return activeTodos;
}

function getArchivedTodos() {
  const archivedTodos = todos.filter((todo) => todo.archived);
  return archivedTodos;
}

function addTodo({ title, body }) {
  todos = [...todos, {
    id: `todos-${+new Date()}`, 
    title: title || '(untitled)', 
    body, 
    createdAt: new Date().toISOString(), 
    archived: false,
  }];
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

function archiveTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, archived: true };
    }
    return todo;
  });
}

function unarchiveTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, archived: false };
    }

    return todo;
  });
}

function searchTodos(todos, keyword) {
  return todos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()))
}

function editTodo({ id, title, body }) {
  const todoToEdit = todos.find((todo) => todo.id === id);
  todoToEdit.title = title;
  todoToEdit.body = body;

  todos = todos.map((todo) => {
    if (todo.id === id) {
      return todo;
    }
    return todo;
  });
}

export {
  getAllTodos,
  getActiveTodos,
  getArchivedTodos,
  deleteTodo,
  editTodo,
  getTodo,
  archiveTodo,
  unarchiveTodo,
  searchTodos,
  addTodo,
};
