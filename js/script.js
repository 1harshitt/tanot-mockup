// Magnetic Button Effect
const magneticBtn = document.querySelector('.btn-magnetic');

if (magneticBtn) {
    magneticBtn.addEventListener('mousemove', (e) => {
        const rect = magneticBtn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        magneticBtn.style.setProperty('--x', `${x}%`);
        magneticBtn.style.setProperty('--y', `${y}%`);
    });
    
    magneticBtn.addEventListener('mouseleave', () => {
        magneticBtn.style.setProperty('--x', '50%');
        magneticBtn.style.setProperty('--y', '50%');
    });
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Open first FAQ by default
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) {
        firstFaq.classList.add('active');
    }
});
const serviceNavItems = document.querySelectorAll('.service-nav-item');
const serviceDetails = document.querySelectorAll('.service-detail');

serviceNavItems.forEach(item => {
    item.addEventListener('click', () => {
        const serviceId = item.getAttribute('data-service');
        
        // Remove active class from all nav items
        serviceNavItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Hide all service details
        serviceDetails.forEach(detail => detail.classList.remove('active'));
        
        // Show selected service detail
        const activeDetail = document.querySelector(`[data-service-content="${serviceId}"]`);
        if (activeDetail) {
            activeDetail.classList.add('active');
        }
    });
});


// ================================
// SERVICES TAB SWITCHING
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const serviceNavItems = document.querySelectorAll('.service-nav-item');
    const serviceDetails = document.querySelectorAll('.service-detail');
    
    console.log('Service nav items found:', serviceNavItems.length);
    console.log('Service details found:', serviceDetails.length);
    
    serviceNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            console.log('Clicked service:', serviceId);
            
            // Remove active class from all nav items
            serviceNavItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all service details
            serviceDetails.forEach(detail => {
                detail.classList.remove('active');
                detail.style.display = 'none';
            });
            
            // Show selected service detail
            const activeDetail = document.querySelector(`[data-service-content="${serviceId}"]`);
            console.log('Active detail found:', activeDetail);
            
            if (activeDetail) {
                activeDetail.classList.add('active');
                activeDetail.style.display = 'block';
            }
        });
    });
});
