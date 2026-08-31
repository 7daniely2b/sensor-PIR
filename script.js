Script.js
document.addEventListener('DOMContentLoaded', () => {
  const btnPir = document.getElementById('btn-pir');
  const statusSensor = document.getElementById('status-sensor');
  let temporizador;

  btnPir.addEventListener('click', () => {
    // Cancela o tempo limite anterior se o botão for clicado repetidamente
    clearTimeout(temporizador);

    // Atualiza estados visuais e acessíveis (ARIA)
    btnPir.setAttribute('aria-pressed', 'true');
    statusSensor.className = 'status-box ligado';
    statusSensor.textContent = 'Status: Movimento DETECTADO! Luzes e acessos acionados.';

    // Simula o tempo do sensor PIR até desligar por falta de movimento (3 segundos)
    temporizador = setTimeout(() => {
      btnPir.setAttribute('aria-pressed', 'false');
      statusSensor.className = 'status-box desligado';
      statusSensor.textContent = 'Status: Nenhum movimento detectado.';
    }, 3000);
  });
});
