import { ReactElement } from "react"

export interface HandleDisplayInterface {
    propsMessage: string
    shouldDisplay: boolean
    children: ReactElement<any, any>
}