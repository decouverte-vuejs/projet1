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