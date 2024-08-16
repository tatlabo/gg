export { Css }

function Css() {
    let i=1
    const squeres = [1,2,3,4,5,6,7,8,9]
    

    const squeresDiv = squeres.map( (item) => {
        let style = `w-5 h-6 bg-violet-${item}00`
        return <div className={style} key={item}>{style}</div>})


    return (<>
        <div class="w-5 h-6 bg-violet-100"></div>
        <div class="w-5 h-6 bg-violet-200"></div>
        <div class="w-5 h-6 bg-violet-300"></div>
        <div class="w-5 h-6 bg-violet-400"></div>
        <div class="w-5 h-6 bg-violet-500"></div>
        <div class="w-5 h-6 bg-violet-600"></div>
        <div class="w-5 h-6 bg-violet-700"></div>
        <div class="w-5 h-6 bg-violet-800"></div>
        <div class="w-5 h-6 bg-violet-900"></div>
    </>)
}