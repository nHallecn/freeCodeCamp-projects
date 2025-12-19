
const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${days}d ago`;
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
}

function forumCategory(id) {
  const categoryData = allCategories[id] || {
    category: 'General',
    className: 'general'
  };

  return `<a class="category ${categoryData.className}" href="${forumCategoryUrl}${categoryData.className}/${id}">${categoryData.category}</a>`;
}


function avatars(posters, users) {
  return posters
    .map(poster => {
      const user = users.find(u => u.id === poster.user_id);

      let avatar = user.avatar_template.replace('{size}', 30);

      if (avatar.startsWith('/')) {
        avatar = `${avatarUrl}${avatar}`;
      }

      return `<img src="${avatar}" alt="${user.name}">`;
    })
    .join('');
}


function showLatestPosts(data) {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  const rows = topics
    .map(topic => {
      return `
        <tr>
          <td>
            <a
              class="post-title"
              href="${forumTopicUrl}${topic.slug}/${topic.id}"
            >
              ${topic.title}
            </a>
            ${forumCategory(topic.category_id)}
          </td>
          <td>
            <div class="avatar-container">
              ${avatars(topic.posters, users)}
            </div>
          </td>
          <td>${topic.posts_count - 1}</td>
          <td>${viewCount(topic.views)}</td>
          <td>${timeAgo(topic.bumped_at)}</td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('posts-container').innerHTML = rows;
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
