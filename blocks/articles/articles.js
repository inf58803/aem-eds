export default async function decorate(block) {
  const resp = await fetch('/articles.json');

  if (!resp.ok) {
    return;
  }

  const json = await resp.json();

  const ul = document.createElement('ul');
  ul.className = 'article-list';

  json.data.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.path;

    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title || '';
      link.appendChild(img);
    }

    const title = document.createElement('h3');
    title.textContent = item.title;
    link.appendChild(title);

    li.appendChild(link);
    ul.appendChild(li);
  });

  block.textContent = '';
  block.appendChild(ul);
}
