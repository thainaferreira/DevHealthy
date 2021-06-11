import {Container} from "./style"

const Form = ({children, ...rest}) => {
    return <Container {...rest}>{children}</Container>
}

export default Form;