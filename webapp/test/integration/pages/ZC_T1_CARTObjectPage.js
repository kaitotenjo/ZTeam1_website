sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cart.cart',
            componentId: 'ZC_T1_CARTObjectPage',
            contextPath: '/ZC_T1_CART'
        },
        CustomPageDefinitions
    );
});