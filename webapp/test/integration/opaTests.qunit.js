sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cart/cart/test/integration/FirstJourney',
		'cart/cart/test/integration/pages/ZC_T1_CARTList',
		'cart/cart/test/integration/pages/ZC_T1_CARTObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_T1_CARTList, ZC_T1_CARTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cart/cart') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_T1_CARTList: ZC_T1_CARTList,
					onTheZC_T1_CARTObjectPage: ZC_T1_CARTObjectPage
                }
            },
            opaJourney.run
        );
    }
);