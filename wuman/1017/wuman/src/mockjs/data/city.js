import mock from 'mockjs';
export default mock.mock({
    'province|20': [
        {
            'id|1-100': 100,
            name: '@province()',
            'city|10': [
                {
                    'cid|1-100': 100,
                    name: '@city()'
                }
            ]
        }
    ]
});
