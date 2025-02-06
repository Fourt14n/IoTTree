const comunityBtn = document.querySelector(".comunityBtnModule");
const enterpriseBtn = document.querySelector(".enterpriseBtnModule");
const educationalBtn = document.querySelector(".educationalBtnModule");
let module = document.querySelector(".moduleContainer");

const comunityHtml = "<div class='modules'> <div class='moduleText'><h2>Comunitário</h2><p>Apoie a preservação do meio ambiente e ainda ganhe <span class='greenText'>CarboCoins</span></p></div><div class='moduleImage'><img src='./assets/plantinha1.svg'></div></div>";

const enterpriseHtml = "<div class='modules'><div class='moduleText'><h2>Empresarial</h2><p>Comprove que sua empresa apoia a preservação do meio ambiente através de <span class='greenText'>tecnologia RFID</span> </p></div><div class='moduleImage'><img src='./assets/quartoplantinhas.svg'></div></div>";

const educationalHtml = "<div class='modules'><div class='moduleText'><h2>Institucional</h2><p>Conscientize através da <span class='greenText'>gamificação</span>, uma forma lúdica de aprendizado</p></div><div class='moduleImage'><img src='./assets/plantinha2.svg'></div></div>";

comunityBtn.style.backgroundColor = "#A7A4A4";

enterpriseBtn.addEventListener("click", function(){
    if(!enterpriseBtn.hasAttribute("value")){

        comunityBtn.removeAttribute("value");
        enterpriseBtn.removeAttribute("value");
        educationalBtn.removeAttribute("value");

        comunityBtn.style.backgroundColor = "#444444";
        educationalBtn.style.backgroundColor = "#444444";

        enterpriseBtn.style.backgroundColor = "#A7A4A4";
        module.innerHTML = "";
        module.innerHTML = enterpriseHtml;
    }
    
});

comunityBtn.addEventListener("click", function(){
    if(!comunityBtn.hasAttribute("value")){

        comunityBtn.removeAttribute("value");
        enterpriseBtn.removeAttribute("value");
        educationalBtn.removeAttribute("value");

        educationalBtn.style.backgroundColor = "#444444";
        enterpriseBtn.style.backgroundColor = "#444444";

        comunityBtn.style.backgroundColor = "#A7A4A4";
        module.innerHTML = "";
        module.innerHTML = comunityHtml;
    }
})

educationalBtn.addEventListener("click", function(){
    if(!educationalBtn.hasAttribute("value")){

        comunityBtn.removeAttribute("value");
        enterpriseBtn.removeAttribute("value");
        educationalBtn.removeAttribute("value");

        educationalBtn.style.backgroundColor = "#A7A4A4";
        enterpriseBtn.style.backgroundColor = "#444444";

        comunityBtn.style.backgroundColor = "#444444";
        module.innerHTML = "";
        module.innerHTML = educationalHtml;
    }
})