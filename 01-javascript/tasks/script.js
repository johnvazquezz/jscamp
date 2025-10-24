const jobsListingSection = document.querySelector('#items')

jobsListingSection.addEventListener('click', function (event) {
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})

//DONE: Tarea Filtro Tecnologia seccion JS

const filter = document.querySelector('#filter-technology');


filter.addEventListener('change', () => {
    const value = filter.value;

    [...jobsListingSection.children].forEach(job => {
        if (job.textContent.toLowerCase().includes(value.toLowerCase())) {
            job.style.display = 'block'
        }
        else {
            job.style.display = 'none'
        }
    })
})


//DONE: Tarea Filtro Modalidad con Dataset HTML seccion JS
// const filter = document.querySelector('#filter-modalidad');

// const jobs = document.querySelectorAll('article');

// filter.addEventListener('change', () => {
//     const value = filter.value;
//     jobs.forEach(job => {
//         job.getAttribute('data-modalidad');
//         const modalidad = job.dataset.modalidad;

//         if (modalidad === '' || modalidad === value) {
//             job.style.display = 'block';
//         } else {
//             job.style.display = 'none';
//         }
//     })

// })