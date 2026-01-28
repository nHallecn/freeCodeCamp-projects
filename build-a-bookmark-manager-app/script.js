
const categoryDropdown = document.getElementById('category-dropdown');
const addBookmarkBtn = document.getElementById('add-bookmark-button');
const closeFormBtn = document.getElementById('close-form-button');
const addBookmarkFormBtn = document.getElementById('add-bookmark-button-form');
const viewCategoryBtn = document.getElementById('view-category-button');
const closeListBtn = document.getElementById('close-list-button');
const deleteBookmarkBtn = document.getElementById('delete-bookmark-button');

const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const categoryList = document.getElementById('category-list');
const categoryNameDisplays = document.querySelectorAll('.category-name');

function isValidBookmarkObject(obj) {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.category === 'string' &&
    typeof obj.url === 'string'
  );
}

function getBookmarks() {
  const raw = localStorage.getItem('bookmarks');
  if (raw === null) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

  
    const allValid = parsed.every(isValidBookmarkObject);
    return allValid ? parsed : [];
  } catch (e) {
    return [];
  }
}
function displayOrCloseForm() {
  document.getElementById('main-section').classList.toggle('hidden');
  document.getElementById('form-section').classList.toggle('hidden');
}

function displayOrHideCategory() {
  document.getElementById('main-section').classList.toggle('hidden');
  document.getElementById('bookmark-list-section').classList.toggle('hidden');
}

function updateCategoryName() {
  const selectedValue = categoryDropdown.value;
  categoryNameDisplays.forEach((el) => (el.innerText = selectedValue));
}
addBookmarkBtn.addEventListener('click', () => {
  updateCategoryName();
  displayOrCloseForm();
})
closeFormBtn.addEventListener('click', () => {
  displayOrCloseForm();
})
addBookmarkFormBtn.addEventListener('click', () => {
  const bookmarks = getBookmarks();

  const newBookmark = {
    name: nameInput.value.trim(),
    category: categoryDropdown.value,
    url: urlInput.value.trim()
  }

  bookmarks.push(newBookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  nameInput.value = ''
  urlInput.value = ''
  displayOrCloseForm()
});

viewCategoryBtn.addEventListener('click', () => {
  updateCategoryName()

  const selected = categoryDropdown.value;
  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter((b) => b.category === selected)

  categoryList.innerHTML = '';

  if (filtered.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    filtered.forEach((bookmark) => {
      categoryList.innerHTML += `
        <div>
          <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark-radio">
          <label for="${bookmark.name}">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          </label>
        </div>
      `;
    });
  }

  displayOrHideCategory()
});

closeListBtn.addEventListener('click', () => {

  categoryList.innerHTML = '';
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener('click', () => {
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();

  const selectedRadio = document.querySelector("input[name='bookmark-radio']:checked");
  if (!selectedRadio) return; 
  const selectedName = selectedRadio.value;

  const updated = bookmarks.filter(
    (b) => !(b.name === selectedName && b.category === selectedCategory)
  );

  localStorage.setItem('bookmarks', JSON.stringify(updated));

  const filtered = updated.filter((b) => b.category === selectedCategory);
  categoryList.innerHTML = '';

  if (filtered.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    filtered.forEach((bookmark) => {
      categoryList.innerHTML += `
        <div>
          <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark-radio">
          <label for="${bookmark.name}">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          </label>
        </div>
      `;
    });
  }
});



** end of index.html **

** start of styles.css **

:root {
  --light-grey: #f5f6f7;
  --dark-grey: #0a0a23;
  --yellow: #f1be32;
  --golden-yellow: #feac32;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  display: flex;
  justify-content: center;
}

body {
  background-color: var(--dark-grey);
}

.hidden {
  display: none;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

select,
input,
label {
  margin-left: 10px;
}

div {
  padding: 30px;
  display: flex;
  justify-content: center;
}

.close-form-button {
  background: none;
  border: none;
  cursor: pointer;
}

h1, h2 {
  margin-top: 20px;
  text-align: center;
}

#category-list {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--light-grey);
  align-self: center;
  width: 80%;
  margin-top: 15px;
  border-radius: 10px;
}

#category-list,
h1,
h2,
label {
  color: var(--light-grey);
}

#category-list p {
  color: var(--dark-grey);
}

button {
  cursor: pointer;
  padding: 5px;
  width: 100px;
  margin: 10px;
  color: var(--dark-grey);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

button:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}

section {
  margin-top: 60px;
  border: 2px solid var(--golden-yellow);
  width: fit-content;
  border-radius: 10px;
}

** end of styles.css **

