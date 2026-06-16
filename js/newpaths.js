window.addEventListener('load', () => {
    const novoCalendario = 'M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32zm32 96l-96 0 0 64 96 0 0-64zm0 96l-96 0 0 64 96 0 0-64zm0 96l-96 0 0 64 64 0c17.7 0 32-14.3 32-32l0-32zM288 352l0-64-128 0 0 64 128 0zM160 384l0 64 128 0 0-64-128 0zm-32-32l0-64-96 0 0 64 96 0zM32 384l0 32c0 17.7 14.3 32 32 32l64 0 0-64-96 0zm0-128l96 0 0-64-96 0 0 64zm128 0l128 0 0-64-128 0 0 64z';
    const novoArCondicionado = 'M64 96c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L64 96zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 320c-35.3 0-64-28.7-64-64L0 128zm112 64l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM224 480l0-112 32 0 0 112c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 17.7 14.3 32 32 32s32-14.3 32-32zM352 368l0 112c0 17.7 14.3 32 32 32s32-14.3 32-32l0-8c0-8.8 7.2-16 16-16s16 7.2 16 16l0 8c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-112 32 0z';
    const replacements = [
        { signature: 'M 12 0 C 10.90625', svg: 'https://cdn.jsdelivr.net/gh/guittavares/lions@main/js/svg/calendar-days.svg' },
        { signature: 'M4.572,13.096l19-9c0.271-0.128', viewBox: '0 0 640 512', path: novoArCondicionado }
    ];

    document.querySelectorAll('.service-icon svg').forEach(svg => {
        const firstPath = svg.querySelector('path');
        if (!firstPath) return;
        const d = firstPath.getAttribute('d') || '';
        const match = replacements.find(item =>
            d.startsWith(item.signature)
        );
        if (!match) return;
        svg.innerHTML = `<path d="${match.path}"></path>`;
        svg.setAttribute('viewBox', match.viewBox);
    });
});
