

export default function Button(props: {buttonName: string, buttonCallback: Function}) {
    
    return (
        <button onclick={() => {props.buttonCallback()}}>
            {props.buttonName}
        </button>
    )
}