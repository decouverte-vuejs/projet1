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
            <ul>
                <a href="#">
                    <li><img src="assets/picture/instagram.svg"></li>
                </a>    
                <a href="#">
                    <li><img src="assets/picture/tripadvisor.svg"></li>
                </a>    
                <a href="#">
                    <li><img src="assets/picture/foursquare.svg"></li>
                </a>    
            </ul>
        </div>
    </div>`
})
new Vue({ el: '#components-navbar' })