function getMapa() {
    let local = document.getElementsByClassName("address")[0].innerText;
    
    if (local.includes('Parque do Lago')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118264.71520083993!2d-48.315856563903914!3d-22.13465381069957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b89c86c1470979%3A0x8a898fc767158fb4!2sParque%20do%20Lago!5e0!3m2!1spt-BR!2sbr!4v1730827376516!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Fazenda Meia Lua')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.047320252386!2d-47.922446138421705!3d-22.31539234654984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c791d7c96ab7ff%3A0xc7b974aeaaaa7df4!2sFazenda%20Meia%20Lua%20Itirapina!5e0!3m2!1spt-BR!2sbr!4v1730836072610!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Santa Helena')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.6055431951895!2d-46.4604087899225!3d-23.33006647446337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8dd2ebb54fe9%3A0x93f07fdc4905ce92!2sSanta%20Helena%20Eventos%20e%20Lazer!5e0!3m2!1spt-BR!2sbr!4v1730836642090!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Parque Maeda')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0481709567284!2d-47.3456628!3d-23.3502693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5c587ed7387b%3A0x7022e3e5900e3ff4!2sParque%20Maeda!5e0!3m2!1spt-BR!2sbr!4v1741979927596!5m2!1spt-BR!2sbr" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Hopi Hari')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14679.980860617407!2d-47.007688!3d-23.097271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf32a1fdae3fe3%3A0x3d6c9909abd347ea!2sHopi%20Hari!5e0!3m2!1spt-BR!2sbr!4v1731168463838!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('STL Valley')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.439254167121!2d-45.002366082843416!3d-21.685660180050334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cad575e71a8497%3A0xa59f81f044d08278!2sFazenda%20Barro%20Branco%20-%20Beto!5e0!3m2!1spt-BR!2sbr!4v1736969945801!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Estância Nazaré')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7332.164766508847!2d-46.422891!3d-23.240089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce9173a374df69%3A0xfbc521a3892a92e3!2sHotel%20Est%C3%A2ncia%20Nazar%C3%A9%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1737565156193!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Zé João')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5947595935827!2d-44.8895945!3d-22.5193826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9df1171142d287%3A0x83443883939155!2sRancho%20do%20Z%C3%A9%20Jo%C3%A3o%20-%20Balne%C3%A1rio%2C%20Pousada%20e%20Camping!5e0!3m2!1spt-BR!2sbr!4v1740428524588!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Espaço Ecológico')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2182241351334!2d-48.8764!3d-25.430966800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc85b7babddb45%3A0xa8d8a817721ae1bc!2sEspa%C3%A7o%20Ecol%C3%B3gico%20Jo%C3%A3o%20Mineiro%20Morretes!5e0!3m2!1spt-BR!2sbr!4v1740569214002!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Jacareí')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14655.79030146589!2d-45.880361319543674!3d-23.317660803618473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdb5edb99f4013%3A0xe0819af941bad0e1!2sEstr.%20Varadouro%2C%20500%20-%20Jardim%20Colonia%2C%20Jacare%C3%AD%20-%20SP%2C%2012315-020!5e0!3m2!1spt-BR!2sbr!4v1740426923696!5m2!1spt-BR!2sbr" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
    if (local.includes('Thermas de São Pedro')) {
    	document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14728.695209436482!2d-47.865231579878376!3d-22.647307636540177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7a5e217f21e9d%3A0xa96812d56d0e6921!2sThermas%20de%20S%C3%A3o%20Pedro!5e0!3m2!1spt-BR!2sbr!4v1741376042651!5m2!1spt-BR!2sbr" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
}
