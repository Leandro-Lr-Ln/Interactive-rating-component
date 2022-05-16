'use strict';

const ratingNumbers = document.querySelectorAll('.card-main-component-item');
const btnSubmit = document.getElementById('btnSubmit');
const ratingValue = document.getElementById('ratingValue');
const mainCard = document.querySelector('.card-main');
const cardSection = document.querySelector('.card-main-section');
const errorMessage = document.querySelector('.card-main-errorMessage');
const errorAlert = document.querySelector('.card-main-component');

let rating;

const handleRatingBtnClick = (event => {
    ratingNumbers.forEach(btn => {
        btn.classList.remove('active');
    });
    if (event.target.classList.contains('card-main-component-item')) {
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
});

ratingNumbers.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});
for (let ratingBtn of ratingNumbers){
    ratingBtn.addEventListener('click',() => {
        rating = ratingBtn.value;
    });
};

btnSubmit.addEventListener('click', () => {
    if(rating !== undefined){
        mainCard.style.display = 'none';
        cardSection.style.display = 'block';
        ratingValue.innerText = rating;
    }else{
        errorMessage.style.display = 'block';
        errorAlert.classList.add('alert');
        const removeStyle = (() =>{
            errorAlert.classList.remove('alert');
        })
        setTimeout(removeStyle,1000);
    }
});

