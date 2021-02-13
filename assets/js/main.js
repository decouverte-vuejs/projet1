Vue.component('reservation', {
    template: `
    <form>
        <div class="form-options">
            <div class="form-part">
                <label for="checkin-datepicker">Check-in: *</label>
                <input type="date" id="checkin-datepicker" name="checkin" required>
            </div>
            <div class="form-part">
                <label for="checkout-datepicker">Check-out: *</label>
                <input type="date" id="checkout-datepicker" name="checkout" required>
            </div>
            <div class="form-part form-part-group">
                <div class="form-part">
                    <label for="adult-nb">Adults:</label>
                    <select id="adult-nb" name="adult">
                        <option v-for="i in 15" :value="i">{{i}}</option>
                    </select>
                </div>
                <div class="form-part">
                    <label for="children-nb">Children:</label>
                    <select id="children-nb" name="children">
                        <option v-for="i in 11" :value="i-1">{{i-1}}</option>
                    </select>
                </div>
            </div>
        </div>
        <button class="search-button">Search</button>
    </form>
    `
})
new Vue({ el: '#reservation-component' })

Vue.component('welcome', {
    template: `
    <div id="welcome-content">
        <div class="image-container">
            <div class="image image1">
                <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-902x1024.jpg" alt>
            </div>
            <div class="image image2">
                <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-2-1024x705.jpg" alt>
            </div>
        </div>

        <div class="text-container">
            <span class="legend">Raising comfort to the highest level</span>
            <h2>Welcome to Luviana Hotel Resort</h2>
            <div class="description">
                <p>The Hotel Luviana is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.</p>
                <p>The rooms are arranged on the first, second and third floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the view.</p>
                <a href="#" class="btn btn-main">Read more</a>
            </div>
        </div>
    </div>
    `
})
new Vue({ el: '#welcome-component' })