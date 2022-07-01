/**
 * S - State
 * T - Type 
 * K - Key
 * V - Value
 * E - Element
 */
function useState<T extends number | string = string>(){
    let state: T
    const get = () => state 
    const set = (newValue: T ) => state = newValue
    return { get, set }
}
let newState = useState()
newState.get()
newState.set("Sidney")

// newState.set(123)
