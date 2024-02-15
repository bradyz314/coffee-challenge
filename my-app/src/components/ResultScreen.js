function ResultScreen({ setShow, name }) {
    return (
        <div className='menu-background'>
            <div className='result-menu'>
                <h4
                    className='menu-item'
                >
                    {name !== null ? `Congratulations! ${name} is the chosen one!` : `No one could pay :(.`}
                </h4>
                <button
                    onClick={() => setShow(false)}
                    className='text-button'
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default ResultScreen;
