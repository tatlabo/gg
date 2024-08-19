export { Css }

function Css() {
    let i=0
    const squeres = [1,2,3,4,5,6,7,8,9]
    

    const squeresDiv = squeres.map( (item) => {
        let style = `w-5 h-6 bg-violet-${item}00`
        i++
        return <div className={style} key={item}>{i}</div>})


    return (<>
        {squeresDiv}
        {/* <div class="w-5 h-6 bg-blue-100"></div>
        <div class="w-5 h-6 bg-blue-200"></div>
        <div class="w-5 h-6 bg-blue-300"></div>
        <div class="w-5 h-6 bg-blue-400"></div>
        <div class="w-5 h-6 bg-blue-500"></div>
        <div class="w-5 h-6 bg-blue-600"></div>
        <div class="w-5 h-6 bg-blue-700"></div>
        <div class="w-5 h-6 bg-blue-800"></div>
        <div class="w-5 h-6 bg-blue-900"></div> */}
    </>)
}