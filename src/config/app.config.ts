export default () =>  ({
    app: {
        baseUrl: process.env.BASE_URL,

    },
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        test: process.env.DATABASE_TEST
    }
})