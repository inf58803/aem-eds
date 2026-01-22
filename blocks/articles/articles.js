export default async function decorate(block) {
    const resp = await fetch('/articles.json')
    const json = await resp.json();

    const ul = document.createElement('ul');
    ul.className = 'article-list';

    json.data.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML= `
          <a href="${item.path}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        ul.appendChild(li);
    });
    block.replaceChildren(ul);
}