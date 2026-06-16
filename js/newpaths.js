window.addEventListener('load', async () => {

    const replacements = [
        {
            signature: 'M 12 0 C 10.90625',
            svg: 'https://cdn.jsdelivr.net/gh/guittavares/lions@main/js/svg/calendar-days.svg'
        },
        {
            signature: 'M4.572,13.096l19-9c0.271-0.128',
            svg: 'https://cdn.jsdelivr.net/gh/guittavares/lions@main/js/svg/air-conditioner.svg'
        }
    ];

    const svgCache = {};

    for (const originalSvg of document.querySelectorAll('.service-icon svg')) {

        const path = originalSvg.querySelector('path');

        if (!path) continue;

        const d = path.getAttribute('d') || '';

        const match = replacements.find(item =>
            d.startsWith(item.signature)
        );

        if (!match) continue;

        try {

            if (!svgCache[match.svg]) {
                svgCache[match.svg] = await fetch(match.svg)
                    .then(response => response.text());
            }

            const wrapper = document.createElement('div');
            wrapper.innerHTML = svgCache[match.svg];

            const newSvg = wrapper.querySelector('svg');

            if (!newSvg) continue;

            newSvg.setAttribute('width', '32');
            newSvg.setAttribute('height', '32');

            originalSvg.replaceWith(newSvg);

        } catch (error) {
            console.error('Erro ao carregar SVG:', match.svg, error);
        }
    }

});
