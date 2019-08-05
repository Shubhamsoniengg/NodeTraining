public listen(); {
    const port = this.config.port;
    this.app.listen(port, () => {
    console.log(`App is running on port ${port}`);
    });
    return this;
    }

    public bootstrap(); {
    console.log('In the bootstrap method');
    this.setupRoutes();
    this.initBodyParser();
    return this;
    }
    public setupRoutes(); {
        const { app } = this;
        app.use('/health-check', (req, res) => {
        console.log('inside the health routes');
        res.send('I am ok');
        });
        app.use('/api', router);
        }
