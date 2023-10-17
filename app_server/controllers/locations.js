/* GET 'home' page */
module.exports.homelist = function(req, res) {
   res.render('locations-list', {
       title: 'Indian Tourism - Capture the moment',
       pageHeader: {
           title: 'Indian Tourism',
           strapline: 'find a place where you can enjoy your vaccation!'
       },
       sidebar: "Looking for good place where you can enjoy your Vaccation? Indian Tourism helps you find places where you can get rest and as well as enjoy.",
       locations: [{
           name: 'Taj Mahal',
           address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh , India',
           rating: 5,
           facilities: ['Room service','Internet','Medical Centre','Restaurant'],
           distance: '1,344.0 km'
       }, {
           name: 'Charminar',
           address: 'Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana',
           rating: 4,
           facilities: ['Hotels','Internet','Shopping malls','Restaurant'],
           distance: '25km'
       }, {
           name: 'Lotus temple',
           address: 'Lotus Temple Rd, Shambhu Dayal Bagh, Bahapur, Kalkaji, New Delhi, Delhi',
           rating: 3,
           facilities: ['Hotels','Internet','Shopping malls','Restaurant'],
           distance: '1,573.1 km'
       }]
   });
 };
 
 /* GET 'Location info' page */
 module.exports.locationInfo = function(req, res) {
   res.render('location-info', {
       title: 'Taj Mahal',
       pageHeader: {
           title: 'Taj Mahal'
       },
       sidebar: {
           context: 'The Taj Mahal is one of the most famous and most recognized buildings of India and the world and the Story of Taj Mahal is monumental wonder built by the Mughal Emperor Shah Jahan, in memory of his wife Mumtaz Mahal. It is designated as one of the Seven Wonders of the World, and one of the three World Heritage Sites which are located in Agra.',
           callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
       },
       location: {
           name: 'Taj Mahal',
           address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh , India',
           rating: 5,
           facilities: ['Room service','Internet','Medical Centre','Restaurant'],
           coords: {
               lat: 51.455041,
               lng: -0.9690884
           },
           openingTimes: [{
               days: 'Monday - Sunday',
               opening: '8:30pm',
               closing: '12:30am',
               closed: false
           }, {
               days: 'Saturday',
               opening: '8:30pm',
               closing: '12:30am',
               closed: false
           }, {
               days: 'Friday',
               closed: true
           }],
           reviews: [{
               author: 'ram',
               rating: 5,
               timestamp: '16 July 2022',
               reviewText: 'Taj Mahal is a mind blowing place. my mind became fresh.'
           }, {
               author: 'charan',
               rating: 5,
               timestamp: '18 June 2023',
               reviewText: 'nice spot.'
           }]
       }
   });
 };
 
 /* GET 'Add review' page */
 module.exports.addReview = function(req, res) {
   res.render('location-review-form', {
       title: 'Review seeds on Indian Tourism',
       pageHeader: {
           title: 'Review good Taj Mahal'
       }
   });
 };