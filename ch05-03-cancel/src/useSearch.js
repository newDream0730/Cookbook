import {useEffect, useState} from "react";
import axios from "axios";

export default (terms) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setError(null);
        if (terms) {
            (async () => {
                try {
                    setLoading(true);
                    const response = await axios.get("/search",
                        {
                            params: {terms},
                        },
                    );
                    setData(response.data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            })();
        } else {
            setData([]);
            setLoading(false);
        }
    }, [terms]);

    return {data, loading, error};
};