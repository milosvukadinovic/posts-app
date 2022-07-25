import { Post } from "../../Interfaces/Post";

export interface ContentInterface {
    post: Post,
    setShowError: () => void
    propsMessage: string
}