console.log('carousel')

 //FOTO DELLO SLIDE
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]
   // ARRAY
const slideElements = []

let currentIndex = 0

const slidesWrapperEl = document.querySelector('.slides-wrapper')
slidesWrapperEl.innerHTML = " "

//GENERIAMO IL CONTENUTO DELLO SLIDE DALL'HTML

for (i = 0; i < slides.length; i++){
	const src = slides[i].url;
	// CREAZIONE LI
	const li = document.createElement('li')
	// AGGIUNGO LA CLASSE SLIDE A LI
	li.className = 'slide'
	
	if (i === currentIndex) {
		li.classList.add('active')
	}
	// CREIAMO LA IMG
	const img = document.createElement ('img')
	// ASSEGNO ALLA PROPRIETà SRC DI IMG IL VALORE SRC DELL'ARRAY
	img.src = src
	// INSERISCE IMG DENTRO LI 
	li.append(img)
	console.log(li)
	// AGGIUNGE LI ALLO SLIDESWRAPPER
	slidesWrapperEl.append(li)
	// PUSHA GLI LI CREATI NELL'ARRAY A RIGA 12
    slideElements.push(li)
}

 // SELEZIONA LA FRECCIA NEXT DAL DOM
 const nextElement = document.querySelector('.arrow-next')

 nextElement.addEventListener('click', function () {
    // TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
    slideElements[currentIndex].classList.remove('active');

    // AGGIUNGO LA CLASSE ACTIVE ALLA SLIDE SEGUENTE
    if (currentIndex === slideElements.length - 1) {
        currentIndex = 0;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex++
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})

//SELEZIONA LA FRECCIA BACK DAL DOM

const prevArrowElement = document.querySelector('.arrow-prev')

prevArrowElement.addEventListener('click', function () {
// TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
    slideElements[currentIndex].classList.remove('active');
       
    if (currentIndex === 0) {
        currentIndex = slideElements.length - 1;
        let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
        currentIndex--
        let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})