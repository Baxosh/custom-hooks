async function getAllData() {
    try {
        const res = await fetch(`${baseURL}/tutorials`);

        if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
        }

        const data = await res.json();

        const result = {
            status: res.status + "-" + res.statusText,
            headers: {
                "Content-Type": res.headers.get("Content-Type"),
                "Content-Length": res.headers.get("Content-Length"),
            },
            length: res.headers.get("Content-Length"),
            data: data,
        };

        setGetResult(fortmatResponse(result));
    } catch (err) {
        setGetResult(err.message);
    }
}

async function getDataById() {
    const id = get_id.current.value;

    if (id) {
        try {
            const res = await fetch(`${baseURL}/tutorials/${id}`);

            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }

            const data = await res.json();

            const result = {
                data: data,
                status: res.status,
                statusText: res.statusText,
                headers: {
                    "Content-Type": res.headers.get("Content-Type"),
                    "Content-Length": res.headers.get("Content-Length"),
                },
            };

            setGetResult(fortmatResponse(result));
        } catch (err) {
            setGetResult(err.message);
        }
    }
}

async function getDataByTitle() {
    const title = get_title.current.value;

    if (title) {
        try {
            // const res = await fetch(`${baseURL}/tutorials?title=${title}`);

            let url = new URL(`${baseURL}/tutorials`);
            const params = { title: title };
            url.search = new URLSearchParams(params);

            const res = await fetch(url);

            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }

            const data = await res.json();

            const result = {
                status: res.status + "-" + res.statusText,
                headers: {
                    "Content-Type": res.headers.get("Content-Type"),
                    "Content-Length": res.headers.get("Content-Length"),
                },
                data: data,
            };

            setGetResult(fortmatResponse(result));
        } catch (err) {
            setGetResult(err.message);
        }
    }
}