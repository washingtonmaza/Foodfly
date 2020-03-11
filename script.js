const modalOverlay = document.querySelector('.modal-overlay');
const itemMenu = document.querySelectorAll('.itemMenu')

for (let item of itemMenu){
  item.addEventListener('click', function(){
    const imgId = item.getAttribute('id')
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src=`resources/${imgId}`;
    
  })
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src='';
})

