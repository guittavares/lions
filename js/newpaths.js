window.addEventListener('load', () => {
   const replacements = [
        { signature: 'M 12 0 C 10.90625', svg: 'https://cdn.jsdelivr.net/gh/guittavares/lions@main/js/svg/calendar-days.svg' },
        { signature: 'M4.572,13.096l19-9c0.271-0.128', svg: 'https://cdn.jsdelivr.net/gh/guittavares/lions@main/js/svg/air-conditioner.svg' }
    ];

    document.querySelectorAll('.service-icon svg').forEach(svg => {
       const path = svg.querySelector('path');
       if (!path) return;
       const d = path.getAttribute('d') || '';
       const match = replacements.find(item =>d.startsWith(item.signature));
       if (!match) return;
       svg.outerHTML = `<img src="${match.svg}" width="32" height="32" alt="">`;
   });
});
