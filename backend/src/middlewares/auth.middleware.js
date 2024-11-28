import JWT from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unauthorized request! Token missing.");
        }

        const decodedToken = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if (!decodedToken || !decodedToken._id) {
            throw new ApiError(401, "Invalid token payload.");
        }

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if (!user) {
            throw new ApiError(401, "Invalid access token! User not found.");
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            throw new ApiError(401, "Invalid or expired access token.");
        }
        throw new ApiError(401, error?.message || "Unauthorized request!");
    }
});

export { verifyJWT };