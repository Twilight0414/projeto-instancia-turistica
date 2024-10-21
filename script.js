// Função para alerta ao clicar em "Mais Detalhes"
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Mais detalhes em breve');
    });
});
