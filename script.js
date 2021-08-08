let data = [
   {
      photo: './pic/pic1.jpg',
      title: 'Molestias vitae',
      hovertext: 'első kép',
      description: 'Cumque, facere aliquid? Tenetur architecto autem dolorum. Vero illum accusamus necessitatibus ab praesentium? Vitae temporibus! Assumenda optio consequatur suscipit.'
   },
   {
      photo: './pic/pic2.jpg',
      title: 'Autem dolorum',
      hovertext: 'második kép',
      description: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellu optio.'
   },
   {
      photo: './pic/pic3.jpg',
      title: 'Tenetur architecto',
      hovertext: 'harmadik kép',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et que rem.'
   },
   {
      photo: './pic/pic9.jpg',
      title: 'Vero illum',
      hovertext: 'negyedik kép',
      description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he turn back.'
   },
   {
      photo: './pic/pic5.jpg',
      title: 'necessitatibus ab',
      hovertext: 'ötödik kép',
      description: 'Cras euismod nunc ac ultricies blandit. Praesent efficitur dictum metus, id eleifend est maximus id. Morbi at sem diam. Vivamus pellentesque tellus et tellus luctus quae ab illo.' 
   },
   {
      photo: './pic/pic6.jpg',
      title: 'Vitae temporibus',
      hovertext: 'hatodik kép',
      description: 'Sed imperdiet dolor scelerisque. Pellentesque non nisl urna. Phasellus ut leo et augue ullamcorper posuere quis sit amet orci. Assumenda optio tellus et luctus abeuismod nunc ac.'
   },
   {
      photo: './pic/pic7.jpg',
      title: 'Assumenda optio',
      hovertext: 'hetedik kép',
      description: 'Cras blandit tincidunt mi, eu interdum erat cursus non. Nulla ut nisl metus. Proin purus erat, tempor eget viverra rhoncus, aliquam at sem. Curabitur tellus justo dolor ac.' 
   },
   {
      photo: './pic/pic8.jpg',
      hovertext: 'nyolcadik kép',
      title: 'Cumque facere',
      description: 'Vehicula ut tellus ac, dapibus finibus eros. Mauris sit amet justo pulvinar lectus porttitor bibendum. Aenean scelerisque quis tellus in gravida, posuere quis sit ut nisl metus.'
   }
]

// create thumbnails, jQuery:
let counter = 0
data.forEach((item)=>{
   $('.thumbnails').append(`<div class="image" data-number="${counter+1}"><img src="${data[counter].photo}" alt=""><p class="hover-text">${data[counter].hovertext}</p></div>`);
   counter++
})

// jQuery:
// $('#photo').attr('src', data[index].photo);
// $('#photo-title').text(data[index].title)
// $('#photo-description').text(data[index].description)

// Vanilla JavaScript
const pictures = document.querySelector('#photo')
const title =  document.querySelector('#photo-title')
const description = document.querySelector('#photo-description')
const thumbnails = document.querySelectorAll('.image')
const aLeft = document.querySelector('.a-left')
const aRight = document.querySelector('.a-right')
const picContent = document.querySelector('.pic-content')
let index = 0

let displays = index => {
   pictures.setAttribute('src', data[index].photo);
   title.textContent = data[index].title
   description.textContent = data[index].description
   thumbnails.forEach(pic => pic.children[0].classList.remove('active'))
   thumbnails[index].children[0].classList.add('active')
   picContent.classList.add('fade-in')
   setTimeout(()=> {
      picContent.classList.remove('fade-in')
   }, 500)
}

thumbnails.forEach(pic => {pic.addEventListener('click', (event)=>{
   const number = event.target.parentElement.dataset.number -1
   index = number
   displays(number)
})
})

aLeft.addEventListener('click', ()=>{
   if (index <= 0) { index = data.length }
   index--
   displays(index)
})

aRight.addEventListener('click', ()=>{
   index++
   if (index >= data.length) { index = 0 }
   displays(index)
})

displays(index)
