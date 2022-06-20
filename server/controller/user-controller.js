import User from "../model/userSchema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const userSignup = async(request, response) => {

    const newUser = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        cpassword: request.body.cpassword
    })
    try {
        const userexist = await User.findOne({ email: request.body.email });
        if (userexist) {
            return response.status(422).json("email already exist")
        } else if (request.body.password != request.body.cpassword) {
            return response.status(422).json("Password not match")
        } else {
            const saveUser = await newUser.save();
            console.log(request.body);
            response.status(200).json({ message: " user register successfully ", saveUser });
        }
    } catch (error) {
        response.status(500).json("Error while registering user ", error);
    }

}


export const userSignin = async(request, response) => {

    try {
        let token;
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({ error: "Please enter the correct email and password" });
        }

        const userLogIn = await User.findOne({ email: email });

        if (userLogIn) {
            const passmatch = await bcrypt.compare(password, userLogIn.password);
            // const token = jwt.sign({ _id: User._id },
            //     process.env.SECRECT_KEY,
            //     // {
            //     //     expiresIn: "3d"
            //     // }
            // );

            // console.log({ accessToken: accessToken })
            token = await userLogIn.generateAuthToken();
            // // generateAuthToken();
            // console.log(token);

            response.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25),
                // httpOnly: true
                httpOnly: true
            })
            console.log(" accessToken: " + token)
                // 89000000
            if (!passmatch) {
                response.status(400).json({ error: "user error" })
            } else {
                console.log(userLogIn);
                response.status(200).json({ message: "user signin successfuly", userLogIn })
            }

        } else {
            response.status(400).json({ error: "user error" })
        }

        // console.log(request.body);
        // response.json({ message: "awseom" })
    } catch (error) {
        console.log(error);
    }
}