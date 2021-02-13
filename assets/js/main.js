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

Vue.component('amenities', {
    template: `
    <div id="amenities-content">
        <div class="amenities-background">
            <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/amenities-new.jpg" alt>
        </div>
        <div class="blue-section">
            <h2>Our Amenities</h2>
            <p>The hotel is arranged on three floors without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea.</p>

            <ul>
                <li>
                    <span class="fas fa-swimming-pool"></span>
                    Swimming pool
                </li>
                <li>
                    <span class="fas fa-spa"></span>
                    Spa & massage
                </li>
                <li>
                    <span class="fas fa-swimmer"></span>    
                    Surfing lessons
                </li>
                <li>
                    <span class="fas fa-water"></span>
                    Diving & snorkling
                </li>
                <li>
                    <span class="fas fa-dumbbell"></span>
                    Gym & yoga
                </li>
                <li>
                    <span class="fas fa-ship"></span>
                    Boat tours
                </li>
                <li>
                    <span class="fas fa-microphone"></span>
                    Conference room
                </li>
                <li>
                    <span class="fas fa-umbrella-beach"></span>
                    Private Beach
                </li>
            </ul>
        </div>
    </div>
    `
})
new Vue({ el: '#amenities-component' })