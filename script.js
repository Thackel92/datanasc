function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <12) {
                //Criança
                img.setAttribute('src', './img/imgmenino.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', './img/imgadolescento.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', './img/imgadulto.png')
            } else {
                //idoso
                img.setAttribute('src', './img/imgidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <12) {
                //Criança
                img.setAttribute('src', './img/imgmenina.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', './img/imgadolescenta.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', './img/imgadulta.png')
            } else {
                //idoso
                img.setAttribute('src', './img/imgidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}