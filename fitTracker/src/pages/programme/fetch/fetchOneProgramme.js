async function fetchOneProgramme({queryKey})
{
    const res = await fetch(
        `http://localhost:1337/api/programmes/${queryKey[1].name}`
    )

    if (!res.ok)
    {
        throw new Error(`programmes : ${queryKey[1].name} not find`)
    }

    return res.json();
}

export default fetchOneProgramme