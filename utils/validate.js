const Joi = require("joi");
const pick = require("./pick");


const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        const extractedErrors = []
        error.details.map(err => extractedErrors.push({ error: err.message }))
        
        res.status(400).json({ error: 'Err validation', extractedErrors });
    }
    Object.assign(req, value);
    return next();
}

module.exports = validate