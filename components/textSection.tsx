export default function TextSection ({tittle, text}) {
    return (
        <div className=" desk:px-40 lg:px-28 md:px-16 px-10 py-14">
            <div className="text-3xl pb-5 mb-5 border-b-2 border-b-neutral-200">
                {tittle}
            </div>
            <div className="text-justify font-normal text-neutral-700" dangerouslySetInnerHTML={{__html: text}}>
                
            </div>
        </div>

    )
}