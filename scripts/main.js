//FAQ functionality
document.addEventListener('DOMContentLoaded', function(){
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item =>{
        const header = item.querySelector('.faq-header');

        header.addEventListener('click', function(){
            faqItems.forEach(otherItem =>{
                if (otherItem !== item && otherItem.classList.contains('active')){
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

});

document.addEventListener('DOMContentLoaded', function(){
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function(){
            this.style.transition = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseleave', function(){
            this.style.transform = 'translateY(0)'
            this.style.boxShadow = 'none'
        });
    })
});