const mlog = (req, res, next) => {
    const FgGreen = "\x1b[32m";
    switch (req.method) {
        case 'GET' : {
            console.info(`${FgGreen} ${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${FgGreen} ${req.method} request to ${req.path}`);
            break;
        }
        // case 'Delete': {
        //     console.info(`${FgGreen} ${req.method} request to ${req.path}`);
        //     break;
        // }
        
        default:
            console.log(`${FgGreen} ${req.method} request to ${req.path}`);
            break;
    }
    next();
};

exports.mlog = mlog;