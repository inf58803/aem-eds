export default async function decorate(block) {
    const url = 'https://main--aem-eds--inf58803.aem.page/spreadsheet.json';
    
    const response = await fetch(url);
    const json = await response.json();

    const itemsPerPage = 10;
    let currentPage = 1;

    function renderPage(page) {
        block.innerHTML ='';
        const start = (page-1)*itemsPerPage;
        const end = start + itemsPerPage;

        json.data.slice(start,end).forEach(item => {
            const div = document.createElement('div');
            div.className = 'country-item';
            div.innerHTML = `
            <strong>${item.country}</strong>
            Captial:${item.captial}
            Continent:${item.continent}`;
            block.appendChild(div);
        });
    }
    renderPage(currentPage);
}