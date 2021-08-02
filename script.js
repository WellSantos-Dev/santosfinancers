Modal = {
    removerModal() {
        if(document.querySelector('.modal-overlay').classList.contains('active')) {
            document.querySelector('.modal-overlay').classList.remove('active');
        }
    },
    
    abrirModal() {
        document.querySelector('.modal-overlay').classList.add('active');
    }
}