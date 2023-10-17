/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Indian Tourism',
        content: 'Tourism in India is 4.6% of the countrys gross domestic product (GDP). Unlike other sectors, tourism is not a priority sector for Government of India. Forbes magazine ranked India as the 7th most beautiful country in The 50 Most Beautiful Countries In The World rankings.[1] The World Travel and Tourism Council calculated that tourism generated ₹13.2 lakh crore (US$170 billion) or 5.8% of Indias GDP and supported 32.1 million jobs in 2021..'
    });
  };