new Vue({
    el: '#app',
    data: {         // Initialise our list of ingredients
        textInput: ''
    },
    computed: {     // Turn data into viewable values
        identicon: function() {
            return jdenticon.toSvg(this.textInput, 200);
        }
    },
    methods: {      // Use these functions to change data
        onInput: function(event) {
            this.textInput = event.target.value;
        }
    }
});