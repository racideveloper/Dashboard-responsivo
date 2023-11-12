const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

const Orders = [
    {
        productName: 'Introducción a CSS3',
        productID: '23456',
        paymentStatus: 'Pendiente',
        status: 'Pendiente'
    },
    {
        productName: 'Introducción a HTML5',
        productID: '93718',
        paymentStatus: 'Reintegrado',
        status: 'Rechazado'
    },
    {
        productName: 'Introducción a JavaScript',
        productID: '00393',
        paymentStatus: 'Pagado',
        status: 'Activo'
    },
]

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productID}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Rechazado' ? 'danger' : order.status === 'Pendiente' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Detalles</td>
        `;
        tr.innerHTML = trContent;
        console.log('Agregando fila:', trContent);
        document.querySelector('table tbody').appendChild(tr);
});