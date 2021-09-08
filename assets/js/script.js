const hamburger = document.querySelector('.hamburger');
const showBtn = document.getElementById('show');
const showMoreIcon = document.getElementById('showmore__icon');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
})




showBtn.addEventListener('click', () => {
    
    if (showMoreIcon.classList.toggle('active')) {
        showBtn.innerHTML = `
        <i class="fas fa-caret-up"></i>
        <p>Show Less</p>
    `;
    }else{
        showBtn.innerHTML = `
        <i class="fas fa-caret-down"></i>
        <p>Show More</p>
    `;
    }
    
})