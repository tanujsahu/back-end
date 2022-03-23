module.exports = mongoose => {
    const client = mongoose.model(
        "client",
        mongoose.Schema(
            {
                name: String,
                emailId: String,
                mobile: String,
            },
            { timestamps: true }
        )
    );
    return client;
}