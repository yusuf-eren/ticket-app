import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
    email: string;
    password: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<any> {
    build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// We are declaring a static method to userSchema
userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

// model function overall is going to return
// something of type "UserModel"
// first argument is the schema of our document

// MONGOOSE TYPE
// export function model<T, U, TQueryHelpers = {}>(
//     name: string,
//     schema?: Schema<T, any, any, TQueryHelpers, any, any>,
//     collection?: string,
//     options?: CompileModelOptions
//   ): U;

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
