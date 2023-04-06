import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    
                    {
                        id   : 'project',
                        title: 'Analitics',
                        type : 'item',
                        url  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                id       : 'calendar',
                title    : 'User Management',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/management/customers'
            },
            {
                id       : 'e-commerce',
                title    : 'E-Commerce',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'item',
                        url       : '/products',
                        exactMatch: true
                    },
                 
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        type      : 'item',
                        url       : '/apps/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            {
                id       : 'Transactions',
                title    : 'Purchases',
                translate: 'NAV.ACADEMY',
                type     : 'item',
                icon     : 'school',
                url      : '/apps/academy12'
            },
            
        ]
    },
  
    
    
    
];
