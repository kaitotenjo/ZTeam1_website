sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cart.cart',
            componentId: 'ZC_T1_CARTList',
            contextPath: '/ZC_T1_CART'
        },
        CustomPageDefinitions
    );
});