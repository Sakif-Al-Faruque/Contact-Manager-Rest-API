const testMiddleware = (req, res, next) => {
    req.testedData = "for testing";
    next();
}

const testMiddleware1 = (req, res, next) => {
    req.testedData = "for testing 1";
    next();
}

module.exports = {testMiddleware, testMiddleware1};