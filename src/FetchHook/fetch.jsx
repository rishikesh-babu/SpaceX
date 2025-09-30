import axios from "axios";

function fetchData(url) {
    axios(url)
        .then((res) => {
            return res.data
        })
}