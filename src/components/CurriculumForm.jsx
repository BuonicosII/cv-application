function CurriculumForm({ someObj, someFn }) {

    function formSubmit(e) {
        e.preventDefault();

        const newObj = { name: "Winston", surname: "Churchill", value: e.target.value}

        someFn(newObj)
    }

    return (
        <form>
            <input onChange={formSubmit} value={someObj.value}></input>
        </form>
    )
}

export { CurriculumForm }