Vue.component('navb', {
    template:
    `<div class="container"> 
        <div class="logo">
           <img src="assets/picture/logo.svg">
            <p>luviana</p>
        </div>
        <div class="navlist">   
            <ul class="navigation">
                <a href="#">
                    <li>Présentation</li>
                </a>
                <a href="#">
                    <li>Parcour</li>
                </a>
                <a href="#">
                    <li>Projet</li>
                </a>
                <a href="#">
                    <li>Passion</li>
                </a>
                <a href="#">
                    <li>Contact</li>
                </a>
            </ul>
            <div class="barre"></div>
            <div class="pictureNav">
                <a href="#">
                    <img src="assets/picture/instagram.svg">
                </a>    
                <a href="#">
                    <img src="assets/picture/tripadvisor.svg">
                </a>    
                <a href="#">
                    <img src="assets/picture/foursquare.svg">
                </a>    
            </div>
        </div>
    </div>`
})
new Vue({ el: '#components-navbar' })