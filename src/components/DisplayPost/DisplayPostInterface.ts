import { Post } from "../../Interfaces/Post";
import { ReactElement } from "react"

export interface DisplayPostInterface {
    toggleComments: () => void
    handleRedirect: () => void
    post: Post
    children: ReactElement<any, any>
    propsMessage: string
}