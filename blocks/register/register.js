export default function decorate(block) {
    block.innerHTML = `
    <form>
      <input id="name" name="name" type="text" placeholder="Name" required/>
      <input id="email" name="email" type="email" placeholder="Email" required/>
      <input id="intrests" name="intrests" type="text" placeholder="intrests" required/>
      <button type="submit">Submit</button>
      <p class="message" hidden></p>
    </form>
    `;

    const form = block.querySelector('form');
    const message  = block.querySelector('.message');

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const data = {
            name:form.name.value,
            email:form.email.value,
            intrests:form.intrests.value,
        };
        const list = JSON.parse(localStorage.getItem('waitingList') || '[]');
        list.push(data);
        localStorage.setItem('waitingList',JSON.stringify(list));

        message.textContent = 'You are added to waiting list';
        message.hidden= false;

        setTimeout(() => {
            message.hidden = true;
        },2000);

        form.reset();
    });
}