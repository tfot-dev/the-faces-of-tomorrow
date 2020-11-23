module.exports = {
    schema: [
        {
            'https://holy-mammal-41.hasura.app/v1/graphql': {
                headers: {
                    'X-Hasura-Admin-Secret': 'thefacesoftomorrowareus',
                    'X-Hasura-Role': 'admin',
                },
            },
        },
    ],
    documents: ['src/**/*.graphql'],
    overwrite: true,
    generates: {
        'src/generated/graphql.ts': {
            plugins: ['add', 'typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
                content: '/* eslint-disable */',
            },
        },
    },
};
